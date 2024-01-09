<script>
	import Slide_1 from '$comps/slides/ResultsSlide.svelte';
	export let data;
	//console.log('data',data.results)
	let slides = data.results;
	//console.log('slides',slides)
</script>

<Slide_1 {slides} />

<!-- <h2>{results}</h2>
<h2>{$getByTitles}</h2> -->
<!-- <h2>{$getByTitles}</h2> -->
<style lang="stylus">

</style>
