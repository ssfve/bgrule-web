import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import 'mint-ui/lib/style.css'

import {
  Button, IndexList, IndexSection, Cell, Search, Header, InfiniteScroll, Spinner
}
from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.component(Button.name, Button)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search)
Vue.component(Header.name, Header)
Vue.component(Spinner.name, Spinner)

import SliderMenu from './components/SliderMenu.vue'

Vue.component('slider-menu', SliderMenu)

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
