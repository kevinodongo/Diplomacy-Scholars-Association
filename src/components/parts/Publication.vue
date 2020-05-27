<template>
  <div class="events">
    <Toolbar />
    <v-sheet height="100" color="#FFF8E1" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div style="font-size: 30px;" class="indigo--text font-weight-light">
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
        <v-card-text class="mt-3">
          <div style="font-size: 18px;" class="mb-1 black--text">
            {{ object.member }}
          </div>
          <div>PUBLISHED: {{ object.updatedAt }}</div>
          <div class="display-1 mt-2 mb-1 font-weight-black">
            {{ object.title }}
          </div>
          <v-divider class="my-5"></v-divider>
          <img
            v-if="object.image"
            :src="object.image"
            height="500"
            width="100%"
          />
          <div class="title mt-1 black--text">{{ object.subject }}</div>
          <div class="mt-4">
            <blockquote class="read-text">{{ object.content }}</blockquote>
          </div>
          <div v-if="object.publication" class="mt-3">
            <v-btn :href="object.publication" color="indigo" dark target="blank"
              >Download Publication</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
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
                <v-btn
                  color="orange"
                  text
                  @click="(dialog = true), (object = publication)"
                  >read more</v-btn
                >
              </v-card-actions>
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
import { API, graphqlOperation } from "aws-amplify";
import { listPublics } from "../../graphql/queries";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      publications: [],
      dialog: false,
      loading: false,
      object: {}
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      // public
      this.loading = true;
      const p = await API.graphql(graphqlOperation(listPublics));
      const publicList = p.data.listPublics.items;
      if (publicList && publicList.length !== 0) {
        this.publications = publicList;
      }
      if (this.publications.length !== 0) {
        this.loading = false;
      } else {
        this.loading = true;
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
.read-text {
  color: black;
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1.5px;
  line-height: 1.8rem;
}
</style>
