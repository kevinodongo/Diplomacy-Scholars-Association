<template>
  <div class="todo">
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="indigo"
    ></v-progress-linear>
    <v-snackbar v-model="snackbar">
      You have successfully posted for public vieweing
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1">
      You have deleted an item
      <v-btn color="pink" text @click="snackbar1 = false">
        Close
      </v-btn>
    </v-snackbar>
    <!--Blog-->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay=""
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat dense>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="createBlog(object)">save</v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="indigo"
        ></v-progress-linear>
        <v-card-text>
          <v-alert color="indigo" outlined class="mt-3">
            <div>
              Once you save, The blog or publication will be viewed by the
              public
            </div>
          </v-alert>
          <div v-if="object">
            <div class="body-1">Written By: {{ object.member }}</div>
            <div class="display-1 font-weight-bold mt-1 mb-2">
              {{ object.title }}
            </div>
            <img :src="object.attachment" height="500" width="100%" />
            <div class="title mb-3 mt-2">{{ object.subject }}</div>
            <div>{{ object.content }}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Publications-->
    <v-dialog
      v-model="dialog1"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat dense>
          <v-btn icon @click="dialog1 = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click="createPublication(selectedPublication)" text
            >save</v-btn
          >
        </v-toolbar>
        <v-divider></v-divider>
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="indigo"
        ></v-progress-linear>
        <v-card-text class="mt-3" v-if="selectedPublication">
          <div class="font-weight-light title mb-1 mt-2">
            {{ selectedPublication.title }}
          </div>
          <div class="font-weight-light mb-3 mt-2">
            {{ selectedPublication.content }}
          </div>
          <v-btn
            color="indigo"
            block
            dark
            x-large
            :href="selectedPublication.attachment"
            target="blank"
            >download publication</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container grid-list-xs>
      <v-card-title primary-title class="font-weight-light">
        TO-DO
      </v-card-title>
      <v-card-text>
        <v-alert color="indigo" outlined>
          <div>To do</div>
          <div>
            Here you will find all the work other users with admin privileges
            have done awaiting approval
          </div>
          <div>
            Once you approved all work will be up for public veiwing or other
            users will be able to access
          </div>
        </v-alert>
        <div class="indigo--text font-weight-light ml-3">
          AWAITING APPROVAL
        </div>
        <!--Blogs-->
        <v-list dense>
          <v-subheader>Blogs</v-subheader>
          <template v-for="(item, index) in items">
            <v-list-item :key="item.id">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                  ><v-icon small @click="(dialog = true), (object = item)"
                    >mdi-pencil</v-icon
                  ></v-list-item-action-text
                >
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list>
        <v-divider></v-divider>
        <!--Publications-->
        <v-list dense>
          <v-subheader>Publications</v-subheader>
          <template v-for="(publication, index) in publications">
            <v-list-item :key="publication.id">
              <v-list-item-content>
                <v-list-item-title
                  v-text="publication.title"
                ></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                  ><v-icon
                    small
                    @click="
                      (dialog1 = true), (selectedPublication = publication)
                    "
                    >mdi-pencil</v-icon
                  ></v-list-item-action-text
                >
              </v-list-item-action>
            </v-list-item>
            <v-divider
              v-if="index + 1 < publications.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
        <v-divider></v-divider>
        <!--Subscribers-->
        <div class="caption grey--text ml-2 mt-10 mb-5">Subscribers</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subscribe in subscribers" :key="subscribe.name">
                <td>{{ subscribe.name }}</td>
                <td>{{ subscribe.email }}</td>
                <td>
                  <v-btn icon @click="deleteSubscriber(subscribe)"
                    ><v-icon small>mdi-delete-outline</v-icon></v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <!--Contacts-->
        <div class="caption grey--text ml-2 mt-10 mb-5">Contacts</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Username</th>
                <th class="text-left">Email</th>
                <th class="text-left">Phone</th>
                <th class="text-left">Subject</th>
                <th class="text-left">Message</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="contact in contacts" :key="contact.name">
                <td>{{ contact.username }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ contact.subject }}</td>
                <td>{{ contact.content }}</td>
                <td>
                  <v-btn icon @click="deleteContact(contact)"
                    ><v-icon small>mdi-delete-outline</v-icon></v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
