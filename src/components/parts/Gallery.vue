<template>
  <div class="gallery">
    <Toolbar />
    <v-sheet height="100" color="#FFF8E1" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div style="font-size: 30px;" class="indigo--text font-weight-light">
            Gallery
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
              class="ma-1"
              height="400"
              width="280"
              v-for="item in items"
              :key="item.id"
            >
              <v-img :src="item.attachment" width="100%" height="400"></v-img>
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
import { listGallerys } from "../../graphql/queries";
var _ = require("lodash");
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      items: [],
      loading: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      this.loading = true
      const image = await API.graphql(graphqlOperation(listGallerys));
      const imageList = image.data.listGallerys.items;
      if (imageList && imageList.length !== 0) {
        imageList.forEach(e => {
          Storage.get(e.attachment).then(image => {
            e.attachment = image;
          });
          const arr = this.items.concat(e);
          this.items = _.uniqBy(arr, "id");
        });
      }
      if (this.items.length !== 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    }
  }
};
</script>
