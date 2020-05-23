<template>
  <div class="toolbar">
    <v-navigation-drawer v-model="drawer" temporary absolute right width="320">
      <v-toolbar flat dense>
        <v-btn @click="drawer = false" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <v-list>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            prepend-icon=""
            :append-icon="item.model ? item.icon : item['icon-alt']"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  style="text-transform: uppercase"
                  class="font-weight-light"
                >
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.to"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="font-weight-light">
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-content>
              <v-list-item-title
                style="text-transform: uppercase"
                class="font-weight-light"
              >
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!--Small Screen-->
    <div class="d-flex d-md-none">
      <v-sheet width="100%">
        <div class="ml-2 mt-2">
          <v-btn elevation="1" color="white" fab small @click="drawer = true">
            <v-icon color="indigo">mdi-view-headline</v-icon>
          </v-btn>
        </div>
        <v-row justify="center">
          <img
            src="https://i.imgur.com/IK8G3cb.jpg"
            alt="logo"
            height="90"
            class="mt-2"
          />
        </v-row>
        <!--X-small Screen Only-->
        <v-row justify="center">
          <div class="d-flex d-sm-none">
            <div
              class="diplomacy-small indigo--text font-weight-black ml-2 mt-2 mb-2"
            >
              DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
            </div>
          </div>
        </v-row>
        <!--/end-->
        <!--X-small Screen Only-->
        <v-row justify="center">
          <div class="d-none d-sm-flex">
            <div
              class="diplomacy-medium indigo--text font-weight-black ml-2 mt-2 mb-2"
            >
              DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
            </div>
          </div>
        </v-row>
        <!--/end-->
      </v-sheet>
    </div>
    <div class="d-flex d-md-none">
      <v-sheet dark color="indigo" tile width="100%" height="40"> </v-sheet>
    </div>
    <!--/end-->
    <!--Large Screen-->
    <v-sheet class="d-none d-md-flex">
      <v-container fluid class="fill-height">
        <v-row justify="center">
          <img
            src="https://i.imgur.com/IK8G3cb.jpg"
            alt="logo"
            height="130"
            class="mt-3"
          />
        </v-row>
        <v-row justify="center">
          <v-card-title
            class="diplomacy font-weight-black indigo--text d-none d-md-flex"
            style="text-transform: uppercase"
            >Diplomacy Scholars Association of Kenya</v-card-title
          >
        </v-row>
      </v-container>
    </v-sheet>
    <v-app-bar color="indigo" dark class="d-none d-md-flex">
      <v-col cols="1"></v-col>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about-dipsak">About us</v-btn>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Members</v-btn>
          </template>
          <v-sheet width="200" dark>
            <v-list-item
              v-for="member in members"
              :key="member.id"
              dense
              active-class="white--text"
              :to="member.to"
            >
              <v-list-item-title v-text="member.title"></v-list-item-title>
            </v-list-item>
          </v-sheet>
        </v-menu>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Publications</v-btn>
          </template>
          <v-sheet width="250" dark>
            <v-list-item
              v-for="publication in publications"
              :key="publication.id"
              dense
              :to="publication.to"
              active-class="white--text"
            >
              <v-list-item-title v-text="publication.title"></v-list-item-title>
            </v-list-item>
          </v-sheet>
        </v-menu>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Media</v-btn>
          </template>
          <v-sheet width="200" dark>
            <v-list-item
              v-for="media in medias"
              :key="media.id"
              dense
              :to="media.to"
              active-class="white--text"
            >
              <v-list-item-title v-text="media.title"></v-list-item-title>
            </v-list-item>
          </v-sheet>
        </v-menu>
        <v-btn text to="/dipsak-contacts">Contact us</v-btn>
        <v-btn text to="/dipsak-member-login">Members Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!--/ end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      showButtons: false,
      publications: [
        {
          title: "Publications",
          to: "publication"
        }
      ],
      members: [
        {
          title: "Search",
          to: "dipsak-members-search"
        },
        {
          title: "Board Members",
          to: "dipsak-members"
        }
      ],
      medias: [
        {
          title: "Upcoming Events",
          to: "upcoming-events"
        },
        {
          title: "News",
          to: "news"
        },
        {
          title: "Gallery",
          to: "gallery"
        }
      ],
      items: [
        { icon: "mdi-contacts", text: "Home", to: "home" },
        { icon: "mdi-history", text: "About us", to: "about-dipsak" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Members",
          model: false,
          children: [
            {
              text: "Search",
              to: "dipsak-members"
            },
            {
              text: "Board Members",
              to: "dipsak-members-search"
            }
          ]
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Publications",
          model: false,
          children: [
            { text: "Africa Research Notes", to: "publication" },
            { text: "API Policy Briefs" },
            { text: "Africa Policy Review" },
            { text: "Books and Monographs" }
          ]
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Media",
          model: false,
          children: [
            {
              text: "Upcoming Events",
              to: "upcoming-events"
            },
            {
              text: "News",
              to: "news"
            },
            {
              text: "Gallery",
              to: "gallery"
            }
          ]
        },
        { icon: "mdi-email", text: "Contacts", to: "dipsak-contacts" },
        {
          icon: "mdi-login-variant",
          text: "Members Login",
          to: "dipsak-member-login"
        },
        { icon: "mdi-login-variant", text: "Donate" }
      ]
    };
  }
};
</script>

<style lang="css">
.diplomacy {
  font-size: 40px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.diplomacy-small {
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.diplomacy-medium {
  font-size: 23px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
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
