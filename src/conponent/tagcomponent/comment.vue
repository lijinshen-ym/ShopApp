<template>
    <div class="comment">
        <h2>评论</h2>
        <hr>
        <textarea placeholder="请输入评论，最多可输入100字" maxlength="100"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comlist">
            <div class="listli" v-for="(item,index) in comlist" :key="item.add_time">
                <div class="litop">
                    <span>第{{index}}楼</span>
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

export default {
    data(){
        return {
            pageindex:1,
            comlist:[]
        }
    },
    created() {
        this.getcom();
    },
    methods: {
        getcom:function(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
                this.comlist=this.comlist.concat(result.body.message);
                console.log(this.comlist);
            })
        },
        addcom:function(){
            this.pageindex++;
            this.getcom();
        }
        
    },
    props:["id"]
}
</script>
<style lang="css" scoped>
    .comment h2{
        font-size:17px;
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