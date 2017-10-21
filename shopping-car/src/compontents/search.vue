<template>
  <div>
    <header>
      <div class="header">
        <a href="#" class="return_btn"></a>
        <span class="selectinput s1">
        	<span class="sort"><a>宝贝</a>
            	<ul>
                	<li><a href="#">宝贝</a></li>
                	<li><a href="#">店铺</a></li>
                </ul>
                <input type="text" @keyup="" v-model="ipt" style="line-height:20px;margin-top:10px;width:100px;border:none">
            </span>
        	<!--<input type="search" ><i class="icon_sel"></i>-->
        </span>
        <a class="selbtn" href="#" @click="get">搜索</a>
      </div>
    </header>
    <div class="contentbox" id="topcontent">
      <article class="word">
        <h3>热门搜索</h3>
        <p><a href="#">山西特产</a><a href="#">化肥</a><a href="#">小米</a><a href="#">金龙鱼</a><a href="#">山西特产</a><a href="#">山西特产</a><a href="#">山西特产</a></p>
      </article>

      <div class="guess">
        <div class="tit5"><h3>搜索结果</h3></div>
        <ul>
          <div v-show="show" style="margin:0 auto;font-size:16px;width:16px;color:#696">你是狗熊吗搜索这些东西</div>
          <li v-for="(item,index) in result">
            <a href="#"><img :src="item.img"><span>{{item.title}}</span><b>{{item.many}}</b></a>

          </li>

          <div class="clearx"></div>
        </ul>
      </div>
    </div>

    <a href="#topcontent" class="Totop"></a>
  </div>
