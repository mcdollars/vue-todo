import { createStore } from "vuex";
import items from "@/services/items";

export default createStore({
  state: {
    items: [],
    loading: false
  },
  getters: {
    list(state) {
      return [...state.items];
    }
  },
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
      commit("setItems", result.data);
    },
    addItem({ commit }, payload) {
      commit("addItem", payload);
    }
  }
});
