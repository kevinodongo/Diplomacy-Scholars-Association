<template>
  <div class="footer">
    <v-footer dark padless app>
      <v-card class="flex" flat tile>
        <v-container grid-list-xs>
          <div class="white--text text-end caption">
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
