const menuData = [
  {
    icon: 'el-icon-location',
    index: '1',
    title: 'Example1',
    subs: [
      {
        icon: '',
        index: 'table',
        title: 'table'
      },
      {
        icon: '',
        index: 'form',
        title: 'form'
      },
      {
        icon: '',
        index: 'tree',
        title: 'tree'
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    index: '2',
    title: 'Example2',
    subs: [
      {
        icon: '',
        index: 'table',
        title: 'table'
      },
      {
        icon: '',
        index: 'form',
        title: 'form'
      },
      {
        icon: '',
        index: 'tree',
        title: 'tree'
      }
    ]
  },
  {
    icon: 'el-icon-document',
    index: '3',
    title: 'Example3'
  }
]

export default {
  getMenuData: config => {
    return menuData
  }
}
