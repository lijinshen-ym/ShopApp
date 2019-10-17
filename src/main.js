import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

// import "mint-ui/lib/style.css";
import { Header , Swipe , SwipeItem} from "mint-ui"  
import "./lib/MUI/css/mui.css"
import "./lib/MUI/css/icons-extra.css";
import Router from "vue-router"
import router from "./router"

Vue.use(Router);
Vue.use(VueResource);
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vue=new Vue({
    el:"#app",
    data:{},
    methods: {

    },
    render:c=>c(App),
    router
})