var _ = require("lodash");
import { uuid } from "vue-uuid";
import {
  createPublic,
  deleteBlog,
  deletePublication,
  deleteContact,
  deleteSubscriber
} from "../../../graphql/mutations";
import moment from "moment";
import {
  listPublications,
  listBlogs,
  listAttachments,
  listSubscribers,
  listContacts
} from "../../../graphql/queries";
export default {
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
  },
  data() {
    return {
      user: {},
      items: [],
      publications: [],
      attachments: [],
      subscribers: [],
      contacts: [],
      loading: false,
      snackbar: false,
      snackbar1: false,
      dialog: false,
      dialog1: false,
      object: null,
      selectedPublication: null
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const attach = await API.graphql(graphqlOperation(listAttachments));
      const attachList = attach.data.listAttachments.items;
      if (attachList && attachList.length !== 0) {
        this.attachments = attachList;
      }
      // list blogs
      const blog = await API.graphql(graphqlOperation(listBlogs));
      const blogList = blog.data.listBlogs.items;
      if (blogList && blogList.length !== 0) {
        blogList.forEach(e => {
          const object = this.attachments.filter(a => {
            return e.id === a.memberID;
          });
          if (object && object.length !== 0) {
            const response = object.map(o => {
              return Storage.get(o.attachment);
            });
            Promise.all(response).then(results => {
              results.forEach(image => {
                e.attachment = image;
              });
            });
          }
          const array = this.items.concat(e);
          this.items = _.orderBy(_.uniqBy(array, "id"), "createdAt", "desc");
        });
      }
      // list publications
      const publication = await API.graphql(graphqlOperation(listPublications));
      const publicationList = publication.data.listPublications.items;
      if (publicationList && publicationList.length !== 0) {
        publicationList.forEach(e => {
          Storage.get(e.attachment).then(image => {
            e.attachment = image;
          });
          const array = this.publications.concat(e);
          this.publications = _.orderBy(
            _.uniqBy(array, "id"),
            "createdAt",
            "desc"
          );
        });
      }
      // list subscribers
      const subscriber = await API.graphql(graphqlOperation(listSubscribers));
      const subscriberList = subscriber.data.listSubscribers.items;
      if (subscriberList && subscriberList.length !== 0) {
        this.subscribers = subscriberList;
      }
      // list contacts
      const contact = await API.graphql(graphqlOperation(listContacts));
      const contactList = contact.data.listContacts.items;
      if (contactList && contactList.length !== 0) {
        this.contacts = contactList;
      }
    },
    async createPublication(item) {
      this.loading = true;
      const time = moment(item.createdAt).fromNow();
      const data = {
        id: uuid.v4(),
        member: item.member,
        title: item.title,
        subject: item.subject ? item.subject : null, // publication has no subject
        content: item.content,
        image: null,
        publication: item.attachment,
        createdAt: item.createdAt,
        updatedAt: time
      };
      //
      await API.graphql(graphqlOperation(createPublic, { input: data }));
      // publication table
      const deleteID = {
        id: item.id
      };
      await API.graphql(
        graphqlOperation(deletePublication, { input: deleteID })
      );
      // remove from array
      const index = this.publications.indexOf(item);
      const array = [...this.publications];
      array.splice(index, 1);
      this.publications = array;
      this.dialog1 = false;
      this.snackbar = true;
      this.loading = false;
    },
    async createBlog(item) {
      this.loading = true;
      const data = {
        id: uuid.v4(),
        member: item.member,
        title: item.title,
        subject: item.subject ? item.subject : null, // publication has no subject
        content: item.content,
        image: item.attachment,
        publication: null,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      };
      //
      await API.graphql(graphqlOperation(createPublic, { input: data }));
      // remove from blog table
      const deleteID = {
        id: item.id
      };
      await API.graphql(graphqlOperation(deleteBlog, { input: deleteID }));
      // remove from array
      const index = this.items.indexOf(item);
      const array = [...this.items];
      array.splice(index, 1);
      this.items = array;
      this.dialog = false;
      this.snackbar = true;
      this.loading = false;
    },
    async delete(item) {
      this.loading = true;
      const deleteID = {
        id: item.id
      };
      if (item.subject) {
        await API.graphql(graphqlOperation(deleteBlog, { input: deleteID }));
      } else if (!item.subject) {
        await API.graphql(
          graphqlOperation(deletePublication, { input: deleteID })
        );
      }
      // remove from array
      const index = this.items.indexOf(item);
      const array = [...this.item];
      array.splice(index, -1);
      this.items = array;
      this.snackbar1 = true;
      this.loading = false;
    },
    async deleteSubscribe(subscriber) {
      this.loading = true;
      const subscriberID = {
        id: subscriber.id
      };
      await API.graphql(
        graphqlOperation(deleteSubscriber, { input: subscriberID })
      );
      const index = this.subscribers.indexOf(subscriber);
      const array = [...this.subscribers];
      array.splice(index, -1);
      this.subscribers = array;
      this.loading = false;
    },
    async deleteContact(contact) {
      const contactID = {
        id: contact.id
      };
      await API.graphql(graphqlOperation(deleteContact, { input: contactID }));
      const index = this.contacts.indexOf(contact);
      const array = [...this.contacts];
      array.splice(index, -1);
      this.subscribers = array;
      this.loading = false;
    }
  }
};
</script>
