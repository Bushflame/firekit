<script>
	export let title = '';
</script>

<h1>{title}</h1>

<style lang="stylus">
h1 
    //background var(--gamma)
    //border-radius 1.2rem
    color var(--iota) // var(--color)
    font-size 1.4rem
    margin .5rem auto  .4rem//.6rem
    padding .2rem 1rem
    position relative

    //bottom var(--bottom) //.5rem
    //transform translate(-50%)
    text-align center
    width fit-content
    z-index 100
</style>
