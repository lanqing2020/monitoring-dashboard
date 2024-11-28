<script setup lang="ts">
import * as echarts from "echarts";
import {onMounted, ref} from "vue";

const echartsTemperatureRef = ref(null);
const initTemperatureEcharts = () => {
  const temperatureCharts = echarts.init(echartsTemperatureRef.value);
  const hours = [
    '5min', '10min', '15min', '20min', '25min', '30min', '35min', '40min', '45min', '50min', '55min', '60min'
  ];
  const temperatures = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "65", "60", "65", "70", "75", "80"];
  const data = [
    [0, 3, 15],
    [1, 3.6, 18],
    [2, 3.2, 16],
    [3, 4, 20],
    [4, 6, 30],
    [5, 5, 25],
    [6, 6.4, 32],
    [7, 5.8, 29],
    [8, 7.2, 36],
    [9, 8.4, 42],
    [10, 9.4, 47],
    [11, 8.4, 42],
  ].map(function (item) {
    return [item[0], item[1], item[2]];
  });
  const option = {
    title: {
      show: true,
      text: "设备温度折线图",
      textStyle: {
        fontSize: 16,
        color: "#242633"
      },
      textAlign: "center",
      textVerticalAlign: "center",
      left: "45%",
      top: "20px"
    },
    // legend未显示
    legend: {
      data: ["最近一小时"],
      left: "right"
    },
    tooltip: {
      position: 'top',
      formatter: function (params: any) {
        return ( hours[params.value[0]] + "点的温度是：" + params.value[2] + "°C" );
      }
    },
    grid: {
      left: 2,
      bottom: 10,
      right: 10,
      containLabel: true
    },
    xAxis: {
      name: "时间",
      type: 'category',
      boundaryGap: false,
      splitLine: {
        show: true
      },
      axisLine: {
        show: false
      },
      data: hours
    },
    yAxis: {
      name: "温度",
      type: 'category',
      data: temperatures,
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: "最近一小时",
        type: 'line',  // github是 scatter：https://echarts.apache.org/examples/zh/editor.html?c=scatter-punchCard
        symbolSize: function (val: any) {
          return val[1] * 1.5;
        },
        data: data,
        animationDelay: function (idx: any) {
          return idx * 100;
        }
      }
    ]
  };
  temperatureCharts.setOption(option);
}
onMounted(() => {
  initTemperatureEcharts();
})

</script>

<template>
  <section class="state">
    <h2 class="title">设备状态</h2>
    <div class="body">
      <div class="text">运行中</div>
    </div>
  </section>
  <section class="temperature sections">
    <h2 class="title">设备温度</h2>
    <div class="body">
      <div class="echarts-wrap echarts-temperature">
        <div class="canvas-wrap" ref="echartsTemperatureRef" style="width: 560px; height: 373px;" />
      </div>
    </div>
  </section>
  <section class="rotation sections">
    <h2 class="title">转速</h2>
    <div class="body">
      <div class="text">4000 转/分钟</div>
    </div>
  </section>
  <section class="daily-output sections">
    <h2 class="title">日产量</h2>
    <div class="body">
      <div class="text">1200 件/天</div>
    </div>
  </section>
</template>

<style scoped lang="less">
  section {
    margin-bottom: 10px;
    h2 {
      font-size: 16px;
      color: #242633;
    }
    .body {
      .echarts-wrap {
       background: white;
        border-radius: 10px;
        border: 1px solid #f9f9fb;
        box-shadow: 0 0 15px rgba(17, 4, 69, 0.01);
      }
      .echarts-temperature {
        width: 600px;
        height: 400px;
        .canvas-wrap {
          margin-left: 20px;
          margin-top: 15px;
        }
      }
    }
  }
</style>
