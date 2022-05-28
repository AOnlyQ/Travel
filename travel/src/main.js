// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

import fastClick from 'fastclick'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000/'
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6增强写法，router: router
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同 返回不同的内容给用户
