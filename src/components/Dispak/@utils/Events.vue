<template>
  <div class="uploads">
    <!--loading-->
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <!--snackbar-->
    <v-snackbar v-model="snackbar">
      You have successfully uploaded certificate
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1" :timeout="timeout">
      You have successfully saved member certificate
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar2">
      You have successfully uploaded publications
      <v-btn color="pink" text @click="snackbar2 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar3" :timeout="timeout">
      You have successfully saved member publications
      <v-btn color="pink" text @click="snackbar3 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar4" :timeout="timeout">
      You have removed an upload. Please upload another one ?
      <v-btn color="pink" text @click="snackbar4 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container grid-list-xs>
      <v-alert color="indigo" outlined class="mt-2">
        <div>What do you want to upload ?</div>
        <div>
          Once you have uploaded you will have to wait for the admin to approve.
        </div>
      </v-alert>
      <v-row justify="center">
        <v-btn text @click="(events = true), (gallery = null)"
          ><span class="font-weight-regular">Events</span></v-btn
        >
        <v-btn text @click="(events = null), (gallery = true)"
          ><span class="font-weight-regular">Gallery</span></v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-sheet v-if="gallery" elevation="5" class="mt-3">
            <v-toolbar flat dense>
              <v-spacer></v-spacer>
              <v-btn text @click="savePicture">
                <div
                  style="text-transform: capitalize"
                  class="font-weight-regular indigo--text"
                >
                  save gallery
                </div>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
              <v-sheet height="100" elevation="3">
                <v-container class="fill-height" grid-list-xs>
                  <v-row align="center" justify="center">
                    <v-btn color="indigo" outlined>
                      <div>Choose a picture</div>
                      <div class="upload-profile">
                        <input
                          type="file"
                          name="profile"
                          @change="uploadPicture"
                        />
                      </div>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-sheet>
              <v-card-actions v-if="showImage">
                <div class="red--text">{{ gallery.name }}</div>
                <v-spacer></v-spacer>
                <v-btn @click="removeUpload" icon
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-card-actions>
              <v-divider class="my-2"></v-divider>
              <div class="caption indigo--text">
                DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
              </div>
            </v-card-text>
          </v-sheet>
          <v-sheet v-if="events" elevation="5" class="mt-3">
            <v-toolbar flat dense>
              <v-spacer></v-spacer>
              <v-btn text @click="saveEvent">
                <div
                  style="text-transform: capitalize"
                  class="font-weight-regular indigo--text"
                >
                  save event
                </div>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
              <div class="caption font-weight-bold mb-1">
                Title <span class="red--text">*</span>
              </div>
              <v-text-field
                single-line
                outlined
                dense
                name="name"
                v-model="title"
              ></v-text-field>
              <div class="caption font-weight-bold mb-1">
                Content <span class="red--text">*</span>
              </div>
              <v-textarea
                v-model="content"
                single-line
                outlined
                dense
                name="input-7-4"
                placeholder="Any comment you want to add"
              ></v-textarea>
              <v-sheet height="100" elevation="3">
                <v-container class="fill-height" grid-list-xs>
                  <v-row align="center" justify="center">
                    <v-btn color="indigo" outlined>
                      <div>Choose an event</div>
                      <div class="upload-profile">
                        <input
                          type="file"
                          name="profile"
                          @change="uploadEvents"
                        />
                      </div>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-sheet>
              <v-card-actions v-if="showImage">
                <div class="red--text">{{ events.name }}</div>
                <v-spacer></v-spacer>
                <v-btn @click="removeUpload" icon
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-card-actions>
              <v-divider class="my-2"></v-divider>
              <div class="caption indigo--text">
                DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
              </div>
            </v-card-text>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { uuid } from "vue-uuid";
import { createGallery, createEvent } from "../../../graphql/mutations";
import moment from "moment"
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      events: null,
      gallery: null,
      heading: "",
      files: null,
      title: "",
      content: "",
      loading: false,
      snackbar: false,
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      snackbar4: false,
      showImage: null,
      timeout: 2000
    };
  },
  methods: {
    uploadPicture(e) {
      this.loading = true;
      this.gallery = e.target.files[0];
      this.showImage = true;
      this.loading = false;
      this.snackbar = true;
    },
    uploadEvents(e) {
      this.loading = true;
      this.events = e.target.files[0];
      this.showImage = true;
      this.loading = false;
      this.snackbar2 = true;
    },
    removeUpload() {
      this.loading = true;
      if (this.gallery !== null) {
        this.gallery = null;
      }
      if (this.events !== null) {
        this.events = null;
      }
      this.showImage = false;
      this.loading = false;
      this.snackbar4 = true;
    },
    async savePicture() {
      this.loading = true;
      const key = this.gallery.name;
      const options = {
        ContentType: this.gallery.type
      };
      // send to s3
      await Storage.put(key, this.gallery, options);
      // send to db
      const attach = {
        id: uuid.v4(),
        attachment: this.gallery.name, // attachment
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createGallery, { input: attach }));
      this.showImage = false;
      this.loading = false;
      this.snackbar1 = true;
      this.gallery = null;
    },
    async saveEvent() {
      this.loading = true;
      const key = this.events.name;
      const options = {
        ContentType: this.events.type
      };
      // send to s3
      await Storage.put(key, this.events, options);
      // send to db
      const date = moment().format("MMMM Do YYYY, h:mm:ss a")
      const attach = {
        id: uuid.v4(),
        title: this.title,
        content: this.content,
        attachment: this.events.name, // attachment
        createdAt: new Date(),
        updatedAt: date
      };
      await API.graphql(graphqlOperation(createEvent, { input: attach }));
      this.title = "";
      this.content = "";
      this.showImage = false;
      this.loading = false;
      this.snackbar3 = true;
      this.events = null;
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
