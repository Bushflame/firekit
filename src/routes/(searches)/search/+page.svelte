<script>
	import SearchLink from '$lib/searches/SearchLink.svelte';
	import Frame from '$frames/Index.svelte';
	import Pages from '$lib/book/Pages.svelte'

	export let data;
	let titles = data.uniqueTitles;
</script>

<Pages showPaginator={false}>
	<span slot="slot-1a" class="slot-1a">
		<img src="/imgs/lab.jpg" alt="">
		<div class="card"><h1>the title</h1></div>
		<div class="large">
			<SearchLink heading={'Filter By Breed'} linkTo={'/results'} {titles} />
		</div>
	</span>
</Pages>

<style lang="stylus">
.slot-1a,.slot-1b 
	display grid
	align-items top
	grid-template-columns 1fr
	grid-template-rows 1fr
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
	color var(--theta)
	//font-size 2.1rem 
	//font-weight 800
	line-height 1
	margin auto
	//position absolute
	//left 50%
	//bottom 5rem 
	//transform translate(-50%)
	//text-transform: uppercase
	z-index 1
</style>
