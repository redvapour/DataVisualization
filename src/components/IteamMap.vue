<template>
  <div id="map"></div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  name: "IteaMap",
  setup() {
    const $echarts = inject("echarts");
    const axios = inject("axios");

    let mapData = reactive({});
    async function getState() {
      mapData = await axios({ url: "map/data" });
    }

    onMounted(() => {
      getState().then(() => {
        console.log(mapData.data.charData);
        $echarts.registerMap("china", mapData.data.charData);
        let myChart = $echarts.init(document.getElementById("map"));
        myChart.setOption({
          geo: {
            map: "china",
            itemStyle: {
              //地图区域的多边形 图形样式
              areaColor: "#0099ff", //地图区域的颜色。
              borderColor: "#00ffff", //图形的描边颜色。
              shadowColor: "rgba(230,130, 70, 0.5)", //橙色
              shadowBlur: 30, //图形阴影的模糊大小
              emphasis: {
                //高亮状态下的多边形和标签样式。
                focus: "self", //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果self'self' 只聚焦（不淡出）当前高亮的数据的图形。
              },
            },
          },

          tooltip: {
            trigger: "item",
          },
          title: {
            text: "城市销量",
            left: "45%",
            textStyle: {
              color: "#fff",
              fontSize: 20,
              textShadowBlur: 10,
              textShadowColor: "#33ffff",
            },
          },
          visualMap: {
            type: "continuous",
            min: 100,
            max: 5000,
            calculable: true,
            inRange: {
              color: ["#50a3ba", "#eac736", "#d94e5d"],
            },
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              type: "scatter",
              itemStyle: {
                color: "red",
              },
              coordinateSystem: "geo",
              data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "西安", value: [108.45, 34, 3421] },
              ],
            },
          ],
        });
      });
    });
    return {
      mapData,
      getState,
    };
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
