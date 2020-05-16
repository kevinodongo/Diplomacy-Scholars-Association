<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile min-height="80">
      <v-container grid-list-xs>
        <div class="white--text text-end">
          Copyright &copy; {{ new Date().getFullYear() }} —
          <strong>Diplomacy Scholars Association of Kenya</strong>
        </div>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
