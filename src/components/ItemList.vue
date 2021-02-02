<template>
  <Item
    v-for="item in items"
    :key="item.name"
    v-bind="item"
    @on-update-item="value => $emit('on-update-item', value)"
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
