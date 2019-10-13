import axios from 'axios'
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
let httpAxios = axios.create()

// 添加请求拦截器
httpAxios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // console.log({ config }, "@@@@@@")
    return {
        //通过...的方式展开config对象
        ...config,
        //对config中的headers属性进行覆盖式添加
        headers: {
            ...config.headers,
            Authorization: window.localStorage.token
        }
    }
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httpAxios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default httpAxios