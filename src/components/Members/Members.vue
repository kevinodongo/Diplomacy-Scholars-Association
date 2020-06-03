<template>
  <div class="members">
    <Toolbar />
    <v-sheet height="100" color="#EEEEEE" tile>
      <v-container class="fill-height">
        <v-row align="center">
          <div style="font-size: 26px;" class="indigo--text font-weight-light">
            Members
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container grid-list-xs>
      <v-sheet class="member-section">
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/jpaQAry.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Esther Kibe
                </div>
                <div class="hideKibe">
                  Esther Kibe has been a faculty member at Daystar University
                  with over 5 years of experience as a lecturer in international
                  relations and International Peace and Conflict Management. She
                  graduated with a BA in Development study in Daystar
                  University, MA in International Conflict Management at the
                  University of Nairobi in and currently pursuing a PHD in
                  International Studies. She is presently combining her
                  practical experience by being a lecturer and mentoring the
                  young people towards excellence in the area of International
                  Relations, Peace and Conflict Management. In line with her
                  academic career she also serves as a member of board of
                  Management (BOM) in charge of Academics in Makuyu Boys
                  Secondary school, her role being to give guidance on academic
                  excellence. In line with her passion on peace building and
                  governance, she presented a paper in International
                  Communication Association (ICA) Africa Regional Conference on
                  Peace Education for social transformation in post conflict
                  societies: A case of Kenya’s Post-Election Violence. In
                  addition, she presented a paper in the 3rd Biennial
                  International conference (African Studies Association of
                  Africa) in the Area of Africa Marginality in International
                  Relations and opportunities for agency. She has as well
                  published on the area of politics of resource governance.
                  Finally, she is committed to nurture and pass on a legacy of
                  excellence to the coming generation through training, research
                  and mentorship. She believes that it is the responsibility of
                  this generation to leave a better world for the coming
                  generation.
                </div>
                <div class="mt-2">
                  <button @click="showKibe" v-if="kibe">
                    <span class="indigo--text">Read more</span>
                  </button>
                  <button @click="hideKibe" v-else>
                    <span class="indigo--text">Show Less</span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/VIf69BU.png"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Mr. Meda Benard Othero
                </div>
                <div class="hideMeda">
                  Mr. Meda Benard Othero is a governance expert who draws his
                  experience from continental organizations such as the African
                  Union, particularly from the African Peer Review Mechanism, an
                  agency of the African Union. He is currently pursing a Doctor
                  of Philosophy in International Studies at the Institute of
                  Diplomacy and International Studies, University of Nairobi. He
                  is an adjunct lecturer at The Catholic University of East
                  African taking students through International Relations
                  disciplines. Besides being an Executive Director of Diplomacy
                  Scholars Association of Kenya, he also doubles up as the
                  Executive Director of Citizen Advancement Initiative a
                  non-governmental organization that he founded to steer citizen
                  engagement with the government through public diplomacy. Meda
                  is characterized by extensive skills and competencies in
                  strategic frameworks of management, visionary leadership,
                  strategy formulation and implementation. thus, his appointment
                  as the Executive Director of Diplomacy Scholars Association of
                  Kenya.
                </div>
                <div class="mt-2">
                  <button @click="showMeda" v-if="meda">
                    <span class="indigo--text">Read more</span>
                  </button>
                  <button @click="hideMeda" v-else>
                    <span class="indigo--text">Show Less</span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/xv1EwYm.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Jacklyne Aput
                </div>
                <div class="aput">
                  Jacklyne Aput is an administrator and a scholar on
                  international affairs and diplomacy with a focus on practical
                  guidance of policy-making processes through research,
                  publications, scholarly debates, and networked interactions.
                  Her areas of research interest are diplomacy, international
                  economic relations, leadership strategies, and African Agency
                  in IR. She prefers dialogues and round-table-benefit-driven
                  initiatives.
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/5BWwbd5.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Nyongesa Lemmy
                </div>
                <div class="hideLemmy">
                  Nyongesa Lemmy is the Executive Director Center for
                  China-Africa Studies at the Africa Policy Institute (API) in
                  charge of policy analysis and overseeing research output in
                  issues related to China-Africa relations. As part of the
                  research team at the Horn Center of API he undertakes research
                  and policy analysis on Kenya-Sudan relations as far as
                  conflict and security issues are concerned. He is an associate
                  editor of the Africa Journal of International Studies and a
                  practicing architect. His areas of interest are China-Africa
                  Relations, Japan-Africa Relations, Security and Conflict
                  Studies in the Horn of Africa, and Organized Transnational
                  Crime, particularly Illicit Drug Trade, Human Trafficking,
                  Arms Trade, and Smuggling. He is currently pursuing a
                  doctorate in International Studies at the Institute of
                  Diplomacy and International Studies, University of Nairobi.
                </div>
                <div class="mt-2">
                  <button @click="showLemmy" v-if="lemmy">
                    <span class="indigo--text">Read more</span>
                  </button>
                  <button @click="hideLemmy" v-else>
                    <span class="indigo--text">Show Less</span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/rig2S8g.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Dr. Patrick Muthengi Maluki
                </div>
                <div class="hideMaluki">
                  Dr. Patrick Muthengi Maluki is a Senior Lecturer and an
                  experienced trainer and researcher in international conflict
                  management, international negotiation, international
                  mediation, international political economy, diplomacy, human
                  rights and governance, and peacebuilding issues. He lectures
                  at the Institute of Diplomacy and International Studies,
                  University of Nairobi, and at the National Defense College
                  (Karen). He was the first recipient of the prestigious APA
                  SAHEP PANT scholarship. He has carried out academic research
                  and published extensively. In 2017, he carried out a study
                  entitled strengthening the community’s resilience against
                  radicalization and violent extremism in Kenya. In 2013, he
                  researched the gender dimension of international terrorism,
                  and in 2012, conducted a baseline survey on the status of
                  human rights in Kenya. In 2018, he carried out a study on
                  Governance and MDGs sponsored by Africa Development Bank and
                  research on countering violent extremism in Kenyan
                  Universities in collaboration with the Royal United Services
                  Institute (RUSI). Currently, he is implementing sustainable
                  development solutions in Kenya under the Sustainable
                  Development Solutions Network- Kenya Chapter.
                </div>
                <div class="mt-2">
                  <button @click="showMaluki" v-if="maluki">
                    <span class="indigo--text">Read more</span>
                  </button>
                  <button @click="hideMaluki" v-else>
                    <span class="indigo--text">Show Less</span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5 mb-4" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/o98OPOj.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Morris Odhiambo
                </div>
                <div class="hideMorris">
                  Morris Odhiambo is a consultant in Democracy, Governance and
                  Human Rights (DGHR) with a wealth of experience working with
                  Civil Society Organizations (CSOs) in the East and the Horn of
                  Africa region. He is the founder of Kumekucha Africa
                  Consultants (KafCo). His areas of expertise include research,
                  editing, policy-formulation and influencing, monitoring and
                  evaluation and various areas of capacity building such as
                  training and facilitation of participatory processes. He has
                  been a leader in the civil society movement in Kenya and the
                  region and has been influential in setting up and leading
                  networks such as the East African Civil Society Organizations’
                  Forum (EACSOF). Odhiambo is pursuing PhD studies at the
                  University of Nairobi’s Institute for Diplomacy and
                  International Studies (IDIS) where he also concluded his
                  Master of Arts studies. His main area of interest is regional
                  integration, specifically in dynamics of participatory
                  regionalism, whose construction involves state and non-state
                  actors. In this area, he has contributed to two
                  consultancy-based publications namely Kituo Cha Sheria (2010)
                  Towards Greater Civil Society Participation in the East
                  African Community: Challenges and Prospects. Kituo Cha Katiba
                  Occasional Publication 5, and the OSISA (2015) The Civil
                  Society Guide to Regional Economic Communities, Open Society
                  Foundations.
                </div>
                <div class="mt-2">
                  <button @click="showMorris" v-if="morris">
                    <span class="indigo--text">Read more</span>
                  </button>
                  <button @click="hideMorris" v-else>
                    <span class="indigo--text">Show Less</span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mx-auto pa-5" tile>
          <v-container fluid>
            <v-row>
              <v-col cols="12" lg="3">
                <v-row justify="center" align="center" class="fill-height">
                  <v-sheet height="250" width="250" color="grey">
                    <v-img
                      src="https://i.imgur.com/Chuu4p7.jpg"
                      height="250"
                      width="100%"
                    ></v-img>
                  </v-sheet>
                </v-row>
              </v-col>
              <v-col cols="12" lg="9">
                <div class="indigo--text mb-3" style="font-size: 30px;">
                  Michael Macharia
                </div>
                <div class="macharia">
                  Michael Macharia is a Doctor of Philosophy student at the
                  University of Nairobi. He holds a Master of Arts degree in
                  International Studies from the same University. He has a
                  Bachelor of Arts in Philosophy from the Catholic University of
                  Eastern Africa. He has research interests on African Agency in
                  International relations.
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-sheet>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../parts/Footer";
import Toolbar from "../parts/Toolbar";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      kibe: true,
      meda: true,
      lemmy: true,
      maluki: true,
      morris: true
    };
  },
  methods: {
    showKibe() {
      const content = document.querySelector(".hideKibe");
      content.className = "showKibe";
      this.kibe = false;
    },
    hideKibe() {
      const content = document.querySelector(".showKibe");
      content.className = "hideKibe";
      this.kibe = true;
    },
    showMeda() {
      const content = document.querySelector(".hideMeda");
      content.className = "showMeda";
      this.meda = false;
    },
    hideMeda() {
      const content = document.querySelector(".showMeda");
      content.className = "hideMeda";
      this.meda = true;
    },
    showLemmy() {
      const content = document.querySelector(".hideLemmy");
      content.className = "showLemmy";
      this.lemmy = false;
    },
    hideLemmy() {
      const content = document.querySelector(".showLemmy");
      content.className = "hideLemmy";
      this.lemmy = true;
    },
    showMaluki() {
      const content = document.querySelector(".hideMaluki");
      content.className = "showMaluki";
      this.maluki = false;
    },
    hideMaluki() {
      const content = document.querySelector(".showMaluki");
      content.className = "hideMaluki";
      this.maluki = true;
    },
    showMorris() {
      const content = document.querySelector(".hideMorris");
      content.className = "showMorris";
      this.morris = false;
    },
    hideMorris() {
      const content = document.querySelector(".showMorris");
      content.className = "hideMorris";
      this.morris = true;
    }
  }
};
</script>

<style lang="css">
.member-section {
  margin-top: 50px;
  margin-bottom: 50px;
}
.hideKibe {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.showKibe {
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: none;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.hideMeda {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.showMeda {
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: none;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.aput {
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.hideLemmy {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.showLemmy {
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: none;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.hideMaluki {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.showMaluki {
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: none;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.hideMorris {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.showMorris {
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: none;
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
.macharia {
  font-size: 18;
  text-align: left !important;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.3px;
  line-height: 1.7rem;
}
button:focus {
  outline: none;
}
</style>
