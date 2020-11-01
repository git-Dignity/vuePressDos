module.exports = {
  title: '郑泽敏个人文档', // 设置网站标题
  // title: '文档',
  // base: '/vuePressDos/',   // github
  base: '/',  //阿里云服务器
  description: '音乐博客', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口

  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/componentDos/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '数据库', link: '/sql/' },
      { text: '开发规范', link: '/devSpecification/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'vuePress', link: 'https://github.com/git-Dignity/vuePressDos' },
          { text: '个人音乐博客', link: 'https://github.com/git-Dignity/vueAndTsAndKoa2' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/componentDos/': [
        {
          title: '指南',
          collapsable: true,
          children: [
            'guide/install',
            'guide/updateLog'
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
            'visualization/button',
            'visualization/turntable'
          ]
        },
        {
          title: '布局类组件',
          collapsable: true,
          children: []
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ],
      '/sql/': [
        {
          title: 'MYSQL',
          collapsable: true,
          children: [
            'mysql/createTableStatute',
            'mysql/indexStatute',
            'mysql/sqlStatement',
            'mysql/orm'
          ]
        }
      ],
      '/devSpecification/': [
        {
          title: '开发规范',
          collapsable: true,
          children: [
            'base/namingStyle',
            'base/codeFormat',
            'base/dateTime',
            'base/controlStatement',
            'base/codeComment',
            'base/order'
          ]
        },
        {
          title: '前后端对接规范',
          collapsable: true,
          children: [
            'interfaceSpecification/apiRequest',
            'interfaceSpecification/apiRespone',
            'interfaceSpecification/apiOther'

          ]
        },
        {
          title: '异常日志',
          collapsable: true,
          children: [
            'err/errCode',
            'err/errProcessing',
            'err/errLog'
          ]
        },
        {
          title: '安全规约',
          collapsable: true,
          children: [
            'safety/securityProtocol',
          ]
        },
        {
          title: '服务器',
          collapsable: true,
          children: [
            'server/config'
          ]
        },
        {
          title: '设计规约',
          collapsable: true,
          children: [
            'designSpecification/designSpecification'
          ]
        },
        {
          title: '专有名词解释',
          collapsable: true,
          children: [
            'properNouns/explanation'
          ]
        },
        {
          title: 'HTML命名规范',
          collapsable: true,
          children: [
            'htmlNameSpecification/htmlNameSpecification'
          ]
        },
      ]
    }
  }
}