<!--import ass from './ass.vue'; //引入子路由-->
<template>
  <div>
    <!--<ass></ass> 引用子路由-->
    <header></header>
    <a href="#hd" class="Totop" ></a>
    <div class="Evalu">
    <span class="EvaluTag">
        <span>
            <a class="active">全部评价<br/><i>15648156</i></a>
            <a>好评<br/><i>52145</i></a>
            <a>中评<br/><i>10</i></a>
            <a>差评<br/><i>1</i></a>
            <a>晒图<br/><i>50</i></a>
            <div class="clearx"></div>
        </span>
    </span>
    </div>
    <!--头部导航-->
    <header class="favor-header-bar">
      <a class="return_btn" href="#" ></a>
      <ul class="tabs">
        <li class="default"><a href="javascript:void(0);" id="btn1" hidefocus="true">商品</a></li>
        <li><a href="javascript:void(0);" id="btn2" hidefocus="true">详情</a></li>
        <li><a href="javascript:void(0);" id="btn3" hidefocus="true">评价</a></li>
      </ul>
      <a class="cartbtn" href="#"></a>
      <span class="dropD">

            <span class="dropdiv">
            	<span class="flag"></span>
                <a class="hicon1" href="#">首页</a>
                <a class="hicon2" href="#">消息</a>
                <a class="hicon4" href="#">我的收藏</a>
                <a class="hicon3" href="#">分享</a>
            </span>
        </span>

    </header>
    <div class="clearx" id="hd" style="height:4rem"></div>
    <div class="swiper-container favor-list">
      <div class="swiper-wrapper">
        <div class="swiper-slide xq">
          <div>
            <div class="slidebox"><img :src="article.img" alt="" /></div>
            <article class="mercText">
              <a href="#">MEISINI美行米字旗拉杆箱24寸旅行登机箱大放送旅行登机等发光点蛋箱男女行李包</a>
              <p class="ad">
                <a>2017就要iPhone！暖春开学季，就要“焕”新装！</a>
                <a>2017就要iPhone！暖春开学季</a>
              </p>
              <b><em></em>{{article.many}}<i></i><b><a>佣金</a><i>￥</i>60.00</b></b>
              <div class="clearx"></div>
              <p class="merP_1"><a>快递：00.00</a><a>销量12345件</a><a class="num">山西太原</a></p>
              <span class="sales">
                    	<label>促销</label>
                        <span>
                        	<p><a>满减</a>满198立减10元</p>
                            <p><a>加价购</a>满19.8另加9.9，即可在购物车换购</p>
                            <p><a>限制</a>此价格不与套装优惠同时享受</p>
                            <p><a>限制</a>此价格不与套装优惠同时享受</p>
                        </span>
                        <a class="more"></a>
                        <div class="clearx"></div>
                    </span>
            </article>
            <article class="mercOption">
              <a class="opSort" href="#"><span>规格：千兆48口</span><i class="more"></i></a>
              <a class="addr" href="#"><span>送至<span><em>山西省</em>><em>太原市</em>><em>杏花岭区</em>><em>城区</em></span><b class="redT">现货</b></span><i></i></a>
            </article>

            <article class="mercHouse">
              <span class="houseimg"><img src="../assets/images/merchandise/house.jpg"></span>
              <span class="housetex">
                    	<h3>平遥供销特色馆</h3>
                        <p>主营商品：厨房电器 生活电器 智能家居 日用百货 化妆品</p>
                    </span>
              <div class="clearx" style="height:1.5rem"></div>
              <div class="mercHdata">
                <span><b>123456</b><b class="mH_1">全部宝贝</b></span>
                <span><b>4561564815</b><b class="mH_1">关注人数</b></span>
                <span class="btn"><a href="#">进店逛逛</a></span>
                <div class="clearx"></div>
              </div>
            </article>

          </div>
        </div>
        <div class="swiper-slide margin19">
          <div>
            <div class="imgbox">
              <img :src="article.img">
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <div class="clearx" style="height:6rem"></div>
            <article class="evalue">
              <div class="wrapevalue" >
                <span class="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                <div class="clearx" style="height:0.8rem"></div>
                <p class="eva"><a class="like"></a><a class="like"></a><a class="nolike"></a><a class="nolike"></a><a class="nolike"></a></p>
                <p class="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                  大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                <div class="ev_img">
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <div class="clearx"></div>
                </div>
                <p class="buy_time">购买日期：2017-03-01<a class="zan">1</a></p>
              </div>

            </article>
            <article class="evalue">
              <div class="wrapevalue" >
                <span class="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                <div class="clearx" style="height:0.8rem"></div>
                <p class="eva"><a class="like"></a><a class="like"></a><a class="nolike"></a><a class="nolike"></a><a class="nolike"></a></p>
                <p class="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                  大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                <div class="ev_img">
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                  <div class="clearx"></div>
                </div>
                <span class="message">
                        	<i></i>
                            <p>卖家回复：非常的感谢亲爱的对special 的支持与鼓励喔~~咱们每周四下午2点都有新品准时上新喔~~~您可以随时的过来选选喔~~~我们会做的越来越好噢~~~~希望亲能够见证我们的成长喔~~~亲亲么么</p>
                        </span>
                <p class="buy_time">购买日期：2017-03-01<a class="zan">1</a></p>
              </div>

            </article>
          </div>
        </div>


      </div>
    </div>



    <!--选择分类-->
    <div class="opSortbox">
      <div class="opSortbox-bg"></div>
      <div class="opSortcontent">
        <div class="opSort-offbtn"><img src="../assets/images/merchandise/icon_4.png"></div>
        <div class="opSortcontent-one">
          <div class="opSimg"><img src="../assets/images/merchandise/pic_2.jpg"></div>
          <div class="opStex">
            <span><em>￥</em>3750.00</span>
            <span class="smaltex">库存123456件</span>
          </div>
        </div>
        <div class="opSortlabel">
          <div class="opSortcontent-two">
            <h3>颜色分类</h3>
            <div class="clearx" style="height:1rem"></div>
            <a class="active">红色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <a>黄色</a>
            <a>蓝色</a>
            <div class="clearx"></div>
          </div>
          <div class="opSortcontent-two three">
            <h3>数量</h3>
            <div class="clearx" style="height:1rem"></div>
            <span><a class="minus">-</a><a class="plus">+</a><input value="1" type="text"/></span>
            <div class="clearx"></div>
          </div>
        </div>
        <div class="opSbtn fn">
          <a class="btn_fini" href="#">完成</a>
        </div>
      </div>
    </div>


    <div class="clearx" style="height:5rem"></div>
    <footer>
      <div class="footCon">
        <a class="icons_kf" href="#"><em></em><span>客服</span></a>
        <a class="icons_dp" href="#"><em></em><span>店铺</span></a>
        <a class="icons_sc" href="#"><em></em><span>收藏</span></a>

      </div>
      <div class="footbtn">
        <a @click="jia" href="#" class="car">加入购物车</a>
        <router-link to="/car" class="buy">立即购买</router-link>
      </div>
      <div class="clearx"></div>
    </footer>
  </div>
