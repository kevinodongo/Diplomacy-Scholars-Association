<template>
  <div class="list-members">
    <v-container grid-list-xs>
      <v-card elevation="3">
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
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
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
        { text: "Education", value: "education" },
        { text: "Address", value: "address" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
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
