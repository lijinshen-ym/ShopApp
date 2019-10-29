<template>
    <div class="photolist">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in catelist" :key="item.id" @click="getimg(item.id)">
                        {{item.title}}
                    </a>
                   
                </div>
            </div>
        </div>
        <ul>
            <router-link v-for="item in imglist" :key="item.img_url" tag="li" :to="'/home/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                 <div>
                        <h4>{{item.title}}</h4>
                        <span>{{item.zhaiyao}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from "../../lib/MUI/js/mui.js";


export default {
    data(){
        return {
            catelist:[],
            imglist:[],
            id:""
        }
    },
    created() {
        this.getcategory();
        this.getimg(0);
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
    },
    methods: {
        getcategory:function(){
            this.$http.get("api/getimgcategory").then(result=>{
                if(result.body.status==0){
                    result.body.message.unshift({title:"全部",id:0});
                    this.catelist=result.body.message;
                }
            })
        },
        getimg(id){
            this.$http.get("api/getimages/"+id).then(result=>{
                if(result.body.status==0){
                    this.imglist=result.body.message;
                }
            }) 
        } 
    }   
}
</script>
<style lang="css" scoped>
    *{
        touch-action: none;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .photolist ul{
        margin: 0px 0px;
        padding: 10px 15px; 
    }
    .photolist ul li{
        margin:0px 0px 10px 0px;
        list-style: none;
        background: rgb(209, 202, 202);
        position: relative;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.4)
    }
    .photolist img{
        width:100%;
        height: 100%;
        vertical-align:  middle;
    }
    .photolist li div{
        position: absolute;
        bottom: 0px;
        background: rgba(0,0,0,.4);
        max-height: 80px;
        color: white;
        
    }
    .photolist li div h4{
        font-size: 15px;
        margin:0px 5px; 
    }
    .photolist li div span{
        font-size: 12px;
        line-height: 12px;
        margin:0px 5px; 
    }
</style>