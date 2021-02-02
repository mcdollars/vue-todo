<template>
  <div class="item">
    <p>{{ name }}</p>
    <input type="checkbox" :checked="isCompleted" @click="onUpdate" />
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
  },
  methods: {
    onUpdate() {
      this.$emit("on-update-item", {
        name: this.name,
        isCompleted: !this.isCompleted
      });
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
