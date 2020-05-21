<template>
  <div class="login">
    <Toolbar />
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-row>
      <v-col cols="12" md="4"></v-col>
      <v-col cols="12" md="4">
        <v-container grid-list-xs>
          <v-card class="mt-5" elevation="5">
            <v-card-text class="pa-10">
              <div class="title mb-4">Members Login</div>
              <div class="caption font-weight-bold">Username</div>
              <v-text-field
                class="mt-2"
                name="name"
                placeholder="Username"
                dense
                single-line
                outlined
                v-model="username"
              ></v-text-field>
              <div class="caption font-weight-bold">Password</div>
              <v-text-field
                class="mt-2"
                dense
                name="password"
                placeholder="Password"
                single-line
                outlined
                type="password"
                v-model="password"
              ></v-text-field>
              <v-btn color="primary" block large @click="logIn">login</v-btn>
              <div class="text-end mt-3">
                <v-btn text>
                  <span style="text-transform: capitalize"
                    >Forgot Password ?</span
                  >
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
      <v-col cols="12" md="4"></v-col>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
import { Auth } from "aws-amplify";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async logIn() {
      this.loading = true;
      const { username, password } = this;
      await Auth.signIn(username, password).then(user => {
        /* login logic checking on idToken */
        if (
          user.signInUserSession.idToken.payload["custom:roles"] === "member"
        ) {
          this.$router.push({
            name: "Statements"
          });
        } else {
          this.$router.push({
            name: "Profile"
          });
        }
      });
      this.loading = false;
    }
  }
};
</script>
