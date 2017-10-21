<template>
  <div>
    <div style="padding-top:50px" v-for="(item,index) in arr">{{item.id}}:{{item.title}}</div>
    <div class="btn" v-for="item in page" @click="btn(item)">{{item}}</div>
    <!--<ul>-->
      <!--<li v-for="val in page">{{val}}</li>-->
    <!--</ul>-->
  </div>
</template>
<style>
  .btn{width:20px;height:20px;border:1px solid #000;float:left;margin-right:2px;text-align:center;line-height:20px}
</style>
<script>
  export default{
    data(){
      return {
        arr:[],
        page:0

      }
    },
    methods:{
        btn(pag){
          this.$http({
            url:'http://localhost:3000/list',
            method:'get',
            params:{
              pages:pag
            }
          }).then((res) =>{
            console.log(res.data.a)
            this.arr = res.data.a;
          }).catch((res)=>{
            console.log(res)
          })
        }
    },
    created(){
      this.$http({
         url:'http://localhost:3000/list',
         method:'get',
         params:{
           pages:1
         }
      }).then((res) =>{
        this.arr = res.data.a;
        this.page = res.data.b;
      }).catch((res)=>{
        console.log(res)
      })
    }
  }
</script>