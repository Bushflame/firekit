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
    border 2px solid rgba(255,255,255,  .1)// 2px solid var(--beta)
    //border-top 2px solid var(--beta)
    background-color rgba(255, 255, 255, .09)
    // border-radius 1rem
    padding 1rem //.4rem
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
p 
    color var(--beta)
    //margin-bottom -1rem// 0
    padding 0
    //position relative

p.lg-first::first-letter 
    initial-letter 2
    padding-right 3px



</style>