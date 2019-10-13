<template>
  <div class="classify">
      <div class="left">
        <ul class="left_ul">
          <li v-for="(item,index) in leftarr" :key="index" @click="shopFn(index)" :class="{active:ind===index}">{{item.title}}</li>
        </ul>
      </div>
      <div class="right">
        <ol class="right_ol" v-if="leftarr[ind]&&leftarr[ind].children">
          <li v-for="(item,index) in leftarr[ind].children" :key="index" @click="shopR(index)" :class="{tag:iso===index}">{{item.name}}</li>
        </ol>
        <div class="list_scroll">
          <div>
            <!-- v-if="this.leftarr[this.ind]&&this.leftarr[this.ind].children.length==0"容错处理 -->
            <div v-if="this.leftarr[this.ind]&&this.leftarr[this.ind].children.length==0">暂无数据</div>
              <Item v-for="(item,index) in rightarr" :key="index" :item='item' v-else/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {shopType,selectType} from '@/api/api'
import Item from '@/components/item.vue'
import BScroll from 'better-scroll'
export default {
     data(){
       return {
           leftarr:[],
           rightarr:[],
           ind:0,
           iso:0,
       }
     },
     components:{
       Item
     },
     async created(){
       //请求列表接口
       let leftlist= await shopType()
        //console.log(leftlist)
        
        this.leftarr=leftlist.data.data
         this.getlist()
        this.$nextTick(()=>{
          new BScroll('.list_scroll',{
            //better-scroll 中会默认的禁用点击事件的发生  所以要通过设置使其解放出来
            click:true
          })
        })
     },
     methods:{
       //点击左边的列表
        async shopFn(index){
        this.ind=index
        //因为每个列表对应的子列表的个数不同（ this.iso=index）所以在点击切换数据时要将this.iso=0
        this.iso=0;
        this.getlist()
         },
       //点击右边tag列表
        async shopR(index){
        this.iso=index
        this.getlist()
      },
      //动态的获取数据函数
      async getlist(){
        //因为有的数据没有值所以要进行容错处理
       let category_id=this.leftarr[this.ind].children.length>0&&this.leftarr[this.ind].children[this.iso].id
        let rightlist=await selectType({type_id:this.leftarr[this.ind].id,category_id:category_id})
         console.log(rightlist)
        this.rightarr=rightlist.data.data
      }
     }
    
}
</script>
    
<style scoped>
   .classify{
     width:100%;
     height:100%;
      display: flex;

   }
   .left{
     width:80px;
     height:100%;
     border-right:1px solid #ccc;
     background: rgba(0, 0, 0, .5);
   }
   .left ul{
     width:100%;
     height:100%;
     color:#fff;
   }
   .left ul li{  
     width:100%;
     height:44px;
     border-bottom: 1px dashed #ccc;
     text-align: center;
     line-height: 44px;
   }
   .left ul li.active{
      background: skyblue;
      color: #f40;
   }
   .right{
     flex: 1;
     height:100%;
     display: flex;
     flex-direction: column;
   }
   .right ol{
     width:100%;
     height:50px;
     display: flex;
     align-items: center;
   }
    .right ol li{
      padding: 0 15px;
       
    }
    .right ol li.tag{
      color:#f40;
    }
    .list_scroll{
         flex:1;
         width:100%;
         overflow: hidden;
    }
</style>