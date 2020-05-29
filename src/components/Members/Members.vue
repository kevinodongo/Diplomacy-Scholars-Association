<template>
  <div class="members">
    <Toolbar />
    <v-container grid-list-xs>
      <v-card-text
        class="mx-auto text-center title mt-5"
        style="text-transform: uppercase"
      >
        members
      </v-card-text>
      <v-row>
        <v-col cols="12" sm="3">
          <v-card width="100%">
            <v-img src="https://i.imgur.com/jlUBrBw.jpg" height="300px"></v-img>
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
            <v-img src="https://i.imgur.com/9crMFz4.jpg" height="300px"></v-img>
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
            <v-img src="https://i.imgur.com/PsXreqA.jpg" height="300px"></v-img>
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
            <v-img src="https://i.imgur.com/PcFTyG3.jpg" height="300px"></v-img>
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
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      //
    };
  }
};
</script>
