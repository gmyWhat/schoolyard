<template>
  <div class="enter">
    <p>
       手机号:<input type="text" v-model="phone">
    </p>
     <p>
       密码:<input type="password" v-model="pwd">
    </p>
   <p>
     <button @click="gotologin">登录</button>
   </p>
   <p v-if="show">
     <button v-if="show" @click="gotoenorll">注册</button>
   </p>
  </div>
</template>

<script>
import {login} from '@/api/api'
export default {
     name:'enter',
     data(){
       return{
         phone:'',
         pwd:'',
         show:false
       }
     },
     methods:{
      async gotologin(){
           try {
             let res=await login({phone:this.phone,password:this.pwd})//成功执行try里面的逻辑
             console.log(res)
             //登录成功后跳转到点击页面 并将token存储到本地
             if(res.data.code==1){
                window.localStorage.token=res.data.data.token
                this.$router.push({path:this.$route.query.redirect})
             }

           } catch(e){//失败后执行
             //登录失败后跳转注册也
            console.log(e.response)
            if(e.response.data.code==0){
              this.$todal(e.response.data.msg,3500)
              this.show=true
              //this.$router.push({path:'/enroll'})
            }
           }
       },
      gotoenorll(){
         this.$router.push({path:'/enroll'})
       }
     }
}
</script>

<style>
    .enter p{
      width:100%;
      height:50px;
      text-align: center;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      line-height: 50px;
    }
    .enter p input{
      width:60%;
      height:34px;
      border: none;
       outline: none;

    }
    .enter p button{
      width:100%;
      height:100%;
      background: skyblue;
      line-height: 50px;
      text-align: center;
      color: #fff;
      border-radius: 5px;
      outline: none;
    }
</style>