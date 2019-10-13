const routes = [{
        path: '/index',
        name: 'index',
        children: [{
                path: 'home',
                name: 'home',
                component: () =>
                    import ("@/views/index/home/home.vue"),
                meta: {
                    login: true,
                    title: "首页"
                }
            },
            {
                path: 'classify',
                name: 'classify',
                component: () =>
                    import ("@/views/index/classify/classify.vue"),
                meta: {
                    login: false,
                    title: "分类"
                }
            },
            {
                path: 'car',
                name: 'car',
                component: () =>
                    import ("@/views/index/car/car.vue"),
                meta: {
                    login: true,
                    title: "购物车"
                }
            },
            {
                path: 'my',
                name: 'my',
                component: () =>
                    import ("@/views/index/my/my.vue"),
                meta: {
                    login: true,
                    title: "我的"
                }
            },
        ],
        component: () =>
            import ('@/views/index/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () =>
            import ('@/views/detail/detail.vue'),
        meta: {
            login: false,
            title: "详情"
        }
    },
    {
        path: '/enter',
        name: 'enter',
        component: () =>
            import ('@/views/enter/enter.vue'),
        meta: {
            login: false,
            title: '登录'
        }
    },
    {
        path: '/enroll',
        name: 'enroll',
        component: () =>
            import ('@/views/enroll/enroll.vue'),
        meta: {
            login: false,
            title: "注册"
        }
    },
    {
        path: '/',
        redirect: 'index/home'
    }

]
export default routes