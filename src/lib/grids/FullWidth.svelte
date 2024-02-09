<script>
	export let img = '';
</script>

<!-- <div class="grid">
    <div class="img-wrap">
    <img src="/imgs/alsation-dog-1.jpg" alt="">
</div>
    <div class="corner top-left"/>
    <div class="corner top-right"/>
    <div class="corner bottom-left"/>
    <div class="corner bottom-right"/>
</div> -->

<div class="grid">
	<img src={img} alt="" />
	<div class="filter"><slot /></div>
	<div class="corner a" />
	<div class="corner b" />
	<div class="corner c" />
	<div class="corner d" />
</div>

<style lang="stylus">
.grid
    background var(--gamma)
    display  grid
    grid-template-columns 2rem 1fr 2rem
    grid-template-rows 2rem 1fr 2rem
    height calc(var(--globalHeight) - 160px)
    margin auto
    width 95% //calc(var(--globalWidth) - 32px)
.corner 
    background var(--gamma)
.img, .filter,img
    grid-column 1 / 4
    grid-row 1 / 4

.filter 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    flex-direction column
    //justify-content center
.a
    border-radius 0 0 100% 0
    grid-column 1 / 2
    grid-row 1 / 2

.b
    border-radius 0 0 0 100% 
    grid-column 3 / 4
    grid-row 1 / 2

.c
    border-radius 100% 0 0 0
    grid-column 3 / 4
    grid-row 3 / 4

.d
    border-radius 0  100% 0 0
    grid-column 1 / 2
    grid-row 3 / 4


img 
    height 100% 
    object-fit cover
    width 100%
@media(min-width 880px)
    .grid 
        height calc(var(--globalHeight) - 160px)   // 100% //var(--wHeight)
        //width calc(var(--globalWidth) / 2 - 24px)
</style>
