<template>
    <div :style="{width: '300px', height: '300px'}">
    </div>
</template>
<script>
// 按需引入echarts
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
export default {
  data () {
    return {
      msg: 'form'
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    // 先建一个简单的图表
    initChart () {
      this.chart = echarts.init(this.$el, 'bar')
      this.chart.setOption({
        title: {
          text: 'Echarts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '',
          type: 'bar',
          data: [5, 20, 36, 10, 10]
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>
