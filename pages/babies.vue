<template>
  <div>
    <h3>Наши детки</h3>
    <v-progress-linear
      v-if="loading"
      color="green"
      height="10"
      indeterminate
    ></v-progress-linear>
    <v-container v-if="!loading">
      <add-form></add-form>
      <v-row>
        <v-col cols="6">
          <v-card v-for="baby in babies" :key="baby.id" v-if="babies">
            <v-card-title>{{baby.name}}</v-card-title>
            <v-card-subtitle>{{baby.type}}</v-card-subtitle>
            <v-img v-if="baby.type==='cow'"
                   max-height="200px"
              src="cow_img.jpg"
            ></v-img>
            <v-img v-if="baby.type==='rabbit'"
              max-height="200px"
              src="rabbit_img.jpg"
            ></v-img>
            <v-img v-if="baby.type==='sheep'"
              max-height="200px"
              src="sheep_img.jpg"
            ></v-img>
            <v-card-text>
              <b>Вес:</b> {{baby.weight}}
              <b>Цвет:</b> {{baby.color}}
              <b>Пол:</b> {{baby.sex}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BabiesPage',
  data: function (){
    return {
      loading: false
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('babies/LOAD_BABIES')
    this.loading = false
  },
  computed: {
    babies: function (){
      return this.$store.getters['babies/GET_BABIES']
    }
  }
}
</script>
