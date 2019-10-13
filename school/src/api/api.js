import httpAxios from '@/untls/http.js'
//登录
export const login = (params) => httpAxios.post('/api/user/login', params);
//注册
export const registry = (params) => httpAxios.post('/api/user/registry', params);
//首页轮播图接口
export const bannerc = () => httpAxios.get("/api/home/banner")
    //列表接口
export const shoplist = (params) => httpAxios.get('/api/home/shop', { params }) //在httpAxios中get和post的传参方式略有不同
    //获取分类页面的分类
export const shopType = () => httpAxios.get('/api/shop/shopType')
    //筛选分类页面商品
export const selectType = (obj) => httpAxios.get('/api/shop/selectType', {
        params: obj
    })
    //export const selectType = (params) => httpAxios.get('/api/shop/selectType', { params })
    //添加购物车
export const addCar = (params) => httpAxios.post('/api/car/addCar', params)
    //获取用户信息
export const getUserInfo = () => httpAxios.get('/api//user/getUserInfo');
//获取购物车商品
export const getCar = (params) => httpAxios.get('/api/car/getCar', { params })
    //删除商品
export const removeshop = (params) => httpAxios.post('/api/car/removeShop', params)
    //删除商品件数
export const delectshop = (params) => httpAxios.post('/api/car/removeCar', params)