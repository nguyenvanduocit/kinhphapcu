<template>
	<div class="sidebar">
		<chapter-widget></chapter-widget>
	</div>
</template>
<script>
  import ChapterWidget from './Sidebar/ChapterWidget.vue'
  export default {
    name: 'sidebar',
    components: {
      ChapterWidget
    }
  }
</script>
<style lang="scss" scoped>
	.sidebar{

	}
</style>
