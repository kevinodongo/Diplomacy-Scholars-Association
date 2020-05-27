<template>
  <div class="events">
    <Toolbar />
    <v-sheet height="100" color="#FFF8E1" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div class="display-1 indigo--text font-weight-light">
            Publications & Blogs
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text> </v-card-text>
      </v-card>
    </v-dialog>
    <v-container grid-list-xs>
      <v-sheet min-height="650">
        <v-row>
          <v-sheet
            min-height="300"
            width="280"
            elevation="2"
            class="ma-2"
            v-for="publication in publications"
            :key="publication"
          >
            <div v-if="publication.image">
              <v-sheet height="200">
                <img
                  :src="publication.image"
                  alt=""
                  width="100%"
                  height="200"
                />
              </v-sheet>
            </div>
            <div v-else>
              <v-row justify="center">
                <img
                  src="https://i.imgur.com/IK8G3cb.jpg"
                  alt=""
                  height="200"
                />
              </v-row>
            </div>
            <v-card-title primary-title>
              {{ publication.title }}
            </v-card-title>
            <v-card-text>
              <div class="content-text">{{ publication.content }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" text @click="dialog = true"
                >read more</v-btn
              >
            </v-card-actions>
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
import { API, graphqlOperation } from "aws-amplify";
import { listPublics } from "../../graphql/queries";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      publications: [],
      dialog: false
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      // public
      const p = await API.graphql(graphqlOperation(listPublics));
      const publicList = p.data.listPublics.items;
      if (publicList && publicList.length !== 0) {
        this.publications = publicList;
        console.log(this.publications);
      }
    }
  }
};
</script>

<style lang="css">
.content-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 18;
}
</style>
