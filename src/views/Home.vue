<template>
  <div class="home container">
    <AppHeader />
    <div class="parent">
      <!-- <div class="product-hunt">
        <a
          href="https://www.producthunt.com/posts/acrons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-acrons"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=200817&theme=light"
            alt="Acrons - One stop solution for finding cool, crazy & popular acronyms | Product Hunt Embed"
            style="width: 250px; height: 54px;"
            width="250px"
            height="54px"
          />
        </a>
      </div>-->

      <div class="home">
        <span @click="homeItemClicked()" v-show="itemSelected">
          <i class="fa fa-home"></i>
          Home
        </span>
      </div>
      <div v-show="!itemSelected" class="searchBox">
        <input type="search" v-model="search" placeholder="Search cheatsheets" />
      </div>
      <div v-show="itemNotFound" class="contribute">
        <p>
          Couldn't find Cheatsheet?
          <a
            href="https://github.com/mkfeuhrer/devsheet"
            class
            target="blank"
          >Contribute</a>
        </p>
      </div>
      <div class="grid">
        <div
          class="grid-elem"
          v-show="!itemSelected"
          v-for="(value, index) in filteredList"
          :key="index"
        >
          <OptionButton :id="value.id" @homeItemSelected="homeItemSelected" />
        </div>
      </div>
      <Section v-show="itemSelected" :selectedType="this.selectedType" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import json from "../techronym_data.json";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Section from "@/components/Section.vue";
import OptionButton from "@/components/OptionButton.vue";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      acronymList: json,
      itemSelected: false,
      selectedType: "",
      popular: false,
      popularList: [
        {
          command: "AFK ",
          description: "Away From Keyboard"
        },
        {
          command: "BRB ",
          expanded_version: "Be Right Back"
        },
        {
          command: "PHAT ",
          description: "Pretty Hot And Tempting"
        },
        {
          command: "TTYL ",
          description: "Talk To You Later"
        },
        {
          command: "DIY ",
          description: "Do It Yourself"
        },
        {
          command: "DND ",
          description: "Do Not Disturb"
        },
        {
          command: "WFH",
          description: "Work From Home"
        },
        {
          command: "YOLO",
          description: "You Only Live Once"
        },
        {
          command: "FOMO",
          description: "Fear Of Missing Out"
        }
      ]
    };
  },
  created() {
    this.popularList = this.popularList.sort((a, b) =>
      a.command > b.command ? 1 : -1
    );
  },
  computed: {
    filteredList() {
      if (this.acronymList == null) {
        return [];
      }
      return this.acronymList
        .filter(obj => {
          return obj.id.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    itemNotFound() {
      return this.filteredList.length == 0;
    }
  },
  methods: {
    homeItemSelected(value) {
      this.itemSelected = true;
      this.selectedType = value;
    },
    homeItemClicked() {
      this.itemSelected = false;
    }
  },
  components: {
    AppHeader,
    AppFooter,
    Section,
    OptionButton
  }
};
</script>


<style scoped>
.parent {
  margin: 10px;
}

.home span {
  font-size: 18px;
  font-weight: bold;
}

.home span:hover {
  cursor: pointer;
  border-bottom: 2px solid #b40000;
}

.searchResult {
  margin: 20px;
}
.parent input {
  height: 40px;
  width: 400px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
}
@media all and (max-width: 768px) {
  .parent input {
    height: 40px;
    width: 300px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    border: 2px solid lightgray;
    border-radius: 5px;
  }
}
.parent input:focus-within {
  outline: none !important;
  border: 2px solid #666;
}

.searchBox {
  margin-bottom: 20px;
  margin-top: 10px;
}

.searchBox input {
  height: 40px;
  width: 40%;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}

.grayHighlight {
  background-color: rgb(240, 240, 240);
}

.contribute p {
  font-size: 16px;
  color: #555;
}

.product-hunt {
  margin: 20px;
}
</style>