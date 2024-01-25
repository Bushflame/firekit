<script>
export let item = ''
</script>

<li>{item}</li>

<style lang="stylus">
li 
    background rgba(255,255,255,.2)
    background linear-gradient(to right,var(--gamma),  var(--delta));
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    // box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    //border-left 3px solid var(--epsilon)
    //border-radius 1.2rem
    color var(--theta)
    display flex
    align-items center
    //margin-left -1.4rem
    margin 8px auto
    min-height 3rem
    padding .3rem .6rem .3rem 1rem
    width 100%
</style>