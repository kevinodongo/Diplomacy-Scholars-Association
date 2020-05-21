<template>
  <div class="home">
    <Toolbar />
    <v-carousel :show-arrows="false" hide-delimiters cycle height="670">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-sheet min-height="500">
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
                    <div v-text="n.publication"></div>
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
            <v-sheet height="300" width="300" color="grey"></v-sheet>
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
    <v-sheet min-height="500" class="mx-auto">
      <v-container fluid>
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-sheet
              class="mx-2"
              height="500"
              width="400"
              :input-value="active"
              @click="toggle"
              color="grey"
            >
            </v-sheet>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </v-sheet>
    <v-sheet min-height="400" color="indigo" dark>
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
              placeholder="First Name"
            ></v-text-field>
            <v-text-field
              single-line
              outlined
              dense
              name="name"
              placeholder="Email"
            ></v-text-field>
            <v-btn color="grey" dark>subscribe</v-btn>
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
    <v-sheet height="400">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.847588640023!2d36.807210314701344!3d-1.2639196990781183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17a9143913cb%3A0x89539b2856619478!2sGallant%20Mall!5e0!3m2!1sen!2ske!4v1590052216863!5m2!1sen!2ske"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </v-sheet>
    <v-sheet min-height="350" color="secondary" class="pa-3" dark>
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
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/parts/Footer";
import Toolbar from "../components/parts/Toolbar";
export default {
  components: { Toolbar, Footer },
  data() {
    return {
      model: null,
      news: [
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto nihil natus reprehenderit cupiditate culpa! Aliquam quis,",
          publication: 1
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto nihil natus reprehenderit cupiditate culpa! Aliquam quis,",
          publication: 1
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
      ]
    };
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
</style>
