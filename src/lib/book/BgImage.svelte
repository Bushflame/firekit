<script>
export let bg_img = ''
export let flip = false
</script>
{#if !flip}
	<img src={bg_img} alt="">
{:else}
	<img src={bg_img} alt="" class="flip">
{/if}
<style lang="stylus">
img 
	width 100%
	position absolute
	left 0
	top 0
	height 100%
	//transform rotate(90deg)
	z-index 1
.flip 
	transform rotateY(180deg)
</style>