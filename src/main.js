import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import "./css/index.css";


import moment from "moment";

import "mint-ui/lib/style.css";
import Mint from 'mint-ui';
Vue.use(Mint);
// import { Header , Swipe , SwipeItem, Button} from "mint-ui"  
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

//引入缩略图查看插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


import "./lib/MUI/css/mui.css";
import "./lib/MUI/css/icons-extra.css";
import Router from "vue-router";
import router from "./router";

Vue.use(Router);
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;



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