<script>
export let li = ''
</script>

<li>
     {li}
</li>

<style lang="stylus">
li 
    color var(--theta)
    margin-bottom .5rem
    padding-left 1.3rem
    position relative
li::after 
    border 1px solid var(--epsilon)
    border-radius 50% 
    content ''
    height 1rem 

    position absolute
    top 50% 
    left -.5rem 
    transform translate(0,-50%)
    width 1rem


</style>