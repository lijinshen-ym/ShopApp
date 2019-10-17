import Vue from "vue";
import App from "./App.vue";

// import "mint-ui/lib/style.css";
import { Header } from "mint-ui"  
import "./lib/MUI/css/mui.css"

Vue.component(Header.name,Header);

var vue=new Vue({
    el:"#app",
    data:{},
    methods: {

    },
    render:c=>c(App)
})