<template>
  <div class="todo">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-snackbar v-model="snackbar">
      You have successfully posted for public vieweing
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1">
      You have deleted an item
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay=""
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat>
          <div class="font-weight-regular">VIEW</div>
          <v-spacer></v-spacer>
          <v-btn text>save</v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-alert color="indigo" outlined>
            <div>
              Once you save the blog or publication will be viewed by the public
            </div>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container grid-list-xs>
      <v-card-title primary-title class="font-weight-light">
        TO-DO
      </v-card-title>
      <v-card-text>
        <v-alert color="indigo" outlined>
          <div>To do</div>
          <div>
            Here you will find all the work other users with admin privileges
            have done awaiting approval
          </div>
          <div>
            Once you approved all work will be up for public veiwing or other
            users will be able to access
          </div>
        </v-alert>
        <div class="indigo--text font-weight-light ml-3">
          AWAITING APPROVAL
        </div>
        <v-list dense>
          <template v-for="(item, index) in items">
            <v-list-item :key="item.id">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                  ><v-icon small @click="dialog = true">mdi-pencil</v-icon></v-list-item-action-text
                >
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
var _ = require("lodash");
import { uuid } from "vue-uuid";
import {
  createPublic,
  deleteBlog,
  deletePublication
} from "../../../graphql/mutations";
import moment from "moment";
import {
  listPublications,
  listBlogs,
  listAttachments
} from "../../../graphql/queries";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      items: [],
      attachments: [],
      loading: false,
      snackbar: false,
      snackbar1: false,
      dialog: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const attach = await API.graphql(graphqlOperation(listAttachments));
      const attachList = attach.data.listAttachments.items;
      if (attachList && attachList.length !== 0) {
        this.attachments = attachList;
      }
      const blog = await API.graphql(graphqlOperation(listBlogs));
      const blogList = blog.data.listBlogs.items;
      if (blogList && blogList.length !== 0) {
        blogList.forEach(e => {
          const object = this.attachments.filter(a => {
            return e.id === a.memberID;
          });
          if (object && object.length !== 0) {
            const response = object.map(o => {
              return Storage.get(o.attachment);
            });
            Promise.all(response).then(results => {
              results.forEach(image => {
                e.image = image;
              });
            });
          }
          const array = this.items.concat(e);
          this.items = _.orderBy(_.uniqBy(array, "id"), "createdAt", "desc");
        });
      }
      const publication = await API.graphql(graphqlOperation(listPublications));
      const publicationList = publication.data.listPublications.items;
      if (publicationList && publicationList.length !== 0) {
        publicationList.forEach(e => {
          const object = this.attachments.filter(a => {
            return e.id === a.memberID;
          });
          if (object && object.length !== 0) {
            const response = object.map(o => {
              return Storage.get(o.attachment);
            });
            Promise.all(response).then(results => {
              results.forEach(image => {
                e.image = image;
              });
            });
          }
          const array = this.items.concat(e);
          this.items = _.orderBy(_.uniqBy(array, "id"), "createdAt", "desc");
        });
      }
    },
    async createPublic(item) {
      this.loading = true;
      const time = moment(item.createdAt).fromNow();
      const data = {
        id: uuid.v4(),
        member: item.member,
        title: item.title,
        subject: item.subject ? item.subject : null, // publication has no subject
        content: item.content,
        attachment: item.image,
        createdAt: item.createdAt,
        time: time
      };
      //
      await API.graphql(graphqlOperation(createPublic, { input: data }));
      // remove from blog and publication table
      const deleteID = {
        id: item.id
      };
      if (item.subject) {
        await API.graphql(graphqlOperation(deleteBlog, { input: deleteID }));
      } else if (!item.subject) {
        await API.graphql(
          graphqlOperation(deletePublication, { input: deleteID })
        );
      }
      // remove from array
      const index = this.items.indexOf(item);
      const array = [...this.item];
      array.splice(index, -1);
      this.items = array;
      this.snackbar = true;
      this.loading = false;
    },
    async delete(item) {
      this.loading = true;
      const deleteID = {
        id: item.id
      };
      if (item.subject) {
        await API.graphql(graphqlOperation(deleteBlog, { input: deleteID }));
      } else if (!item.subject) {
        await API.graphql(
          graphqlOperation(deletePublication, { input: deleteID })
        );
      }
      // remove from array
      const index = this.items.indexOf(item);
      const array = [...this.item];
      array.splice(index, -1);
      this.items = array;
      this.snackbar1 = true;
      this.loading = false;
    }
  }
};
</script>
