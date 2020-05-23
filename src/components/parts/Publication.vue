<template>
  <div class="events">
    <Toolbar />
    <v-container grid-list-xs>
      <v-sheet min-height="650">
        <v-sheet height="100" tile class="mt-10">
          <v-div class="display-1 indigo--text font-weight-light">
            Publications
          </v-div>
        </v-sheet>
        <v-sheet height="350" width="350">
          <v-img src="https://i.imgur.com/ii8HeF2.jpg" width="100%"></v-img>
          <v-row justify="center" class="mt-3">
            <v-btn color="success">read more</v-btn>
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
