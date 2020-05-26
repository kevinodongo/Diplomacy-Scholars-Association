<template>
  <div class="events">
    <Toolbar />
    <v-container grid-list-xs>
      <v-sheet height="100" tile class="mt-10">
        <v-div class="display-1 indigo--text font-weight-light">
          Upcoming Events
        </v-div>
      </v-sheet>
      <v-sheet min-height="650">
        <v-sheet height="300" width="300">
          <v-img src="https://i.imgur.com/XxbqklK.jpg" width="100%"></v-img>
          <v-row justify="center">
            <div class="mt-2">Burundi Elections</div>
          </v-row>
        </v-sheet>
      </v-sheet>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
import { API, graphqlOperation } from "aws-amplify";
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
          const response = eventsList.map(e => {
            return Storage.get(e.attachment);
          });
          Promise.all(response).then(results => {
            results.forEach(image => {
              e.image = image;
            });
          });
          const arr = this.events.concat(e);
          this.events = _.uniqBy(arr, "id");
        });
      }
    }
  }
};
</script>
