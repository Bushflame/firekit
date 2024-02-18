<script>
	export let txt = ''
	export let bold = '';
	export let dark_txt = false;

</script>

{#if dark_txt}
	<p class="dark">
		{txt}
	</p>
{:else}
<p>
	{txt}
</p>
{/if}

<style lang="stylus">

p 
	color var(--beta)
	font-size 1.2rem
	line-height 1.3
	//margin var(--margin)
	white-space pre-wrap

p.dark 
	color var(--lambda)

</style>
