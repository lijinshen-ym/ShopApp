<template>
    <div class="home-box">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in banner" :key="item.img">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../image/homeimg/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
		return {
			banner:[]
		}
	},
	created(){
		this.getlunbo();
	},
	methods:{
		getlunbo(){
			this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then((result)=>{
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
	}
}
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
     /* .mint-swipe-item:nth-child(1){
        background: #00BCD4;
    }
    .mint-swipe-item:nth-child(2){
        background: #546E7A;
    }
    .mint-swipe-item:nth-child(3){
        background: #263238;
    } */
    img{
        height:100%;
        width:100%;
    }
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