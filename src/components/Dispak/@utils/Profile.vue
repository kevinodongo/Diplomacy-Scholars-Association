<template>
  <div class="profile">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
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
                <v-col cols="12" md="6">
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
                </v-col>
                <v-col cols="12" md="6">
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
                </v-col>
                <v-col cols="12">
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
/*eslint-disable*/
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
var _ = require("lodash");
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      selectedStatus: null,
      loading: false,
      selectedGender: null,
      selectedMembership: null,
      show: false,
      user: {},
      code: "",
      drawer: false,
      item: {},
      member: "",
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
      date1: "",
      date: "",
      menu: false,
      menu1: false,
      objects: [], // all members
      selectedMember: null,
      snackbar: false,
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      timeout: 2000,
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
      const member = await API.graphql(graphqlOperation(listUsers, { limit: 60}));
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
      const username = this.item.firstName.toLowerCase()
      const email = this.item.email;
      const password = this.item.password;
      const roles = "member"
      const response = await Auth.signUp({
        username,
        password,
        attributes: { email, "custom:roles": roles }
      })
      // update db
      const data = {
        id: response.userSub,
        username: this.item.firstName + " " + this.item.otherNames,
        email: this.item.email,
        membership: this.selectedMembership,
        dob: this.date,
        phone: this.item.phone,
        gender: this.selectedGender,
        address: this.item.address,
        nationality: this.item.nationality,
        identification: this.item.identification,
        status: "Active",
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createUser, { input: data }));
      this.item = {}
      this.date = "";
      this.selectedMembership = null;
      this.selectedGender = null;
      this.loading = false;
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