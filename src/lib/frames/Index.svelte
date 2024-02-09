<script>
	let one = true;
	let two = false;
	let one_a = true;
	let one_b = true;
	export let btnTxt = 'toggle';
</script>

<div class="grid">
	<div class="shadows shadow-1"></div>
	<div class="shadows"></div>
	<div class="side side-1" class:one>
		<span class="slot-1a" class:one_a>
			<slot name="slot-1a" />
		</span>
		<span class="slot-1b" class:one_b>
			<slot name="slot-1b" />
		</span>
	</div>
	<div class="side side-2" class:two>
		<slot name="slot-2" />
	</div>
</div>
<button
	class="btn"
	on:click={() => {
		one = !one;
		two = !two;
		one_a = !one_a;
		one_b = !one_b;
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
    height 100% 
    overflow hidden
    position relative
    width 100% 
.head 
    background var(--theta)
    height 4rem
    margin-top 0
    position absolute
    top 0
    width 100%
.shadows 
    background: linear-gradient(90deg, 
    rgba(0,0,0,0) 0%, 
    rgba(0,0,0,0.08) 12%, 
    rgba(0,0,0,0.25) 35%,  
    rgba(0,0,0,.12) 50%,  
    rgba(0,0,0,0.25) 65%, 
    rgba(0,0,0,0.08) 88%, 
    rgba(0,0,0,0) 100%)
    height 100%
    position absolute 
    left 48.5% 
    top 0
    transform translate(-50%)
    width 8rem
    z-index 200
.shadow-1
    left 50%
    //transform rotate(180deg)
.side 
    grid-column 1 / 2
    grid-row 1 / 2 
    height 0 
    opacity 0
    position relative
    transition all .5s
    width 422px
.side-1 
    display grid 
    grid-template-columns 1fr
    grid-template-rows 1fr
    position  relative
.side-2 
    background var(--alpha)
.side-1.one, .side-2.two 
    background var(--alpha)
    height 100%
    opacity 1

.slot-1a, .slot-1b
    grid-column 1 / 2
    grid-row 1 / 2
    height 0 //100%
    opacity 0
    overflow hidden
    transition all .5s


.slot-1a.one_a, .slot-1b.one_b
    display block
    height 100%
    opacity 1
.side-1::after, .side-1::before 
    background var(--theta)
    content ''
    height 4rem
    position absolute
    left 0 
    width 100%
.side-1::before
    top 0
.side-1::after
    bottom 0
.side-2::before, .side-2::after 
    background var(--theta)
    content ''
    height 4rem 
    position absolute
    left -2px
    width calc(100% + 8px)
.side-2::before
    top 0
    //left 3px
.side-2::after
    bottom 0
    left 0px
button 
    background var(--iota)
    border-radius 1.5rem
    color var(--beta)
    font-size 1.2rem
    padding 1rem 2rem
    position absolute
    left 50%
    bottom 4rem
    transform translate(-50%)
    transition all .5s
    width 14rem
    word-wrap break-word 

@media(min-width 880px)
    .grid 
        gap 1rem
        grid-template-columns 1fr 1fr
    .side-1.one, .side-2.two, .side-1, .side-2
        height 100%
        opacity 1
    .side-2 
        grid-column 2 / 3
    button 
        display none
</style>
