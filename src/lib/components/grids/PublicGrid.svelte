<script>
	import ToggleBtn from '$comps/buttons/ToggleBtn.svelte';
	$: sellers = false;
</script>

<div class="grid grid-1">
	{#if !sellers}
		<div class="one">
			<slot name="one" />
			<button
				on:click={() => {
					sellers = !sellers;
				}}
				>Sellers
			</button>
		</div>
	{:else}
		<div class="two">
			<slot name="two" />
			<button
				on:click={() => {
					sellers = !sellers;
				}}
				>Back
			</button>
		</div>
	{/if}
</div>
<!-- wide screen grid -->
<div class="grid grid-2">
	<div class="one">
		<slot name="one" />
	</div>
	<div class="two">
		<slot name="two" />
	</div>
</div>

<style lang="stylus">

.grid  
    display grid 
    align-items center
    gap 1rem
    justify-content center
    height calc(var(--globalHeight) - 8rem)
    padding 1rem
    position relative
.grid-1 
    grid-template-columns 1fr
.grid-2 
    display none
    grid-template-columns 1fr 1fr

.one, .two 
    margin auto
    position relative
    width 100% //24rem
button 
    background var(--gamma)
    border none 
    border-radius 1rem
    color var(--iota)
    outline none
    padding .4rem 1rem
    position absolute 
    left 50% 
    bottom 1rem
    transform translate(-50%,0)
    z-index 6
@media(min-width 54rem)
    .grid-1 
        display none
    .grid-2 
        display grid


</style>
