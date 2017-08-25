<template>
	<aside class="widget widget--chapter">
		<h1 class="title">Phẩm</h1>
		<div class="content">
			<ul class="chapter-list">
				<li class="chapter" v-for="chapter in chapters" :key="chapter.id">
					<router-link :to="{ name: 'Home', params: { chapter: chapter.id }}"><span class="index" v-text="`#${chapter.id}`"></span><span class="name" v-text="chapter.name"></span></router-link>
				</li>
			</ul>
		</div>
	</aside>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'chapter-widget',
    computed: {
      ...mapGetters({
        'chapters': 'chapter/chapters'
      })
    }
  }
</script>
<style lang="scss" scoped>
	.widget--chapter{
		position: sticky;
		top: 10px;
		.title{
			color: rgba(29, 33, 41, 0.73);
		}
		max-height: calc(100vh - 20px );
		overflow-y: auto;

		&::-webkit-scrollbar-track
		{
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
			background-color: rgba(245, 245, 245, 0.78);
		}

		&::-webkit-scrollbar
		{
			width: 3px;
			background-color: #F5F5F5;
		}

		&::-webkit-scrollbar-thumb
		{
			background-color: rgba(0, 0, 0, 0.32);
		}
		direction:rtl;
		.content,
		.title{
			padding-left: 20px;
			direction: ltr;
		}
	}
	.chapter-list{
		list-style: none;
		.chapter{
			text-transform: uppercase;
			line-height: 44px;
			display: block;
			font-size: 13px;
			font-weight: 500;
			a{
				display: block;
				line-height: 40px;
				color: #90949C;
				&:hover{
					color: #4B4F56;
				}
				&.router-link-active{
					color: #4B4F56;
				}
				.index{
					margin-right: 10px;
					color: #4B4F56;
				}
			}
		}
	}
</style>
