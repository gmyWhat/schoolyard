<template>
  <dl class="item" @click="detailFn(item)">
      <dt>
          <img :src="item.cover" alt="">
      </dt>
      <dd>
          <h4>{{item.name}}</h4>
          <p>{{(item.volume/1000).toFixed(1)}}万</p>
          <div class="price">
             <span>{{item.price}}元</span>
             <span @click.stop="addshop(item.id)">购物车</span>
          </div>
      </dd>
  </dl>
</template>

<script>
import {addCar,getUserInfo} from '@/api/api'
export default {
    name:'item',
      props:{
          item:{
              type:Object,
              default:()=>{
                  return {}
              }
          }
      },
      methods:{
          //跳转详情
          detailFn(item){
              //console.log(item)
              this.$router.push({path:'/detail',
              query:{
                  detail:item.detail
              }
              })
          },
          //点击添加购物车
         async addshop(id){
             try{
                 //获取用户信息
              let user=await getUserInfo()
              //获取用户Id
                let user_id=user.data.data.uid
                //添加购物车
                console.log(user_id,id)
                console.log(addCar)
                let res=await addCar({shop_id:id,user_id:user_id})
                console.log(res)
             } catch(e){
                 console.log(e.response)
             }
           
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
</style>