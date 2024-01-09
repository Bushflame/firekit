<script>
	/**
	 * @type {{ title: any; }}
	 */
	export let slide;
</script>

<h1>{slide.title_1a}</h1>
{#if slide.para_1a}
	<p>{slide.para_1a}</p>
{/if}
<ul>
	{#if slide.la}
		<li>
			{slide.li_1a}
		</li>
	{/if}
	{#if slide.lb}
		<li>
			{slide.li_1b}
		</li>
	{/if}
	{#if slide.lc}
		<li>
			{slide.li_1c}
		</li>
	{/if}
	{#if slide.ld}
		<li>
			{slide.li_1d}
		</li>
	{/if}
	{#if slide.lce}
		<li>
			{slide.li_1e}
		</li>
	{/if}
	{#if slide.lf}
		<li>
			{slide.li_1f}
		</li>
	{/if}
</ul>

<style lang="stylus">

</style>
