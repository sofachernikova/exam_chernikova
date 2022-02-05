import Axios from 'axios'

export const state = () => ({
  widget_data: []
})

export const getters = {
  GET_WIDGET: (state) => {
    return state.widget_data
  }
}

export const mutations = {
  SET_WIDGET: (state, widget_data) => {
    state.widget_data = widget_data
  }
}

export const actions = {
  LOAD_WIDGET: async ({ commit }) => {
    const url = 'https://demo-api.vsdev.space/api/farm/left_widget'

    await Axios.get(url).then((response) => {
      commit('SET_WIDGET', response.data)
    })
  },
}
