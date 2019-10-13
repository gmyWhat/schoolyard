import Vue from 'vue'
import Router from 'vue-router'
import routes from './routerConfig'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    //判断需要守卫的路由
    // console.log(to, from)
    if (to.matched.some(item => item.meta.login)) {
        //判断是否登录
        if (!window.localStorage.token) {
            next({
                path: '/enter',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }

})
export default router