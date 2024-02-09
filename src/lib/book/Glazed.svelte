<script>
export let isTitle = false
</script>
{#if !isTitle}
<div class="glazed glazed-body">
    <slot/>
</div>
{:else}
<div class="glazed glazed-title">
    <slot/>
</div>
{/if}


<style lang="stylus">
.glazed
	color var(--epsilon)
	background-color rgba(255, 255, 255, .09)
	border: 1px solid rgba(255, 255, 255, .25)
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25)
	backdrop-filter blur(15px);
	height fit-content
	//margin auto auto 0
	padding .5rem
	position relative
	text-align center
	width 100%
	z-index 10
.glazed-body
	width 100%
.glazed-title
	margin  1rem auto auto
	padding .4px
	width fit-content
</style>