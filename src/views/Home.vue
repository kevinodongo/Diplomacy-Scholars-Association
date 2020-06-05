<template>
  <div class="home">
    <v-btn
      id="myBtn"
      onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()"
      fab
      dark
      color="red darken-2"
    >
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>
    <Toolbar />
    <v-card tile flat>
      <v-carousel :show-arrows="false" hide-delimiters cycle height="700">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card min-height="650">
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12">
            <v-card min-height="150" flat tile>
              <div class="text-center title-welcome indigo--text mt-10">
                Welcome to Diplomacy Scholars Association of Kenya
              </div>
              <div class="welcome-text">
                DIPSAK was founded in 2019 by a group of scholars based at the
                University of Nairobi. It was registered as an Association in
                September 2019. The Association’s overall objective is to
                provide a platform for research, publishing, scholarly debates
                and interaction with policy makers and the society at large in
                the area of international affairs. By the end of 2019, DIPSAK
                had more than 60 fully registered and paid-up members (Founding
                Members) comprising largely of students and scholars based in
                different universities.
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <div class="indigo--text title-welcome">
              Latest news & Publications
            </div>
            <v-card min-height="400" tile flat>
              <div v-if="loading">
                <v-sheet height="400">
                  <v-container class="fill-height">
                    <v-row justify="start" align="center">
                      <v-sheet height="150" width="150"> </v-sheet>
                    </v-row>
                  </v-container>
                </v-sheet>
              </div>
              <div v-else>
                <v-card-text v-for="(n, index) in news" :key="index">
                  <v-row>
                    <v-col cols="12" md="3" lg="2">
                      <v-row justify="center">
                        <v-sheet
                          height="100"
                          width="100"
                          elevation="1"
                          color="grey"
                          v-if="n.image"
                        >
                          <img :src="n.image" width="100%" height="100" />
                        </v-sheet>
                        <v-sheet
                          height="100"
                          width="100"
                          elevation="1"
                          color="grey"
                          v-if="n.publication"
                        >
                          <img
                            src="https://i.imgur.com/IK8G3cb.jpg"
                            width="100%"
                            height="100"
                          />
                        </v-sheet>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="9" lg="10">
                      <div
                        class="content-text indigo--text"
                        v-text="n.title"
                      ></div>
                      <div class="mt-1 content" v-text="n.content"></div>
                      <div class="text-end">
                        <v-btn
                          to="/publication"
                          class="mt-2 mb-2"
                          color="orange"
                          text
                          tile
                          >read more</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <div class="indigo--text title-welcome">
              News & Events
            </div>
            <v-card min-height="400" width="350" v-if="object" flat tile>
              <div>
                <v-img
                  src="https://i.imgur.com/HDyJSxo.jpg"
                  alt="eventimage"
                  height="400"
                  width="100%"
                ></v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card flat tile>
      <v-row no-gutters>
        <v-col cols="12" md="3">
          <v-card color="indigo" height="60" tile dark flat>
            <v-container class="fill-height" grid-list-xs>
              <v-row justify="center" align="center">
                <div>UPCOMING EVENTS</div>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="9">
          <v-card color="#FFF8E1" height="60" tile dark flat>
            <v-container grid-list-xs class="fill-height">
              <v-row align="center" justify="center">
                <div
                  class="indigo--text"
                  style="font-size: 18px;"
                  transition="dialog-transition"
                >
                  Dipsak Webinar | June 5th 2019 | Nairobi |
                </div>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card min-height="750" tile color="#E0E0E0">
      <v-container fluid>
        <v-card-text class="text-center">
          <div class="font-weight-bold title mt-7 mb-5 indigo--text">
            PAST EVENTS
          </div>
        </v-card-text>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <v-sheet height="550" width="100%" elevation="10" tile>
              <v-img
                src="https://i.imgur.com/soMYtoo.jpg"
                height="550"
                width="100%"
              ></v-img>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="5">
            <v-sheet height="550" width="100%" elevation="10" tile>
              <v-img
                src="https://i.imgur.com/uLotJwu.jpg"
                height="550"
                width="100%"
              ></v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card min-height="350" color="indigo" tile>
      <v-container grid-list-xs>
        <v-row style="margin-top: 6rem;">
          <v-col cols="12" md="8">
            <v-card height="300" color="indigo" flat tile>
              <div class="headline font-weight-regular mb-4 white--text">
                Subscribe To Our Mailing List
              </div>
              <v-text-field
                solo
                dense
                name="name"
                v-model="name"
                placeholder="First Name"
              ></v-text-field>
              <v-text-field
                solo
                dense
                name="name"
                v-model="email"
                placeholder="Email"
              ></v-text-field>
              <v-btn color="grey" dark @click="subscribe">subscribe</v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="300" color="indigo" flat tile dark>
              <v-sheet
                elevation="1"
                width="100%"
                color="#263238"
                class="pa-3 mt-2"
              >
                <v-card-text class="text-center">
                  <div class="headline">Connect with us</div>
                  <div class="ma-2">
                    <v-btn icon>
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                  </div>
                  <div class="font-weight-regular" style="letter-spacing: 2px;">
                    Get the latest updates from Diplomacy Scholars Association
                    of Kenya.
                  </div>
                </v-card-text>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "../components/parts/Toolbar";
