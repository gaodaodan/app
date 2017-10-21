<template>
  <div id="app">
    <headBar v-show="getNav"></headBar>
   <router-view></router-view>
    <foot v-show = "getFoot"></foot>
    <!--<home></home>-->
  </div>
</template>

<script>
  import headBar from './compontents/headBar.vue';
  import foot from './compontents/foot.vue';
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{ //挂载组件
    foot,headBar
  },
  //监听路由 控制状态管理
  computed:mapGetters([
    'getNav','getFoot'
  ]),
  mounted(){
    this.changePath(this.$route.path)
  },
  methods:{
    changePath(path){
      if(/home/.test(path)){
        this.$store.dispatch('showNav');
        this.$store.dispatch('showFoot');
      }
      if(/ass|detail/.test(path)){
        this.$store.dispatch('headNav');
        this.$store.dispatch('headFoot');
      }
      if(/car|goods|my/.test(path)){
        this.$store.dispatch('headNav');
        this.$store.dispatch('showFoot');
      }
    }
  },
  watch:{
    $route(to){
      console.log(to.path)//显示路由去哪了
      this.changePath(to.path)
    }
  }
  //路由监听结束



}
</script>

<style>

</style>
