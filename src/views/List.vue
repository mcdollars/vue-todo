<template>
  <new-item @on-add-item="onAddItem" />

  <div v-if="isLoading">Loading...</div>
  <item-list :items="items" />
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
  computed: {
    ...mapState({
      isLoading: "loading"
    }),
    ...mapGetters({
      items: "list"
    })
  },
  methods: {
    onAddItem(name) {
      this.$store.dispatch("addItem", {
        name,
        isCompleted: false
      });
    }
  }
};
</script>
