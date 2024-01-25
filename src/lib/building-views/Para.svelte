<script>
export let txt = ''
export let bold = ''
export let flex = false
</script>
{#if flex}
<p class='flex'>
    <span>{bold}</span> {txt}
</p>
{:else}
<p>
    <span>{bold}</span> {txt}
</p>
{/if}
<style lang="stylus">
p 
    color var(--theta)
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
</style>