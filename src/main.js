// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import WebFont from 'webfontloader'

import 'normalize.css/normalize.css'
import './styles/grid.scss'
import './styles/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

WebFont.load({
  google: {
    families: ['Noto Serif:400,700:vietnamese', 'Noto Sans:400,700:vietnamese']
  }
})
