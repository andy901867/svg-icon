import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import './assets/scss/main.scss'
import routes from './route.js'

Vue.prototype.$axios = axios; //在Vue中使用this.$axios來去使用axios
Vue.use(VueRouter);
const router = new VueRouter({
  routes:routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
