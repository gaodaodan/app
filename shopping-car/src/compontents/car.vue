<template>
  <div>
    <header class="he1">
      购物车（<span>{{num}}</span>）
      <a href="#" class="return_btn"></a>
      <a href="#" class="redE">编辑</a>
      <span class="dropD"></span>
    </header>
    <div class="clearx" style="height:5rem"></div>

    <div class="cartform">
      <form>
        <div class="house">
          <div class="salldiv">
            <label class="sallabel"><i></i>
              <input class="sall"  type="checkbox"/><b><a>太原宁化府益源庆醋业官方旗舰店</a><i></i></b>
              <em class="flag gray">凑单免运费</em>
            </label>

          </div>
          <!--购物车物品-->
          <div class="listbox" v-for="(item,index) in scar">
            <label class="goo_box">
              <i></i>
              <input class="smallcheck" type="checkbox"/>
            </label>
            <span class="Orgoods">
                    <a href="#"><img :src="item.img"></a>
                    <span class="message">
                        <a href="#">{{item.title}}</a>
                        <i>颜色分类：黑色&nbsp;&nbsp;尺码：42</i>
                        <span class="price">
                        	<b><i class="pr"></i>{{item.many}}</b>
                            <span>
                              <a class="minus" @click="jian(item.id,item.numb = parseInt(item.numb)-1,item.many)">-</a><a class="plus"  @click="jia(item.id,item.numb = 1 + parseInt(item.numb),item.many)">+</a><input v-model="item.numb" type="text"></span>
                        </span>
                    </span>

                    <div class="clearx"></div>
                </span>
            <div class="clearx"></div>
          </div>
          <!--物品列表结束-->
        </div>



      </form>
    </div>







    <!--为您推荐-->
    <div class="guess">
      <div class="tit5"><h3>为您推荐</h3></div>
      <ul>
        <li>
          <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>

        </li>
        <li>
          <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>

        </li>
        <li>
          <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>

        </li>
        <li>
          <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>

        </li>
        <div class="clearx"></div>
      </ul>
    </div>
    <div class="clearx" style="height:12rem"></div>
    <div class="Calculate">
      <label class="big">
        <i></i>
        <input onclick="selectAll()" class="all"  type="checkbox"/>全部
      </label>
      <span>
    	<p>合计:￥ <input type="button" v-model="total" style="border:0"> <br/><i>(不含邮费)</i></p>
    </span>
      <a class="jies btn_color" href="#">去结算<span>{{num}}</span></a>
      <p class="edit_btn">
        <span><a class="linebtn gray" href="#">分享</a><a class="linebtn gray" href="#">删除</a></span>
      </p>
    </div>
    <!--底部-->
    <footer>
      <a href="javascript:;" class="pick">
        <i class="icon-f1"></i>
        首页
      </a>
      <a href="#">
        <i class="icon-f2"></i>
        分类
      </a>
      <a href="#">
        <i class="icon-f3"></i>
        好货
      </a>
      <a href="#">
        <i class="icon-f4"></i>
        购物车
      </a>
      <a href="#">
        <i class="icon-f5"></i>
        我的农芯乐
      </a>
    </footer>


    <!--参数选择-->
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
  </div>
