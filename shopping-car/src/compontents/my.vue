<template>
  <div>
    <header>
      账户管理
      <a href="#" class="return_btn"></a>
    </header>
    <div class="clearx" style="height:5.8rem"></div>

    <div class="checkway">
      <a class="admn1" href="#">个人资料<i></i></a>
      <a class="admn2" href="#">账户与安全<i></i></a>
      <a class="admn3" href="#">地址管理<i></i></a>
      <a class="admn4" href="#">功能反馈<i></i></a>
      <a class="admn5" href="#">联系客服<i></i></a>
      <a class="admn6" href="#">关于我们<i></i></a>
    </div>

  </div>
</template>

<style scoped>
  @charset "utf-8";
  /* CSS Document */
  body.us { background:#eee}
  img { width:100%}
  header{width:100%; height:5rem;position: fixed;top:0;left:0; z-index:99; background:#fff; color:#191919; text-align:center; line-height:5rem; font-size:1.6rem;box-shadow:0 1px 3px #B9B9B9 }
  .return_btn { display:block; width:15px; height:5rem; position:absolute; top:0; left:10px; background:url(../assets/images/icon_1.png) no-repeat center; background-size:25px auto}

  .checkway { background:#fff;}
  .checkway a { display:block; height:4rem; line-height:4rem; position:relative; color:#555; font-size:1.4rem;border-bottom:1px solid #eee; padding:0 15px; padding-left:40px;}

  .checkway a i { display:inline-block; height:4rem; width:16px; background:url(../assets/images/administrate_icon7.png) no-repeat center; background-size:16px 16px; position:absolute; top:0; right:15px}
  .checkway a.admn1 { background:url(../assets/images/administrate_icon1.png) no-repeat 15px center; background-size:16px 16px}
  .checkway a.admn2 { background:url(../assets/images/administrate_icon2.png) no-repeat 15px center; background-size:16px 16px}
  .checkway a.admn3 { background:url(../assets/images/administrate_icon3.png) no-repeat 15px center; background-size:16px 16px}
  .checkway a.admn4 { background:url(../assets/images/administrate_icon4.png) no-repeat 15px center; background-size:16px 16px}
  .checkway a.admn5 { background:url(../assets/images/administrate_icon5.png) no-repeat 15px center; background-size:16px 16px}
  .checkway a.admn6 { background:url(../assets/images/administrate_icon6.png) no-repeat 15px center; background-size:16px 16px}

  .checkway a span { color:#000; float:right;margin-right:30px; display:block; height:4rem; line-height:4rem}
  .checkway.personal a.headimg { padding:0 15px; height:6rem; line-height:6rem}
  .checkway.personal a {padding:0 15px; }
  .checkway.personal a.headimg i { height:6rem}
  .checkway.personal a span.headimg { display:inline-block; width:50px; line-height:50px; float:right; margin-right:30px}

  .logo {width:100%; background:#fff; margin-bottom:10px; margin-top:10px; text-align:center; padding:20px 0}
  .logo span { display:block; width:50%; color:#000; font-size:1.4rem; margin:0 auto; }
  .logo span img { width:90px}
  .logo span.erwei img { width:130px;}
  .logo span a { display:block; line-height:30px}
  .logo span.erwei a { background:#f74c1a; color:#fff}


  article.contact { padding:25px 0; width:100%; background:#fff; margin-bottom:10px}
  article.contact span { display:block; width:50%; text-align:center; margin:0 auto}
  article.contact span img { width:50%;}
  article.contact span a { display:block; color:#000; font-size:2rem; text-align:center; line-height:20px; margin-top:15px}
  article.contact span a b { font-weight:normal; font-size:1.4rem; color:#61b8fc;}
  article.contact.erw { padding:25px 30px; width:auto}
  article.contact.erw span { width:100%}
  article.contact.erw a { display:inline-block; width:46%;padding:0 2%; float:left}
  article.contact.erw a span { font-size:1.3rem; display:block}


  article.contact span.feedback { padding-left:55px; color:#6d6d6d; font-size:1.3rem; width:auto; text-align:left; padding-right:15px; background:url(../assets/images/administrate_icon8.png) 15px 0 no-repeat; background-size:40px auto; display:block; height:50px}
  article.contact p.feed { text-align:center; padding:15px 0}
  article.contact textarea { width:80%; margin:0 auto; resize:none; border-color:#1899fc; font-size:1.3rem; line-height:16px; padding:1%}
  article.contact p.feed .feedbtn { display:block; height:25px; line-height:25px; width:80%; border:1px solid #1899fc; background:#1899fc; color:#fff; font-size:1.3rem; margin:0 auto; margin-top:10px}
</style>