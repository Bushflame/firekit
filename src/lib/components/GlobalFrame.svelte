<script>
export let brand = 'Brand'

</script>

<section>
    <img src="/imgs/site/puppy.png" alt="puppy" class='bg-img'>

    <header>
        <a href="/" class="brand">{brand}</a>
        <slot name='header'/>
    </header>
    <slot/>
    <div class="spacer"></div>
    <footer>
        <slot name='footer'/>
    </footer>
</section>

<style lang="stylus">
section 
    background var(--alpha)
    display flex
    flex-direction column
    gap .6rem
    justify-content start
    height var(--globalHeight)
    overflow hidden
    padding-top 3.2rem
    position relative
    width var(--globalWidth)
    z-index 0
.spacer 
    flex 1

header, footer
    background var(--beta)
    display flex
    align-items center
    height 3.2rem
    padding-left .6rem
    position absolute
    left 0
    width var(--globalWidth)
header 
    top 0
footer
    bottom 0
.brand 
    color var(--delta)
    font-size 1.4rem
    font-weight bold
.bg-img 
	position absolute
	left 50%
	top 50%
	opacity .2
	transform translate(-50%, -50%)
	z-index 0

</style>