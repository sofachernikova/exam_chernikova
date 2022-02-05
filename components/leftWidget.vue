<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="2"
  >
    <template slot="progress">
      <v-progress-linear
        color="green"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title v-if="widget_data">В нашем роддоме<br/> родилось:</v-card-title>
    <v-card-text v-if="widget_data">
      добрейших коровок: {{widget_data.cows}}<br/>
      милейших кроликов: {{widget_data.rabbits}}<br/>
      пушистейших овечек: {{widget_data.sheeps}}<br/>
    </v-card-text>

    <v-img
      height="250"
      src="/left_widget_img.jpg"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  name: "leftWidget",
  data: function (){
    return {
      loading: false
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('left_widget/LOAD_WIDGET')
    this.loading = false
  },
  computed: {
    widget_data: function (){
      return this.$store.getters['left_widget/GET_WIDGET']
    }
  }
}
</script>

<style scoped>

</style>
