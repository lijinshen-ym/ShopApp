<template>
    <div class="comment">
        <h2>评论</h2>
        <hr>
        <textarea placeholder="请输入评论，最多可输入100字" maxlength="100" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="pushcomt">发表评论</mt-button>
        <div class="comlist">
            <div class="listli" v-for="(item,index) in comlist" :key="index">
                <div class="litop">
                    <span>第{{index+1}}楼</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>评论时间：{{item.add_time | dateFormat}}</span>
                </div>
                <div class="licont">
                    {{item.content=="undefined"?"此用户太懒，什么都没有留下":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="addcom">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            pageindex:1,
            comlist:[],
            msg:""
        }
    },
    created() {
        this.getcom();
    },
    methods: {
        getcom:function(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
                this.comlist=this.comlist.concat(result.body.message);
            })
        },
        addcom:function(){
            this.pageindex++;
            this.getcom();
        },
        pushcomt:function(){
            if(this.msg.trim()==""){
                Toast({
                    message:"不能发表空评论",
                    duration:2000
                })
                return;
            }else{
               this.$http.post("api/postcomment/"+this.id,{content:this.msg.trim()}).then(result=>{
                    if(result.body.status===0){
                        var obj={
                            user_name:"匿名用户",
                            add_time:new Date(),
                            content:this.msg
                        }
                        this.comlist.unshift(obj);
                        this.msg="";
                    }else{
                        Toast({
                            message:"评论发表失败",
                            duration: 2000
                        })
                    }
               }) 
            }
        }
    },
    props:["id"]
}
</script>
<style lang="css" scoped>
    .comment h2{
        font-size:17px;
        width: 100%;
    }
    .comment textarea {
        height: 85px;
        font-size: 14px;
        margin-bottom :0px;
        padding-bottom: 0px;
    }
    .comment .listli{
        margin-top: 5px;
        font-size: 14px;
    }
    .comment .litop{
        text-indent: 10px;
        background-color:rgba(0,0,0,.2);
    }
    .comment .litop span{
        padding-right: 1px;
    }
    .comment .licont{
        line-height: 35px;
        text-indent: 2em;
    }
    .comment .comlist{
        padding-bottom: 10px;
    }
</style>