import Axios from 'axios'

export const state = () => ({
  babies: [],
  form: []
})

export const getters = {
  GET_BABIES: (state) => {
    return state.babies
  },
  GET_FORM: (state) => {
    return state.form
  },
}

export const mutations = {
  SET_BABIES: (state, babies) => {
    state.babies = babies
  },
  SET_FORM: (state, form) => {
    state.form = form
  },
}

export const actions = {
  LOAD_BABIES: async ({ commit }) => {
    const url = 'https://demo-api.vsdev.space/api/farm/baby'

    await Axios.get(url).then((response) => {
      commit('SET_BABIES', response.data)
    })
  },
  LOAD_FORM: async ({ commit }) => {
    const url = 'https://demo-api.vsdev.space/api/farm/baby/form'

    await Axios.get(url).then((response) => {
      commit('SET_FORM', response.data)
    })
  },
  SUBMIT_BABY: async ({commit}, baby) => {
    const url = 'https://demo-api.vsdev.space/api/farm/baby'

    await Axios.post(url,baby).then((response) => {
      commit('SET_FORM', response.data)
    })
  }
}
