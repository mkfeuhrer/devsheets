<template>
  <div class="buttons">
    <button @click="homeItemSelected" class="btn buttonSelection">{{capatalize(this.id)}}</button>
  </div>
</template>

<script>
export default {
  name: "OptionButton",
  props: {
    id: String
  },
  methods: {
    capatalize(value) {
      if (typeof value !== "string") return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    homeItemSelected() {
      this.$emit("homeItemSelected", this.id);
    }
  }
};
</script>

<style scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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