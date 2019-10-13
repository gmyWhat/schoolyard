<template>
  <div>
      <p>
       手机号:<input type="text" v-model="phone">
    </p>
     <p>
       密码:<input type="password" v-model="pwd">
    </p>
   <p>
     <button @click="gotoenroll">注册</button>
   </p>
  </div>

</template>

<script>
import {registry} from '@/api/api'
export default {
       data(){
         return{
            phone:'',
            pwd:""
         }
       },
       methods:{
           async gotoenroll(){
             let phone=this.phone
             let password=this.pwd
             try{
               let res=await registry({phone,password:password})
                //注册成功后 返回登录页  不能push因为push后不会携带信息
                if(res.data.code===1){
                  this.$router.go(-1)
                }
             }catch(e){
                console.log(e.response)
             }
             }
       }
}
</script>

<style>

</style>