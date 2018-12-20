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
      msg: 'form',
      cb: {
        categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        data: [5, 20, 36, 10, 10, 20]
      }
    }
  },
  mounted () {
    this.initChart()
    this.fetchData(this.cb)
  },
  methods: {
    // 先建一个简单的图表
    initChart () {
      this.chart = echarts.init(this.$el, 'bar')
      const option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: []
        }]
      }
      this.chart.setOption(option)
    },
    fetchData (data) {
      this.chart.showLoading()
      setTimeout(() => {
        this.chart.hideLoading()
        this.chart.setOption({
          xAxis: {
            data: data.categories
          },
          series: [{
            name: '销量',
            data: data.data
          }]
        })
      }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
