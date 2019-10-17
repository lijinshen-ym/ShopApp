import Vue from "vue";
import App from "./App.vue";

// import "mint-ui/lib/style.css";
import { Header } from "mint-ui"  
import "./lib/MUI/css/mui.css"
import "./lib/MUI/css/icons-extra.css";
import Router from "vue-router"
import router from "./router"

Vue.use(Router);
Vue.component(Header.name,Header);

var vue=new Vue({
    el:"#app",
    data:{},
    methods: {

    },
    render:c=>c(App),
    router
})