</template>
<style scoped>
  @charset "utf-8";
  /* CSS Document */
  img { width:100%}
  header.he1{width:100%; height:5rem;position: fixed;top:0;left:0; z-index:9999; background:#fff; color:#191919; text-align:center; line-height:5rem; font-size:1.6rem; }
  .return_btn { display:block; width:15px; height:5rem; position:absolute; top:0; left:10px; background:url(../assets/images/icon_1.png) no-repeat center; background-size:25px auto}
  .redE { font-size:1.4rem; color:#fa1545; position:absolute; top:0; right:50px; }
  .dropD { display:block; width:30px; height:5rem; position:absolute; top:0; right:10px; background:url(../assets/images/icon_mes.png) no-repeat center; background-size:30px 30px}
  .dropdiv { display:none; position:absolute; top:4rem; right:5%; padding:1rem 1rem; background:url(../assets/images/bg.png); width:9rem;}
  span.flag { display:block; position:absolute; top:-16px; right:1rem; width:10px; height:9px; width:0;height:0;font-size:0;border:solid 8px;border-color:#fff #fff #000 #fff; opacity:0.7}
  .dropdiv a { height:3rem; line-height:3rem; color:#fff; font-size:1.4rem; display:block; border-bottom:1px solid #583b3f; text-align:left; padding-left:30px; background:url(../assets/images/merchandise/icons.png) no-repeat}
  .dropdiv a.hicon1 { background:url(../assets/images/icon_5.png) no-repeat left center}
  .dropdiv a.hicon2 { background:url(../assets/images/icon_6.png) no-repeat left center}
  .dropdiv a.hicon3 { background:url(../assets/images/icon_7.png) no-repeat left center}
  .dropdiv a.hicon4 { background:url(../assets/images/icon_8.png) no-repeat left center}


  /*cartform*/
  .listbox>div,.house>div,.big { position:relative; }
  input[type="checkbox"] {  width:24px; height:24px; position:absolute; left:10px; top:0px;  z-index:10; visibility:hidden/**/}
  .listbox>label{position:relative;display:block; height:30px; line-height:30px; width:30px;}
  .listbox>label i,.big i { display:block; position:absolute; left:10px; top:0px; width:24px; height:24px;background:url(../assets/images/shoppingcart/icons.png) no-repeat;  background-size:24px 24px;  }
  .house>label i { display:block; position:absolute; left:10px; top:30px; z-index:3; width:24px; height:24px;background:url(../assets/images/shoppingcart/icons.png) no-repeat;  background-size:24px 24px;}
  .listbox>label i.yeso,.big i.yeso,.house>div i.yeso,.house>label i.yeso {display:block; position:absolute; left:10px; top:0px; z-index:3; width:24px; height:24px;background:url(../assets/images/shoppingcart/iconsY.png) no-repeat;  background-size:24px 24px;}
  label.big,label.sallabel { display:block; height:30px; line-height:30px; padding-left:40px; position:relative}
  label.big i,label.big input[type="checkbox"],label.sallabel i,label.sallabel input[type="checkbox"] { width:24px; height:24px;}
  label.sallabel>i {width:24px; height:24px; background:url(../assets/images/shoppingcart/icons.png) no-repeat;  background-size:24px 24px;position:absolute; top:0; left:10px}
  .listbox>label.goo_box { float:left; margin-top:30px}

  .cartform { width:100%;}
  .cartform .house { background:#fff; padding:10px 0; margin-top:10px}
  .sallabel { position:relative}
  .sallabel>b { font-weight:normal; font-size:1.2rem; color:#000; display:block; width:60%; height:25px; line-height:25px; padding-left:30px; background:url(../assets/images/order/icon_shop.png) left center no-repeat; background-size:20px 20px; position:relative; float:left}
  .sallabel>b a {display: inline-block; max-width: 90%; overflow: hidden; height: 25px;}
  .sallabel>b i { display:inline-block; width:20px; height:20px; background:url(../assets/images/order/icon_into.png) no-repeat center right; position:absolute; top:2px}
  .sallabel>em.flag.gray { position: absolute;right: 10px;top:0; font-style: normal; color: #808080;}
  .listbox { padding:10px 0; position:relative}
  .Orgoods { display:block; padding:0.5rem 0; width:90%; float:right; position:relative}
  .Orgoods>a { display:inline-block; width:73px; height:73px;float:left}
  .Orgoods>span.message { display:inline-block; width:80%; float:left; padding-left:5px}
  .Orgoods>span.message a { display:block; font-size:1.3rem; width:100%; color:#000; line-height:1.5rem; height:3rem; overflow:hidden; text-overflow:ellipsis;display: -webkit-box;  -webkit-line-clamp:2;   -webkit-box-orient: vertical;  }
  .Orgoods>span.message>i { display:block; font-size:1.2rem; color:#666; font-style:normal; margin-top:0.6rem}
  .Orgoods>span.message>i.edit { background:#eee; position:relative; margin:0; padding:3px 0; padding-left:10px;}
  .Orgoods>span.message>i.edit:after { content:""; display:inline-block; width:20px; height:16px; background:url(../assets/images/icon_9.png) no-repeat center; position:absolute; right:10px}
  .Orgoods span.price {display:inline-block; display: inline-block; width: 100%; height:20px; line-height:20px; position: relative; }
  .Orgoods span.price b { font-weight:normal; font-size:1.3rem; color:#000;}
  i.pr { font-style:normal; font-size:1rem; margin-top:0.6rem}
  .Orgoods span.price em { font-size:1.2rem; color:#999; font-style:normal; display:block; margin-top:1.9rem}
  .Orgoods span.price b { font-weight:normal; font-size:1.3rem; color:#fa1545;}
  .Orgoods>span.message i.pr { display:inline-block; font-style:normal;color:#fa1545; font-size:1rem}
  .Orgoods span.price span { display: block;width: 100px;height: 20px; line-height: 20px; border: 1px solid #b8b6b6; position: relative; text-align: center; position:absolute;right:0; top:5px; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px;}
  .Orgoods span.price span a {display: block; width: 25px; height: 20px;  line-height: 20px;  text-align: center; color: #333; font-size: 1.6rem; position: absolute;}
  a.minus { top: 0; left: 0; border-right: 1px solid #b8b6b6;}
  a.plus {  top: 0; right: 0; border-left: 1px solid #b8b6b6;}
  .Orgoods span.price span input { width: 45px; margin: 0 auto; text-align: center;border: none;}


  .guess .tit5 h3 { display:block; font-size:1.2rem; color:#666; margin:0 auto;line-height: 3rem; text-align:center; width:50px; background:#eee; font-weight:normal}
  .guess .tit5 { width:30%; display:block; height:3rem; background:url(../assets/images/merchandise/dot.png) left center repeat-x; margin:0 auto }
  a.linebtn { color:#fa1d4a; font-size:1.2rem; border:1px solid #fa1d4a; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px; padding:0.3rem 1rem; margin-right:3px}
  a.linebtn.gray { border-color:#666; color:#666}


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

  /*Calculate*/
  .Calculate { width:100%; background:#fff; height:6rem; position:fixed; left:0; bottom:5rem; box-shadow:0 -2px 3px #999; text-align:center; z-index:100}
  .Calculate label.big { font-size:1.4rem; color:#504e4e; padding-left:40px; position:absolute; left:0; top:10px; width:30px;}
  .jies { display:inline-block; height:5rem;width:100px; line-height:5rem; position:absolute; right:0; top:0}
  .btn_color {  display:inline-block;color:#fff; font-size:1.5rem;  background-image: linear-gradient(to right, #f96c2c,#f41b58);background-image: -webkit-linear-gradient(to right, #f96c2c,#f41b58); text-align:center;}
  .Calculate>span { display:inline-block; width:120px; text-align:center; margin-top:15px; }
  .Calculate>span p { font-size:1.4rem; color:#000;}
  .Calculate>span p i { font-size:1.2rem; color:#808080; font-style:normal; }
  .Calculate>p { display:inline-block; width:110px; position:absolute; top:20px; right:0}
  .Calculate>p.edit_btn { display:none}



  @media screen and (max-width: 500px) {
    .Orgoods { width:88%}
    .Orgoods>span.message { width:68%}
  }


















</style>
<script>
  export default{
    data(){
      return {
         scar:{},
         num:0,
         seq:'',
         total:0,
      }
    },

    methods:{
      jia(ids,aa,many){
        console.log(typeof(aa))
        console.log(this.total)
        this.total = this.total + parseInt(many.substr(1));
        this.$http({
          url:'http://localhost:3000/add',
          method:'get',
          params:{
            id: ids,
            aa:aa
          }
        })

      },
      jian(ids,num,many){
        this.total = this.total - parseInt(many.substr(1));
        this.$http({
              url:'http://localhost:3000/reduce',
              method:'get',
              params:{
                id:ids,
                num:num
              }
        })

      }
    },
    computed:{
    },
    created(){
        this.$http({
          url:'http://localhost:3000/car',
          method:'get',
          params:{
            aa:8888
          }
        })
          .then((res)=>{
            console.log(res);
            this.scar = res.data;
            this.num = res.data.length;
            this.scar.forEach((item,index)=>{
              console.log(item,index)
              this.total += parseInt(item.many.substr(1))*parseInt(item.numb)
            })
        }).catch((res)=>{
          console.log(res)
        })
    }

  }
</script>