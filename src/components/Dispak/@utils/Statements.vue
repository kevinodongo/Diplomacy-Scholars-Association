<template>
  <div class="statements">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-container grid-list-xs>
      <v-sheet height="300">
        <v-card-text>
          <div class="title font-weight-light">ACCOUNT STATUS</div>
          <v-btn v-if="active" color="success" class="mt-2" tile>Active</v-btn>
          <v-btn v-if="inactive" color="error" class="mt-2" tile
            >InActive</v-btn
          >
          <v-alert color="indigo" outlined class="mt-4">
            <div class="font-weight-regular">How to make payment</div>
            <div>1. MPESA</div>
            <div>2. BANK</div>
            <div>3. AIRTEL</div>
          </v-alert>
        </v-card-text>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      logged: {},
      active: null,
      inactive: null,
      loading: false,
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      this.loading = true;
      const info = await API.graphql(
        graphqlOperation(listUsers, { limit: 60 })
      );
      const infoList = info.data.listUsers.items;
      if (infoList && infoList.length !== 0) {
        infoList.forEach(e => {
          if (this.user.attributes.sub === e.id) {
            this.logged = e;
          }
        });
      }
      // check if active or in active
      if (this.logged.status === "Active") {
        this.active = true;
      } else if (this.logged.status === "InActive") {
        this.inactive = true;
      }
      this.loading = false;
    }
  }
};
</script>
