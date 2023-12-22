<script>
	import { goto } from '$app/navigation';
	import { getByTitles } from '$lib/stores/store';
	export let data;
	let listing = data.listing;
</script>

<div class="page-wrap">
	<div class="page-item">
		<img class="img_1a" src={listing.img_1a} alt={listing.title_1a} />
	</div>
	<div class="page-item">
		<h1>{listing.title_1a}</h1>
	</div>
	<div class="page-item">
		<p>{listing.description_1a}</p>
	</div>
	<a href={`/search`} data-sveltekit-reload>Back</a>
</div>
<svelte:head>
	<title>FireKit - {listing.title_1a}</title>
</svelte:head>

<style lang="stylus">
.page-wrap
	background rgba(255,255,255,.1)
	display flex
	flex-direction column
	gap 1rem
	max-width 25rem
	padding 1rem 0
	width 100%
.page-item
	padding  0 1rem 
p 
	color #fff
</style>
