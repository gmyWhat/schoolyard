//代理
module.exports = {
    devServer: {
        proxy: { //proxy 线上请求数据是用proxy
            "/api": {
                target: "http://106.13.85.240:7002/", //线上路径
                changeOrigin: true, //是否跨域
                pathRewrite: { '^/api': '' } //
            }
        }
    }
}