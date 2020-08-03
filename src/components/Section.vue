<template>
  <div>
    <div class="heading">
      <p>{{ capatalize(this.selectedType) }} Cheatsheet</p>
    </div>
    <div class="searchBox">
      <input type="search" v-model="search" placeholder="Search this devsheet" />
    </div>
    <div v-show="filteredList.length > 0">
      <div class="grid">
        <div class="grid-elem left" style="font-weight: bold; color: #000;">Command</div>
        <div class="grid-elem right" style="font-weight: bold;">Description</div>
        <div class="grid-elem" style="font-weight: bold; min-width:100px; width:10%">Copy</div>
      </div>
    </div>
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
    };
  },
  props: {
    selectedType: String,
  },
  computed: {
    filteredList() {
      let cheatsheet = [];
      for (let ind = 0; ind < json.length; ind++) {
        console.log(this.selectedType);
        if (json[ind].id == this.selectedType) {
          cheatsheet = json[ind].cheatsheet;
        }
      }
      return cheatsheet
        .filter((obj) => {
          return obj.command
            .toString()
            .toLowerCase()
            .includes(this.search.toLowerCase());
        })
        .sort((a, b) => (a.command > b.command ? 1 : -1));
    },
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
    },
    capatalize(value) {
      if (typeof value !== "string") return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
.searchBox {
  margin-bottom: 20px;
}

.searchBox input {
  height: 40px;
  width: 50%;
  min-width: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
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
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: bolder;
  line-height: 24px;
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
  border: 1px solid #ddd;
  padding: 5px 5px 5px 10px;
  margin: 2px;
}

.left {
  width: 30%;
  font-weight: 600;
  color: #c11000;
}

.right {
  width: 60%;
}

.copy {
  display: flex;
  min-width: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  color: #cc0000ea;
}

.copy:hover {
  transform: scale(1.1, 1.1);
  color: #cc0000ea;
}

.grid-elem button:active {
  border: none;
  box-shadow: none;
}

.toast {
  padding: 2px;
}
</style>