import home from './compontents/home.vue';
import ass from './compontents/ass.vue';
import goods from './compontents/goods.vue';
import car from './compontents/car.vue';
import my from './compontents/my.vue';
import detail from './compontents/detail.vue';
import scar from './compontents/scar.vue';
import paging from './compontents/paging.vue';
import search from './compontents/search.vue';
import event from './compontents/event.vue';


const routes = [
  {path:'/home',component:home},
  {path:'/ass',component:ass},
  {path:'/goods',component:goods},
  {path:'/car',component:car},
  {path:'/detail/:id',component:detail},
  {path:'/my',component:my},
  {path:'/scar',component:scar},
  {path:'/paging',component:paging},
  {path:'/search/:title',component:search},
  {path:'/event',component:event},
  {path:'/',redirect:'/home'},
  {path:'*',component:home}

]
export default routes;