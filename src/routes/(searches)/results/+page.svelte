<script>
	//import Slide_1 from '$comps/slides/ResultsSlide.svelte';
	//import FrontCard from '$comps/cards/PublicFrontCard.svelte';
	import SearchResults from '$lib/searches/SearchResults.svelte';

	
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'
	import Frame from '$frames/SinglePageFrame.svelte'
	import FrameWrap from '$frames/FrameWrap.svelte'
	import Corners from '$lib/grids/Corners.svelte'
	export let data;
	let results = data.results;

	let front = true;
</script>
<SearchResults {results} />


<style lang="stylus">
</style>