import Footer from "../components/parts/Footer";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createSubscriber } from "../graphql/mutations";
import { listEvents, listPublics } from "../graphql/queries";
import Swal from "sweetalert2";
import { uuid } from "vue-uuid";
var _ = require("lodash");
export default {
  components: { Toolbar, Footer },
  data() {
    return {
      model: null,
      news: [], // blogs and publications
      blogs: [],
      object: {}, // events section latest
      elements: [],
      items: [
        {
          src: "https://i.imgur.com/uLotJwu.jpg"
        },
        {
          src: "https://i.imgur.com/UCSrxyO.jpg"
        },

        {
          src: "https://i.imgur.com/VQZn3n0.jpg"
        }
      ], // carousel
      events: [
        { src: "https://i.imgur.com/soMYtoo.jpg" },
        { src: "https://i.imgur.com/uLotJwu.jpg" },
        { src: "https://i.imgur.com/UCSrxyO.jpg" }
      ], // events pictures
      email: "",
      name: "",
      limit: 2,
      loading: false,
      getting: false
    };
  },
  mounted() {
    this.getDetails();
    //Get the button
    var mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  },
  methods: {
    async getDetails() {
      // public
      this.loading = true;
      this.getting = true;
      const p = await API.graphql(graphqlOperation(listPublics));
      const publicList = p.data.listPublics.items;
      if (publicList && publicList.length !== 0) {
        this.blogs = _.orderBy(publicList, "createdAt", "desc");
      }
      // once we have the articles and blogs
      const append = this.blogs.slice(
        this.news.length,
        this.news.length + this.limit
      );
      this.news = this.news.concat(append);
      if (this.news.length !== 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
      // get events
      const event = await API.graphql(graphqlOperation(listEvents));
      const eventsList = event.data.listEvents.items;
      if (eventsList && eventsList.length !== 0) {
        eventsList.forEach(e => {
          Storage.get(e.attachment).then(image => {
            e.attachment = image;
          });
          const arr = this.elements.concat(e);
          this.elements = _.orderBy(_.uniqBy(arr, "id"), "createdAt", "desc");
        });
      }
      if (this.elements.length !== 0) {
        this.object = _.first(this.elements);
        this.getting = false;
      } else {
        this.getting = true;
      }
    },
    async subscribe() {
      const data = {
        id: uuid.v4(),
        name: this.name,
        email: this.email,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createSubscriber, { input: data }));
      (this.name = ""), (this.email = "");
      Swal.fire({
        text: "Thank you for Subscribing",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        footer: "<div>Diplomacy Scholars Association of Kenya &copy; 2020</div>"
      });
    }
  }
};
</script>

<style lang="css">
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
.content-text {
  text-transform: uppercase;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.about {
  font-size: 20px;
  margin-bottom: 2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.about-text {
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title-welcome {
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 0.2rem;
  font-size: 21px;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.welcome {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}
.welcome-text {
  font-size: 18px;
  margin-top: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.6rem;
  text-align: justify;
}
</style>
