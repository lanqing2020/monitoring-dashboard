<script setup lang="ts">
import * as echarts from "echarts";
import {onMounted, onUnmounted, reactive, ref} from "vue";
import {echartsConst} from "@/constants/echarts";
import {send} from "vite";

const echartsTemperatureRef = ref(null);
const initTemperatureEcharts = () => {
  const temperatureCharts = echarts.init(echartsTemperatureRef.value);
  const data = reactive([]);

  // [
  //   [0, 3, 15],
  //   [1, 3.6, 18],
  //   [2, 3.2, 16],
  //   [3, 4, 20],
  //   [4, 6, 30],
  //   [5, 5, 25],
  //   [6, 6.4, 32],
  //   [7, 5.8, 29],
  //   [8, 7.2, 36],
  //   [9, 8.4, 42],
  //   [10, 9.4, 47],
  //   [11, 8.4, 42],
  //   [12, 7.2, 36],
  //   [13, 6, 30],
  //   [14, 3.6, 18],
  //   [15, 8.4, 42],
  //   [16, 8.4, 42],
  //   [17, 8.4, 42],
  //   [18, 8.4, 42],
  //   [19, 8.4, 42],
  //   [20, 8.4, 42],
  //   [21, 8.4, 42],
  // ].map(function (item) {
  //   return [item[0], item[1], item[2]];
  // })

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
        return ( echartsConst.xAxisHoursDefault[params.value[0]] + "点的温度是：" + params.value[2] + "°C" );
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
      data: echartsConst.xAxisHoursDefault
    },
    yAxis: {
      name: "温度",
      type: 'category',
      data: echartsConst.yAxisTemperatureDefault,
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

const ws = ref(null);
const status = ref("已断开");
const message = ref([]);

const connect = () => {
  ws.value = new WebSocket("ws://localhost:8083/websocket/111");
  ws.value.onopen = onOpen;
  ws.value.onmessage = onMessage;
  ws.value.onerror = onError;
  ws.value.onclose = onClose;
}

const onOpen = () => {
  status.value = "运行中";
}

const onMessage = (event: any) => {
  console.log("event===>", event)
  // message.value.push(event.data);
}

const onError = (error: any) => {
  status.value = "Error";
  console.error("WebSocket Error: ", error);
}

const onClose = () => {
  status.value = "已断开";
  ws.value = null;
}

const sendMessage = () => {
  if (ws.value && ws.value.readyState === WebSocket.OPEN) {
    ws.value.send("Your message here");
  }
}

const disconnect = () => {
  if (ws.value) {
    ws.value.close();
  }
}

onMounted(() => {
  connect();
})

onUnmounted(() => {
  disconnect();
})

</script>

<template>
  <section class="state">
    <h2 class="title">设备状态</h2>
    <div class="body">
      <div class="text">{{ status }}</div>
      <button @click="disconnect">断开</button>
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
