<template>
<div class="item-list">
	<item v-for="verse in verses" :key="verse.id" :verse="verse"></item>
</div>
</template>
<script>
  import Item from './Item.vue'
  export default {
    name: 'item-list',
    props: {
      verses: {
        type: Array
      }
    },
    components: {
      Item
    }
  }
</script>
<style lang="scss" scoped>
	.item-list{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: max-content;
		grid-column-gap: 40px;
		grid-row-gap: 50px;
		@include media-breakpoint-down('xs'){
			grid-template-columns: 1fr;
		}
	}
</style>
