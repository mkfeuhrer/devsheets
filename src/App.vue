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
  meta: [
    {
      name: "keywords",
      content:
        "devsheets, devsheet, cheatsheet, dev cheatsheets, tech cheatsheets, developers guide",
    },
    {
      name: "description",
      content: "Quickly find the best cheatsheets for everything tech",
    },
    {
      name: "subject",
      content: "Quickly find the best cheatsheets for everything tech",
    },
    { name: "author", content: "@mkfeuhrer" },
    { name: "url", content: "https://mohitkhare.me/devsheets" },
    { name: "og:title", content: "Devsheets" },
    { name: "og:site_name", content: "Devsheets" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://mohitkhare.me/devsheets" },
    {
      name: "og:description",
      content:
        "Quickly find the best cheatsheets for everything tech. Search 🔎 Copy 📄 Share 💙 commands with one line explanation.",
    },
  ],
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
