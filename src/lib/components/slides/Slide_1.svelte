<script>
    /**
	 * @type {{ title: any; }}
	 */
     export let slide
</script>

<h1>{slide.title_1a}</h1>
{#if slide.intro_1a}
<p>{slide.intro_1a}</p>
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
</ul>

<style lang="stylus">

</style>
