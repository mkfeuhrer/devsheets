<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">
        <img style="margin-right: 5px;" src="../assets/devsheet.svg" width="75" height="75" alt />
      </div>
      <div>
        <p class="routes">Devsheet</p>
      </div>
    </div>
    <div class="dev-description">
      <p>
        Quickly find the best cheatsheets for everything tech 💻
        <br />Search 🔎 Copy 📄 Share 💙
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  line-height: 0px;
}

.header-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  margin-bottom: 10px;
}

.routes {
  font-family: "Roboto", Helvetica, sans-serif;
  margin-left: 2px;
  color: #cc0000ea;
  font-size: 52px;
  font-weight: 500;
}

.dev-description {
  margin-top: 5px;
  line-height: 24px;
}

.dev-description p {
  font-size: 20px;
  font-weight: normal;
}
</style>