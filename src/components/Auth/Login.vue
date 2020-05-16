<template>
  <div class="login">
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
                label="Username"
                dense
                single-line
                outlined
              ></v-text-field>
              <div class="caption font-weight-bold">Password</div>
              <v-text-field
                class="mt-2"
                dense
                name="name"
                label="Password"
                single-line
                outlined
              ></v-text-field>
              <v-btn color="primary" block large>login</v-btn>
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
  </div>
</template>
