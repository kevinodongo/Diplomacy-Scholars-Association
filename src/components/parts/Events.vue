<template>
  <div class="events">
    <Toolbar />
    <v-sheet height="100" color="#FFF8E1" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div class="display-1 indigo--text font-weight-light">
            Upcoming Events
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container grid-list-xs>
      <v-sheet min-height="650">
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
      events: []
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
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
    }
  }
};
</script>
