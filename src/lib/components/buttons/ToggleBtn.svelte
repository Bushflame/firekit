<script>
	export let target = false;
	export let txtFalse = 'false';
	export let txtTrue = 'true';
	export let toggle;
</script>

<button
	on:click={() => {
		{
			toggle;
		}
	}}
>
	{#if !target}
		{txtFalse}
	{:else}
		{txtTrue}
	{/if}
</button>

<style lang="stylus">
button 
    background var(--gamma)
    border none 
    border-radius 1rem
    color var(--iota)
    outline none
    padding .4rem 1rem
    position absolute 
    left 50% 
    top var(--top)
    bottom var(--bottom)
    transform translate(-50%,0)
    z-index 6
</style>
