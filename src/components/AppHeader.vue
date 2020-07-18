<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">
        <img style="margin-right: 5px;" src="../assets/logo.png" width="50" height="50" alt />
        <!-- <router-link to="/" class="routes">English</router-link>| -->
        <!-- <router-link to="/id" class="routes">Bahasa</router-link> -->

        <router-link to="/" class="routes">DevSheets</router-link>
      </div>
      <div class="subheading">
        <p>
          Quickly find the best cheatsheets for everything tech.
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding-top: 1rem;
}

.header-section {
  display: flex;
  flex-direction: column;
}

.header div h1 {
  font-size: 40px;
  font-weight: bolder;
}
.subheading {
  margin-top: 10px;
}
.subheading p {
  font-size: 20px;
  font-weight: normal;
}
.logo {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
}
.routes {
  margin: 0 5px;
  font-weight: bold;
  font-size: 40px;
  color: #333;
}
.routes:hover {
  margin: 0 5px;
  font-weight: bold;
  font-size: 40px;
  text-decoration: none;
  border-bottom: 3px solid #fcc047;
}
</style>