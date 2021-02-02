<template>
  <div class="item">
    <p>{{ name }}</p>
    <input type="checkbox" :value="isCompleted" />
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
    isCompleted: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid grey;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem 0.5rem;
}
</style>
