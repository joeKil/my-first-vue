import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import * as common from '@/filter'
import cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.kr'
import datepicker from 'vuejs-datepicker'
import { BProgress, ProgressPlugin, BButton } from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import ProgressBar from 'vue-simple-progress'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.common = common
Vue.use(cleave)
Vue.use(datepicker)
Vue.component('b-progress', BProgress)
Vue.use(ProgressPlugin)
Vue.component('b-button', BButton)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.component('progress-bar', ProgressBar)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
