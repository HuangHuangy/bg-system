<template>
    <div>
      <el-row>
      <!--table表格开始-->
        <el-col :span="20">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column :about="null"
                             prop="recommend"
                             label="推荐"
                             width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="产品"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="品牌">
            </el-table-column>
            <el-table-column
              prop="classify"
              label="分类">
            </el-table-column>
            <el-table-column
              prop="address"
              label="销售值">
            </el-table-column>
          </el-table>
        </el-col>
      <!--table表格结束-->
        <!--右侧筛选条件-->
        <el-col :span="4" class="refine">
          <div class="grid-content bg-purple">
            <h3>Refine by <a href="#" class="search-clean-all" @click="clearAll()">Clean all</a></h3>
            <div class="search-option">
              <ul id="selected_items">
                <li v-for="item in selectPrice" :key="item.id" @click="togglePrice(item.id)">
                  <span>{{item.optText}}</span><span class="iconfont icon-cuowu"></span>
                </li>
                <li v-for="item in selectBrand" :key="item.id" @click="toggleBrand(item.optValue)">
                  <span>{{item.optText}}</span><span class="iconfont icon-cuowu"></span>
                </li>
                <li v-for="item in selectCat" :key="item.id" @click="toggleCat(item.optValue)">
                  <span>{{item.optText}}</span><span class="iconfont icon-cuowu"></span>
                </li>
                <li v-for="item in selectTpd" :key="item.id" @click="toggleTpd(item.optValue)">
                  <span>{{item.optText}}</span><span class="iconfont icon-cuowu"></span>
                </li>
              </ul>
            </div>
            <div class="search-filter">
              <div class="search-info">
                <h4>价格</h4>
                <ul>
                  <li :class="{select: item.selected}" v-for="item in priceRange" :key="item.id" @click="togglePrice(item.id)">
                    <span class="text">{{item.optText}}</span><span class="iconfont icon-ziyuan"></span>
                  </li>
                </ul>
              </div>
              <div class="search-info">
                <h4>品牌</h4>
                <ul>
                  <li :class="{select: item.selected}" v-for="item in brandOption" :key="item.optValue" @click="toggleBrand(item.optValue)">
                    <span class="text">{{item.optText}}</span><span class="iconfont icon-ziyuan"></span>
                  </li>
                </ul>
              </div>
              <div class="search-info">
                <h4>分类</h4>
                <ul>
                  <li :class="{select: item.selected}" v-for="item in catOption" :key="item.id" @click="toggleCat(item.optValue)">
                    <span class="text">{{item.optText}}</span><span class="iconfont icon-ziyuan"></span>
                  </li>
                </ul>
              </div>
              <div class="search-info">
                <h4>TPD</h4>
                <ul>
                  <li :class="{select:item.selected}" v-for="item in TPDSelect" :key="item.id" @click="toggleTpd(item.optValue)">
                    <span class="text">{{item.optText}}</span><span class="iconfont icon-ziyuan"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <!--右侧筛选条件-->
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        recommend: '1',
        name: 'MOD',
        address: 'IJOY'
      }, {
        recommend: '2',
        name: 'c-II',
        address: 'ELEAF'
      }, {
        recommend: '3',
        name: 'Kit',
        address: 'SMOK'
      }, {
        recommend: '4',
        name: 'PROSEE',
        address: 'JOYETECH'
      }],
      // 价格
      priceRange: [
        {optText: '0-30', id: '1', selected: false},
        {optText: '30-60', id: '2', selected: false},
        {optText: '60-100', id: '3', selected: false},
        {optText: '100以上', id: '4', selected: false}
      ],
      // 品牌
      brandOption: [
        {optText: 'ijoy', optValue: '1', selected: false},
        {optText: 'smok', optValue: '2', selected: false},
        {optText: 'eleaf', optValue: '3', selected: false},
        {optText: 'aspire', optValue: '4', selected: false},
        {optText: 'widmec', optValue: '5', selected: false},
        {optText: 'joyetech', optValue: '6', selected: false},
        {optText: 'geekvape', optValue: '7', selected: false},
        {optText: 'vaporesso', optValue: '8', selected: false}
      ],
      // 分类
      catOption: [
        {optText: 'Mod', optValue: '1', selected: false},
        {optText: 'Kit', optValue: '2', selected: false},
        {optText: 'Tank', optValue: '3', selected: false},
        {optText: 'E-juice', optValue: '4', selected: false},
        {optText: 'Accessory', optValue: '5', selected: false}
      ],
      // TPD
      TPDSelect: [
        {optText: 'hasTPD', optValue: 'true', selected: false},
        {optText: 'NoTPD', optValue: 'false', selected: false}
      ]
    }
  },
  computed: {
    selectPrice () {
      return this.priceRange.filter(item => item.selected === true)
    },
    selectBrand () {
      return this.brandOption.filter(item => item.selected === true)
    },
    selectCat () {
      return this.catOption.filter(item => item.selected === true)
    },
    selectTpd () {
      return this.TPDSelect.filter(item => item.selected === true)
    }
  },
  methods: {
    togglePrice (id) {
      this.priceRange.filter(item => {
        if (item.id === id) {
          item.selected = !item.selected
        } else {
          item.selected = false
        }
      })
    },
    toggleBrand (value) {
      this.brandOption.filter(item => {
        if (item.optValue === value) {
          item.selected = !item.selected
        } else {
          item.selected = false
        }
      })
    },
    toggleCat (value) {
      this.catOption.filter(item => {
        if (item.optValue === value) {
          item.selected = !item.selected
        } else {
          item.selected = false
        }
      })
    },
    toggleTpd (value) {
      this.TPDSelect.filter(item => {
        if (item.optValue === value) {
          item.selected = !item.selected
        } else {
          item.selected = false
        }
      })
    },
    clearAll () {
      this.priceRange.forEach(item => (item.selected = false))
      this.brandOption.forEach(item => (item.selected = false))
      this.catOption.forEach(item => (item.selected = false))
      this.TPDSelect.forEach(item => (item.selected = false))
    }
  }
}
</script>

<style scoped>
  /*右侧筛选条件*/
  .refine{
    height: 100%;
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 8px 10px;
  }
  .refine li{
    display: inline-block;
    padding: 2px 5px;
    border: 1px solid #929292;
    margin: 5px 8px 8px 5px;
    border-radius: 2px;
    position: relative;
    font-size: 14px;
    cursor: pointer;
  }
  .refine li .iconfont{
    position: absolute;
    bottom: -1px;
    right: -5px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    z-index: 2;
  }
  /*清除按钮*/
  .search-clean-all {
    float: right;
    color: #fff;
    width: 68px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background-color: #e10b0b;
    border-radius: 4px;
    font-size: 14px;
    font-weight: normal;
  }
  /*右侧筛选条件*/
  .search-option {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 16px;
    overflow: hidden;
  }
  .search-info li .iconfont{
    display: none
  }
  .search-info li.select{
    border:solid 1px  #e10b0b
  }
  .search-info li.select .iconfont{
    display: block;
    color: #e10b0b

  }
</style>
