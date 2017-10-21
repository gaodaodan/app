<template>
  <div>
    <header>
      <div class="header">
        <a class="logo" ><img src="../assets/images/index/logo.png" ></a>
        <span class="selectinput"><input type="text"  @keyup="get" v-model="ipt"><router-link class="icon_sel" :to="'/search/'+ipt" tag="i"></router-link></span>
        <a class="message"><span>消息</span></a>
        <div class="clearx"></div>
      </div>
    </header>
  </div>

</template>
<script>
   export default {
      data (){
        return{
          arr:[],
          ipt:'智能闹钟'
        }
      },
     methods:{
        get(){
          console.log(this.ipt)
        }
     }
   }
</script>