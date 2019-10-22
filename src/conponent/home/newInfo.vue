<template>
    <div class="newinfo">
        <h3>{{newinfo.title}}</h3>
        <div class="nitime">
            <span>{{newinfo.add_time|dateFormat}}</span>
            <span>点击量：{{newinfo.click}}</span>
        </div>
        <hr>
        <div v-html="newinfo.content">
        
        </div> 
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from "../tagcomponent/comment.vue";

export default {
    data(){
        return {
            id:this.$route.params.id,
            newinfo:{}
        }
    },
    created(){
        this.getInfo();
    },
    methods:{
        getInfo:function(){
            this.$http.get("api/getnew/"+this.id).then(result=>{
                
                if(result.body.status===0){
                    this.newinfo=result.body.message[0]
                }else{
                    console.log("信息获取失败");
                }
            })
        }
    },
     components:{
        comment
    }
}
</script>
<style lang="css" scoped>
    .newinfo{
        padding: 10px 4px 0px 4px;
    } 
    .newinfo h3{
        font-size: 16px;
        text-align: center;
    }
    .newinfo .nitime{
        padding-top: 10px;
        color:blue;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
</style>