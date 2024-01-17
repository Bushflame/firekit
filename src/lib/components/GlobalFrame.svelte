<script>
	export let brand = 'Brand';
</script>

<div class="main">
	<header>
		<a href="/" class="brand">
			<img src="/imgs/pug.png" alt="Site logo" />
		</a>
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
    //overflow hidden
    position relative
    height var(--globalHeight)
    width var(--globalWidth)
section 
    background var(--beta)
    border-radius 2rem
    display flex
    flex-direction column
    gap .6rem
    justify-content center
    //overflow hidden
    margin 4.2rem 0
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
    padding-left  1rem
    position absolute
    left 0
    width var(--globalWidth)
    z-index 0
header 
    top 0
footer
    bottom 0
.brand 
    height 3rem
    width 3rem
.bg-img 
	position absolute
	left 50%
	top 50%
	opacity .2
	transform translate(-50%, -50%)
	z-index 0

</style>
