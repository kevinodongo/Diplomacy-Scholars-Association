<template>
  <div class="list-members">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
      <v-sheet>
        <v-toolbar flat>
          <div style="text-transform: uppercase">
            {{ member.username }}
            <span class="caption ml-2 red--text">{{ member.status }}</span>
            <div class="caption">
              <span>ID:</span>{{ member.identification }}
            </div>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon @click="deleteMember(member)"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </v-toolbar>
        <v-divider></v-divider>
        <v-container grid-list-xs>
          <v-card-actions>
            <v-avatar class="mt-3" color="grey" size="70" v-if="member.image">
              <v-img :src="member.image"> </v-img>
            </v-avatar>
            <v-avatar class="mt-3" color="grey" size="70" v-else>
              <v-img src="https://i.imgur.com/qvnZqVr.jpg"> </v-img>
            </v-avatar>
            <v-btn color="success" outlined class="ml-4 mt-2" rounded small>
              <div>{{ member.membership }}</div>
            </v-btn>
          </v-card-actions>
          <v-divider class="my-2"></v-divider>
          <div class="caption font-weight-bold mt-2 mb-2">USER INFORMATION</div>
          <div class="font-weight-light">
            Date of Birth: <span class="indigo--text">{{ member.dob }}</span>
          </div>
          <div class="font-weight-light">
            Gender: <span class="indigo--text">{{ member.gender }}</span>
          </div>
          <div class="font-weight-light">
            Email: <span class="indigo--text">{{ member.email }}</span>
          </div>
          <div class="font-weight-light">
            Phone: <span class="indigo--text">{{ member.phone }}</span>
          </div>
          <div class="font-weight-light">
            Address: <span class="indigo--text">{{ member.address }}</span>
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="caption font-weight-bold mt-2 mb-2">EDUCATION</div>
          <v-list dense v-if="member.educations">
            <v-list-item v-for="(m, index) in member.educations" :key="index">
              <v-list-item-content>
                <v-list-item-title v-text="m.qualification"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="m.institution"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-text="m.duration"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-sheet>
    </v-dialog>
    <v-snackbar v-model="snackbar">
      You have successfully deleted a member
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container grid-list-xs>
      <div class="mb-3">MEMBERS</div>
      <v-card elevation="1">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="dispak"
          :search="search"
          @click:row="viewProfile($event)"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import {
  listUsers,
  listEducations,
  listAttachments
} from "../../../graphql/queries";
import { deleteUser, deleteEducation } from "../../../graphql/mutations";
var _ = require("lodash");
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      search: "",
      headers: [
        {
          text: "Names",
          align: "start",
          filterable: false,
          value: "username"
        },
        { text: "Membership", value: "membership" },
        { text: "Gender", value: "gender" },
        { text: "Address", value: "address" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Nationality", value: "nationality" },
        { text: "Status", value: "status" }
      ],
      dispak: [],
      dialog: false,
      member: {},
      items: [],
      objects: [],
      snackbar: false,
      loading: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      this.loading = true;
      const member = await API.graphql(
        graphqlOperation(listUsers, { limit: 60 })
      );
      const memberList = member.data.listUsers.items;
      if (memberList && memberList.length !== 0) {
        memberList.forEach(i => {
          const array = [];
          const arr = this.objects.concat({
            id: i.id,
            username: i.username,
            membership: i.membership,
            email: i.email,
            phone: i.phone,
            dob: i.dob,
            address: i.address,
            gender: i.gender,
            identification: i.identification,
            nationality: i.nationality,
            status: i.status,
            image: null,
            educations: array
          });
          this.objects = _.uniqBy(arr, "id");
        });
      }
      const education = await API.graphql(graphqlOperation(listEducations));
      const educationList = education.data.listEducations.items;
      if (educationList && educationList.length !== 0) {
        this.objects.forEach(i => {
          educationList.forEach(e => {
            if (i.id === e.memberID) {
              const array = i.educations.concat(e);
              i.educations = array;
            }
            const arr = this.objects.concat(i);
            this.objects = _.uniqBy(arr, "id");
          });
        });
      }
      const attach = await API.graphql(graphqlOperation(listAttachments));
      const attachList = attach.data.listAttachments.items;
      if (attachList && attachList.length !== 0) {
        this.objects.forEach(e => {
          const attach = attachList.filter(a => {
            return a.memberID === e.id;
          });
          const response = attach.map(r => {
            return Storage.get(r.attachment);
          });
          Promise.all(response).then(results => {
            results.forEach(image => {
              e.image = image;
            });
          });
          const arr = this.dispak.concat(e);
          this.dispak = _.uniqBy(arr, "id");
        });
      } else {
        this.dispak = this.objects;
      }
      this.loading = false;
    },
    viewProfile(e) {
      this.dialog = true;
      this.member = e;
    },
    async deleteMember(member) {
      this.loading = true;
      const memberID = {
        id: member.id
      };
      // delete user
      await API.graphql(graphqlOperation(deleteUser, { input: memberID }));
      // delete education
      if (member.educations.length !== 0) {
        const response = member.educations.map(e => {
          const educationID = {
            id: e.id
          };
          return API.graphql(
            graphqlOperation(deleteEducation, { input: educationID })
          );
        });
        await Promise.all(response);
      }
      const index = this.dispak.indexOf(member);
      const array = [...this.dispak];
      array.splice(index, -1);
      this.dispak = array;
      this.loading = false;
      this.dialog = false;
      this.snackbar = true;
    }
  }
};
</script>
