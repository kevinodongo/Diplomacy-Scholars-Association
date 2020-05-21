<template>
  <div class="about-page">
    <Toolbar />
    <v-sheet min-height="635">
      <v-container grid-list-xs>
        <div class="mt-5 about">About</div>
        <div v-for="(item, index) in items" :key="index" class="mb-3">
          <div
            class="red--text body-1 font-weight-bold"
            style="text-transform: uppercase"
            v-text="item.title"
          ></div>
          <div class="mt-1" v-text="item.subject"></div>
        </div>
      </v-container>
    </v-sheet>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/parts/Footer";
import Toolbar from "../components/parts/Toolbar";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      items: [
        {
          title: "Brief History",
          subject:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ex optio eos enim repudiandae, consequatur reprehenderit eaque perferendis consectetur sapiente dolor corrupti aut est quod quis provident ea tempora quidem"
        },
        {
          title: "Establishment of Board",
          subject:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ex optio eos enim repudiandae, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, consequatur reprehenderit eaque perferendis consectetur sapiente dolor corrupti aut est quod quis provident ea tempora quidem"
        },
        {
          title: "Agenda",
          subject:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ex optio eos enim repudiandae, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, consequatur reprehenderit eaque perferendis consectetur sapiente dolor corrupti aut est quod quis provident ea tempora quidem"
        }
      ]
    };
  }
};
</script>
