<template>
    <div class="details">
        <div>
            <h3>{{detailslist.title}}</h3>
            <hr>
            <div class="de_content" v-html="detailslist.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            detailslist:[]
        }
    },
    created(){
        this.getdetails();
    },
    methods:{
        getdetails(id){
            this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.detailslist=result.body.message[0];
                }
            })
        }
    }

}
</script>
<style lang="css">
    .details{
        margin: 0px 5px;
    }
    .details h3{
        margin: 20px 0px;
        text-align: center;
        font-size: 16px;
        color: rgb(26, 26, 235);
    }
    .de_content img{
        width: 100%;
        height: auto;
    }
</style>