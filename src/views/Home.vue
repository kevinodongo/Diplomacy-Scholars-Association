<template>
  <div class="home">
    <v-toolbar>
      <v-col cols="1"></v-col>
      <h4>Logo</h4>
    </v-toolbar>
    <v-card height="500">
      <h4>This is an home page</h4>
    </v-card>
    <v-card height="500"></v-card>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/parts/Footer";
export default {
  components: { Footer },
  data() {
    return {
      //
    };
  }
};
</script>
