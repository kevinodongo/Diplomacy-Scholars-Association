<template>
  <div class="certificates">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-container grid-list-xs>
      <v-sheet height="300">
        <v-card-text>
          <div class="title font-weight-light">CERTIFICATES</div>
          <v-alert color="indigo" outlined class="mt-4">
            <div class="font-weight-regular">
              Your Certificates will appear here. Download when you receive them
            </div>
          </v-alert>
          <v-sheet v-if="objectURL" elevation="2" width="300">
            <v-card-text>
              <v-row justify="center">
                <img
                  src="https://i.imgur.com/IK8G3cb.jpg"
                  width="200"
                  height="200"
                />
              </v-row>
              <v-row justify="center">
                <v-btn class="mt-3" text :href="objectURL" target="blank"
                  ><span class="indigo--text">download</span></v-btn
                >
              </v-row>
            </v-card-text>
          </v-sheet>
        </v-card-text>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { listCertificates } from "../../../graphql/queries";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      objectURL: null,
      loading: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      this.loading = true;
      const cert = await API.graphql(graphqlOperation(listCertificates));
      const certList = cert.data.listCertificates.items;
      if (certList && certList.length !== 0) {
        const object = certList.filter(c => {
          return c.memberID === this.user.attributes.sub;
        });
        if (object && object.length !== 0) {
          const response = object.map(o => {
            return Storage.get(o.attachment);
          });
          Promise.all(response).then(results => {
            results.forEach(image => {
              this.objectURL = image;
            });
          });
        }
      }
      this.loading = false;
    }
  }
};
</script>
