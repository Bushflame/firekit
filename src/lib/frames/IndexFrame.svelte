<script>
	let one = true;
	let two = false;
	let btnToSide = true;
	let page_1 = true;
	export let btnTxt = 'Contact';
</script>

<div class="outer">
	<section class="page">
		<div class="side side-1" class:one>
			<slot name="slot-1a" />
		</div>
		<div class="side side-2" class:two>
			<slot name="slot-1b" />
		</div>
	</section>
	<button
		class="toggle-btn side-btn"
		on:click={() => {
			one = !one;
			two = !two;
		}}
		>{#if one}
			{btnTxt}
		{:else}
			Back
		{/if}
	</button>
</div>

<!-- </div> -->
<style lang="stylus">
.outer 
    //border 1px solid red
    //display flex
    //justify-content center
    height calc(var(--globalHeight) - 0)
    //padding 1rem
    //position relative
.side-btn 
    background  pink //var(--gamma) //transparent 
    border-radius 1.5rem
    color var(--iota)
    display block   
    font-size 1.1rem
    //font-weight 800
    position absolute
    left 50%
    bottom 6.1rem
    transform translate(-50%)
    outline none
    padding .3rem 2rem
    text-align center

.page 
    display grid
    grid-template-columns 1fr 
    grid-template-rows 1
    grid-column 1 / 2 
    grid-row 1 / 2
    justify-content center
    margin auto
    //margin-bottom 1rem
    order 0
    transition all 1s
    width var(--globalWidth)

.side-1, .side-2
    //border 1px solid blue
    height 0 //calc(var(--globalHeight) - 0)
    display none
    grid-column 1 / 2 
    grid-row 1 / 2
    opacity 0
    overflow hidden
    transition all .5s
.side-1 
    order 2
.side-2 
    order 1
.side-1.one
    display grid
    height calc(var(--globalHeight) - 0)
    margin-left 0
    opacity 1
.side-2.two
    display grid
    height calc(var(--globalHeight) - 0)
    opacity 1

@media(min-width 880px)
    .side-1.one,.side-2.two, .side-1,.side-2
        opacity 1
    .side-1
        grid-column 1 / 2
        //margin-top 0
        order 1
    .side-2.two, .side-2
        grid-column 2 / 3
        //margin-right 0
        //margin-top 0rem
        order 1
    .toggle-btn 
        display none

</style>
