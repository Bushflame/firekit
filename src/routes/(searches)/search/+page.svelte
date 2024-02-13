<script>
	import SearchLink from '$lib/searches/SearchLink.svelte';
	import Single from '$frames/Single.svelte';
	import Pages from '$lib/book/Pages.svelte'

	export let data;
	let titles = data.uniqueTitles;
</script>

<Single showPaginator={false}>
	<!-- <span slot="slot-1a" class="slot-1a"> -->
		<div class="large">
			<SearchLink  linkTo={'/results'} {titles} />
		</div>
	<!-- </span>
	<span slot='slot-1b'> <h1>slot 1b</h1></span> -->
</Single>

<style lang="stylus">
.slot-1a,.slot-1b 
	//border 1px solid blue
	display grid
	align-items top
	grid-template-columns 1fr
	//grid-template-rows 1fr
	height 100%
.card, img, .large
	//border 1px solid #fff
	grid-column 1 / 2
	grid-row 1 / 2
img 
	height 100%
.card 
	height fit-content
	margin 4rem auto
	//width 22rem
.large 
	background var(--beta-alpha)
	//border 1px solid red
	color var(--theta)
	//font-size 2.1rem 
	//font-weight 800
	height fit-content
	line-height 1
	margin 2rem auto
	padding 1rem
	position relative //absolute
	//left 50%
	//bottom 5rem 
	//transform translate(-50%)
	//text-transform: uppercase
	z-index 10
</style>
