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
          For Publications once you have uploaded you will have to wait for
          Admin to approve before it can be veiwed with others
        </div>
      </v-alert>
      <v-row justify="center">
        <v-btn text @click="(certificates = true), (publications = null)"
          ><span class="font-weight-regular">Certificates</span></v-btn
        >
        <v-btn text @click="(certificates = null), (publications = true)"
          ><span class="font-weight-regular">Publications</span></v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-sheet v-if="certificates" elevation="5" class="mt-3">
            <v-toolbar flat dense>
              <v-spacer></v-spacer>
              <v-btn text @click="saveCertificate">
                <div
                  style="text-transform: capitalize"
                  class="font-weight-regular indigo--text"
                >
                  save certificates
                </div>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
              <div class="caption font-weight-bold mb-1">
                Select a Member <span class="red--text">*</span>
              </div>
              <v-autocomplete
                v-model="selectedMember"
                :items="objects"
                small-chips
                outlined
                single-line
                dense
                deletable-chips
              ></v-autocomplete>
              <v-sheet height="100" elevation="3">
                <v-container class="fill-height" grid-list-xs>
                  <v-row align="center" justify="center">
                    <v-btn color="indigo" outlined>
                      <div>Choose a certificate</div>
                      <div class="upload-profile">
                        <input
                          type="file"
                          name="profile"
                          @change="uploadCertificates"
                        />
                      </div>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-sheet>
              <v-card-actions v-if="showImage">
                <div class="red--text">{{ certificates.name }}</div>
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
          <v-sheet v-if="publications" elevation="5" class="mt-3">
            <v-toolbar flat dense>
              <v-spacer></v-spacer>
              <v-btn text @click="savePublications">
                <div
                  style="text-transform: capitalize"
                  class="font-weight-regular indigo--text"
                >
                  save publications
                </div>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
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
                single-line
                outlined
                dense
                name="name"
                placeholder="Title"
                v-model="title"
              ></v-text-field>
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
                      <div>Choose a publications</div>
                      <div class="upload-profile">
                        <input
                          type="file"
                          name="profile"
                          @change="uploadPublications"
                        />
                      </div>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-sheet>
              <v-card-actions v-if="showImage">
                <div class="red--text">{{ publications.name }}</div>
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
import { listUsers } from "../../../graphql/queries";
var _ = require("lodash");
import { uuid } from "vue-uuid";
import {
  createPublication,
  createCertificate
} from "../../../graphql/mutations";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      certificates: null,
      publications: null,
      files: null,
      selectedMember: null,
      selectedUser: null,
      title: "",
      content: "",
      objects: [],
      items: [],
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
  mounted() {
    this.getDetails();
  },
  methods: {
    /*list members*/
    async getDetails() {
      const member = await API.graphql(graphqlOperation(listUsers));
      const memberList = member.data.listUsers.items;
      if (memberList && memberList.length !== 0) {
        memberList.forEach(e => {
          // certificates
          const arr = this.objects.concat({
            id: e.id,
            createdAt: e.createdAt,
            text: e.username,
            value: e.id
          });
          this.objects = _.orderBy(_.uniqBy(arr, "id"), "createdAt", "desc");
          // publications
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
    uploadCertificates(e) {
      this.loading = true;
      this.certificates = e.target.files[0];
      this.showImage = true;
      this.loading = false;
      this.snackbar = true;
    },
    uploadPublications(e) {
      this.loading = true;
      this.publications = e.target.files[0];
      this.showImage = true;
      this.loading = false;
      this.snackbar2 = true;
    },
    removeUpload() {
      this.loading = true;
      if (this.certificates !== null) {
        this.certificates = null;
      }
      if (this.publications !== null) {
        this.publications = null;
      }
      this.showImage = false;
      this.loading = false;
      this.snackbar4 = true;
    },
    async saveCertificate() {
      this.loading = true;
      const key = this.certificates.name;
      const options = {
        ContentType: this.certificates.type
      };
      // send to s3
      await Storage.put(key, this.certificates, options);
      // send to db
      const attach = {
        id: uuid.v4(),
        memberID: this.selectedMember, // user id
        attachment: this.certificates.name, // attachment
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createCertificate, { input: attach }));
      this.showImage = false;
      this.selectedMember = null;
      this.loading = false;
      this.snackbar1 = true;
      this.certificates = null;
    },
    async savePublications() {
      this.loading = true;
      const key = this.publications.name;
      const options = {
        ContentType: this.publications.type
      };
      // send to s3
      await Storage.put(key, this.publications, options);
      // send to db
      const attach = {
        id: uuid.v4(),
        title: this.title,
        content: this.content,
        member: this.selectedUser, // user name
        attachment: this.publications.name, // attachment
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createPublication, { input: attach }));
      this.title = "";
      this.content = "";
      this.selectedUser = false;
      this.showImage = false;
      this.loading = false;
      this.snackbar3 = true;
      this.publications = null;
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
