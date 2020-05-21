<template>
  <div class="profile">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
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
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-sheet elevation="3" class="pa-6">
            <v-toolbar flat>
              <div class="indigo--text">CREATE A NEW MEMBER</div>
              <v-spacer></v-spacer>
              <v-btn text @click="signUp">save</v-btn>
            </v-toolbar>
            <v-row>
              <v-col cols="12" md="4">
                <v-row justify="center">
                  <v-avatar class="mt-3" color="grey" size="164">
                    <v-img src="https://i.imgur.com/qvnZqVr.jpg"></v-img>
                  </v-avatar>
                </v-row>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="names"
                  v-model="item.firstName"
                  placeholder="First Name"
                ></v-text-field>
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="othernames"
                  v-model="item.otherNames"
                  placeholder="Other Names"
                ></v-text-field>
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="email"
                  v-model="item.email"
                  placeholder="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-overflow-btn
                  outlined
                  single-line
                  dense
                  v-model="selectedMembership"
                  :items="membership"
                  placeholder="Membership"
                  target="#dropdown-example"
                ></v-overflow-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-overflow-btn
                  outlined
                  single-line
                  dense
                  v-model="selectedRole"
                  :items="roles"
                  placeholder="Role"
                  target="#dropdown-example"
                ></v-overflow-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  single-line
                  dense
                  :type="show ? 'text' : 'password'"
                  name="password"
                  v-model="item.password"
                  placeholder="Password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-overflow-btn
                  outlined
                  single-line
                  dense
                  v-model="selectedGender"
                  :items="gender"
                  placeholder="Gender"
                  target="#dropdown-example"
                ></v-overflow-btn>
              </v-col>
              <v-col cols="12" md="6">
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
                      placeholder="Date of birth"
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
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="phone"
                  v-model="item.phone"
                  placeholder="Phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="address"
                  v-model="item.address"
                  placeholder="Address"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="identification"
                  v-model="item.identification"
                  placeholder="Identification"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="nationality"
                  v-model="item.nationality"
                  placeholder="Nationality"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet elevation="3" class="pa-6 mt-3">
            <v-toolbar flat>
              <div class="indigo--text">EDUCATION BACKGROUND</div>
              <v-spacer></v-spacer>
              <v-btn text @click="createEducation">save</v-btn>
            </v-toolbar>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="qualification"
                  v-model="item.qualification"
                  placeholder="Qualifications"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="institution"
                  v-model="item.institution"
                  placeholder="Academic Institution"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
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
                      placeholder="Date of Completion"
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
                    <v-btn text color="primary" @click="$refs.menu1.save(date1)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation } from "aws-amplify";
import { uuid } from "vue-uuid";
import moment from "moment";
import { createUser, createEducation } from "../../../graphql/mutations";
export default {
  data() {
    return {
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
      roles: [
        {
          text: "Admin",
          value: "Admin"
        },
        { text: "Member", value: "Member" }
      ],
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
      memberUser: null
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
  methods: {
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
        id: uuid.v4(),
        username: this.item.firstName + this.item.otherNames,
        email: this.item.email,
        membership: this.selectedMembership,
        dob: this.date,
        phone: this.item.phone,
        gender: this.selectedGender,
        address: this.item.address,
        nationality: this.item.nationality,
        identification: this.item.identification,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createUser, { input: data }));
      this.item = {};
      this.selectedRole = null;
      this.selectedRole = null;
      this.selectedMembership = null;
      this.dialog = false;
      this.loading = false;
    },
    async createEducation() {
      this.loading = true;
      const data = {
        id: uuid.v4(),
        qualification: this.item.qualification,
        institution: this.item.institution,
        duration: this.date1,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createEducation, { input: data }));
      this.item = {};
      this.loading = false;
    }
  }
};
</script>
