<template>
  <div class="contacts">
    <Toolbar />
    <v-container grid-list-xs>
      <v-row class="_contact">
        <v-col cols="12" md="6">
          <div style="font-size: 30px;">Contacts</div>
          <div class="mt-2">
            <v-icon class="mr-1" small>mdi-map-marker</v-icon>
            <span class="font-weight-bold">Address:</span>
            <span class="ml-3">Gallant Mall</span>
          </div>
          <div class="mt-2">
            <v-icon class="mr-1" small>mdi-phone</v-icon>
            <span class="font-weight-bold">Phone:</span>
            <span class="ml-3 mb-1">(+254) 706 374224 / 729 463996</span>
          </div>
          <div class="mt-2">
            <v-icon class="mr-1" small>mdi-email</v-icon>
            <span class="font-weight-bold">Email:</span>
            <span class="ml-3 primary--text">info@dipsak.or.ke</span>
          </div>
          <v-sheet class="mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.390354554427!2d36.809399!3d-1.2639197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89539b2856619478!2sGallant%20Mall!5e0!3m2!1sen!2ske!4v1589580352856!5m2!1sen!2ske"
              width="100%"
              height="500"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="6">
          <div class="font-weight-light mt-5">
            For any question, comments or enquiries with regards to Diplomacy
            Scholars Association of Kenya, fill in the form below:
          </div>
          <div class="caption font-weight-bold mt-3">
            Username <span class="red--text">*</span>
          </div>
          <v-text-field
            class="mt-1"
            name="name"
            placeholder="Please enter your full names"
            single-line
            outlined
            dense
            v-model="item.username"
          ></v-text-field>
          <div class="caption font-weight-bold">
            Email Address <span class="red--text">*</span>
          </div>
          <v-text-field
            class="mt-1"
            name="email"
            placeholder="Please enter your Email"
            single-line
            outlined
            dense
            v-model="item.email"
          ></v-text-field>
          <div class="caption font-weight-bold">
            Phone <span class="red--text">*</span>
          </div>
          <v-text-field
            class="mt-1"
            name="phone"
            placeholder="Please enter your Phone Number"
            single-line
            outlined
            dense
            v-model="item.phone"
          ></v-text-field>
          <div class="caption font-weight-bold">
            Subject <span class="red--text">*</span>
          </div>
          <v-text-field
            class="mt-1"
            name="subject"
            placeholder="Please enter your Subject"
            single-line
            outlined
            dense
            v-model="item.subject"
          ></v-text-field>
          <div class="caption font-weight-bold">
            Message <span class="red--text">*</span>
          </div>
          <v-textarea
            class="mt-1"
            single-line
            outlined
            name="input-7-4"
            placeholder="Please enter your enquiry"
            v-model="item.content"
          ></v-textarea>
          <v-btn color="primary" @click="save">submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import { createContact } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import Swal from "sweetalert2";
import { uuid } from "vue-uuid";
export default {
  components: { Footer, Toolbar },
  data() {
    return {
      item: {}
    };
  },
  methods: {
    async save() {
      const data = {
        id: uuid.v4(),
        username: this.item.username,
        email: this.item.email,
        phone: this.item.phone,
        subject: this.item.subject,
        content: this.item.content,
        createdAt: new Date()
      };
      await API.graphql(graphqlOperation(createContact, { input: data }));
      this.item = {};
      Swal.fire({
        text: "Thank you for Contacting us",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        footer: "<div>Diplomacy Scholars Association of Kenya &copy; 2020</div>"
      });
    }
  }
};
</script>

<style lang="css">
._contact {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
