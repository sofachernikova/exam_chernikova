<template>
  <div>
    <h3>Главная</h3>
    <v-progress-linear
      v-if="loading"
      color="green"
      height="10"
      indeterminate
    ></v-progress-linear>
    <v-card v-if="page_data">
      <v-img
        height="500"
        :src="page_data.image"
      ></v-img>
      <v-card-text v-html="page_data.text"></v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: function (){
    return {
      loading: false
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('main_page/LOAD_MAIN_PAGE')
    this.loading = false
  },
  computed: {
    page_data: function (){
      return this.$store.getters['main_page/GET_MAIN_PAGE']
    }
  }
}
</script>
