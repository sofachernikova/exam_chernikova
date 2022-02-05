import Axios from 'axios'

export const state = () => ({
  page_data: []
})

export const getters = {
  GET_MAIN_PAGE: (state) => {
    return state.page_data
  }
}

export const mutations = {
  SET_MAIN_PAGE: (state, widget_data) => {
    state.page_data = widget_data
  }
}

export const actions = {
  LOAD_MAIN_PAGE: async ({ commit }) => {
    const url = 'https://demo-api.vsdev.space/api/farm/home_page'

    await Axios.get(url).then((response) => {
      commit('SET_MAIN_PAGE', response.data)
    })
  },
}
