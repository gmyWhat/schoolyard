<template>
  <div>
      <transition name='fead'>
             <div class="mask" v-if="open">{{mes}}</div>
      </transition>
  </div>
</template>

<script>
export default {
    data(){
        return {
            mes:'',
            open:false
        }
    }
}
</script>

<style>
     .mask{
         width:80%;
         height:50px;
         background: rgba(100, 100, 100, .3);
         color: #fff;
         line-height: 50px;
         text-align: center;
         position: fixed;
         left: 10%;
         top: 50%;
         margin-top: -25px;

   }
.fead-enter-active, .fead-leave-active {
  transition: opacity .5s;
}
.fead-enter, .fead-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>