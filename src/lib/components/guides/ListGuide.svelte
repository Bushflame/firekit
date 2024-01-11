<script>
	export let title = '';
</script>

<div class="guide">
	<h3>{title}</h3>
	<p>Bullet lists make descriptions easier to read and are often prefered by visitors</p>
	<p>
		As with paragraph text, bullet list items are optional and can be used with or without paragraph
		text. Leave any unwanted list items empty.
	</p>
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
