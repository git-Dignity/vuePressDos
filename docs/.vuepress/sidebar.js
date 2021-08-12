module.exports = {
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
        title: '工具类组件',
        collapsable: true,
        children: [
          'javascript-tool-class/install',
          {
            title: 'Tool',
            collapsable: true,
            children: [
              'javascript-tool-class/tool/use',
              'javascript-tool-class/tool/hide',
              'javascript-tool-class/tool/hasClass',
              'javascript-tool-class/tool/toggleClass',
              'javascript-tool-class/tool/getScrollPosition',
              'javascript-tool-class/tool/elementContains',
              'javascript-tool-class/tool/elementIsVisibleInViewport',
              'javascript-tool-class/tool/getImages',
              'javascript-tool-class/tool/detectDeviceType',
              'javascript-tool-class/tool/currentURL',
              'javascript-tool-class/tool/getURLParameters',
              'javascript-tool-class/tool/off',
              'javascript-tool-class/tool/formatDuration',
              
              

              'javascript-tool-class/tool/tool'
            ]
          },
          {
            title: 'Check',
            collapsable: true,
            children: [
              'javascript-tool-class/check/use',
              'javascript-tool-class/check/check'
            ]
          },
          {
            title: 'DateOperation',
            collapsable: true,
            children: [
              'javascript-tool-class/dateOperation/use',
              'javascript-tool-class/dateOperation/dateOperation'
            ]
          },
          {
            title: 'Storage',
            collapsable: true,
            children: [
              'javascript-tool-class/storage/use',
              'javascript-tool-class/storage/storage'
            ]
          },
          {
            title: 'Browser',
            collapsable: true,
            children: [
              'javascript-tool-class/browser/use',
              'javascript-tool-class/browser/browser'
            ]
          }
        ]
      },
      {
        title: '布局类组件',
        collapsable: true,
        children: []
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
        collapsable: true,
        children: [
            'css/css',
        ]
      },
      {
        title: 'JS知识库',
        collapsable: true,
        children: [
            'js/js',
        ]
      },
      {
        title: 'node知识库',
        collapsable: false,
        children: [
            'node/node',
        ]
      },
      {
        title: 'vue知识库',
        collapsable: false,
        children: [
            'vue/vue',
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