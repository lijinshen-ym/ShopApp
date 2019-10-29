<template>
    <div class="shopinfo">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :banner="imglist" :flag="flag"></swipe>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span>市场价：<del>{{info.market_price}}</del></span>
                    <span>销售价：<i>￥{{info.sell_price}}</i></span>
                    <div class="snumbox">
                        购买数量：<goodsbotton></goodsbotton>
                    </div>
                    <div class="sbutton">
                        <mt-button type="danger" size="small"  >立即购买</mt-button>
                        <mt-button type="primary" size="small"  >加入购物车</mt-button>
                    </div> 
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>商品货号：{{info.goods_no}}</div>
                    <div>库存情况：{{info.stock_quantity}}</div>
                    <div>上架时间：{{info.add_time | dateFormat}}</div>
                </div>
            </div>
            <div class="mui-card-footer">
                <div>
                    <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                </div>
                <div>
                    <mt-button type="danger" size="large" plain >商品评论</mt-button>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import swipe from "../tagcomponent/swipe.vue";
import goodsbotton from "../tagcomponent/goodsbutton.vue";
export default {
    data(){
        return {
            id: this.$route.params.id,
            imglist:[],
            flag:false,
            info:{}
        }
    },
    created(){
        this.getimglist();
        this.getInfo();
    },
    methods:{
        getimglist(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
                if(result.body.status==0){
                    result.body.message.forEach(item=>{
                        item.img=item.src;
                    })
                    this.imglist=result.body.message;
                }
            })
        },
        getInfo(){
            this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.info=result.body.message[0];
                    console.log(this.info);
                }
            })
        }
        
    },
    components:{
        swipe,
        goodsbotton
    }
}
</script>
<style lang="css" scoped>
    .shopinfo .snumbox>div{
        display: inline-block;
    }
    .shopinfo .mui-card-footer {
        display: block;
    }
    .shopinfo .mui-card-footer div:nth-child(1){
         margin-top: 5px;
         margin-bottom: 20px;
    }
    .shopinfo .mui-card-content-inner span{
        margin-right: 10px;
    }
    .shopinfo .mui-card-content-inner span i{
        font-size: 16px;
        color: red;
    }
    .shopinfo .snumbox{
        margin-top: 10px;
    }
    .shopinfo .sbutton{
        margin-top: 10px;
    }

</style>