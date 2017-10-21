import Vue from 'vue'
import App from './App.vue'

 import touch from 'vue-touch'

//引入路由
import VueRouter from "vue-Router"
Vue.use(VueRouter)
import routes from "./config_router";
const router = new VueRouter({
  routes:routes,
  mode:'history'
})

import "./assets/css/index.css";
import "./assets/css/base.css";

import axios from 'axios';
axios.defaults.withCredentials=true;//统一携带跨源凭证
Vue.prototype.$http = axios;

import store from "./store/"




new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store,

})


