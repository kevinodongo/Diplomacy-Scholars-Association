<template>
  <div class="welcome">
    <v-sheet>
      <v-container grid-list-xs>
        <v-card-text>
          <div class="text-center display-1">
            Welcome to Diplomacy Scholars Association of Kenya
          </div>
          <div class="text-center">
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="2"
                ><v-divider class="mt-5" style="border-color: red"></v-divider
              ></v-col>
              <v-col cols="5"></v-col>
            </v-row>
          </div>
          <div class="welcome-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            adipisci dolores voluptates reprehenderit. Labore fugit ullam iusto
            nihil natus reprehenderit cupiditate culpa! Aliquam quis,
            exercitationem error distinctio doloremque ut! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit fugiat adipisci dolores
            voluptates reprehenderit. Labore fugit ullam iusto nihil natus
            reprehenderit cupiditate culpa! Aliquam quis, exercitationem error
            distinctio doloremque
          </div>
        </v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-card width="100%" flat>
              <v-card-text class="text-center">
                <div class="welcome-title">Agenda</div>
              </v-card-text>
              <v-card-text>
                <v-list two-line dense>
                  <v-list-item-group>
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.id">
                        <v-list-item-content>
                          <v-list-item-title
                            class="news"
                            v-text="item.headline"
                          >
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="news"
                            v-text="item.content"
                          >
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider
                        v-if="index + 1 < items.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card width="100%" flat>
              <v-card-text class="text-center">
                <div class="welcome-title">
                  Latest News
                </div>
              </v-card-text>
              <v-card-text>
                <v-list two-line dense>
                  <v-list-item-group>
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.id">
                        <v-list-item-content>
                          <v-list-item-title
                            class="news"
                            v-text="item.headline"
                          >
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="news"
                            v-text="item.content"
                          >
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider
                        v-if="index + 1 < items.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card width="100%" flat>
              <v-card-text class="text-center">
                <div class="welcome-title">
                  Making Contributions
                </div>
              </v-card-text>
              <v-list two-line dense>
                <v-list-item-group>
                  <template v-for="(item, index) in items">
                    <v-list-item :key="item.id">
                      <v-list-item-content>
                        <v-list-item-title class="news" v-text="item.headline">
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="news"
                          v-text="item.content"
                        >
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider
                      v-if="index + 1 < items.length"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
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
      items: [
        {
          headline: "Lorem ipsum dolor sit amet consectetur amet to sit",
          content: "Lorem ipsum dolor sit amet consectetur amet to sit"
        },
        {
          headline: "Lorem ipsum dolor sit amet consectetur amet to sit",
          content: "Lorem ipsum dolor sit amet consectetur amet to sit"
        },
        {
          headline: "Lorem ipsum dolor sit amet consectetur amet to sit",
          content: "Lorem ipsum dolor sit amet consectetur amet to sit"
        },
        {
          headline: "Lorem ipsum dolor sit amet consectetur amet to sit",
          content: "Lorem ipsum dolor sit amet consectetur amet to sit"
        },
        {
          headline: "Lorem ipsum dolor sit amet consectetur amet to sit",
          content: "Lorem ipsum dolor sit amet consectetur amet to sit"
        }
      ],
      instructions: [
        {
          text: "Go to M-Pesa Menu"
        },
        {
          text: "Select  Pay Bill"
        },
        {
          text: "Enter Business Number"
        },
        {
          text: "Enter Amount"
        },
        {
          text: "Enter your M-Pesa PIN and press OK"
        }
      ]
    };
  }
};
</script>

<style lang="css">
.news {
  color: rgb(10, 10, 226);
}
</style>
