import Router from "vue-router";
import homeContainer from "./conponent/tabbar/homeContainer.vue";
import memberContainer from "./conponent/tabbar/memberContainer.vue";
import searchContainer from "./conponent/tabbar/searchContainer.vue";
import shopcarContainer from "./conponent/tabbar/shopcarContainer.vue";

var router=new Router({
        routes:[
            {path:"/home", component:homeContainer},
            {path:"/member", component:memberContainer},
            {path:"/shopcar", component:shopcarContainer},
            {path:"/search", component:searchContainer}
        ],
        linkActiveClass:"mui-active"

})
export default router;