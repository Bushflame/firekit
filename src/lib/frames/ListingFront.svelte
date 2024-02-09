<script>
	import { fade, scale, fly } from 'svelte/transition';

	let one = true;
	let two = false;
	export let btnTxt = 'toggle';
	export let btnToSide = true;
</script>

<div
	class="grid"
	in:fly={{ x: -300, delay: 600, duration: 400 }}
	out:fly={{ x: 300, duration: 200 }}
>
	<div class="side side-1" class:one>
		<div class="filter"></div>
		<div class="slot-1">
			<slot name="slot-1" />
		</div>
		<!-- <div class="body">
            <slot name='slot-1b'/>
        </div> -->
	</div>
	<div class="side side-2" class:two>
		<slot name="slot-2" />
	</div>
</div>
<button
	class="toggle-btn"
	class:btnToSide
	on:click={() => {
		one = !one;
		two = !two;
	}}
>
	{#if one}
		{btnTxt}
	{:else}
		Back
	{/if}
</button>

<style lang="stylus">
.grid 
    display grid 
    grid-template-columns 1fr
    height 100% //var(--globalHeight)
    position relative
    width 100% //var(--globalWidth)
.side 
    grid-column 1 / 2
    grid-row 1 / 2 
    height 0 //100%
    overflow hidden
    opacity 0
    position relative
    transition all .2s
    width 100%
    //z-index -2
.side-1 
    //background red
    display flex 
    flex-direction column 
    gap 1rem 
.side-2 
    //background blue
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex
    align-items center
    justify-content center
.side-1.one, .side-2.two 
    height 100%
    opacity 1
    //z-index 1
.filter 
    box-shadow inset 0 0 40px 20px var(--delta)
    position absolute 
    bottom 0
    left 0
    right 0
    top 0
button.toggle-btn 
    background var(--theta)
    border-radius 1rem 0 0 1rem
    color var(--beta)
    font-size 1.2rem
    padding 1rem .2rem 1rem .5rem
    position absolute
    right 0
    top 50%
    transform translate(0, -50%)
    transition all .5s
    width 1.4rem
    word-wrap break-word 
@media(min-width 880px)
    .grid 
        gap 1rem
        grid-template-columns 1fr 1fr
    .side-1.one, .side-2.two, .side-1, .side-2
        height 100%
        opacity 1
        //z-index 1
    .side-2 
        grid-column 2 / 3
    button 
        display none
</style>
