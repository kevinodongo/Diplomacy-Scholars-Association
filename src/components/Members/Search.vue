<template>
  <div class="list-members">
    <Toolbar />
    <v-container grid-list-xs>
      <v-card min-height="635" flat>
        <div class="indigo--text title mt-4 ml-3 font-weight-regular">
          Members of DIPSAK
        </div>
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
        <v-data-table
          :headers="headers"
          :items="dispak"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Names",
          align: "start",
          filterable: false,
          value: "name"
        },
        { text: "Membership", value: "membership" },
        { text: "Gender", value: "gender" },
        { text: "Address", value: "address" },
        { text: "Nationality", value: "nationality" }
      ],
      dispak: [
        {
          name: "Peter Onyango",
          membership: "Founding Member",
          gender: "M",
          education: "Phd",
          address: "1421 Nairobi",
          email: "info@email.com",
          phone: "0725999157",
          nationality: "Kenyan"
        },
        {
          name: "John Waweru",
          membership: "Founding Member",
          gender: "M",
          education: "Phd",
          address: "1421 Nairobi",
          email: "info@email.com",
          phone: "0725999157",
          nationality: "Kenyan"
        }
      ]
    };
  }
};
</script>
