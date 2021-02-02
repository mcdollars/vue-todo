<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/list">Todo List</router-link>
  </div>

  <hr />

  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  async mounted() {
    this.$store.dispatch("setLoading", true);
    await this.$store.dispatch("setItems");
    this.$store.dispatch("setLoading", false);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  width: 70%;
  margin: auto;
}
</style>
