<template>
  <div class="Dashboard">
    <v-navigation-drawer height="100%" app>
      <v-sheet>
        <v-row justify="center">
          <v-avatar class="mt-3" color="grey" size="164">
            <v-img src="https://i.imgur.com/IkXxcUO.png"></v-img>
          </v-avatar>
          <v-card-text class="text-center">
            <div style="text-transform: uppercase">John Waweru</div>
            <div class="mt-2">
              <v-btn small outlined color="success">Admin</v-btn>
            </div>
          </v-card-text>
        </v-row>
        <v-divider class="py-3"></v-divider>
        <v-list class="pa-2">
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'Profile' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'ListMembers' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Members
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            active-class="indigo--text"
            :to="{ name: 'Uploads' }"
          >
            <v-list-item-icon>
              <v-icon>mdi-file-upload-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Uploads
            </v-list-item-title>
          </v-list-item>
          <v-list-item link active-class="indigo--text" :to="{ name: 'Blog' }">
            <v-list-item-icon>
              <v-icon>mdi-pencil-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              Blog
            </v-list-item-title>
          </v-list-item>
          <v-list-item link active-class="indigo--text" :to="{ name: 'Todo' }">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="text-transform: uppercase">
              To-do
            </v-list-item-title>
          </v-list-item>
          <v-list-item link active-class="indigo" @click="logOut">
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="red--text"
              style="text-transform: uppercase"
            >
              Log out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>
    <v-toolbar flat>
      <h4 class="indigo--text">DIPLOMACY SCHOLARS ASSOCIATION OF KENYA</h4>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        left
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn small v-on="on" fab elevation="1" class="ml-3">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-sheet width="200" class="pa-2">
          <v-list-item link dense :to="{ name: 'Alerts' }">
            <v-list-item-title>Alerts</v-list-item-title>
          </v-list-item>
          <v-list-item link dense :to="{ name: 'Statements' }">
            <v-list-item-title>Statements</v-list-item-title>
          </v-list-item>
          <v-list-item link dense :to="{ name: 'Certificates' }">
            <v-list-item-title>Certificates</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item dense @click="logOut">
            <v-list-item-title class="red--text">Log out</v-list-item-title>
          </v-list-item>
        </v-sheet>
      </v-menu>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    logOut() {
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>
