import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/scss/main.scss'
// import '../public/js/bootstrap-native.min.js'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