</template>

<style scoped>
  @charset "utf-8";
  /* CSS Document */
  /*header*/
  body{ background:#eee}
  .Totop { display:block; width:45px; height:45px; position:fixed; bottom:40px; right:10px; z-index:60; background:url(../assets/images/merchandise/top.png) center; display:none }
  .favor-header-bar{line-height:3rem;background-color: #fff;height:4rem; position:fixed; top:0; left:0; z-index:100; width:100%;box-shadow:0 1px 3px #B9B9B9}
  .return_btn { display:block; height:4rem; width:15px;background:url(../assets/images/merchandise/icon_1.png) center no-repeat;  position:absolute; top:0; left:0.8rem;text-align:center}
  .cartbtn { display:block; height:4rem; width:19px; background:url(../assets/images/merchandise/cartbtn.png) no-repeat center; position:absolute; top:0; right:4.2rem}
  .dropD {display:block; height:4rem; width:25px;background:url(../assets/images/merchandise/icon_2.png) center no-repeat;  position:absolute; top:0; right:0.8rem; z-index:100;text-align:center;}
  .dropdiv { display:none; position:absolute; top:4rem; right:5%; padding:1rem 1rem; background:url(../assets/images/merchandise/bg.png); width:9rem;}
  .flag { display:block; position:absolute; top:-16px; right:1rem; width:10px; height:9px; width:0;height:0;font-size:0;border:solid 8px;border-color:#fff #fff #000 #fff; opacity:0.7}

  .favor-header-bar ul { width:50%; margin:0 auto}
  .favor-header-bar li{display: block;width:33.3%;text-align: center;float: left;margin-left:-1px;height:3.8rem;line-height:3.8rem;position: relative;}
  .favor-header-bar a{font-size:1.4rem;color:#333;display:block;}
  .favor-header-bar .dropdiv a { height:3rem; line-height:3rem; color:#fff; font-size:1.4rem; border-bottom:1px solid #583b3f; text-align:left; padding-left:30px; background:url(../assets/images/merchandise/icons.png) no-repeat}
  .favor-header-bar .dropdiv a.hicon1 { background:url(../assets/images/merchandise/icon_5.png) no-repeat left center}
  .favor-header-bar .dropdiv a.hicon2 { background:url(../assets/images/merchandise/icon_6.png) no-repeat left center}
  .favor-header-bar .dropdiv a.hicon3 { background:url(../assets/images/merchandise/icon_7.png) no-repeat left center}
  .favor-header-bar .dropdiv a.hicon4 { background:url(../assets/images/merchandise/icon_8.png) no-repeat left center}
  .favor-header-bar li:last-child{border-right:none;}
  .favor-header-bar li.default a{color:#fa1545;border-bottom: 2px solid #fa1545;}
  .favor-header-bar li span{position: absolute;display: block;width:25%;top:-0.4rem;right:0.2rem;max-width: 32px;}


  /*nofavor*/
  .nofavor{width:46.8%;margin:16.5% auto 0 auto;}
  .slidebox { }
  .slidebox,.slidebox img { width:100%;}
  article.mercText { width:100%; background:#fff;padding-top:0.5rem;}
  article.mercText p.ad { padding:0.2rem 0.8rem}
  article.mercText p.ad a { font-size:1.2rem; color:#d80523; display:block}
  article.mercText>a { display:block; padding:0.2rem 0.8rem; font-size:1.4rem; color:#000; margin-bottom:0.5rem}
  article.mercText>b { display:block; padding:0.2rem 0.8rem; padding-left:1.5rem; font-size:2.2rem; color:#d80523; font-weight:normal; position:relative; height:50px }
  article.mercText>b>i { display:block; width:16px; height:18px; background:url(../assets/images/merchandise/icons.png) no-repeat -11px -610px; position:absolute; top:5px; right:1.5rem}
  article.mercText>b em { font-style:normal; font-size:1.4rem; position:absolute; top:0.4rem; left:0.5rem}
  article.mercText>b:after { content: "供销赶集活动价"; color:#fff; font-size:1.2rem; text-align:center; font-weight:normal; display:inline-block; padding:0.2rem 0.5rem;background-image:linear-gradient(to right, #f96c2c,#f41b58);background-image:-webkit-linear-gradient(to right, #f96c2c,#f41b58);margin-left:1rem; position:absolute; top:0.6rem}
  article.mercText>b b { border:1px solid #f41c59; font-weight:normal; font-size:1.2rem; color:#f41c59;position: absolute; top: 30px;left: 1.5rem; padding-right:5px;}
  article.mercText>b b a { display:inline-block; padding:3px 5px; background:#f41c59; color:#fff;}
  article.mercText>b b i { font-style:normal; font-size:1rem}
  article.mercText p.merP_1 { width:100%; margin-top:1rem; border-bottom:1px solid #d7d2cf; padding-bottom:0.2rem; overflow:hidden}
  article.mercText p.merP_1>a { color:#b8b5b3; font-size:1.2rem; display:inline-block; width:25%; text-align:center; float:left}
  article.mercText p.merP_1>a.num { width:50%}
  article.mercText p.merP_2 { width:100%; padding:0 0.8rem; margin-top:0.6rem}
  article.mercText p.merP_2>a { display:inline-block;height:3rem; line-height:3rem;  position:relative; width:33.3%; }
  article.mercText p.merP_2>a i{ font-style:normal;font-size:1.2rem; padding-left:18px;background:url(../assets/images/merchandise/icons.png) -2px -3px no-repeat; padding-bottom:0.5rem; padding-top:0.2rem}
  article.mercText .sales { display:block; width:100%; position:relative; padding:0.5rem 0}
  article.mercText .sales label { font-size:1.3rem; color:#666; float:left; margin-left:0.8rem; line-height:30px}
  article.mercText .sales span { display:inline-block; float:left; margin-left:5%; width:80%}
  article.mercText .sales span p { font-size:1.3rem; color:#2f2e2e; line-height:25px}
  article.mercText .sales span a { padding:2px 3px; color:#f41b58; border:1px solid #f41b58; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px; margin-right:10px}
  article.mercText .sales>a.more { display:block; width:20px; height:4px; background:url(../assets/images/merchandise/icons.png) no-repeat -11px -645px; position:absolute; top:1rem; right:0.8rem}

  article.mercOption { width:100%; background:#fff; margin-top:0.8rem}
  article.mercOption a { display:block; background:#fff; width:#fff; padding:1.2rem 0;font-size:1.3rem; color:#686767; border-bottom:1px solid #d7d2cf; position:relative}
  article.mercOption a>span { display:block; padding-left:0.8rem; width:90%; }
  article.mercOption a i { display:block; width:15px; height:30px; position:absolute; top:1rem; right:0.8rem; background:url(../assets/images/merchandise/icons.png) -4px -36px no-repeat}
  article.mercOption a i.more { width:20px;height:4px; background:url(../assets/images/merchandise/icons.png) no-repeat -11px -645px; top:1.5rem}
  article.mercOption a.addr { border:none; }
  article.mercOption a.addr>span span { color:#2b2a2a; margin-left:0.8rem;width:70%; padding-left:17px; background:url(../assets/images/merchandise/icons.png) -7px -78px no-repeat; line-height:1.2rem; padding-top:4px}
  article.mercOption a.addr>span em { font-style:normal}
  article.mercOption a.addr>span .redT {color:#d80523; margin-left:0.6rem; font-weight:normal }


  article.mercHouse { width:100%; background:#fff; margin-top:0.8rem; padding:1rem 0}
  article.mercHouse span.houseimg { display: block; width:15%; float:left; padding-left:1rem}
  article.mercHouse span.houseimg img { width:100%}
  article.mercHouse span.housetex { display: block; width:75%; float:right; padding-right:1rem; padding-left:0.5rem}
  article.mercHouse span.housetex h3 { font-weight:normal; font-size:1.5rem; color:#1e1e1e}
  article.mercHouse span.housetex p { font-size:1.2rem; color:#424141}
  article.mercHouse .mercHdata { width:90%; margin:0 auto}
  article.mercHouse .mercHdata>span { display:block; width:33%; text-align:center; border-right:1px solid #d7d6d6; float:left}
  article.mercHouse .mercHdata b { display:block; text-align:center; font-size:1.3rem; font-weight:normal}
  article.mercHouse .mercHdata .mH_1 { font-size:1.2rem; color:#666}
  article.mercHouse .mercHdata>span.btn a {color:#fa1545; font-size:1.2rem; padding:0.5rem 0.8rem; border:1px solid #fa1545; margin-left:0.8rem  }
  article.mercHouse .mercHdata>span.btn {display:block; width:30%; float:right; padding-top:0.6rem; border:none}
  article.mercHouse .mercHdata>span.btn a:active{ background:#fa1545; color:#fff}



  article.mercPic { width:100%; background:#fff; margin-top:0.8rem; padding:1rem 0}
  article.mercPic .drag { display:block; width:150px; height:20px; line-height:20px; text-align:center; color:#828080; background:url(../assets/images/merchandise/icon_3.png) no-repeat left center; font-size:1.4rem; margin:0 auto}



  /*选择分类*/
  .opSortbox { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, .5); z-index:110; display:none}
  .opSortbox-bg {position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index:111;}
  .opSortcontent { position: absolute; top: 40%; right: 0; bottom: 0;left: 0; background-color: #fff; z-index:112;}
  .opSortcontent-one { width:100%; height:5rem}
  .opSimg {position: absolute;top: -3.4rem;left:1rem; width:8rem;}
  .opSimg img { width:100%}
  .opStex { margin-left:10rem; margin-top:1rem}
  .opStex span { display:block;padding-left: 1.5rem;font-size: 2.2rem;color: #d80523; font-weight: normal;position: relative;}
  .opStex span em {font-style: normal; font-size: 1.4rem; position: absolute; top: 0.2rem;left: 0.5rem;}
  .opStex span.smaltex { font-size:1.2rem; color:#666}
  .opSort-offbtn { width:25px; height:25px; position:absolute; top:1rem; right:1rem; z-index:114}
  .opSort-offbtn img { width:100%}
  .opSortcontent-two { width:94%; padding:1rem}
  .opSortcontent-two h3 { font-size:1.4rem; color:#333; font-weight:normal}
  .opSortcontent-two>a { padding:0.3rem 1rem; margin:0 0.2rem; border:1px solid #ccc; color:#333; font-size:1.2rem; float:left; margin-bottom:0.2rem}
  .opSortcontent-two>a.active,.opSortcontent-two>a:active { border-color:#fb3d65; color:#fb3d65}
  .opSortcontent-two.three { position:relative}
  .opSortcontent-two.three span { display:block; width:100px; height:20px; line-height:20px; border:1px solid #b8b6b6; position:relative; text-align:center}
  .opSortcontent-two.three span a { display:block; width:25px; height:20px; line-height:20px; text-align:center; color:#333; font-size:1.6rem; position:absolute}
  .opSortcontent-two.three span a.minus { top:0; left:0;border-right:1px solid #b8b6b6}
  .opSortcontent-two.three span a.plus { top:0; right:0;border-left:1px solid #b8b6b6}
  .opSortcontent-two.three span input { width:45px; margin:0 auto; text-align:center; border:none}
  .opSbtn { width:100%; height:4rem; position:absolute; left:0; bottom:0}
  .opSbtn a { display:block; width:50%; height:4rem; line-height:4rem; float:left; color:#fff; font-size:1.5rem; text-align:center}
  .opSbtn.fn a { width:100%}
  .opSbtn a.adCar { background:#fa9a11}
  .opSbtn a.buynow { background:#fa1545}
  .btn_fini {background-image: linear-gradient(to right, #f96c2c,#f41b58);background-image: -webkit-linear-gradient(to right, #f96c2c,#f41b58); text-align:center;}
  .opSortlabel { height:60%;overflow-y:scroll}


  /*评价*/
  .Evalu { width:100%;display:none;width: 100%; position: fixed; top: 4rem;left: 0; z-index:99; }
  .EvaluTag { display:block; width:100%; background:#fff; border-top:0.1rem solid #E3E3E3;border-bottom:0.1rem solid #E3E3E3; }
  .EvaluTag span { display:block; width:94%; margin:0 auto; padding:1rem 0}
  .EvaluTag span a { display:inline-block; width:20%; float:left; text-align:center; font-size:1.2rem}
  .EvaluTag span i { font-style:normal; color:#fa1545}
  .EvaluTag span a.active {color:#fa1545 }
  article.evalue { border-top:0.1rem solid #E3E3E3;border-bottom:0.1rem solid #E3E3E3; background:#fff; margin-bottom:0.5rem}
  article.evalue .wrapevalue { width:95%; margin:0 auto; padding:1rem 0}
  article.evalue span.ev_name { display:block; height:32px; line-height:32px; position:relative; padding-left:40px; font-size:1.4rem; padding-bottom:0.5rem;border-bottom:0.1rem solid #E3E3E3; }
  article.evalue span.ev_name i{ display:inline-block; width:32px; height:32px; background:url(../assets/images/merchandise/icons.png) no-repeat -4px -485px; position:absolute; top:0; left:0}
  article.evalue span.ev_name:after { content:""; display:inline-block; width:32px; height:32px; background:url(../assets/images/merchandise/icons.png) no-repeat -3px -532px; position:absolute; top:0}
  article.evalue span.ev_name b { font-weight:normal; color:#ACACAC; font-size:1.2rem; position:absolute; right:0; top:0}
  article.evalue p.eva a{ display:inline-block; width:15px; height:15px; background:url(../assets/images/merchandise/star.png) no-repeat}
  article.evalue p.eva a.like { background-position:-17px 0 }
  article.evalue p.eva a.nolike { background-position:-1px 0 }
  article.evalue p.evContex { font-size:1.2rem; margin-top:0.3rem; line-height:1.4rem}
  article.evalue p.buy_time { font-size:1.2rem; color:#ACACAC; line-height:35px; position:relative; margin-top:1rem}
  article.evalue p.buy_time a.zan { position:absolute;border-radius:3px; border:1px solid #fa1545; top:5px; right:0; height:20px; line-height:20px; color:#fa1545; padding-left:25px; padding-right:5px; background:url(../assets/images/merchandise/icons.png) no-repeat -7px -580px}
  article.evalue .ev_img { width:100%; margin-top:0.5rem}
  article.evalue .ev_img a { display:inline-block; width:18%; float:left; margin-left:2%}
  article.evalue .ev_img a img { width:100%;}
  article.evalue span.message { display:block; width:100%; margin-top:1.5rem; padding:0.8rem 0;background:#e8e8e8; border-radius:3px; position:relative;}
  article.evalue span.message i {display: block; position: absolute; top: -16px; left: 1rem; width: 10px; height: 9px; width: 0; height: 0; font-size: 0; border: solid 8px; border-color: #fff #fff #e8e8e8 #fff; }
  article.evalue span.message p { line-height:1.4rem; color:#686868; padding:0 1rem}


  /**/
  .imgbox,.imgbox img {width:100%}

  .guess .tit5 h3 { display:block; font-size:1.2rem; color:#666; margin:0 auto;line-height: 3rem; text-align:center; width:50px; background:#eee; font-weight:normal}
  .guess .tit5 { width:30%; display:block; height:3rem; background:url(../assets/images/merchandise/dot.png) left center repeat-x; margin:0 auto }
  .guess ul{ margin-left:-2%}
  .guess ul li { width:48%; margin-left:2%; float:left; margin-bottom:0.8rem}
  .guess ul li>a { display:block; padding:0.5rem 0;font-size:1.3rem;color:#171817; background:#fff; text-align:center}
  .guess ul li>a img { width:90%;}
  .guess ul li>a span { display:block; height:3rem; line-height:1.5rem; overflow:hidden; text-overflow:ellipsis;padding:0 0.5rem; text-align:left}
  .guess ul li>a b { text-align:left; color:#e31010; display:block; font-size:1.5rem; margin-top:0.5rem}



  /*footer*/
  footer { width:100%; background:#fff;position:fixed; left:0; bottom:0; z-index:50; box-shadow:0 -1px 3px #B9B9B9}
  footer .footCon { width:45%; float:left; overflow:hidden}
  footer .footCon>a { display:inline-block; height:5rem; width:32%; float:left; text-align:center; border-right:1px solid #eee}
  footer .footCon>a:last-child { border:none}
  footer .footCon>a em { display:block; width:25px; height:23px; background:url(../assets/images/merchandise/icons.png) no-repeat; margin:0 auto; margin-top:0.8rem}
  footer .footCon>a.icons_kf em { background-position:0 -125px}
  footer .footCon>a.icons_dp em { background-position:0 -156px}
  footer .footCon>a.icons_sc em { background-position:0 -187px}
  footer .footCon>a.icons_sc em.Ys { background-position:-28px -187px}
  footer .footCon>a.icons_car em { background-position:0 -212px}
  footer .footCon>a.icons_car { border:none}
  footer .footCon>a span { display:block; text-align:center; height:1.5rem; color:#333; line-height:1.5rem}
  footer .footbtn { width:55%; float:right;}
  footer .footbtn a { display:inline-block; height:5rem; width:50%;  color:#fff; text-align:center; font-size:1.5rem; float:left; line-height:5rem;}
  footer .footbtn a.car {background:#fa9a11; }
  footer .footbtn a.buy {background:#fa1545;}
  footer .footbtn a.car em { display:block; width:35px; height:35px; background:url(../assets/images/merchandise/icons.png) 0 -260px no-repeat; margin:5px auto ; }


  @media screen and (max-width: 400px) {
    article.mercText .sales span { width:75%}
  }
</style>

<script>

    export default {
      data(){
        return{
          article:{}
        }
      },
//      components:{
//        ass
//      },//挂载子路由
      methods:{
//        back:function(){
//          this.$router.go(-1)
//        },
        jia(){
          console.log(this.article.id)
          this.$http({
            url:'http://localhost:3000/stor',
//            headers: {'X-Requested-With': 'XMLHttpRequest'},
            method:'get',
            params:{
              nub:this.article.id,
              title:this.article.title,
              many:this.article.many,
              img:this.article.img,
              numb:1
            }
          })
//            .then((res)=>{
//           console.log(res)
//
//          }).catch((res)=>{
//            alert(res.status);
//          });
        }

      },
      created(){
        this.$http({
          url:'/src/assets/data/home.data'
        }).then((res)=>{
          this.article=res.data[this.$route.params.id-1];
          console.log(this.article.id)
        }).catch((res)=>{
          console.log(res)
        })
      },
    }
</script>