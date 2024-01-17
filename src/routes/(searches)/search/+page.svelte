<script>
	import { getByTitles } from '$lib/stores/store.js';
	import SearchLink from '$lib/searches/SearchLink.svelte';
	import Corners from '$comps/Corners.svelte';
	export let data;

	let titles = data.uniqueTitles;
</script>

<div class="card">
	<Corners>
		<SearchLink heading={'Flitler By Breed'} linkTo={'/results'} {titles} />
	</Corners>
</div>

<style lang="stylus">
.card 
	height calc(var(--globalHeight) - 8rem)
	padding 1rem
	position relative
</style>
