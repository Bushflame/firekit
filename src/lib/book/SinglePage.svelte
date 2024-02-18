<script>
	import Bg_img from '$lib/book/BgImage.svelte'
</script>

<div class="outer">

	<div class="liner">
    
            <!-- <Bg_img bg_img={'/imgs/generic/gen-1.jpg'}/> -->
		<div class="page">
            
			<slot />
		</div>
        <div class="filter"></div>
	</div>
</div>

<style lang="stylus">
.outer
    //background var(--kappa)
    border 1rem solid var(--lambda)
    display flex 
    flex-direction column
    justify-content space-between
    align-items center
    height 100% //calc(var(--globalHeight) - 2rem)
    //margin 0 auto
    //padding 1rem
    position relative
    width var(--globalWidth)
.liner 
    //background red
    //var(--theta)
    height 100%
    position relative
    width 100%
    z-index 1
.filter 
    background var(--iota-alpha-d)
    height 100%
    position absolute 
    left 0
    top 0
    width 100%
    z-index 1
.page 
    //background orange //var(--beta-gamma)
    display grid 
    align-items center
    //height calc(var(--globalHeight) - 10rem )
    margin 2rem auto 0
    //padding 1rem
    //width 400px

</style>
