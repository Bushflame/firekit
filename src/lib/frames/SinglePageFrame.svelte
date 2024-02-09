<script>
	import Nav from '$comps/navigation/Nav.svelte';
	import Title from '$lib/building-views/Title.svelte';
	let one = true;
	let two = false;
	export let isIndex = true;
</script>

<button
	class="toggle-btn"
	on:click={() => {
		one = !one;
		two = !two;
	}}
	>{#if one}
		{#if isIndex}
			Sellers
		{:else}
			Contact
		{/if}
	{:else}
		Back
	{/if}
</button>

<section class="page">
	<div class="side side-1" class:one>
		<slot name="slot-1a" />
	</div>
	<div class="side side-2" class:two>
		<slot name="slot-1b" />
	</div>
</section>

<style lang="stylus">
.toggle-btn 
    background red // transparent 
    border 1px solid var(--beta)
    border-radius 1.5rem
    color var(--beta)
    display block   
    font-size 1.2rem
    font-weight 800
    outline none
    padding .6rem 2rem
    position absolute
    left 50%
    top .8rem
    transform translate(-50%)
    text-align center
    z-index 10
    //margin-bottom -4rem
// .outer 
//     background var(--iota)
//     display grid
//     align-items center
//     justify-content center
//     height calc(var(--globalHeight) - 10rem)
//     position relative
// .wrap
//     display grid 
//     justify-content center
//     grid-template-columns 1fr
//     grid-template-rows 1
//     height calc(var(--globalHeight) - 10rem)
//     padding 0 1rem
//     position relative
//     width calc(var(--globalWidth)  )
.page 
    background var(--iota)
    display grid
    grid-template-columns 1fr
    grid-template-rows 1
    // grid-column 1 / 2 
    // grid-row 1 / 2
    height calc(var(--globalHeight) - 12rem)
    padding 0rem
    position relative
    margin auto
    //margin-top 1.1rem
    transition all 1s
    //width calc(var(--globalWidth) - 20px)



.side-1, .side-2
    grid-column 1 / 2
    grid-row 1 / 2
    display flex
    justify-content space-between
    height calc(var(--globalHeight) - 12rem)
    margin 0
    opacity 0
    transition all .5s

    //width 50%
.side-1 
   // margin-left -500px
    //margin-top calc(10rem - var(--globalHeight))
    order 2
.side-2 
    margin-right -500px
    order 1
.spacer 
    flex-grow 1
header, footer 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    justify-content  center
    height 4rem 
    left 0
    width 100%
footer 
    bottom 0
.side-1.one
    margin-left 0
    margin-top 0
    opacity 1
    order 2
.side-2.two
    margin-right 0rem
    opacity 1

@media(min-width 880px)
    .outer 
        background var(--iota)
    header, footer 
        border-radius 2rem
    .toggle-btn
        display none
    .page
        grid-template-columns 1fr 1fr 
        gap 1.2rem
        //margin-bottom .5rem
        //margin-top -.2rem
        padding  0rem 1rem 0
        width calc(var(--globalWidth) - 2rem)

    .side-1.one,.side-2.two, .side-1,.side-2
        //display grid ///???
        opacity 1
    .side-1
        grid-column 1 / 2
        margin-top 0
        margin-left 0
        order 1
    .side-2 
        grid-column 2 / 3
        margin-right 0
        order 1
    .togglr-btn 
        display none

</style>
