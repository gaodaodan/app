<template>
  <div>
      <div id="frame" ref="menuWrapper">
          <div class="bor">
              <li class="op1" @click="btn(1)">1</li>
              <li class="op2" @click="btn(2)">2</li>
              <li class="op3" @click="btn(3)">3</li>
              <li class="op1" @click="btn(4)">4</li>
              <li class="op2" @click="btn(5)">5</li>
              <li class="op3" @click="btn(6)">6</li>
              <li class="op1" @click="btn(7)">7</li>
              <li class="op2" @click="btn(8)">8</li>
              <li class="op3" @click="btn(9)">9</li>
              <li class="op1" @click="btn(10)">10</li>
              <li class="op2" @click="btn(11)">11</li>
              <li class="op3" @click="btn(12)">12</li>
          </div>
      </div>
    <div id="frame2"  ref="pp">
        <div class="bor2">
          <div class="pp">1</div>
          <div class="pp">2</div>
          <div class="pp">3</div>
          <div class="pp">4</div>
          <div class="pp">5</div>
          <div class="pp">6</div>
          <div class="pp">7</div>
          <div class="pp">8</div>
          <div class="pp">9</div>
          <div class="pp">10</div>
          <div class="pp">11</div>
          <div class="pp">12</div>
        </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default{
    data (){
      return {}
    },

    methods:{
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
//          scrollX:true
        });
      },
      _scroll() {
        this.aa = new BScroll(this.$refs.pp, {
          click: true
//          scrollX:true
        });
      },

    btn(index){
      let foodList = this.$refs.foodWrapper.getElementsByClassName('pp');
      let el = foodList[index];
      this.aa.scrollToElement(el, 300);
    }

    },
    created(){
      this.$nextTick(() => {
        this._initScroll();
        this._scroll();
      });
    }

  }
</script>
<style scoped>
    #frame{
      width:100px;height:400px;
      border:1px solid #000;
      overflow:hidden;
      margin:50px auto;
      margin-left:10px;
      float:left;
    }
    #frame2{
      width:200px;height:600px;
      border:1px solid #000;
      overflow:hidden;
      float:left;
    }
    .bor{
       width:100px;
       height:600px;
     }
    .bor2{
      width:200px;
      height:1200px;
    }
    li{
      list-style:none;
      text-aline:center;
      left:0;
      top: 0;
      width:100px;height:50px;
      line-height:50px;
      text-aline:center;
      font-size:20px;
    }
    .pp{
      list-style:none;
      text-aline:center;
      left:0;
      top: 0;
      width:200px;height:100px;
      line-height:50px;
      text-aline:center;
      font-size:20px;
    }
    .op1{
      background:#89a;

    }
    .op2{
      background:red;
    }
    .op3{
      background:green;
    }

</style>