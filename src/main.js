import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import store from './store'
import router from './router'
import '@/directives'
import '@/filters'

import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
Vue.component('btn', {
  data() {
    return {
      a: 1
    }
  },
  template: '<button>{{a}}</button>'
})
Vue.config.productionTip = false
// Object.keys(directives).forEach(key => {
//   Vue.directive(key, (directives)[key])
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
