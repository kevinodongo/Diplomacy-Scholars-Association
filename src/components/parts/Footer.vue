<template>
  <div class="footer">
    <v-card flat tile color="secondary" min-height="400" dark>
      <v-container grid-list-xs style="margin-bottom: 3rem;">
        <div class="about mt-10">About us</div>
        <div class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum?
          Porro maiores, inventore dignissimos facilis quis aliquam, ducimus
          reprehenderit ratione officia soluta sequi ut alias iste eum enim
          velit. Maxime? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ab, cum? Porro maiores, inventore dignissimos facilis quis
          aliquam, ducimus reprehenderit ratione officia soluta sequi ut alias
          iste eum enim velit. Maxime?
        </div>
        <div>
          <v-btn color="white" outlined class="mt-3">read more</v-btn>
        </div>
      </v-container>
    </v-card>
    <v-footer padless dark absolute>
      <v-card class="flex" flat tile>
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
  letter-spacing: 1.5px;
}
</style>
