<template>
  <v-app>
    <div>
      <v-app-bar
        dense
        elevation="1"
        color="light-green"
      >
        <v-app-bar-title class="font-weight-bold">Ферма</v-app-bar-title>
        <v-app-bar-title class="ml-4">роддом номер 5</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <v-container class="col">
          <v-row>
            <v-col cols="2">
              <v-list
                nav
                dense
                elevation="2"
              >
                <v-list-item to="/">
                  <v-list-item-title>Главная</v-list-item-title>
                </v-list-item>

                <v-list-item to="/about">
                  <v-list-item-title>О нас</v-list-item-title>
                </v-list-item>

                <v-list-item to="/babies">
                  <v-list-item-title>Детки</v-list-item-title>
                </v-list-item>
              </v-list>
              <left-widget></left-widget>
            </v-col>
            <v-col cols="8">
              <Nuxt />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  },
  mounted() {

  }
}
</script>
