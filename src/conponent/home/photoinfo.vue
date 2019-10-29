<template>
    <div class="photoinfo">
        <h1 class="ph1">{{info.title}}</h1>
        <div class="pdiv">
            <span>{{info.add_time | dateFormat}}</span> 
            <span>点击量：{{info.click}}</span>   
        </div> 
        <hr>
        <template>
            <vue-preview :slides="imglist" @close="handleClose" class="preview"></vue-preview>
        </template>
        <div v-html="info.content" class="pcontent"></div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from '../tagcomponent/comment.vue';
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:{},
            imglist:[]
        }
    },
    created() {
        this.getinfo();
        this.getimg();
    },
    methods: {
        getinfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.info=result.body.message[0];
                    // console.log(this.info);
                }
            })
        },
        getimg(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.imglist=result.body.message;
                    console.log(this.imglist);
                    this.imglist.forEach(img=>{
                        img.src = img.src;
                        img.msrc = img.src;
                        img.alt = "";
                        img.title = "";
                        img.w = 350;//这是大图的宽
                        img.h = 350;
                    })
                }
            })
        },
        handleClose () {
            console.log('close event')
        }
    },
    components:{
        comment
    }  
}
</script>
<style lang="css" scoped>
    .photoinfo{
        margin: 0px 5px;
    }
    .photoinfo>.ph1{
        font-size: 16px;
        text-align: center;
        color: rgb(18, 71, 155);
        margin-top: 20px;
    }
    .photoinfo>.pdiv{
        display: flex;
        justify-content: space-between;
        margin: 20px 5px 0px 5px;
        font-size: 14px;
        color: rgb(59, 59, 240);
    }
    .pcontent{
        margin-bottom: 20px;
    }
</style>