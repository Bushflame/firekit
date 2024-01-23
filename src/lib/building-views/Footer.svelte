<script>

</script>
<footer>
    <slot/>
</footer>


<style lang="stylus">
footer 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    justify-content  center
    height 64px 
    left 0
    width 100%
    width 100%
@media(min-width 880px)
    footer 
        border-radius 2rem
</style>