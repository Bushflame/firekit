<script>
export let linkTo = ''
export let linkTxt = 'link text'
</script>

<a href={linkTo}>{linkTxt}</a>

<style lang="stylus">
a 
    //background var(--delta)
    //border-bottom 1px solid var(--iota)
    border-radius 1rem
    background radial-gradient(var(--gamma),  var(--delta));
    color var(--theta)
    display block
    margin 1rem .2rem 0 auto
    padding .6rem 1rem
    //text-decoration underline
    position relative
    width fit-content
</style>