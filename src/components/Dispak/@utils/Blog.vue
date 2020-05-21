<template>
  <div class="blog">
    <v-container grid-list-xs>
      <v-toolbar flat>
        <v-toolbar-title primary-title class="font-weight-light">
          BLOG
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>preview</v-btn>
      </v-toolbar>
      <v-alert color="indigo" outlined>
        <div>Blog</div>
        <div>
          Write articles once you've saved you will have to wait for the Admin
          to approve before its available for public viewing
        </div>
      </v-alert>
      <v-sheet>
        <v-row>
          <v-col>
            <v-text-field
              outlined
              single-line
              dense
              name="title"
              label="Title"
            ></v-text-field>
            <v-text-field
              outlined
              single-line
              dense
              name="subject"
              label="Subject"
            ></v-text-field>
            <v-textarea
              single-line
              outlined
              dense
              rows="10"
              name="input-7-4"
              placeholder="Write your article"
            ></v-textarea>
            <v-sheet height="200" elevation="4" tile>
              <v-sheet height="170">
                <v-container class="fill-height">
                  <v-row align="center" justify="center">
                    <div id="input-file">
                      <input type="file" />
                    </div>
                  </v-row>
                </v-container>
                <v-footer color="white">
                  <div class="caption indigo--text">
                    DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
                  </div>
                </v-footer>
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>
