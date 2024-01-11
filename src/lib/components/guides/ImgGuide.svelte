<script>
	export let title = '';
</script>

<div class="guide">
	<h3>{title}</h3>
	<p>
		Your front page is what potential buyers will see when filtering by breed. A good option here
		would be an image of the litter. To prevent distortion, a landscape orientation is preferable.
	</p>
	<p>To prevent distortion, a landscape orientation is preferable.</p>
	<p>Inner pages require a portrait image. These are ideal for showing images of the parents.</p>
</div>

<style lang="stylus">
.guide 
    background var(--alpha) 
    border 1px solid var(--delta)
    border-radius 2rem
    color var(--delta)
    height fit-content //20rem
    padding 2rem 1rem 2rem
    position absolute
    top 0
    text-align center
    z-index 50
h3 
    color var(--delta)
    margin 0 auto 1rem
    text-align center
p 
    line-height 1.5
    margin-bottom 1rem

</style>
