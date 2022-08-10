<template>
  <HomePage />
</template>

<script>
import { provide } from "vue";
import HomePage from "./components/HomePage";
import * as echarts from "echarts";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:80";

export default {
  name: "App",
  components: { HomePage },
  setup() {
    let car = {};
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url(./assets/bg.jpg);
}
</style>
