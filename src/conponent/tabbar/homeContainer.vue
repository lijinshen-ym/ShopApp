<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in banner" :key="item.img">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
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
					Toast({
                        message: '图片加载成功',
                        position: 'center',
                        duration: 2000
                    });
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
</style>