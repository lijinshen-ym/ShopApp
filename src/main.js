import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import moment from "moment";

// import "mint-ui/lib/style.css";
import { Header , Swipe , SwipeItem, Button} from "mint-ui"  
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import "./lib/MUI/css/mui.css"
import "./lib/MUI/css/icons-extra.css";
import Router from "vue-router"
import router from "./router"

Vue.use(Router);
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005';


Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})

var vue=new Vue({
    el:"#app",
    data:{},
    methods: {

    },
    render:c=>c(App),
    router
})