<template>
<div>
   <div v-if="getCar&&getCar.length==0">暂无添加购物车的商品...</div>
   <dl v-for="(item,index) in getCar" :key="index" v-else>
    <dt>
      <img :src="item.shopdata.cover" alt="">
    </dt>
    <dd>
        <h4>{{item.shopdata.name}}</h4>
        <div class="price">
          <span>价格：<b>{{item.shopdata.price}}</b>元</span>
          <p>数量：
            <span class="jia" @click="jia(item.shopdata.id)">+</span> 
            <span>{{item.count}}</span>
            <span class="jian" @click="jian(item.shopdata.id)">-</span>
          </p>
        </div>
        <button @click="removeShop(item.shopdata.id)">删除</button>
    </dd>
  </dl>
</div>
 
</template>

<script>
import {getUserInfo,getCar,addCar,removeshop,delectshop} from '@/api/api'
import Item from '@/components/item.vue'
export default {
    data(){
      return {
        getCar:[],
        uid:-1
      }
    },
     async created(){
       //获取用户信息
        let user=await getUserInfo()
         this.uid=user.data.data.uid
         this.getCars()
         this.$store.commit('getdatas',this.getCar)
         console.log(this.$store.state.commlit)
        
    
    },
   methods:{
      async getCars(){
         //获取商品信息
        let res=await getCar({user_id:this.uid})
        //console.log(res.data.data)
        this.getCar=res.data.data
       
      },
      //增加数量函数
      async jia(id){
       let res= await addCar({user_id:this.uid,shop_id:id}) 
        this.getCars()
        // console.log(res.data.code)
        // if(res.data.code==1){
        //    console.log(123)
        //   this.$router.go()
        // }
      },
      //删除数量
      async jian(id){
        try{
           let res=await delectshop({user_id:this.uid,shop_id:id})
         this.getCars()
        }catch(e){
          console.log(e.response)
          if(e.response.data.code==0){//确认删除的提示框
            //确认后调用删除函数
           window.confirm("您确定要删除")
           this.removeShop(id)
          }
        }
      
      },
      //删除商品
      async removeShop(id){
        let res= await removeshop({user_id:this.uid,shop_id:id})
         this.getCars()
        // console.log(res.data.code)
        //  if(res.data.code==1){
        //    console.log(123)
        //   this.$router.go()
        // }
        
      }
    }
}
</script>

<style scoped>
 dl{
     width:100%;
     height:auto;
     display: flex;
     margin: 5px 0;
     border-bottom: 1px solid #ccc;
     background: #fff;
 }
 dl dt{
    width:120px;
    height:120px;
 }
 dl dt img{
     width:100%;
     height:100%;
     display: block;
 }
 dl dt dd{
     flex: 1;
     height:120px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
 }
 dl dd h4{
   font-size: 15px;
   font-weight:900
    
 }
 .price{
     width:100%;
     height:40px;
     margin-top: 20px;
     display: flex;
     justify-content: space-between;
 }
 .price>span b{
   color: red;
 }

 .price p{
   display: flex;
 }
 .jia,.jian{
   display: block;
   width:25px;
   height:25px;
   background: rgba(0, 0, 0, .5);
   text-align: center;
   line-height: 25px;
   font-size: 14px;
   

 }
</style>