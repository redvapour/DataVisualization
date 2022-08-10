<template>
  <h2>图表4</h2>
  <div id="fourChart">容纳后期的图表</div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  name: "IteamOne",
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    let data = reactive({});

    async function getState() {
      data = await $http({ url: "/four/data" });
    }

    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("fourChart"));

        myChart.setOption({
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          legend: {},
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.chartData.chartData.num.Clothes,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.Electrical,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.Chemicals,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
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
#fourChart {
  height: 4.5rem;
  // background-color: gray;
}
</style>
