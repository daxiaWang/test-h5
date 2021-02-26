import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)

export const constantRoutes = [{
        path: '/',
        redirect: 'login',
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/index'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/index',
        name: 'index',
        component: () =>
            import ('@/views/index/index'),
        meta: {
            title: '购票',
            keepAlive: false
        }
    }
]

const createRouter = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    })
const router = createRouter()

// 全局导航守卫
router.beforeEach((to, from, next) => {
    to.matched.map(item => {
            if (item.meta.keepAlive) {
                store.commit('setKeepAlive/setKeepAlive', item.name)
            }
        })
        // 对组件B进行动态缓存
    next()
})

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router