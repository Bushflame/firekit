<script>
	import { getByTitles } from '$lib/stores/store.js';
	import SearchLink from '$lib/searches/SearchLink.svelte';
	import FrameWrap from '$frames/FrameWrap.svelte'
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'
	import Corners from '$lib/grids/FullWidth.svelte';
	export let data;

	let titles = data.uniqueTitles;
</script>
<FrameWrap>
	<Header/>
<div class="card">
	<Corners>
		<SearchLink heading={'Filter By Breed'} linkTo={'/results'} {titles} />
	</Corners>

</div>
<Footer/>
</FrameWrap>
<style lang="stylus">
.card 
	height calc(var(--globalHeight) - 8rem)
	padding 1rem
	position relative
</style>
