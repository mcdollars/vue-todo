import { createStore } from "vuex";
import { items } from "../services";

export default createStore({
  state: {
    items: [],
    loading: false
  },
  getters: {},
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setItems(state, payload) {
      state.items = [...payload];
    },
    addItem(state, payload) {
      state.items.unshift(payload);
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    async setItems({ commit }) {
      const result = await items.get();
      console.log({ result });
      commit("setItems", result);
    },
    addItem({ commit }, payload) {
      commit("addItem", payload);
    }
  }
});
