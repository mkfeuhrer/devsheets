<template>
  <div class="buttons">
    <p class="heading">{{capatalize(this.data.id)}}</p>
    <p>{{shortenDescription(this.data.description)}}</p>
    <div class="tag-section">
      <div class="tag" v-for="(tag, index) in this.data.tags" :key="index">
        <span>#{{tag}}</span>
      </div>
    </div>
    <div class="links">
      <button @click="homeItemSelected" class="btn buttonSelection">Cheatsheet</button>
      <button @click="openDocs()" class="btn buttonSelection">Documentation</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionButton",
  props: {
    data: Object
  },
  methods: {
    capatalize(value) {
      if (typeof value !== "string") return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    homeItemSelected() {
      this.$emit("homeItemSelected", this.data.id);
    },
    shortenDescription(value) {
      if (value == null) return "";
      if (value.length > 90) return value.substring(0, 90) + " ....";
      else return value;
    },
    openDocs() {
      window.open(this.data.url + "?ref=devsheets", "_blank");
    }
  }
};
</script>

<style scoped>
.buttons {
  width: 300px;
  height: auto;
  background-color: #fff1f1;
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons:hover {
  width: 300px;
  height: auto;
  background-color: #fff;
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: translateY(-3%);
  transition: transform 0.4s ease-in-out;
}

.buttons .heading {
  font-size: 24px;
  font-weight: bold;
}

.buttons p {
  margin: 5px;
}

.tag-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tag {
  margin: 5px;
  padding: 2px 5px;
  font-size: 14px;
  font-weight: bold;
  border: 1px dashed black;
  background-color: #fff;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.buttonSelection {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
  background-color: white;
  color: #cc0000ea;
  border: 1px solid #cc0000ea;
}

.buttonSelection:hover {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
  background-color: #cc0000ea;
  color: white;
}

.buttonSelection:focus {
  box-shadow: none;
}
</style>