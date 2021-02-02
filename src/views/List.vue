<template>
  <div class="action-bar">
    <new-item @on-add-item="onAddItem" />

    <div>
      Completed:
      <input type="checkbox" v-model="filterCompleted" />
    </div>
  </div>

  <div v-if="isLoading">Loading...</div>
  <item-list :items="filteredItems" @on-update-item="onUpdateItem" />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import NewItem from "@/components/NewItem.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  name: "List",
  components: {
    NewItem,
    ItemList
  },
  data: () => ({
    filterCompleted: false
  }),
  computed: {
    ...mapState({
      isLoading: "loading"
    }),
    ...mapGetters({
      items: "list"
    }),
    filteredItems() {
      if (!this.items || this.items.length === 0) return [];

      return this.items.filter(
        item => item.isCompleted === this.filterCompleted
      );
    }
  },
  methods: {
    onAddItem(name) {
      this.$store.dispatch("addItem", {
        name,
        isCompleted: false
      });
    },
    onUpdateItem(item) {
      this.$store.dispatch("updateItem", item);
    }
  }
};
</script>

<style lang="scss">
.action-bar {
  display: flex;
  justify-content: space-between;

  margin: 1rem 2rem;
}
</style>
