<template>
  <header>
    <h1>大数据可视化</h1>
  </header>
  <section class="container">
    <div class="iteamLeft">
      <IteamPage> <IteamOne /> </IteamPage>
      <IteamPage> <IteamTwo /> </IteamPage>
    </div>
    <div class="iteamCenter">
      <IteamMap />
    </div>
    <div class="iteamRight">
      <IteamPage> <IteamThree /> </IteamPage>
      <IteamPage> <IteamFour /> </IteamPage>
    </div>
  </section>
</template>

<script>
import { inject } from "vue";
import IteamPage from "./IteamPage";
import IteamOne from "./IteamOne";
import IteamTwo from "./IteamTwo";
import IteamThree from "./IteamThree";
import IteamFour from "./IteamFour";
import IteamMap from "./IteamMap";

export default {
  name: "HomePage",
  components: {
    IteamPage,
    IteamOne,
    IteamTwo,
    IteamThree,
    IteamFour,
    IteamMap,
  },
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");
  },
};
</script>

<style lang="less" scoped>
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
}
h1 {
  font-size: 0.375rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
.container {
  min-width: 800px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem;
  display: flex;
  .iteamLeft,
  .iteamRight {
    flex: 3;
  }
  .iteamCenter {
    flex: 5;
    // background-color: orangered;
  }
}
</style>
