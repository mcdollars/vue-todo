<template>
  <Item
    v-for="(item, index) in items"
    :key="index"
    :name="item.name"
    :isCompleted="item.isCompleted"
  />
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ItemList",
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
