<template>
  <div class="list-members">
    <Toolbar />
    <v-sheet height="100" color="#EEEEEE" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div style="font-size: 26px;" class="indigo--text font-weight-light">
            Members of DIPSAK
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container grid-list-xs>
      <v-card min-height="635" flat>
        <v-card-title class="mt-4">
          <v-text-field
            outlined
            v-model="search"
            dense
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="dispak" :search="search">
          <template v-slot:item.status="{ item }">
            <v-chip color="orange" dark>{{ item.status }}</v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
var _ = require("lodash");
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Names",
          align: "start",
          sortable: false,
          value: "username"
        },
        { text: "Membership", value: "membership" },
        { text: "Gender", value: "gender" },
        { text: "Address", value: "address" },
        { text: "Nationality", value: "nationality" },
        { text: "Status", value: "status" }
      ],
      dispak: []
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
          if (e.status === "Active") {
            const arr = this.dispak.concat(e);
            this.dispak = _.uniqBy(arr, "id");
          }
        });
      }
    }
  }
};
</script>
