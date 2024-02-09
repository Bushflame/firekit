<script>
	import Corners from '$comps/Corners.svelte';
	export let img = '';
</script>

<div class="img">
	<img src={img} alt="" />
</div>

<style lang="stylus">
.img
    //box-shadow inset 0 0 40px 20px var(--gamma)
    //height 50% //var(--height)  //100%
    //height 200px
    max-height 100%
    max-width 100%
    object-fit cover
    width 100%



</style>
