<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
// 按需引入echarts
// let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
export default {
  data () {
    return {
      msg: 'form'
    }
  },
  mounted () {
    console.log(this.$el)
    this.initChart()
  },
  methods: {
    initChart () {
    }
  }
}
</script>

<style scoped>

</style>
