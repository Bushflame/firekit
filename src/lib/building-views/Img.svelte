<script>
    	import Corners from '$comps/Corners.svelte';
export let img = ''
</script>
<div class="img">
<!-- <Corners> -->
        <Corners --height='100%'/>
        <img src={img} alt="">

<!-- </Corners> -->
</div>



<style lang="stylus">
.img
    box-shadow inset 0 0 40px 20px var(--gamma)
    height 100%
    max-height 100%
    max-width 100%
    object-fit cover
    position absolute
    left 0
    top 0
    width 100%


img 
    height 100% //10rem
    max-height 100%
    max-width 100%
    object-fit cover
    //opacity .5
    position absolute
    left 0
    top 0
    width 100%

</style>