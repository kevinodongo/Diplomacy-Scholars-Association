<template>
  <div class="home">
    <v-card>
      <v-carousel :show-arrows="false" hide-delimiters cycle height="670">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <Welcome />
      <v-sheet>
        <v-row no-gutters>
          <v-col cols="12" md="3">
            <v-sheet color="rgb(10, 10, 226)" height="80">
              <v-container class="fill-height" grid-list-xs>
                <v-row justify="center" align="center">
                  <div class="event">Upcoming Event</div>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="9">
            <v-sheet color="#FFECB3" height="80"></v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet>
        <v-container grid-list-xs>
          <v-card-text
            class="mx-auto text-center title mt-5"
            style="text-transform: uppercase"
          >
            Board of Directors
          </v-card-text>
          <v-row>
            <v-col cols="12" sm="3">
              <v-card width="100%">
                <v-img
                  src="https://i.imgur.com/PcFTyG3.jpg"
                  height="350px"
                ></v-img>
                <v-card-text>
                  <div class="title black--text">Andy Waweru</div>
                  <div class="title black--text">Chairman</div>
                  <div class="caption mt-3 black--text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet exercitationem aut alias temporibus corrupti quas
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card width="100%">
                <v-img
                  src="https://i.imgur.com/PsXreqA.jpg"
                  height="350px"
                ></v-img>
                <v-card-text>
                  <div class="title black--text">Wendy Achieng</div>
                  <div class="title black--text">Management</div>
                  <div class="caption mt-3 black--text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet exercitationem aut alias temporibus corrupti quas
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card width="100%">
                <v-img
                  src="https://i.imgur.com/9crMFz4.jpg"
                  height="350px"
                ></v-img>
                <v-card-text>
                  <div class="title black--text">Sarah Mutua</div>
                  <div class="title black--text">Human Resource</div>
                  <div class="caption mt-3 black--text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet exercitationem aut alias temporibus corrupti quas
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card width="100%">
                <v-img
                  src="https://i.imgur.com/jlUBrBw.jpg"
                  height="350px"
                ></v-img>
                <v-card-text>
                  <div class="title black--text">Greg Saleh</div>
                  <div class="title black--text">Head of Finance</div>
                  <div class="caption mt-3 black--text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet exercitationem aut alias temporibus corrupti quas
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-card-text class="text-center">
            <v-btn color="primary" :to="{ name: 'Members' }">
              <span style="text-transform: capitalize"
                >view all board members</span
              >
            </v-btn>
          </v-card-text>
        </v-container>
      </v-sheet>
      <v-sheet min-height="350" color="#FFECB3" class="pa-3">
        <v-container class="fill-height" grid-list-xs>
          <v-row class="mt-10">
            <v-col cols="12" md="6">
              <div class="about">Get connected with us</div>
              <div>
                <v-icon>mdi-map-marker</v-icon>
                Address: Board of Registration of Architects and Quantity
                Surveyors of Kenya (BORAQS).
              </div>
              <div>
                <v-icon>mdi-phone-message</v-icon>
                Phone: (+254) 020 2728 444, 0726 243 005, 0780 496 588</div>
              <div>
                <v-icon>mdi-email</v-icon>
                Email: nfo@boraqs.or.ke</div>
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
                <v-btn color="primary" class="mt-5">
                  <span style="text-transform: capitalize"
                    >read more about us</span
                  >
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import Welcome from "../components/parts/@utils/Welcome";
export default {
  components: { Welcome },
  data() {
    return {
      items: [
        {
          src: "https://i.imgur.com/UCSrxyO.jpg"
        },
        {
          src: "https://i.imgur.com/uLotJwu.jpg"
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
}
</style>
