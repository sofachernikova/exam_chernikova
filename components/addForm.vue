<template>
  <div>
    <v-btn
      color="primary"
      dark
      @click="dialog = true"
    >
      Добавить
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500px"
      persistent
    >
      <v-card>
        <v-card-title>
          Добавить животное
        </v-card-title>
        <v-card-text>
          <v-form v-if="fields" ref="form" v-model="valid">
            <v-row align="center">
              <v-col
                class="d-flex"
                cols="12"
                sm="6"
                v-for="(field,key) in fields.fields"
                :key="key"
              >
                <v-select
                  v-if="field.type === 'select'"
                  v-model="form[key]"
                  :items="field.values"
                  :label="field.title"
                  :rules="[v => !!v || 'Заполните поле!']"
                ></v-select>
                <v-text-field
                  v-if="field.type === 'string'"
                  v-model="form[key]"
                  :label="field.title"
                  :rules="[v => !!v || 'Заполните поле!']"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="submitForm"
          >
            Сохранить
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "addForm",
  data: function (){
    return {
      dialog: false,
      valid: false,
      form: {}
    }
  },
  async created () {
    await this.$store.dispatch('babies/LOAD_FORM')
  },
  computed: {
    fields: function (){
      return this.$store.getters['babies/GET_FORM'];
    }
  },
  methods: {
    submitForm(){
      if (this.valid) {
        let formData = new FormData();
        Object.keys(this.form).forEach((key) => {
            formData.append(key,this.form[key]);
        });

        this.$store.dispatch('babies/SUBMIT_BABY', formData).then(() => {
          this.$store.dispatch('babies/LOAD_BABIES');
          this.dialog = false;
        })
      }else{
        this.$refs.form.validate();
      }
    }
  }
}
</script>

<style scoped>

</style>
