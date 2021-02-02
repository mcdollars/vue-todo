import { createStore } from "vuex";
import items from "@/services/items";

export default createStore({
  state: {
    items: JSON.parse(localStorage.getItem("items")) || [],
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
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    addItem(state, payload) {
      state.items.unshift(payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    updateItem(state, payload) {
      const index = state.items.findIndex(item => item.name === payload.name);
      if (index === -1) return;

      state.items[index].isCompleted = payload.isCompleted;
      localStorage.setItem("items", JSON.stringify(state.items));
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    async setItems({ state, commit }) {
      if (state.items && state.items.length > 0) return;
      const result = await items.get();
      commit("setItems", result.data);
    },
    addItem({ commit }, payload) {
      commit("addItem", payload);
    },
    updateItem({ commit }, payload) {
      commit("updateItem", payload);
    }
  }
});
