import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入vant.js
import './plugins/vant'
// 导入css
import './assets/css/base.css'
// 导入api
import api from './api'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