</template>
<style scoped>
  @charset "utf-8";
  /* CSS Document */
  body { background:#f7f2f2}
  img{ width: 100%; }
  header{width:100%; height:5rem;position: fixed;top:0;left:0; z-index:9999; background:#fff; color:#191919; text-align:center; line-height:5rem; font-size:1.6rem; box-shadow:0 -5px 10px #000}
  .return_btn { display:block; width:15px; height:5rem; position:absolute; top:0; left:10px; background:url(../assets/images/icon_1.png) no-repeat center; background-size:25px auto}
  .header a.message { display:block; width:30px; height:5rem; position:absolute; top:0; right:10px; background:url(../assets/images/icon_mes.png) no-repeat center; background-size:30px 30px }
  .header .selectinput { display:block;width:70%; margin:0 auto; border:1px solid #cdcccc;  margin-top:2.5rem;height: 1rem;border-top: none; position:relative; background:}
  .selectinput input { padding-top:0.5rem; height:1.5rem; padding-bottom:0.5rem; border:none; width:90%; background:none; color:#6a6868; font-size:1.5rem;  position: absolute;top: -15px;left:30px;}
  .selectinput .icon_sel { display:block; width:30px; height:2.5rem; background:url(../assets/images/icon_sel.png) no-repeat center; background-size:20px auto; position:absolute; top:-18px; left:0; float:left }

  .contentbox { width:100%; margin-top:5.8rem}
  .titLabel { width:95%; margin:0 auto}
  .titLabel a { display:inline-block; width:25%; float:left; text-align:center; color:#191919; font-size:1.4rem; height:40px; line-height:40px; position:relative}
  .titLabel i{ display:inline-block; width:10px; height:16px; background:url(../assets/images/icon_2.png) no-repeat center;background-size:10px auto;  position:absolute; top:11px; margin-left:5px}
  .titLabel a.current { color:#fa1545}
  .titLabel a.current i { background:url(../assets/images/icon_2_1.png) no-repeat center; background-size:10px auto}

  .guess .tit5 h3 { display:block; font-size:1.2rem; color:#666; margin:0 auto;line-height: 3rem; text-align:center; width:50px; background:#eee; font-weight:normal}
  .guess .tit5 { width:30%; display:block; height:3rem; background:url(../assets/images/merchandise/dot.png) left center repeat-x; margin:0 auto }
  .guess ul{ margin-left:-2%}
  .guess ul li { width:48%; margin-left:2%; float:left; margin-bottom:0.8rem}
  .guess ul li>a { display:block; padding:0.5rem 0;font-size:1.3rem;color:#171817; background:#fff; text-align:center}
  .guess ul li>a img { width:90%;}
  .guess ul li>a span { display:block; height:3rem; line-height:1.5rem; overflow:hidden; text-overflow:ellipsis;padding:0 0.5rem; text-align:left}
  .guess ul li>a b { text-align:left; color:#e31010; display:block; font-size:1.5rem; margin-top:0.5rem}
  .Totop { display:block; width:35px; height:35px; position:fixed; bottom:10px; right:10px; z-index:20; background:url(../assets/images/top.png) center no-repeat; background-size:35px auto; display:none}


  /*搜索*/
  .selbtn { display:block; padding:2px 10px; color:#fff; background-image: linear-gradient(to right, #f96c2c,#f41b58);height: 20px;line-height: 20px; background-image: -webkit-linear-gradient(to right, #f96c2c,#f41b58); position:absolute; top:15px; right:10px; font-size:1.2rem; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px;}
  .header .selectinput.s1 {margin-left:40px; width:82%}
  .selectinput.s1 .icon_sel { right:0; left:auto; background:url(../assets/images/Cservice_icon_sel.png) no-repeat center; background-size:20px 20px}
  .selectinput.s1 input { width:60%; left:60px; height:2rem; font-size:1.3rem}
  .selectinput.s1 span { display:inline-block; height:30px; line-height:30px; width:55px; text-align:center; font-size:1.3rem; color:#fa3a15; position:absolute; left:0; top:-19px; border-right:1px solid #cdcccc;  }
  .selectinput.s1 span i { display: block;position: absolute;top:20px;right:2px;width: 10px;height: 9px; width: 0; height: 0;font-size: 0; border: solid 4px; border-color: #fff #c4c3c3 #c4c3c3 #fff; opacity: 0.7;}
  .selectinput.s1 span ul { background:#fff; border:1px solid #c4c3c3; width:100%; position:absolute; top:0; left:-1px; z-index:120; display:none}
  .selectinput.s1 span ul li a { display:block; color:#fa3a15}
  article.word { padding:10px 10px 20px 10px;margin-top:10px; background:#fff}
  article.word h3 { color:#000; font-size:1.4rem; font-weight:normal; display:block; height:30px; line-height:30px; padding-left:30px; background:url(../assets/images/select_fire.png) no-repeat left center; background-size:20px 20px;}
  article.word a { display:inline-block; width:23%; text-align:center; height:25px; line-height:25px; background:#eee; border-radius:3px; margin:0 1%; color:#000; margin-top:10px}
  @media screen and (max-width: 600px) {
    .header .selectinput.s1 { width:80%}
  }

  @media screen and (max-width: 500px) {
    .header a.logo,.header a.message{ width:14%}
    .header .selectinput { width:60%}
    .selectinput input { width:80%;}
    .header .selectinput.s1 { width:69%}
  }


</style>
<script>
   export default{
     data(){
       return {
         ipt:'',
         data:[],
         result:[],
         show:true
       }
     },
     methods:{
       get(){

         this.result=[];
         console.log(this.ipt);
         this.data.forEach(function(val,index){
           if(val.title.indexOf(this.ipt) != -1){
             this.result.push(val);
           }
         }.bind(this));
         console.log(this.result);
         if(this.result.length >0){
           this.show = false;
         }else{
           this.show = true
         }
       }
     },
     created(){ //页面加载完成时执行
       this.ipt = this.$route.params.title;//获取路由传过来的值
       this.$http({
         url:'http://localhost:3000/search',
         method:'get'
       }).then((res) =>{

         this.data = res.data;
         console.log(this.data);
         this.result=[];
         console.log(this.ipt);
         this.data.forEach(function(val,index){
           if(val.title.indexOf(this.ipt) != -1){
             this.result.push(val);
           }
         }.bind(this));
         console.log(this.result);
         if(this.result.length >0){
           this.show = false;
         }else{
           this.show = true
         }

       }).catch((res)=>{
         console.log(res)
       })
     }
   }
</script>