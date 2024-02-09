<script>
export let item_3 = true
</script>

<div class="grid">
    <div class="item item-1">
        <slot name='item-1'/>
    </div>
    <div class="item item-2">
        <slot name='item-2'/>
    </div>
    {#if item_3}
    <div class="item item-1">
        <slot name='item-1'/>
    </div>
    {/if}
</div>

<style lang="stylus">
.grid 
    display grid
    grid-template-columns 1fr
    grid-template-rows 1fr
.item 
    grid-column 1 / 2 
    grid-row 1 / 2
    width 100%
.item-1 
    height 100%
</style>