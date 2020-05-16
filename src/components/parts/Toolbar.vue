<template>
  <div class="toolbar">
    <v-sheet>
      <v-container class="fill-height" grid-list-xs>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex d-sm-none">
            <div>
              <v-btn icon @click="showButtons = true">
                <v-icon color="primary">mdi-view-grid</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <img
                src="https://i.imgur.com/IK8G3cb.jpg"
                alt="logo"
                height="120"
              />
            </v-row>
          </v-col>
          <v-col cols="12" class="d-flex d-sm-none">
            <v-card-text class="text-center">
              <div class="association">
                Diplomacy Scholars Association of Kenya
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="12" class="d-none d-sm-flex">
            <v-row align="center" justify="center">
              <div class="association mt-3">
                Diplomacy Scholars Association of Kenya
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="rgb(10, 10, 226)" class="d-flex d-sm-none" tile>
      <v-card-text>
        <div class="contact">
          <v-icon small dark>mdi-phone</v-icon>(+254) 20 2728 444 / 726 243 005
          / 780 496 588
        </div>
        <div class="contact">
          <v-icon small dark>mdi-share</v-icon>info@boraqs.or.ke
        </div>
      </v-card-text>
    </v-sheet>
    <v-sheet
      tile
      class="d-flex d-sm-none"
      v-if="showButtons"
      color="rgb(10, 10, 226)"
    >
      <v-container fluid>
        <v-row>
          <v-btn
            dark
            text
            :to="{ name: 'Home' }"
            class="ml-2"
            active-class="black"
            >Home</v-btn
          >
          <v-btn
            dark
            text
            :to="{ name: 'About' }"
            class="ml-2"
            active-class="black"
            >About us</v-btn
          >
          <v-btn dark text :to="{ name: 'Members' }" active-class="black"
            >Members</v-btn
          >
          <v-btn dark text :to="{ name: 'Contacts' }" active-class="black"
            >Contacts</v-btn
          >
          <v-btn dark text :to="{ name: 'Login' }" active-class="black"
            >Members Login</v-btn
          >
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="rgb(10, 10, 226)" class="d-none d-sm-flex">
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12" md="10" lg="9">
            <v-btn
              text
              class="mr-1"
              :to="{ name: 'Home' }"
              dark
              active-class="black"
              >Home</v-btn
            >
            <v-btn
              text
              class="mr-1"
              :to="{ name: 'About' }"
              dark
              active-class="black"
              >About us</v-btn
            >
            <v-btn
              text
              class="mr-1"
              :to="{ name: 'Members' }"
              dark
              active-class="black"
              >Members</v-btn
            >
            <v-btn
              text
              class="mr-1"
              :to="{ name: 'Contacts' }"
              dark
              active-class="black"
              >Contacts</v-btn
            >
            <v-btn
              text
              class="mr-1"
              :to="{ name: 'Login' }"
              dark
              active-class="black"
              >Members Login</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" lg="3">
            <div>
              <div class="contact">
                <v-icon small dark>mdi-phone</v-icon>(+254) 20 2728 444 / 726
                243 005
              </div>
              <div class="contact">
                <v-icon small dark>mdi-share</v-icon>info@boraqs.or.ke
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButtons: false
    };
  }
};
</script>

<style lang="css">
.association {
  font-size: 30px;
  text-transform: uppercase;
  color: rgb(10, 10, 226);
  font-weight: bold;
  line-height: 30px;
}
.btn {
  color: rgb(10, 10, 226);
}
.contact {
  font-size: 12px;
  color: white;
}
</style>
