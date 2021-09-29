// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6增强写法，router: router
  router,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同 返回不同的内容给用户
