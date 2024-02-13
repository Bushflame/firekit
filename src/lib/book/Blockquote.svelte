<script>
export let lg_first = true
</script>

<div class="wrap">
    {#if lg_first}
    <p class="lg-first">
        <slot/>
    </p>
    {:else}
    <p >
        <slot/>
    </p>
    {/if}
</div>
<style lang="stylus">

.wrap 
    border-bottom 2px solid var(--beta)
    border-top 2px solid var(--beta)
    // border-radius 1rem
    padding 0 1rem .4rem
    position relative
.wrap::before, .wrap::after
    color var(--beta)
    content ''
    height 2rem
    position absolute
    width 2rem
.wrap::after
    border-bottom 1px solid 
    border-right 1px solid
    bottom -1px
    right 0
.wrap::before
    border-left 1px solid 
    border-top 1px solid
    left 0
    top -1px
p.para 
    color var(--beta)
    //position relative

p.lg-first::first-letter 
    initial-letter 2
    padding-right 3px



</style>