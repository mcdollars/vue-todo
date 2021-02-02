<template>
  <div class="new-item-form">
    Todo:
    <input type="text" v-model="name" @keydown.enter="onSubmit" />
  </div>
</template>

<script>
export default {
  name: "NewItem",
  data: () => ({
    name: ""
  }),
  methods: {
    onSubmit() {
      if (this.name.length === 0) return;

      this.$emit("on-add-item", this.name);
      this.name = "";
    }
  }
};
</script>
