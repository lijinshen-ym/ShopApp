<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="changeCount" ref="number"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from "../../lib/MUI/js/mui.js";
export default {
    data(){
        return {}
    },
    mounted() {
        mui(".mui-numbox").numbox()
    },
    methods:{
        changeCount(){
            this.$emit("childCount",parseInt(this.$refs.number.value));
        }
    },
    props:["maxvalue"],
    //使用watch动态监听属性变化，并设置最大值
    watch:{
        "maxvalue":function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption('max',newVal);
        }
    }


}
</script>
<style lang="css" scoped>
    .mui-numbox{
        height: 25px;
    }
</style>