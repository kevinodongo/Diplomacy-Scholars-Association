<template>
  <div class="blog">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat>
          <v-btn @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="createBlog">Post Article</v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="indigo"
        ></v-progress-linear>
        <v-card-text>
          <div>{{ selectedUser }}</div>
          <div>PUBLISHED: {{ time }}</div>
          <div class="display-1 mt-1 mb-1">{{ title }}</div>
          <div class="title mt-1">{{ subject }}</div>
          <v-divider class="my-5"></v-divider>
          <img v-if="objectURL" :src="objectURL" height="500" width="100%" />
          <div class="mt-4">
            <blockquote>{{ content }}</blockquote>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar">
      You have successfully uploaded an image
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1">
      You have removed an image
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar3">
      You have successfully posted your blog
      <v-btn color="pink" text @click="snackbar3 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container grid-list-xs>
      <v-toolbar flat>
        <v-toolbar-title primary-title class="font-weight-light">
          BLOG
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="preview">preview</v-btn>
      </v-toolbar>
      <v-sheet>
        <v-card-text>
          <v-alert color="indigo" outlined>
            <div>Blog</div>
            <div>
              Write articles once you've saved you will have to wait for the
              Admin to approve before its available for public viewing
            </div>
          </v-alert>
          <div class="caption font-weight-bold mb-1">
            Select a Member <span class="red--text">*</span>
          </div>
          <v-autocomplete
            v-model="selectedUser"
            :items="items"
            small-chips
            outlined
            single-line
            dense
            deletable-chips
          ></v-autocomplete>
          <v-text-field
            outlined
            single-line
            dense
            name="title"
            label="Title"
            v-model="title"
          ></v-text-field>
          <v-text-field
            outlined
            single-line
            dense
            name="subject"
            label="Subject"
            v-model="subject"
          ></v-text-field>
          <v-textarea
            single-line
            outlined
            v-model="content"
            dense
            rows="10"
            name="input-7-4"
            placeholder="Write your article"
          ></v-textarea>
          <v-sheet height="100" elevation="2">
            <v-container class="fill-height" grid-list-xs>
              <v-row align="center" justify="center">
                <v-btn color="indigo" outlined>
                  <div>Choose an Image</div>
                  <div class="upload-profile">
                    <input type="file" name="profile" @change="uploadImage" />
                  </div>
                </v-btn>
              </v-row>
            </v-container>
          </v-sheet>
          <v-card-actions v-if="showImage">
            <div class="red--text">{{ file.name }}</div>
            <v-spacer></v-spacer>
            <v-btn @click="removeImage" icon><v-icon>mdi-close</v-icon></v-btn>
          </v-card-actions>
          <v-divider class="my-2"></v-divider>
          <div class="caption indigo--text">
            DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
          </div>
        </v-card-text>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";
var _ = require("lodash");
import { uuid } from "vue-uuid";
import { createAttachment, createBlog } from "../../../graphql/mutations";
import moment from "moment";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      items: [],
      content: "",
      title: "",
      subject: "",
      file: null,
      selectedUser: null,
      snackbar: false,
      snackbar1: false,
      snackbar3: false,
      loading: false,
      showImage: null,
      dialog: false,
      objectURL: null,
      time: null
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const member = await API.graphql(graphqlOperation(listUsers));
      const memberList = member.data.listUsers.items;
      if (memberList && memberList.length !== 0) {
        memberList.forEach(e => {
          // blog
          const array = this.items.concat({
            id: e.id,
            createdAt: e.createdAt,
            text: e.username,
            value: e.username
          });
          this.items = _.orderBy(_.uniqBy(array, "id"), "createdAt", "desc");
        });
      }
    },
    async createBlog() {
      this.loading = true;
      const blogID = uuid.v4();
      const date = moment(new Date()).fromNow();
      const data = {
        id: blogID,
        member: this.selectedUser,
        title: this.title,
        subject: this.subject,
        content: this.content,
        attachment: this.file.name ? this.file.name : null,
        createdAt: new Date(),
        updatedAt: date
      };
      await API.graphql(graphqlOperation(createBlog, { input: data }));
      // check if there is an image
      if (this.file !== null) {
        const key = this.file.name;
        const options = {
          ContentType: this.file.type
        };
        // send to s3
        await Storage.put(key, this.file, options);
        // send to db
        const attach = {
          id: uuid.v4(),
          memberID: blogID, // user id
          attachment: this.file.name, // attachment
          createdAt: new Date()
        };
        await API.graphql(
          graphqlOperation(createAttachment, { input: attach })
        );
        this.file = {};
        this.objectURL = null;
        this.selectedUser = null;
        this.title = "";
        this.content = "";
        this.subject = "";
        this.snackbar3 = true;
        this.loading = false;
        this.dialog = false;
      }
    },
    /*upload photo*/
    async uploadImage(e) {
      this.file = e.target.files[0];
      this.objectURL = URL.createObjectURL(this.file);
      this.showImage = true;
      this.snackbar = true;
    },
    /*remove file*/
    removeImage() {
      this.objectURL = null;
      this.file = "";
      this.showImage = false;
      this.snackbar1 = true;
    },
    preview() {
      const date = new Date();
      this.time = moment(date).fromNow();
      this.dialog = true;
    }
  }
};
</script>

<style lang="css">
.upload-profile input[name="profile"] {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
