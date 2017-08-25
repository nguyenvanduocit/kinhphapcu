<template>
	<header class="site-header">
		<div class="container">
			<div class="inner">
				<router-link class="logo-text" to="/" tag="h1"><img class="logo-image" src="../../assets/logo.svg" alt="">Kinh Pháp Cú</router-link>
				<nav class="main-nav">
					<router-link to="/" exact>Home</router-link>
					<router-link to="/about">About</router-link>
				</nav>
			</div>
		</div>
	</header>
</template>
<script>
export default {
  name: 'site-header'
}
</script>
<style lang="scss" scoped>
	.site-header{
		box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.08);
		background-color: rgba(255,255,255,.98);
		width: 100%;
		margin-bottom: 60px;
		.inner{
			height: 66px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.logo-text{
			font-weight: 200;
			font-size: 18px;
			margin: 0;
			color: #4B4F56;
			display: flex;
			justify-content: center;
			align-items: center;
			.logo-image{
				height: 31px;
				width: auto;
				margin-right: 10px;
			}
		}
		.main-nav{
			a{
				font-weight: 500;
				font-size: 11px;
				text-transform: uppercase;
				margin: 0px 32px 0 0;
				color: #90949C;
				line-height: 62px;
				display: inline-block;
				vertical-align: top;

				&.router-link-active{
					color: #4B4F56;
					box-shadow: 0px 2px #4080FF;
				}
			}
		}
	}
</style>
