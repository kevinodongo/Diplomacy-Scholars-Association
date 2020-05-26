<template>
  <div class="Dashboard">
    <!--snackbars-->
    <v-snackbar v-model="snackbar">
      You have successfully updated your details
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1" :timeout="timeout">
      You have removed your profile photo
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-dialog v-model="dialog" max-width="350px" transition="dialog-transition">
      <v-card>
        <v-toolbar flat dense>
          <div>Update your email</div>
          <v-spacer></v-spacer>
          <v-btn text @click="updateInfo">save</v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <div class="caption font-weight-bold mb-2">
            Email <span class="red--text">*</span>
          </div>
          <v-text-field
            single-line
            outlined
            dense
            name="email"
            v-model="email"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-navigation-drawer height="100%" app v-model="drawer" clipped>
      <v-sheet>
        <v-row justify="center">
          <v-avatar class="mt-3" color="grey" size="140" v-if="objectURL">
            <v-img :src="objectURL"></v-img>
          </v-avatar>
          <v-avatar class="mt-3" color="grey" size="140" v-else>
            <v-img src="https://i.imgur.com/qvnZqVr.jpg"></v-img>
          </v-avatar>
          <v-card-text class="text-center">
            <div class="text-center">
              <v-btn
                class="red--text"
                text
                small
                v-if="objectURL"
                @click="removeImage"
                ><span>Remove Image</span></v-btn
              >
              <v-btn text small v-else class="indigo--text"
                ><span>Upload Image</span>
                <div class="upload-profile">
                  <input type="file" name="profile" @change="uploadImage" />
                </div>
              </v-btn>
            </div>
            <v-divider class="my-2"></v-divider>
            <div
              style="text-transform: uppercase"
              class="title font-weight-light"
            >
              {{ logged.username }}
            </div>
            <div class="mt-2">
              <span>{{ logged.email }}</span>
              <span>
                <v-btn icon @click="dialog = true"
                  ><v-icon small>mdi-pencil-outline</v-icon></v-btn
                >
              </span>
            </div>
            <div class="mt-2">
              <v-btn small outlined color="indigo">{{
                logged.membership
              }}</v-btn>
            </div>
          </v-card-text>
        </v-row>
        <v-divider class="py-3"></v-divider>
        <v-list class="pa-2">
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'Alerts' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-bell-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Alerts
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'Certificates' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-file-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Certificates
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'Statements' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-checkbox-blank-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Statements
            </v-list-item-title>
          </v-list-item>
          <v-list-item link active-class="indigo" @click="logOut">
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="red--text"
              style="text-transform: uppercase"
            >
              Log out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>
    <v-toolbar flat>
      <v-btn small fab elevation="1" @click="drawer = !drawer"
        ><v-icon color="indigo">mdi-view-headline</v-icon></v-btn
      >
      <h4 class="indigo--text ml-3">DIPLOMACY SCHOLARS ASSOCIATION OF KENYA</h4>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        left
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn small v-on="on" fab elevation="1" class="ml-3">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-sheet width="200" class="pa-2">
          <v-list-item link dense :to="{ name: 'Alerts' }">
            <v-list-item-title>Alerts</v-list-item-title>
          </v-list-item>
          <v-list-item link dense :to="{ name: 'Statements' }">
            <v-list-item-title>Statements</v-list-item-title>
          </v-list-item>
          <v-list-item link dense :to="{ name: 'Certificates' }">
            <v-list-item-title>Certificates</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item dense @click="logOut">
            <v-list-item-title class="red--text">Log out</v-list-item-title>
          </v-list-item>
        </v-sheet>
      </v-menu>
    </v-toolbar>
    <v-divider></v-divider>
     <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { listUsers, listAttachments } from "../../graphql/queries";
import {
  updateUser,
  deleteAttachment,
  createAttachment
} from "../../graphql/mutations";
import { uuid } from "vue-uuid";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      drawer: true,
      active: null,
      logged: {},
      user: {},
      objectURL: null,
      file: null,
      snackbar: false,
      snackbar1: false,
      loading: false,
      email: "",
      dialog: false,
      attachment: []
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const info = await API.graphql(graphqlOperation(listUsers));
      const infoList = info.data.listUsers.items;
      if (infoList && infoList.length !== 0) {
        infoList.forEach(e => {
          if (this.user.attributes.sub === e.id) {
            this.logged = e;
          }
        });
      }
      const attach = await API.graphql(graphqlOperation(listAttachments));
      const attachList = attach.data.listAttachments.items;
      if (attachList && attachList.length !== 0) {
        const object = attachList.filter(e => {
          return this.logged.id === e.memberID;
        });
        if (object && object.length !== 0) {
          this.attachment = object;
          const response = object.map(o => {
            return Storage.get(o.attachment);
          });
          Promise.all(response).then(results => {
            results.forEach(image => {
              this.objectURL = image;
            });
          });
        }
      }
    },
    logOut() {
      this.$router.push({
        name: "Home"
      });
    },
    /*upload photo*/
    async uploadImage(e) {
      this.loading = true;
      this.file = e.target.files[0];
      this.objectURL = URL.createObjectURL(this.file);
      // send to s3
      const key = this.file.name;
      const options = {
        ContentType: this.file.type
      };
      await Storage.put(key, this.file, options);
      // update db
      const attach = {
        id: uuid.v4(),
        memberID: this.user.attributes.sub, // user id
        attachment: this.file.name, // attachment
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createAttachment, { input: attach }));
      this.loading = false;
      this.snackbar = true;
    },
    /*remove file*/
    async removeImage() {
      this.loading = true;
      this.objectURL = null;
      if (this.attachment && this.attachment.length !== 0) {
        // remove from S3
        const response = this.attachment.map(e => {
          return Storage.remove(e.attachment);
        });
        await Promise.all(response);
        // update attachment DB
        const results = this.attachment.map(e => {
          const attachID = {
            id: e.id
          };
          return API.graphql(
            graphqlOperation(deleteAttachment, { input: attachID })
          );
        });
        await Promise.all(results);
        this.file = null;
        this.loading = false;
        this.snackbar1 = true;
      }
    },
    // update information
    async updateInfo() {
      this.loading = true;
      const data = {
        id: this.logged.id,
        username: this.logged.username,
        email: this.email, // changed email
        membership: this.logged.membership,
        dob: this.logged.dob,
        phone: this.logged.phone,
        gender: this.logged.gender,
        address: this.logged.address,
        nationality: this.logged.nationality,
        identification: this.logged.identification,
        status: this.logged.status,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(updateUser, { input: data }));
      this.email = "";
      this.dialog = false;
      this.loading = false;
      this.snackbar = true;
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
