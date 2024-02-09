<script>
	export let linkTo = '';
	export let linkTxt = 'link text';
</script>

<a href={linkTo} >{linkTxt}</a>

<style lang="stylus">
a 
    background var(--beta)
    border-radius 1rem
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    color var(--theta)
    display block
    font-size 1rem
    font-weight 800
    margin 1rem 1rem 0 auto  
    padding .5rem 1rem
    text-align center
    //text-decoration underline
    //position relative
    width fit-content


</style>
