<script>
	export let item = '';
</script>

<li>{item}</li>

<style lang="stylus">
li 
    //background rgba(1,1,1,.03)
    background rgba(255,255,255,.2)

    //border-radius 6px
    color var(--color)
    display flex
    align-items end //bottom
    font-size 1rem
    font-style italic
    //font-family: courier, monospace;
    line-height 1.5
    //margin-left -1.4rem
    margin 5px 0//auto
    min-height 2.4rem
    padding .2rem .1rem 0 .5rem 
    text-align left
</style>
