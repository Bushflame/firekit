<script>

</script>

<div class="frame">
    <slot/>
</div>

<style lang="stylus">
.frame
    //border 1px solid #fff
    display flex 
    align-items space-between
    flex-direction column
    justify-content space-between
    height var(--globalHeight)
    position relative
    width var(--globalWidth)
</style>