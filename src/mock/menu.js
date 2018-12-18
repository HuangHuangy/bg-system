const menuData = [
  {
    icon: 'el-icon-location',
    index: '1',
    title: 'Example1',
    subs: [
      {
        icon: 'el-icon-document',
        index: 'table',
        title: 'table'
      },
      {
        icon: 'el-icon-document',
        index: 'tree',
        title: 'tree'
      }
    ]
  },
  {
    icon: 'el-icon-document',
    index: '2',
    title: 'echarts',
    subs: [
      {
        icon: 'el-icon-document',
        index: 'bar-basic',
        title: 'bar'
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    index: 'form',
    title: 'Form'
  },
  {
    icon: 'el-icon-document',
    index: '3',
    title: 'Nested',
    subs: [
      {
        icon: 'el-icon-document',
        index: 'menu1',
        title: 'Menu1',
        subs: [
          {
            icon: 'el-icon-document',
            index: 'menu1-1',
            title: 'Menu1-1'
          },
          {
            icon: 'el-icon-document',
            index: 'menu1-2',
            title: 'Menu1-2'
          },
          {
            icon: 'el-icon-document',
            index: 'menu1-3',
            title: 'Menu1-3'
          }
        ]
      },
      {
        icon: 'el-icon-document',
        index: 'menu2',
        title: 'Menu2'
      }
    ]
  }
]

export default {
  getMenuData: config => {
    return menuData
  }
}
