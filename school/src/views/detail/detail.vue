<template>
  <div class="detail">
    <div class="headers">
     <span @click="back()"><</span>
     <span>详情</span>
     <span></span>
    </div >
     <div v-html="html"  class='v_html'></div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        html:''
      }
    },
    created(){
      this.html=this.$route.query.detail
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
}
</script>

<style >
.detail{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.headers{
  width:100%;
  height:50px;
  background: rgba(100, 100, 100, .9);
  color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v_html{
  flex:1;
  width:100%;
  overflow-y: auto;
}
.v_html img{
  width:100%;
  height:100%;
  display: block;
}
</style>