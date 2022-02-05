<template>
  <div>
    <h3>О нас</h3>
    <v-progress-linear
      v-if="loading"
      color="green"
      height="10"
      indeterminate
    ></v-progress-linear>
    <v-card v-if="page_data">
      <v-card-text v-html="page_data.text"></v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: function (){
    return {
      loading: false
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('about_page/LOAD_PAGE')
    this.loading = false
  },
  computed: {
    page_data: function (){
      return this.$store.getters['about_page/GET_PAGE']
    }
  }
}
</script>
