<script>
	export let brand = 'Brand';
</script>
<div class="main">
    <header>
        <a href="/" class="brand">{brand}</a>
        <slot name="header" />
    </header>
    <section>        
        <slot />
        <!-- <div class="spacer"></div> -->
    </section>
    <footer>
        <slot name="footer" />
    </footer>
</div>
<style lang="stylus">
.main 
    //border 1px solid red
    position relative
    height var(--globalHeight)
    width var(--globalWidth)
section 
    background var(--beta)
    //border 1px solid blue
    //border-left .3rem solid var(--delta)
    //border-right .3rem solid var(--delta)
    border-radius 2rem
    display flex
    flex-direction column
    gap .6rem
    justify-content center
    //height var(--globalHeight)
    //overflow hidden
    margin 4.2rem 0
    //padding-top 3.2rem
    //position relative
    //width var(--globalWidth)
    z-index 0
.spacer 
    flex 1

header, footer
    background var(--beta)
    border-radius 2rem
    //box-shadow inset 0 0 30px 30px var(--beta)
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
