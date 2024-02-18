<script>
	export let title = '';
</script>

<h1>{title}</h1>

<style lang="stylus">
h1 
    //background var(--gamma)
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    color var(--theta) // var(--color)
    font-size 1.4rem
    letter-spacing 1px
    margin .5rem auto  .4rem//.6rem
    padding .2rem 1rem
    position relative

    //bottom var(--bottom) //.5rem
    //transform translate(-50%)
    text-align center
    width fit-content
    z-index 100
</style>
