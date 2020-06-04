<template>
  <div class="footer">
    <v-footer padless dark absolute>
      <v-card class="flex" flat tile color="#263238">
        <v-container grid-list-xs>
          <div class="white--text text-end footer-text">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Diplomacy Scholars Association of Kenya</strong>
          </div>
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<style lang="css">
.footer-text {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
