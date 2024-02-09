<script>
	import Corners from '$lib/grids/Corners.svelte';
</script>

<div class="outer">
	<header></header>
	<div class="liner">
		<div class="page">
			<slot />
		</div>
	</div>
	<footer></footer>
</div>

<style lang="stylus">
.outer
    display flex 
    flex-direction column
    justify-content space-between
    align-items center
    height 100% //var(--globalHeight)
    width 100% ///var(--globalWidth)
.liner 
    padding 1rem
.page 
    //background var(--alpha)
    display grid 
    align-items center
    //height calc(var(--globalHeight) - 10rem )
    margin auto
    padding 1rem
    width 400px
header, footer 
    background var(--iota)
    display flex 
    align-items center
    justify-content  center
    height 4rem 
    left 0
    width 100%
@media(min-width 880px)
    .outer 
        background var(--theta)
</style>
