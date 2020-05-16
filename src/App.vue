<template>
  <v-app>
    <Toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/parts/Footer";
import Toolbar from "./components/parts/Toolbar";
export default {
  name: "App",
  components: { Footer, Toolbar },
  data: () => ({
    //
  })
};
</script>
