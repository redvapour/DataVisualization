<template>
  <h2>图表3</h2>
  <div id="threeChart"></div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  name: "IteamOne",
  setup() {
    const $echarts = inject("echarts");
    const axios = inject("axios");

    let data = reactive({});
    async function getState() {
      data = await axios({ url: "three/data" });
    }

    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("threeChart"));

        myChart.setOption({
          legend: {
            top: "bottom",
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              type: "pie",
              data: data.data.chartData.chartData,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10,
              },
            },
          ],
        });
      });
    });
    return { getState, data };
  },
};
</script>

<style lang="less" scoped>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
#threeChart {
  height: 4.5rem;
  // background-color: gray;
}
</style>
