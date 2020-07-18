<template>
  <div>
    <div class="searchBox">
      <input type="search" v-model="search" placeholder="Search this devsheet" />
    </div>
    <div class="heading">BRANCHES</div>
    <div class="searchResult" v-for="(value, index) in filteredList" :key="index">
      <div class="grid">
        <div class="grid-elem left" :class="{'grayHighlight': index % 2 !== 0 }">{{ value.command }}</div>
        <div
          class="grid-elem right"
          :class="{'grayHighlight': index % 2 !== 0 }"
        >{{ value.description}}</div>
        <div class="grid-elem">
          <button @click="copyItem($event,value.command)" class="btn copy">
            <i class="far fa-copy"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../techronym_data.json";

function copyText(text) {
  var input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

export default {
  name: "Section",
  data() {
    return {
      search: "",
      acronymList: json
    };
  },
  computed: {
    filteredList() {
      return this.acronymList
        .filter(obj => {
          return obj.command.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort((a, b) => (a.command > b.command ? 1 : -1));
    }
  },
  methods: {
    copyItem(event, value) {
      copyText(value);
      var node = document.createElement("span");
      var textnode = document.createTextNode("Copied");
      node.appendChild(textnode);
      node.setAttribute("style", "font-size: 15px; margin-left: 5px;");
      event.target.parentNode.appendChild(node);
      setTimeout(() => {
        event.target.parentNode.removeChild(node);
      }, 2000);
    }
  }
};
</script>

<style scoped>
.searchBox {
  margin-bottom: 20px;
  margin-top: 20px;
}

.searchBox input {
  height: 40px;
  width: 400px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
}

.searchBox input:focus-within {
  outline: none !important;
  border: 2px solid #666;
}

.grid {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10px;
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  background-color: #f7f7f7;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bolder;
  margin: 10px 0px;
  color: #555;
}

.grid .grid-elem {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  text-align: start;
  line-height: 20px;
}

.left {
  width: 30%;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: #ff0000;
}

.right {
  width: 60%;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
}

.copy {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  min-width: 100px;
  color: #b40000;
}

.copy:hover {
  transform: scale(1.1, 1.1);
  color: #b40000;
}

.grid-elem button:active {
  border: none;
  box-shadow: none;
}

.toast {
  padding: 2px;
}
</style>