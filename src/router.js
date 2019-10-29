import Router from "vue-router";
import homeContainer from "./conponent/tabbar/homeContainer.vue";
import memberContainer from "./conponent/tabbar/memberContainer.vue";
import searchContainer from "./conponent/tabbar/searchContainer.vue";
import shopcarContainer from "./conponent/tabbar/shopcarContainer.vue";
import newsList from "./conponent/home/newList.vue";
import newInfo from "./conponent/home/newInfo.vue";
import photolist from "./conponent/home/photolist.vue";
import photoinfo from "./conponent/home/photoinfo.vue";
import shopping from "./conponent/home/shopping.vue";
import shopinfo from "./conponent/home/shopinfo.vue";

var router=new Router({
        routes:[
            {path:"/",redirect:"/home"},
            {path:"/home", component:homeContainer},
            {path:"/member", component:memberContainer},
            {path:"/shopcar", component:shopcarContainer},
            {path:"/search", component:searchContainer},
            {path:"/home/newsList",component:newsList},
            {path:"/home/newInfo/:id",component:newInfo},
            {path:"/home/photoshare",component:photolist},
            {path:"/home/photoinfo/:id",component:photoinfo},
            {path:"/home/shopping",component:shopping},
            {path:"/home/shopinfo/:id",component:shopinfo}
        ],
        linkActiveClass:"mui-active"
})
export default router;