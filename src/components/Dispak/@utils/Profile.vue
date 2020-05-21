<template>
  <div class="profile">
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col cols="8">
          <v-sheet elevation="3" class="pa-6">
            <v-toolbar flat>
              <div class="indigo--text">CREATE A NEW MEMBER</div>
              <v-spacer></v-spacer>
              <v-btn text>save</v-btn>
            </v-toolbar>
            <v-row>
              <v-col cols="12" md="4">
                <v-row justify="center">
                  <v-avatar class="mt-3" color="grey" size="164">
                    <v-img src="https://i.imgur.com/IkXxcUO.png"></v-img>
                  </v-avatar>
                </v-row>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="First Name"
                ></v-text-field>
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Other Names"
                ></v-text-field>
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Membership"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Date of Birth"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Address"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Identification"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Nationality"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-toolbar flat>
              <div class="indigo--text">EDUCATION BACKGROUND</div>
              <v-spacer></v-spacer>
              <v-btn text>save</v-btn>
            </v-toolbar>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Qualifications"
                  id="id"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Academic Institution"
                  id="id"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  single-line
                  dense
                  name="name"
                  placeholder="Date completed"
                  id="id"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>
