<script>
	import SearchLink from '$lib/searches/SearchLink.svelte';
	import SinglePage from '$lib/book/SinglePage.svelte';
	import MountPage from '$lib/book/MountPage.svelte'
import {onMount, onDestroy} from 'svelte'

let loadPage = false
onMount(()=>{
	setTimeout(()=> {
		loadPage = true
	},10)

})
// onDestroy(()=>{
// 	setTimeout(()=> {
// 		loadPage = false
// 	},1000)

// })
	export let data;
	let titles = data.uniqueTitles;
</script>
<!-- <div class="page" class:loadPage> -->

<MountPage>
<SinglePage>
		<div class="search-links">
			<SearchLink  linkTo={'/results'} {titles} />
		</div>
</SinglePage>
</MountPage>
<!-- </div> -->
<style lang="stylus">

.search-links
	grid-column 1 / 2
	grid-row 1 / 2

.search-links 
	background var(--beta-alpha)
	color var(--theta)
	height fit-content
	line-height 1
	margin 2rem auto
	padding 1rem
	position relative
	z-index 10
</style>
