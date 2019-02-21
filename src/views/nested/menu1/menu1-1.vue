<template>
    <div>
      <div style="margin-bottom: 10px; color: cornflowerblue">created()方法 及filter的使用</div>
      <select name="" id="selectProvinces">
        <option value="">请选择</option>
        <option v-for="province in provinces" :key="province.id" :value="province.id">{{province.text}}</option>
      </select>
      <select name="" id="selectCitys">
        <option value="">请选择</option>
        <option v-for="city in getCity()" :key="city.id" :value="city.id">{{city.text}}</option>
      </select>
    </div>
</template>

<script>
export default {
  data () {
    return {
      provinces: [],
      citys: [],
      areas: []
    }
  },
  created: function () { // 在模板渲染成html前调用, 即通常初始化某些属性值, 然后再渲染成视图。
    this.areas = [
      {text: '广东省', id: 1, pid: 0},
      {text: '浙江省', id: 2, pid: 0},
      {text: '深圳市', id: 3, pid: 1},
      {text: '杭州市', id: 4, pid: 1}
    ]
    this.provinces = this.areas.filter(function (area) {
      return area.pid === 0
    })
  },
  methods: {
    getCity: function () {
      this.citys = this.areas.filter(function (city) {
        return city.pid === 1
      })
      return this.citys
    }
  }
}
</script>

<style scoped>

</style>
