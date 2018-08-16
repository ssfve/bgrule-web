import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import 'mint-ui/lib/style.css'
import {
  Button, IndexList, IndexSection, Cell, Search
}
from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search)

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
