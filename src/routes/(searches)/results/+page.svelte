<script>
	import Slide_1 from '$comps/slides/ResultsSlide.svelte';
	import FrontCard from '$comps/cards/PublicFrontCard.svelte';
	import SearchResults from '$lib/searches/SearchResults.svelte';
	export let data;
	let slides = data.results;

	let front = true;
</script>

<SearchResults {slides} />

<style lang="stylus">

</style>
