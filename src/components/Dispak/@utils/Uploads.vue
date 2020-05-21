<template>
  <div class="uploads">
    <v-container grid-list-xs>
      <v-alert color="indigo" outlined class="mt-2">
        <div>What do you want to upload ?</div>
        <div>
          Once you have uploaded you will have to wait for Admin to approve
          before it can be veiwed with others
        </div>
      </v-alert>
      <v-row justify="center">
        <v-btn text @click="(files = false), (certificates = true)"
          ><span class="font-weight-regular">Certificates</span></v-btn
        >
        <v-btn text @click="(certificates = false), (files = true)"
          ><span class="font-weight-regular">Publications</span></v-btn
        >
        <v-btn text @click="(certificates = false), (files = true)"
          ><span class="font-weight-regular">Files</span></v-btn
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-card-text>
            <v-sheet v-if="files">
              <v-text-field
                single-line
                outlined
                dense
                name="name"
                placeholder="Title"
              ></v-text-field>
              <v-text-field
                single-line
                outlined
                dense
                name="name"
                placeholder="Subject"
              ></v-text-field>
              <v-textarea
                single-line
                outlined
                dense
                name="input-7-4"
                placeholder="Any comment you want to add"
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
            </v-sheet>
            <v-sheet v-if="certificates">
              <v-text-field
                single-line
                outlined
                name="member"
                placeholder="Choose a Member"
              ></v-text-field>
              <v-sheet height="250" elevation="4" tile>
                <v-sheet height="220">
                  <v-container class="fill-height">
                    <v-row align="center" justify="center">
                      <div id="input-file">
                        <input type="file" />
                      </div>
                    </v-row>
                  </v-container>
                </v-sheet>
                <v-footer color="white">
                  <div class="caption indigo--text">
                    DIPLOMACY SCHOLARS ASSOCIATION OF KENYA
                  </div>
                </v-footer>
              </v-sheet>
            </v-sheet>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificates: null,
      publications: null,
      files: null
    };
  }
};
</script>

<style lang="css">
#input-file {
  border: black;
  border-style: dotted;
  padding: 25px;
}
</style>
