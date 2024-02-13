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
    font-weight var(--weight)
    line-height 1.3
    margin var(--margin)
    //padding 0 1rem
    text-align var(--align)

p.dark 
	color var(--lambda)

span 
    font-weight 800
hr 
	background var(--delta)
	border 1px solid var(--delta)
	//height 2px
	margin .4rem auto 1rem
	width 10rem
</style>
