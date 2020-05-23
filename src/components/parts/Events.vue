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
export default {
  components: { Footer, Toolbar }
};
</script>
