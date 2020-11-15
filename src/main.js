import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Echarts from 'echarts'
import VCharts from 'v-charts'
import VueECharts from 'vue-echarts'
import './style/index.css'

Vue.use(VCharts)

Vue.config.productionTip = false
Vue.prototype.$Echarts = Echarts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
