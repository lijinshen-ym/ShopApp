<template>
    <div class="home-box">
        <swipe :banner="banner" :flag="flag"></swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../image/homeimg/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoshare">
                    <img src="../../image/homeimg/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopping">
                    <img src="../../image/homeimg/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <img src="../../image/homeimg/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <img src="../../image/homeimg/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <img src="../../image/homeimg/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import swipe from "../tagcomponent/swipe.vue";

export default {
    data(){
		return {
            banner:[],
            flag:true
		}
	},
	created(){
		this.getlunbo();
	},
	methods:{
		getlunbo(){
			this.$http.get("api/getlunbo").then((result)=>{
                if(result.body.status==0){
                    this.banner=result.body.message;
					// Toast({
                    //     message: '图片加载成功',
                    //     position: 'center',
                    //     duration: 2000
                    // });
				}else{
					Toast("图片加载失败");
				}
			})
		}
    },
    components:{
        swipe
    }
}
</script>

<style scoped>
    .mui-grid-view.mui-grid-9 {
        background: white;
        border:none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell{
        border:none;
    }.mui-table-view.mui-grid-view .mui-table-view-cell img{
        width: 60px;
        height: 60px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
</style>