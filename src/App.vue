<template>
    <div class="box">
        <mt-header fixed title="商城app"></mt-header>
        <h2>1231</h2>
        <nav class="mui-bar mui-bar-tab">
			<routerLink class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</routerLink>
		</nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        padding-top: 40px;
    }
</style>