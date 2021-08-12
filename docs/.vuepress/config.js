const nav = require('./nav')  // 添加导航栏
const sidebar = require('./sidebar')  // 为以下路由添加侧边栏

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
    nav,

    // 为以下路由添加侧边栏
    sidebar
  },
  plugins:[
    'fulltext-search' // 全文搜索
  ] 
}