<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in banner" :key="item.img" >
                <img :src="item.img" :class="flag?'screen':''">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:["banner","flag"]
}
</script>
<style lang="css" scoped>
    .mint-swipe{
        height: 200px;
        text-align: center;
    }
    img{
        height:100%;
        
    }
    .screen{
        width:100%;
    }
</style>