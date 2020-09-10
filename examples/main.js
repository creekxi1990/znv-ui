import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/color-brewer.css'
import './assets/styles/index.scss'
import ZnvUI from '../src/index'
import '../src/styles/index.scss'
// import './theme.scss' // 自定义主题色
import icon from './icon.config'

import ZnvCollapseTransition from '../src/components/base/collapse-transition'

import DemoBlock from './components/demo-block.vue'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
import SideNav from './components/side-nav.vue'
import ColorBase from './components/color-base.vue'
import DraggableDemo from './components/draggable-demo'

Vue.use(ZnvUI)

Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideNav', SideNav)
Vue.component('ColorBase', ColorBase)
Vue.component('DraggableDemo', DraggableDemo)
Vue.component('ZnvCollapseTransition', ZnvCollapseTransition)

Vue.prototype.$icon = icon // Icon 列表页用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
