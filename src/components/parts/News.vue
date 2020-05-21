<template>
  <div class="news">
    <Toolbar />
    <v-container grid-list-xs>
      <v-sheet min-height="650">
        <v-sheet height="300" width="300" color="grey"> </v-sheet>
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
