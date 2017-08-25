<template>
	<div class="page page--home">
		<div class="container">
			<div class="inner">
				<sidebar></sidebar>
				<div class="chapter-sections">
					<chapter-section v-for="chapter in chapters" :key="chapter.id" :chapter="chapter"></chapter-section>
				</div>
			</div>
		</div>
		<sweet-modal ref="modal" overlay-theme="dark" @close="onModalClose">
			<sweet-modal-tab title="Thơ" id="tab-poem" class="poem-tab">
				<div class="inner">
					<p v-html="selectedVerse.poem"></p>
					<p v-if="selectedVerse.poem_en" v-html="selectedVerse.poem_en"></p>
				</div>
			</sweet-modal-tab>
			<sweet-modal-tab title="Bài giảng" id="tab-video" class="video-tab">
				<iframe width="100%" height="100%" :src="selectedVerse.videoSrc" frameborder="0" allowfullscreen></iframe>
			</sweet-modal-tab>
			<sweet-button slot="button" color="light-grey">Share</sweet-button>
		</sweet-modal>
	</div>
</template>
<script>
  import Sidebar from './Home/Sidebar'
  import ChapterSection from './Home/ChapterSection.vue'
  import {SweetModalTab, SweetModal} from '@/components/shared/SweetModal'
  import {mapGetters} from 'vuex'
  import verseStuff from '@/stuffs/verse'
  export default {
    name: 'home',
    components: {
      Sidebar,
      ChapterSection,
      SweetModalTab,
      SweetModal
    },
    created () {
      this.$store.dispatch('chapter/fetch')
      this.$store.dispatch('verse/fetch')
    },
    computed: {
      ...mapGetters({
        'chapters': 'chapter/chapters',
        'verses': 'verse/verses'
      })
    },
    data () {
      return {
        selectedVerse: verseStuff
      }
    },
    beforeRouteUpdate (to, from, next) {
      if ((to.params.chapter !== void 0) && (to.params.verse === void 0)) {
        console.log('scroll to chapter')
        let element = document.getElementById(`chapter-${to.params.chapter}`)
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
      } else if (to.params.verse !== void 0) {
        console.log('show model')
        this.selectedVerse = this.verses.find((verse) => {
          return verse.id === to.params.verse
        })
        this.$refs.modal.open('tab-poem')
      }
      next()
    },
    methods: {
      onModalClose () {
        this.$router.push('/')
        this.$nextTick(() => {
          this.selectedVerse = verseStuff
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.page--home{
	.inner{
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-gap: 40px;
	}
	.sweet-modal .sweet-content .sweet-modal-tab{
		&.video-tab{
			padding: 0;
			line-height: 0;
			height: 350px;
		}
		&.poem-tab{
			padding: {
				top: 40px;
				bottom: 40px;
			};
			.inner {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			p{
				margin: 0;
			}
		}
	}
}
</style>
