<template>
  <div class="about">
    <Toolbar />
    <v-sheet height="100" color="#EEEEEE" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div
            style="font-size: 26px;"
            class="indigo--text font-weight-light ml-4"
          >
            About
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-card min-height="800">
      <v-container grid-list-xs>
        <v-sheet
          elevation="1"
          class="mt-10 mb-10 about-content"
          color="#FFF8E1"
        >
          <v-card-text class="pa-6">
            <div class="red--text mb-3" style="font-size: 18px;">ABOUT US</div>
            <div class="black--text mb-3 ab-text">
              DIPSAK was founded in 2019 by a group of scholars based at the
              University of Nairobi. It was registered as an Association in
              September 2019. The Association’s overall objective is to provide
              a platform for research, publishing, scholarly debates and
              interaction with policy makers and the society at large in the
              area of international affairs. By the end of 2019, DIPSAK had more
              than 60 fully registered and paid-up members (Founding Members)
              comprising largely of students and scholars based in different
              universities.
            </div>
            <div class="red--text mb-3" style="font-size: 18px;">VISION</div>
            <div class="black--text mb-3 ab-text">
              A society of scholars that are well informed on matters of
              international affairs and are effectively guiding policy makers
              and society at large
            </div>
            <div class="red--text mb-3" style="font-size: 18px;">MISSION</div>
            <div class="black--text mb-3 ab-text">
              To sustain knowledge creation and application in all aspects of
              international affairs domestically, regionally and internationally
            </div>
            <div class="red--text mb-3" style="font-size: 18px;">
              OVERALL OBJECTIVE
            </div>
            <div class="black--text mb-3 ab-text">
              DIPSAK’s overall objective is to provide a platform for research,
              publishing, scholarly debates and interaction with policy makers
              and the society at large in the area of international affairs
            </div>
            <div class="red--text mb-3" style="font-size: 18px;">
              SPECIFIC OBJECTIVES
            </div>
            <div v-for="item in items" :key="item.id">
              <div class="black--text ab-text">
                <v-icon>mdi-square-medium</v-icon>{{ item }}
              </div>
            </div>
            <div class="red--text mb-3 mt-3" style="font-size: 18px;">
              VALUES
            </div>
            <div v-for="element in elements" :key="element.id">
              <div class="black--text ab-text">
                <v-icon>mdi-square-medium</v-icon>{{ element }}
              </div>
            </div>
          </v-card-text>
        </v-sheet>
      </v-container>
    </v-card>
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
        "Promote research and publishing in all matters regarding international affairs",
        "Engage in policy debates regarding all aspects of international affairs",
        "Discourse with other publics on issues that are of relevance to Kenya’s external affairs",
        "Develop and sustain the institutional capacity required to fulfil the vision of DIPSAK"
      ],
      elements: [
        "Uphold the highest standards of integrity and honesty",
        "Promote dialogue, tolerance, negotiation and compromise",
        "Respect creativity and innovation",
        "Apply the principles of equity and equality in all its interactions"
      ]
    };
  }
};
</script>

<style lang="css">
.about-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
}
.ab-text {
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5rem;
}
</style>
