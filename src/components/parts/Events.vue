<template>
  <div class="events">
    <Toolbar />
    <v-sheet height="100" color="#FFF8E1" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div style="font-size: 30px;" class="indigo--text font-weight-light">
            Upcoming Events
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container grid-list-xs>
      <v-sheet min-height="650">
        <div v-if="loading">
          <v-sheet height="600">
            <v-container class="fill-height">
              <v-row justify="center" align="center">
                <v-sheet height="200" width="200">
                  <img
                    src="https://i.imgur.com/IK8G3cb.jpg"
                    width="100%"
                    height="200"
                  />
                </v-sheet>
              </v-row>
            </v-container>
          </v-sheet>
        </div>
        <div v-else>
          <v-row>
            <v-sheet
              width="280"
              v-for="event in events"
              :key="event.id"
              class="ma-1"
              elevation="2"
            >
              <img :src="event.attachment" width="100%" height="300" />
              <v-card-text class="text-center">
                <div class="mt-2">{{ event.title }}</div>
              </v-card-text>
            </v-sheet>
          </v-row>
        </div>
      </v-sheet>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { listEvents } from "../../graphql/queries";
var _ = require("lodash");
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      events: [],
      loading: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      this.loading = true;
      const event = await API.graphql(graphqlOperation(listEvents));
      const eventsList = event.data.listEvents.items;
      if (eventsList && eventsList.length !== 0) {
        eventsList.forEach(e => {
          Storage.get(e.attachment).then(image => {
            e.attachment = image;
          });
          const arr = this.events.concat(e);
          this.events = _.uniqBy(arr, "id");
        });
      }
      if (this.events.length !== 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    }
  }
};
</script>
