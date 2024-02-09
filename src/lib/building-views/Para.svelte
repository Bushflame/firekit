<script>
	export let txt = '';
	export let bold = '';
	export let flex = false;
	export let hr = false;
</script>

{#if flex}
	<p class="flex">
		<span>{bold}</span>
		{txt}
	</p>
	{#if hr}
		<hr />
	{/if}
{:else}
	<p>
		<span>{bold}</span>
		{txt}
	</p>
	{#if hr}
		<hr />
	{/if}
{/if}

<style lang="stylus">
p 
    color var(--beta)
    font-size 1.2rem
    font-weight var(--weight)
    line-height 1.3
    margin var(--margin)
    //padding 0 1rem
    text-align var(--align)

p.flex 
    display flex
    justify-content space-between
    margin-left 0
    width 16rem

span 
    font-weight 800
hr 
	background var(--delta)
	border 1px solid var(--delta)
	//height 2px
	margin .4rem auto 1rem
	width 10rem
</style>
