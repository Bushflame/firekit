<script>
	import Corners from '$lib/grids/Corners.svelte';
</script>

<div class="outer">
    <header></header>
    <div class="liner">
        <Corners>
        <div class="page">
            <slot/>
        </div>
        </Corners>
</div>
    <footer></footer>
</div>

<style lang="stylus">
.outer
    height var(--globalHeight)
    width var(--globalWidth)
.liner 
    padding 1rem
.page 
    display grid 
    align-items center
    height calc(var(--globalHeight) - 10rem )
    margin auto
    padding 1rem
    width 400px
header, footer 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    justify-content  center
    height 4rem 
    left 0
    width 100%
@media(min-width 880px)
    .outer 
        background var(--iota)
    header, footer 
        border-radius 2rem
</style>