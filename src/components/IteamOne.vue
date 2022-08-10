<template>
  <h2>图表1</h2>
  <div id="oneChart">容纳后期的图表</div>
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
      data = await axios({ url: "one/data" });
    }

    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("oneChart"));

        myChart.setOption({
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: data.data.chartData.chartData.map((v) => v.title),
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              data: data.data.chartData.chartData.map((v) => v.num),
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
        });
      });
    });

    return {
      getState,
      data,
    };
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
#oneChart {
  height: 4.5rem;
  // background-color: gray;
}
</style>
