<template>
	<router-link to="" tag="article" class="item" :to="{ name: 'Home', params: { chapter: verse.chapterId, verse: verse.id }}">
		<div class="content">
			<p v-html="verse.poem"></p>
		</div>
	</router-link>
</template>
<script>
  import verse from '@/stuffs/verse'
  export default {
    name: 'item',
    props: {
      verse: {
        type: Object,
        default () {
          return verse
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
	.item{
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background-color: white;
		vertical-align: top;
		text-align: left;
		box-shadow: 0 20px 20px rgba(0,0,0,.08);
		white-space: normal;
		transition: all 250ms cubic-bezier(.02, .01, .47, 1);
		color: #4B4F56;
		cursor: pointer;
		&:hover{
			box-shadow: 0 40px 40px rgba(0,0,0,.16);
			transform: translate(0,-20px);
		}
		.content{
			text-align: center;
			padding: 30px 10px;
			p{
				margin-bottom: 0;
				font-size: 18px;
				line-height: 26px;
				color: #4B4F56;
			}
		}
	}
</style>
