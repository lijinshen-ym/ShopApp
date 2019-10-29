<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from "../tagcomponent/comment.vue";
export default {
    data(){
        return {
            id:this.$route.params.id,
        }
    },
    components:{
        comment
    }
}
</script>
<style lang="css" scoped>
    
</style>