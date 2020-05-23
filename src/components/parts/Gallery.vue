<template>
  <div class="gallery">
    <Toolbar />
    <v-container grid-list-xs>
      <v-sheet height="100" tile class="mt-10">
        <v-div class="display-1 indigo--text font-weight-light">
          Gallery
        </v-div>
      </v-sheet>
      <v-sheet min-height="650">
        <v-row>
          <v-sheet
            class="ma-1"
            height="400"
            width="300"
            v-for="item in items"
            :key="item.id"
          >
            <v-img :src="item.src" width="100%"></v-img>
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
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      items: [
        { src: "https://i.imgur.com/VQZn3n0.jpg" },
        { src: "https://i.imgur.com/uLotJwu.jpg" },
        { src: "https://i.imgur.com/VQZn3n0.jpg" }
      ]
    };
  }
};
</script>
