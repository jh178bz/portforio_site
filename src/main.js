import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import smoothScroll from 'vue-smoothscroll'
Vue.use(VueTyperPlugin)
Vue.use(smoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
