import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import smoothScroll from 'vue-smoothscroll'
import VueCarousel from 'vue-carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe,faBlog,faBirthdayCake,faImage,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare,faDocker,faAws,faBootstrap,faBitbucket } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare,faDocker,faAws,faBootstrap,faBitbucket,faEnvelope)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueTyperPlugin)
Vue.use(smoothScroll)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
