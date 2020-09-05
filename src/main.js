import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/init.css'
import './static/icon/fontImg/iconfont'
import './static/icon/fontImg/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
