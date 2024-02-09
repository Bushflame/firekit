<script>
	//import Slide_1 from '$comps/slides/ResultsSlide.svelte';
	//import FrontCard from '$comps/cards/PublicFrontCard.svelte';
	import SearchResults from '$lib/searches/SearchResults.svelte';
	export let data;
	let results = data.results;

	let front = true;
</script>

<SearchResults {results} />

<style lang="stylus">

</style>
