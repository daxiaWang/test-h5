import Vue from 'vue'
import router from './router'
import { Toast } from 'vant'
import store from "./store"
import getPageTitle from '@/utils/get-page-title'
Vue.use(Toast)
router.beforeEach(async(to, from, next) => {
    // if (store.getters.token) {
    //     document.title = getPageTitle(to.meta.title)
    //     next()
    // } else {
    //     store.dispatch("user/GetUserLogin").then(() => {
    next()
        //     })
        // }
})