<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">
        <img style="margin-right: 5px;" src="../assets/devsheet.svg" width="75" height="75" alt />
      </div>
      <div>
        <p class="routes">Devsheets</p>
      </div>
    </div>
    <div class="dev-description">
      <p>
        Quickly find the best cheatsheets for everything tech 💻
        <br />Search 🔎 Copy 📄 Share 💙
      </p>
    </div>
    <div class="phcard">
      <a
        href="https://www.producthunt.com/posts/devsheets?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devsheets"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=229699&theme=light"
          alt="Devsheets - Quickly find cheatsheets for everything tech  | Product Hunt Embed"
          style="width: 240px; height: 50px;"
          width="250px"
          height="54px"
        />
      </a>
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

.phcard {
  margin: 5px 0px;
  padding: 5px;
}

.dev-description p {
  font-size: 20px;
  font-weight: normal;
}
</style>