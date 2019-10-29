<template>
    <div class="shopping">
        <div class="shopbox" v-for="item in shoplist" :key="item.img_url" @click="shopinfo(item.id)">
            <div>
                <img :src="item.img_url" alt="">
                <h3>{{item.title}}</h3>
            </div>
            <div class="content">
                <div class="price">
                    <i class="sell">￥{{item.sell_price}}</i>
                    <del class="market">￥{{item.market_price}}</del>
                </div>
                <div class="scount">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            number:1,
            shoplist:[]
        }
    },
    created() {
        this.getshop();
    },
    methods:{
        getshop(){
            this.$http.get("api/getgoods?pageindex="+this.number).then(result=>{
                if(result.body.status==0){
                    this.shoplist=this.shoplist.concat(result.body.message);
                }
            })
        },
        getmore(){
            this.number++;
            this.getshop();
        },
        shopinfo(id){
            this.$router.push("/home/shopinfo/"+id);
        }
    }
}
</script>
<style lang="css" scoped>
    .shopping{
        display: flex;
        margin: 0px 5px;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .shopping .shopbox{
        width: 49%;
        /* border: 1px solid gold; */
        /* margin-left: 20px; */
        margin-top: 8px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.4)
    }
    .shopping .shopbox img{
        display: inline-block;
        height: 171.69px;
        margin-top: 10px;
        width: 96%;
        margin-left:2%; 
    }
    .shopping .shopbox h3{
        margin-left: 5px;
        font-size: 13px;
        height: 42px;
    }
    .shopping .content{
        background: #f6f5f5;
        height: 60px;
        
    }
    .shopping .content div{
        height: 30px;
        line-height: 30px;
    }
    .shopping .content div .sell{
        color: red;
        margin-left: 15px;
    }
    .shopping .content div del{
        font-size: 13px;
        color: rgb(136, 143, 143);
        margin-left:20px;
    }
    .scount{
        font-size: 13px;
        color: rgb(136, 143, 143);
        display: flex;
        justify-content: space-between;
        padding:0px 5px
    }
</style>