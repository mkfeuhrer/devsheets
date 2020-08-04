<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");

#app {
  font-family: "Recursive", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
}
</style>
