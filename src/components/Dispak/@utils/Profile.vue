<template>
  <div class="profile">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <!--dialog-->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-toolbar flat>
          <div class="font-weight-regular">CONFIRM USER</div>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <div v-if="memberUser != null">
          <v-sheet class="pa-3">
            <v-card-text>
              <v-alert outlined color="indigo">
                <div>
                  Please check the email you provided and get a code to confirm
                  the new user created
                </div>
              </v-alert>
              <v-text-field
                single-line
                outlined
                disabled
                v-model="memberUser"
                name="name"
                placeholder="Member name"
              ></v-text-field>
              <v-text-field
                single-line
                outlined
                v-model="code"
                name="name"
                placeholder="Confirmation Code"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="createUser">confirm</v-btn>
            </v-card-actions>
          </v-sheet>
        </div>
      </v-card>
    </v-dialog>
    <!--/end-->
    <!--snackbars-->
    <v-snackbar v-model="snackbar">
      You have successfully updated education details
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1" :timeout="timeout">
      You have uploaded a photo
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar2" :timeout="timeout">
      You have removed a photo
      <v-btn color="pink" text @click="snackbar2 = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar3">
      You have successfully created a user
      <v-btn color="pink" text @click="snackbar3 = false">
        Close
      </v-btn>
    </v-snackbar>
    <!--/end-->
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-sheet elevation="2" class="pa-6">
            <v-toolbar flat>
              <div class="indigo--text">CREATE A NEW MEMBER</div>
              <v-spacer></v-spacer>
              <v-btn text @click="signUp">save</v-btn>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4">
                  <v-row justify="center">
                    <v-avatar
                      class="mt-3"
                      color="grey"
                      size="164"
                      v-if="objectURL"
                    >
                      <v-img :src="objectURL"> </v-img>
                    </v-avatar>
                    <v-avatar class="mt-3" color="grey" size="164" v-else>
                      <v-img src="https://i.imgur.com/qvnZqVr.jpg"> </v-img>
                    </v-avatar>
                  </v-row>
                  <div class="text-center mt-4" v-if="objectURL">
                    <v-btn color="error" outlined @click="removeImage">
                      remove photo
                    </v-btn>
                  </div>
                  <div class="text-center mt-4" v-else>
                    <v-btn color="indigo" outlined>
                      <div class="font-weight-regular">
                        CHOOSE A PHOTO
                      </div>
                      <div class="upload-profile">
                        <input
                          type="file"
                          name="profile"
                          @change="uploadImage"
                        />
                      </div>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <div class="caption font-weight-bold mb-1">
                    First Name <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="firstname"
                    v-model="item.firstName"
                  ></v-text-field>
                  <div class="caption font-weight-bold mb-1">
                    Other names <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="othernames"
                    v-model="item.otherNames"
                  ></v-text-field>
                  <div class="caption font-weight-bold mb-1">
                    Status <span class="red--text">*</span>
                  </div>
                  <v-overflow-btn
                    small-chips
                    outlined
                    single-line
                    dense
                    hint="This is required"
                    persistent-hint
                    deletable-chips
                    v-model="selectedStatus"
                    :items="status"
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Email <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    hint="A code will be sent to this email for confirmation"
                    persistent-hint
                    name="email"
                    v-model="item.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Membership <span class="red--text">*</span>
                  </div>
                  <v-overflow-btn
                    small-chips
                    outlined
                    single-line
                    dense
                    deletable-chips
                    v-model="selectedMembership"
                    :items="membership"
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Role <span class="red--text">*</span>
                  </div>
                  <v-overflow-btn
                    small-chips
                    outlined
                    single-line
                    dense
                    deletable-chips
                    v-model="selectedRole"
                    :items="roles"
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Password <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    :type="show ? 'text' : 'password'"
                    name="password"
                    v-model="item.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Gender <span class="red--text">*</span>
                  </div>
                  <v-overflow-btn
                    small-chips
                    outlined
                    single-line
                    dense
                    deletable-chips
                    v-model="selectedGender"
                    :items="gender"
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Date of birth <span class="red--text">*</span>
                  </div>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        outlined
                        single-line
                        dense
                        readonly
                        v-on="on"
                        v-model="computedDateFormattedMomentjs"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn text color="primary" @click="$refs.menu.save(date)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Phone <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="phone"
                    v-model="item.phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Address <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="address"
                    v-model="item.address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Identification <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="identification"
                    v-model="item.identification"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="caption font-weight-bold mb-1">
                    Nationality <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="nationality"
                    v-model="item.nationality"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-sheet>
          <v-sheet elevation="2" class="pa-6 mt-3">
            <v-toolbar flat>
              <div class="indigo--text">EDUCATION BACKGROUND</div>
              <v-spacer></v-spacer>
              <v-btn text @click="createEducation">save</v-btn>
            </v-toolbar>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12">
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
                </v-col>
                <v-col cols="12">
                  <div class="caption font-weight-bold mb-1">
                    Qualifications <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="qualification"
                    v-model="item.qualification"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="caption font-weight-bold mb-1">
                    Academic Institution <span class="red--text">*</span>
                  </div>
                  <v-text-field
                    outlined
                    single-line
                    dense
                    name="institution"
                    v-model="item.institution"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="caption font-weight-bold mb-1">
                    Date of Completion <span class="red--text">*</span>
                  </div>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :return-value.sync="date1"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        outlined
                        single-line
                        dense
                        readonly
                        v-on="on"
                        v-model="completionDate"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date1" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(date1)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
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
import moment from "moment";
import {
  createUser,
  createEducation,
  createAttachment
} from "../../../graphql/mutations";
import { listUsers } from "../../../graphql/queries";
import { onCreateUser } from "../../../graphql/subscriptions";
//import { CognitoIdentityServiceProvider } from "aws-sdk";
var _ = require("lodash");
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      selectedStatus: null,
      objectURL: null,
      loading: false,
      selectedGender: null,
      selectedRole: null,
      selectedMembership: null,
      show: false,
      user: {},
      code: "",
      dialog: false,
      drawer: false,
      item: {},
      member: "",
      roles: [{ text: "Member", value: "Member" }],
      membership: [
        { text: "Founding Member", value: "Founding Member" },
        { text: "Licentiate Member", value: "Licentiate Member" },
        { text: "Honorary Member", value: "Honorary Member" },
        { text: "Institutional Member", value: "Institutional Member" },
        { text: "Student Member", value: "Student Member" }
      ],
      gender: [
        {
          text: "Male",
          value: "Male"
        },
        { text: "Female", value: "Female" }
      ],
      status: [
        {
          text: "Active",
          value: "Active"
        },
        { text: "InActive", value: "InActive" }
      ],
      date1: "",
      date: "",
      menu: false,
      menu1: false,
      memberUser: null,
      objects: [], // all members
      selectedMember: null,
      snackbar: false,
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      timeout: 2000,
      file: null,
      newMemberID: null,
      error: ""
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    completionDate() {
      return this.date1 ? moment(this.date1).format("dddd, MMMM Do YYYY") : "";
    }
  },
  mounted() {
    this.getDetails();
    this.subscriptions();
  },
  methods: {
    /*list members*/
    async getDetails() {
      const member = await API.graphql(graphqlOperation(listUsers));
      const memberList = member.data.listUsers.items;
      if (memberList && memberList.length !== 0) {
        memberList.forEach(e => {
          const arr = this.objects.concat({
            id: e.id,
            createdAt: e.createdAt,
            text: e.username,
            value: e.id
          });
          this.objects = _.orderBy(_.uniqBy(arr, "id"), "createdAt", "desc");
        });
      }
    },
    /*subscriptions*/
    async subscriptions() {
      await API.graphql(graphqlOperation(onCreateUser)).subscribe({
        next: evt => {
          const e = evt.value.data.onCreateUser;
          const arr = this.objects.concat({
            id: e.id,
            createdAt: e.createdAt,
            text: e.username,
            value: e.id
          });
          this.objects = _.orderBy(_.uniqBy(arr, "id"), "createdAt", "desc");
        }
      });
    },
    /*sign up function*/
    async signUp() {
      this.loading = true;
      const username = this.item.firstName
        ? this.item.firstName.toLowerCase()
        : null;
      if (username !== null) {
        this.memberUser = username;
      }
      const email = this.item.email;
      const password = this.item.password;
      const roles = this.selectedRole ? this.selectedRole.toLowerCase() : null;
      await Auth.signUp({
        username,
        password,
        attributes: { email, "custom:roles": roles }
      })
        .then(data => {
          this.newMemberID = data.userSub;
        })
        .catch(error => {
          this.error = error;
        });
      this.dialog = true;
      this.loading = false;
    },
    async createUser() {
      this.loading = true;
      // confirm user
      const username = this.memberUser;
      const code = this.code;
      this.memberUser = "";
      this.code = "";
      await Auth.confirmSignUp(username, code);
      // send to the db
      const data = {
        id: this.newMemberID,
        username: this.item.firstName + " " + this.item.otherNames,
        email: this.item.email,
        membership: this.selectedMembership,
        dob: this.date,
        phone: this.item.phone,
        gender: this.selectedGender,
        address: this.item.address,
        nationality: this.item.nationality,
        identification: this.item.identification,
        status: this.selectedStatus,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createUser, { input: data }));
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
          memberID: this.newMemberID, // user id
          attachment: this.file.name, // attachment
          createdAt: new Date()
        };
        await API.graphql(
          graphqlOperation(createAttachment, { input: attach })
        );
      }
      this.item = {};
      this.file = null;
      this.objectURL = null;
      this.selectedRole = null;
      this.selectedMembership = null;
      this.selectedGender = null;
      this.selectedStatus = null;
      this.newMemberID = null;
      this.date = "";
      this.dialog = false;
      this.loading = false;
      this.snackbar3 = true;
    },
    /*create education*/
    async createEducation() {
      this.loading = true;
      const data = {
        id: uuid.v4(),
        memberID: this.selectedMember,
        qualification: this.item.qualification,
        institution: this.item.institution,
        duration: this.date1,
        createdAt: new Date()
      };
      //console.log(data);
      await API.graphql(graphqlOperation(createEducation, { input: data }));
      this.item = {};
      this.selectedMember = null;
      this.date1 = "";
      this.loading = false;
      this.snackbar = true;
    },
    /*upload photo*/
    async uploadImage(e) {
      this.file = e.target.files[0];
      this.objectURL = URL.createObjectURL(this.file);
      this.snackbar1 = true;
    },
    /*remove file*/
    removeImage() {
      this.objectURL = null;
      this.file = "";
      this.snackbar2 = true;
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
