<script>
</script>

<header>
	<slot />
</header>

<style lang="stylus">
header 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    justify-content  center
    height 64px 
    left 0
    width 100%
    width 100%

@media(min-width 880px)
    header 
        border-radius 2rem
</style>
