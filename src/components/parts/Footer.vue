<template>
  <div class="footer">
    <v-footer dark padless app class="d-flex d-sm-none">
      <v-card class="flex" flat tile>
        <v-container grid-list-xs>
          <div class="white--text text-end">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Diplomacy Scholars Association of Kenya</strong>
          </div>
        </v-container>
      </v-card>
    </v-footer>
    <v-footer dark padless class="d-none d-sm-flex">
      <v-card class="flex" flat tile>
        <v-container grid-list-xs>
          <div class="white--text text-end">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Diplomacy Scholars Association of Kenya</strong>
          </div>
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
