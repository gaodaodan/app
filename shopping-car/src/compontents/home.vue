<template>
  <div>



    <!--轮播图dflfjdsl-->
    <div class="m-slider" id="slider">
      <div class="ks_dbox ks_ts">
        <div class="ks_wrap">
          <img src="../assets/images/index/banner1.jpg">
        </div>
        <div class="ks_wrap">
          <img src="../assets/images/index/banner1.jpg">
        </div>
        <div class="ks_wrap">
          <img src="../assets/images/index/banner1.jpg">
        </div>
      </div>
      <div class="ks-circles"><ul class="ks_wt"></ul></div>
    </div>


    <!--导航图标-->
    <nav>
      <div class="nav-box">
        <router-link to="/paging"><img src="../assets/images/index/nav01.png"><span>赶集</span></router-link>
        <router-link to="/event"><img src="../assets/images/index/nav02.png"><span>分类</span></router-link>
        <a href="javascript:;"><img src="../assets/images/index/nav03.png"><span>预告</span></a>
        <a href="javascript:;"><img src="../assets/images/index/nav04.png"><span>优品</span></a>
        <a href="javascript:;"><img src="../assets/images/index/nav05.png"><span>特卖</span></a>
        <div class="clearx"></div>
      </div>
    </nav>


    <!--滚动图片-->
    <div class="scrollpic">
      <div class="tit1"><img src="../assets/images/index/tit1.jpg" ></div>
      <div class="scrollul">
        <ul>
          <li v-for="(item,index) in arr1" :key="index"><router-link :to="'/detail/'+item.id">
            <img :src="item.img">
            <span><nobr>{{item.title}}</nobr></span>
            <b>{{item.many}}</b>
          </router-link>
          </li>


          <div class="clearx"></div>
        </ul>
      </div>
      <div class="clearx"></div>
    </div>




    <!--活动-->
    <div class="activity">
      <div class="tit2"><img src="../assets/images/index/tit2.jpg"></div>
      <div class="PicDiv1">
        <div class="halfpic"><a href="#"><img src="../assets/images/index/activ_1.jpg"></a></div>

        <div class="halfpic"><a href="#"><img src="../assets/images/index/activ_2.jpg"></a></div>

        <div class="clearx" style="height:0.5rem"></div>
        <div class="thirdpic"><a href="#"><img src="../assets/images/index/activ_3.jpg"></a></div>

        <div class="thirdpic"><a href="#"><img src="../assets/images/index/activ_4.jpg"></a></div>

        <div class="thirdpic"><a href="#"><img src="../assets/images/index/activ_5.jpg"></a></div>

        <div class="clearx"></div>
      </div>
    </div>

    <!--优品-->
    <div class="ypdiv">
      <div class="tit3"><img src="../assets/images/index/tit3.jpg"></div>

      <div class="picbox">
        <div class="pic_L"><a href="#"><img src="../assets/images/index/yp_1.jpg"></a></div>
        <div class="pic_R"><a href="#"><img src="../assets/images/index/yp_2.jpg"></a></div>
        <div class="pic_R"><a href="#"><img src="../assets/images/index/yp_2.jpg"></a></div>
        <div class="clearx"></div>
      </div>

      <div class="picbox">
        <div class="pic_L"><a href="#"><img src="../assets/images/index/yp_1.jpg"></a></div>
        <div class="pic_R"><a href="#"><img src="../assets/images/index/yp_2.jpg"></a></div>
        <div class="pic_R"><a href="#"><img src="../assets/images/index/yp_2.jpg"></a></div>
        <div class="clearx"></div>
      </div>
    </div>


    <!--好店-->
    <div class="hdiv">
      <div class="tit4"><img src="../assets/images/index/tit4.jpg"></div>
      <div class="pic_L"><a href="#"><img src="../assets/images/index/hd_1.jpg"><span><nobr>[太原市中科云谷商贸有限公司]</nobr></span></a></div>
      <div class="pic_R"><a href="#"><img src="../assets/images/index/hd_1.jpg"><span><nobr>[太原市中公司]</nobr></span></a></div>
      <div class="clearx"></div>
    </div>

    <!--猜你喜欢-->
    <div class="guess">
      <div class="tit5"><img src="../assets/images/index/tit5.jpg"></div>
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <router-link :to="'/detail/'+item.id"><img :src="item.img"><span>{{item.title}}</span><b>{{item.many}}</b></router-link>

        </li>

        <div class="clearx"></div>
      </ul>
    </div>
    <div class="clearx" style="height:6rem"></div>

    <!--底部-->

  </div>
</template>
<script>

    export default {
      data(){
        return {
          arr:[],
          arr1:[]
        }
      },
      created(){
        this.$http({
          url:'/src/assets/data/home.data'
        }).then((res)=>{//成功回调
          console.log(res.data);
          this.arr = res.data.slice(0,4)
          this.arr1 = res.data.slice(4,7)
        }).catch((res)=>{// 失败回调
          console.log(res);
        })
      }



    }

</script>
