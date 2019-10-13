<template>
  <div class="index">
        <div class="main">
           
        <router-view/>
       
      </div>
       <keep-alive include="index">
      <footer class="footer">
      
            <dl v-for="(item,index) in foot" :key="index" @click="gotoTab(index)" :class="{active:index===ind}">
            <dt>
              <img :src="index==ind?require('@/images/'+item.active):require('@/images/'+item.img)" alt="">
            </dt>
            <dd>
              {{item.txt}}
            </dd>
          </dl>
        
      </footer>
       </keep-alive>
  </div>
</template>

<script>
export default {
   name:'index',
   data(){
     return {
        foot: [
        {
          txt: "首页",
          url: "/index/home",
          img: "首页.png",
          active: "首页1.png"
        },
        {
          txt: "分类",
          url: "/index/classify",
          img: "分类.png",
          active: "分类1.png"
        },
        {
          txt: "购物车",
          url: "/index/car",
          img: "购物车.png",
          active: "购物车1.png"
        },
        {
          txt: "我的",
          url: "/index/my",
          img: "我的.png",
          active: "我的1.png"
        }
      ],
      ind:0
     }
   },
   methods:{
     gotoTab(index){
       this.ind=index
       console.log(this.foot[index].url)
       this.$router.push({path:this.foot[index].url}).catch(el=>{})
     }
   }
}
</script>

<style scoped>
   .main{
      width:100%;
      flex: 1;
      background: #f4f4f4;
      overflow: hidden;
   }
    
    .footer{
      width:100%;
      height:50px;
     border-top: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
    }
    .footer dl{
       width:20%;
       height:50px;
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: center;
    }
    .footer dl.active{
      color: red;
    }
     .footer dl dt{
       width:30px;
       height:30px;
     }
     .footer dl dt img{
       width:100%;
       height:100%;

     }
</style>