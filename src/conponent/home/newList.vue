<template>
    <div>
        <ul class="mui-table-view">
            <router-link v-for="item in newlist" :key="item.id" :to="'/home/newInfo/'+item.id">
                <li class="mui-table-view-cell mui-media" >
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
                            <div>
                                <span>{{item.add_time | dateFormat}}</span>
                                <span>点击量:{{item.click}}</span>
                            </div>
							
						</div>
					</a>
				</li>
            </router-link>	
		</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newlist:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get("api/getnewslist").then((result)=>{
                if(result.body.status===0){
                    this.newlist=result.body.message;
                }
            })
        }
    }

    
}
</script>
<style lang="css" scoped>
    .mui-media-body h1{
        font-size: 15px;
    }
    .mui-media-body div{
        display: flex;
        justify-content: space-between;
    }
    .mui-media-body div span{
        font-size: 14px;
        color: grey;
    }
</style>