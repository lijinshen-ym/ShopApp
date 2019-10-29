<template>
    <div class="shopinfo">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
        //小球
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
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
                        //childCount是从子组件往父组件传值，这是值是购买的数量
                        //maxvalue是库存量，从父组件传值给子组件，并设置购买的最大数量
                        购买数量：<goodsbotton @childCount="getCount" :maxvalue="info.stock_quantity"></goodsbotton>
                    </div>
                    <div class="sbutton">
                        <mt-button type="danger" size="small"  >立即购买</mt-button>
                        <mt-button type="primary" size="small"  @click="showFn">加入购物车</mt-button>
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
                    <mt-button type="primary" size="large" plain @click="details(id)">图文介绍</mt-button>
                </div>
                <div>
                    <mt-button type="danger" size="large" plain @click="gcomment(id)">商品评论</mt-button>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import swipe from "../tagcomponent/swipe.vue";
import goodsbotton from "../tagcomponent/goodsbutton.vue";
import { Transform } from 'stream';
export default {
    data(){
        return {
            id: this.$route.params.id,
            imglist:[],
            flag:false,
            info:{},
            ballflag:false,
            count:1
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
                }
            })
        },
        showFn(){
            this.ballflag=!this.ballflag;
        },

        // 图文详情的编程式导航
        details(id){
            this.$router.push({name:"detail",params:{id}})
        },
        // 商品评论的编程式导航
        gcomment(id){
            this.$router.push({name:"gcomment",params:{id}})
        },
        
        //钩子函数实现半场动画
        beforeEnter(el){
           el.style.transform="translate(0,0)";
        },
        enter(el,done){
            const ballrect=this.$refs.ball.getBoundingClientRect()
            const mbadgerect=document.getElementById("mbadge").getBoundingClientRect();
            const mtop=mbadgerect.top-ballrect.top;
            const mleft=mbadgerect.left-ballrect.left;
            el.offsetWidth;
            el.style.transform = `translate(${mleft}px,${mtop}px)`;
            el.style.transition = "all 1s ease";
            done();
        },
        afterEnter(el){
            this.ballflag=!this.ballflag;
        },

        //购买商品数量的父子组件传值的函数
        getCount(acount){
            this.count=acount;
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

    .shopinfo .ball{
        width: 15px;
        height:15px;
        border-radius: 45px;
        background: red;
        position: absolute;
        top: 403px;
        left:146px;
        z-index: 99;
    }

</style>