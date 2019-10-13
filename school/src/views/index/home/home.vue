<template>
  <div class="home">
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(item,index) in list" :key="index">
             <img :src="item.image" alt="">
           </div>
         </div>
       </div>
       <div class="scroll">
            <div>
                <Item v-for="(item,index) in shoparr" :key="index" :item='item' />
                <div class="scroll_div" v-if="shows">
                   <img src="@/images/timg.gif" alt="">没有数据了
                </div>
            </div>
       </div>
  </div>
</template>

<script>
import {bannerc,shoplist} from '@/api/api'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import "swiper/css/swiper.min.css"
import Item from '@/components/item.vue'
export default {
      data(){
        return {
          list:[],
          shoparr:[],
          pageid:0,//页码
          limit	:10,
          shows:false
        }
      },
      components:{
        Item
      },
      //async await只能在async后使用 且await后边必须是promise对象
     async created(){
          //轮播图
          let res=await bannerc()
          //商品列表
         // let shop=await shoplist({pageid:this.pageid,limit:this.limit})
          //console.log(res.data.data)
          //调用加载数据函数 优化代码
          this.getdata()
          this.list=res.data.data
          this.$nextTick(()=>{
           new Swiper('.swiper-container')
           this.myScroll= new BScroll('.scroll',{
             //开启下拉
             pullDownRefresh:{
               threshold:50,
             },
             //上拉
             pullUpLoad:{
                 threshold:-50,
             },
             click:true
           })
           //上拉加载
           this.myScroll.on('pullingUp',()=>{
             console.log('上拉加载')
             this.pageid++
             this.getdata()
           })
           //下拉刷新
          this.myScroll.on('pullingDown',()=>{
               this.pageid=0//初始化页码值
               this.shoparr=[]//清空数据
               this.shows=false//提示框消失
               this.getdata()//调用请求数据函数
          })
          })
          
       
      },
      methods:{
        async getdata(){
          let shop=await shoplist({pageid:this.pageid,limit:this.limit})
           this.shoparr=this.shoparr.concat(shop.data.data)
           //通过判断请求的数据数组的长度来判断数据是否请求结束
           if(shop.data.data.length<9){
              this.shows=true
           }
           this.myScroll.refresh()//增加用户体验
           this.myScroll.finishPullUp()//当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
           this.myScroll.finishPullDown()//当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
        }
      }
}
</script>

<style scoped>
.home{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
 

}
.swiper-container{
  width:100%;
  height:200px;
}
.swiper-container img{
  width:100%;
  height:100%;
  display: block;
}
.scroll{
  flex:1;
  width:100%;
  overflow: hidden;
}
.scroll_div{
  width:100%;
  height:50px;
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;

}
.scroll_div img{
  width:120px;
  height:48px;;
  display: block;
 background: rgba(0, 0, 0, .3);
}
</style>