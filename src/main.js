import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Row, Col, Icon, Button, Image, Popup } from 'vant'
import 'vant/lib/index.css'

Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Image)
Vue.use(Popup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
