import VendorComponent from './vendor.vue'

const todal = {
    install(Vue) {
        //console.log(Vue)
        //创建一个vue子类 用extend
        let ToastContructor = Vue.extend(VendorComponent)
            //实例化子类组件
        let instate = new ToastContructor()
            //j将实例挂载到一个元素上面
        instate.$mount(document.createElement("div"))
        console.log(instate.$el) //实例挂载后可以用$el进行访问
            //添加到body里面
        document.body.appendChild(instate.$el)
        Vue.prototype.$todal = (mes, durtion = 1500) => {
            instate.open = true
            instate.mes = mes
                //消失
            setTimeout(() => {
                instate.open = false
            }, durtion)
        }
    }
}
export default todal