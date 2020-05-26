<template>
  <div class="login">
    <Toolbar />
    <v-card flat height="500">
      <v-container class="fill-height" grid-list-xs>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6" md="5">
            <v-card class="mt-5" elevation="1">
              <v-card-text class="pa-10">
                <div class="title mb-4">Members Login</div>
                <v-alert outlined color="error" v-if="error" dense text
                  ><div>{{ error }}</div></v-alert
                >
                <div class="caption font-weight-bold">Username</div>
                <v-text-field
                  class="mt-2"
                  name="name"
                  placeholder="Username"
                  dense
                  single-line
                  outlined
                  v-model="username"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <div class="caption font-weight-bold">Password</div>
                <v-text-field
                  class="mt-2"
                  dense
                  name="password"
                  placeholder="Password"
                  single-line
                  outlined
                  v-model="password"
                  :rules="passwordRules"
                  required
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                ></v-text-field>
                <v-btn
                  color="primary"
                  block
                  large
                  @click="logIn"
                  :loading="loading"
                  >login
                  <template v-slot:loader>
                    <span>Confirming your details ....</span>
                  </template></v-btn
                >
                <div class="text-end mt-3">
                  <v-btn text>
                    <span style="text-transform: capitalize"
                      >Forgot Password ?</span
                    >
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "../parts/Toolbar";
import Footer from "../parts/Footer";
import { Auth } from "aws-amplify";
export default {
  components: { Toolbar, Footer },
  data() {
    return {
      loader: null,
      username: "",
      nameRules: [v => !!v || "Name is required"],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      loading: false,
      error: null,
      show: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  methods: {
    async logIn() {
      this.loading = true;
      const { username, password } = this;
      await Auth.signIn(username, password)
        .then(user => {
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
        })
        .catch(error => {
          this.error = error.message;
          this.loading = false;
        });
    }
  }
};
</script>
