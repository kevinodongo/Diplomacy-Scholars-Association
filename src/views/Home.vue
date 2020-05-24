<template>
  <div class="home">
    <div class="icon-bar">
      <v-btn tile color="#3B5998" dark><v-icon>mdi-facebook</v-icon></v-btn>
      <div class="mt-1">
        <v-btn dark color="#55ACEE" tile><v-icon>mdi-twitter</v-icon></v-btn>
      </div>
    </div>
    <Toolbar />
    <v-sheet tile>
      <v-carousel :show-arrows="false" hide-delimiters cycle height="600">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-sheet>
    <v-sheet min-height="500" tile>
      <v-container grid-list-xs>
        <div
          class="text-center headline indigo--text font-weight-regular mt-10"
          style="text-transform: uppercase"
        >
          Welcome to Diplomacy Scholars Association of Kenya
        </div>
        <div class="welcome-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
          adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto
          nihil natus reprehenderit cupiditate culpa! Aliquam quis,
          exercitationem error distinctio doloremque ut! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sit fugiat adipisci dolores
          voluptates reprehenderit. Labore fugit ullam iusto nihil natus
          reprehenderit cupiditate culpa! Aliquam quis, exercitationem error
          distinctio doloremque
        </div>
        <v-row>
          <v-col cols="12" md="8">
            <v-card-title
              primary-title
              style="text-transform: uppercase"
              class="font-weight-regular indigo--text"
            >
              Latest news & Publications
            </v-card-title>
            <v-sheet v-for="(n, index) in news" :key="index">
              <v-row no-gutters>
                <v-col cols="12" md="2">
                  <v-sheet height="100" width="100" elevation="1" color="grey">
                    <img :src="n.src" width="100%" height="100%" />
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="10">
                  <div
                    style="text-transform: uppercase"
                    class="title font-weight-regular indigo--text"
                    v-text="n.title"
                  ></div>
                  <div class="mt-1" v-text="n.text"></div>
                  <v-btn class="mt-2 mb-2" color="success" small tile
                    ><span class="font-weight-light">read more</span></v-btn
                  >
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-card-title
              primary-title
              style="text-transform: uppercase"
              class="font-weight-light indigo--text"
            >
              News & Events
            </v-card-title>
            <v-sheet height="300" width="300">
              <v-img src="https://i.imgur.com/4sxbhDN.jpg" width="300">
                <v-container class="fill-height">
                  <v-row justify="center" align="center">
                    <v-btn color="success" dark>Read more</v-btn>
                  </v-row>
                </v-container>
              </v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-row no-gutters>
        <v-col cols="12" md="3">
          <v-sheet color="indigo" height="80" tile>
            <v-container class="fill-height" grid-list-xs>
              <v-row justify="center" align="center">
                <div class="event">Upcoming Event</div>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="9">
          <v-sheet color="grey" height="80" tile></v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet min-height="500" class="mx-auto" tile>
      <v-container fluid>
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="n in events"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-sheet
              class="mx-2"
              height="500"
              width="550"
              :input-value="active"
              @click="toggle"
            >
              <img :src="n.src" width="550" height="500" />
            </v-sheet>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </v-sheet>
    <v-sheet min-height="400" color="indigo" dark tile>
      <v-container grid-list-xs>
        <v-row class="mt-10">
          <v-col cols="12" md="8">
            <div class="title font-weight-regular mb-3">
              Subscribe to our mailing list
            </div>
            <v-text-field
              single-line
              outlined
              dense=""
              name="name"
              v-model="name"
              placeholder="First Name"
            ></v-text-field>
            <v-text-field
              single-line
              outlined
              dense
              name="name"
              v-model="email"
              placeholder="Email"
            ></v-text-field>
            <v-btn color="grey" dark @click="subscribe">subscribe</v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet elevation="2" width="100%" color="#37474F" class="pa-3">
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
                <div class="font-weight-light">
                  Get the latest updates from Africa Policy Institute and our
                  staff around the web.
                </div>
              </v-card-text>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet min-height="350" color="secondary" class="pa-3" dark tile>
      <v-container class="fill-height" grid-list-xs>
        <v-row class="mt-10">
          <v-col cols="12" md="6">
            <div class="about">Get connected with us</div>
            <div class="mb-1">
              <v-icon class="mr-1">mdi-map-marker</v-icon>
              ADDRESS: Diplomacy Scholars Association of Kenya
            </div>
            <div class="mb-1">
              <v-icon class="mr-1">mdi-phone</v-icon>
              PHONE: (+254) 020 2728 444, 0726 243 005, 0780 496 588
            </div>
            <div class="mb-1">
              <v-icon class="mr-1">mdi-email</v-icon>
              EMAIL: nfo@dipsak.org
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="about">About Us</div>
            <div class="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              veniam quasi nihil soluta maiores quis beatae! Minus quidem
              excepturi officia, impedit repudiandae dolorum natus? Nemo
              consectetur dignissimos quos? Esse, modi.
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="indigo" class="mt-5" dark>
                <span
                  class="font-weight-regular"
                  style="text-transform: capitalize"
                  >read more about us</span
                >
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-container grid-list-xs>
          <div class="white--text text-end caption">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Diplomacy Scholars Association of Kenya</strong>
          </div>
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Toolbar from "../components/parts/Toolbar";
import { API, graphqlOperation } from "aws-amplify";
import { createSubscriber } from "../graphql/mutations";
import { listAttachments, listBlogs } from "../graphql/queries";
import Swal from "sweetalert2";
import { uuid } from "vue-uuid";
export default {
  components: { Toolbar },
  data() {
    return {
      model: null,
      news: [
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto nihil natus reprehenderit cupiditate culpa! Aliquam quis,",
          src: "https://i.imgur.com/ii8HeF2.jpg"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto nihil natus reprehenderit cupiditate culpa! Aliquam quis,",
          src: "https://i.imgur.com/ii8HeF2.jpg"
        }
      ],
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
      ],
      events: [
        { src: "https://i.imgur.com/7OrdCoj.jpg" },
        { src: "https://i.imgur.com/OEvy19U.jpg" },
        { src: "https://i.imgur.com/1xZBiR0.jpg" },
        { src: "https://i.imgur.com/Xb2ngez.jpg" },
        { src: "https://i.imgur.com/MgLkT47.jpg" }
      ],
      email: "",
      name: ""
    };
  },
  methods: {
    async getDetails() {
      // get attachments
      const attach = await API.graphql(graphqlOperation(listAttachments));
      const attachList = attach.data.listAttachments.items;
      if (attachList && attachList.length !== 0) {
        this.attachments = attachList;
      }
      // get blogs
      const blog = await API.graphql(graphqlOperation(listBlogs));
      const blogList = blog.data.listBlogs.items;
      if (blogList && blogList.length !== 0) {
        this.blog = blogList;
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
.welcome {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}
.welcome-text {
  font-size: 16px;
  margin-top: 25px;
  font-weight: 300;
  line-height: 1.6rem;
  text-align: justify;
}
.event {
  font-size: 30px;
  font-weight: 300;
  margin-left: 10px;
  color: white;
  text-transform: uppercase;
}
.about {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
.about-text {
  font-size: 16px;
  font-weight: 200;
}
.icon-bar {
  position: fixed;
  top: 10%;
  right: 2px;
  z-index: 99;
}
</style>
