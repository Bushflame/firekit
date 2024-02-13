<script>
    export let dark_txt = false
</script>
{#if !dark_txt}
<ul>
	<slot />
</ul>
{:else}
<ul class="dark"><slot/></ul>
{/if}
<style lang="stylus">
ul 
    //background rgba(255,255,255,.1)
    //border 1px solid red
    color var(--beta)
    list-style none
    //margin var(--margin)
    //margin .5rem 1.5rem 1rem 2rem
    //max-width 22rem
    //margin-left 1rem
    padding  1rem
    //width 94%
ul.dark 
    color var(--theta)
</style>
