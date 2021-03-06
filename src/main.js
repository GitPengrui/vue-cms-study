// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入mint-ui和样式文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 安装mint-ui所有组件
Vue.use(MintUI)

// import iconfont from './icons/iconfont.css'

// 导入公共样式
import './styles/common.css'

//导入mui的css文件
import './lib/mui/css/mui.css'
//导入mui的扩张图标css
import './lib/mui/css/icons-extra.css'

//引入moment插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function( dataStr, pattern=" YY-MM-DD HH:mm:ss " ){
  return moment(dataStr).format(pattern)
})

//注册全局组件
import comment from './components/comment.vue'
Vue.component('comment', comment )

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入vue-pic-preview
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

//设置vue-resource的请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
