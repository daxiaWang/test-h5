import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/style/common.scss'
import '@/style/style.scss'
import 'amfe-flexible/index.js'
import './utils/vant'
import '../mock'
import router from './router'
import '@/icons'
// import '@/assets/icons'
import store from '@/store'
import "./permission.js"
// import CordHelp from './services/cordova.js'

// Vue.prototype.CordHelp = CordHelp;

Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')