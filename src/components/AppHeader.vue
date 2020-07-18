<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">
        <img style="margin-right: 5px;" src="../assets/devsheet.svg" width="100" height="100" alt />
        <p class="routes">Devsheet</p>
      </div>

      <div class="dev-description">
        <p>Quickly find the best cheatsheets for everything tech.</p>
      </div>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  margin-bottom: 10px;
}

.logo p {
  margin-top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #555;
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