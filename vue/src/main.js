import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import './assets/scss/main.scss'

Vue.prototype.$axios = axios; //在Vue中使用this.$axios來去使用axios
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
