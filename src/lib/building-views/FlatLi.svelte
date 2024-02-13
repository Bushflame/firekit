<script>
	export let item = '';
    export let dark = false
</script>
<!-- {#if !dark } -->
<li>{item}</li>
<!-- {:else} -->
    <!-- <li></li> -->
<!-- {/if} -->
<style lang="stylus">
li 
    //background rgba(1,1,1,.03)
    background var(--kappa) //rgba(255,255,255,.4)

    //border-radius 6px
    //color var(--theta)
    display flex
    align-items end //bottom
    font-size 1rem
    font-style italic
    //font-family: courier, monospace;
    line-height 1.5
    //margin-left -1.4rem
    margin 10px 0//auto
    min-height 2.4rem
    padding 6px 8px 8px
    text-align left
// li.dark
//     color var(--beta)
</style>
