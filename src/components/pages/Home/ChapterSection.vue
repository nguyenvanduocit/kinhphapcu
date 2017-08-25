<template>
<section class="chapter-section"  :id="`chapter-${chapter.id}`">
	<h1 class="name" v-text="title"></h1>
	<item-list :verses="currentVerses"></item-list>
</section>
</template>
<script>
  import ItemList from './ItemList.vue'
  import {mapGetters} from 'vuex'
  export default {
    name: 'chapter-section',
    props: {
      chapter: {
        type: Object
      }
    },
    computed: {
      ...mapGetters({
        'verses': 'verse/verses'
      }),
      currentVerses () {
        return this.verses.filter((verse) => {
          return verse.chapterId === this.chapter.id
        })
      },
      title () {
        return `Phẩm #${this.chapter.id}: ${this.chapter.name}`
      }
    },
    components: {
      ItemList
    }
  }
</script>
<style lang="scss" scoped>
	.chapter-section{
		margin-bottom: 60px;
		&:last-child{
			margin-bottom: 0;
		}
		.name{
			font-size: 28px;
			font-weight: 500;
			line-height: 32px;
			margin-bottom: 30px;
			color: rgba(29, 33, 41, 0.73);
			z-index: 1;
			background: $color--background-body;
			padding-top: 10px;
		}
	}
</style>
