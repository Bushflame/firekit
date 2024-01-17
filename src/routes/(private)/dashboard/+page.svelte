<script>
	import { page } from '$app/stores';
	import { userKey } from '$lib/stores/store';
	import Guides from '$comps/guides/Guides.svelte';
	import Corners from '$comps/Corners.svelte';
	//import { copy } from 'svelte-copy';

	export let data;
	$userKey = data.userid;
	//let url = `/listing/${data.thisId}`
	let clickToGo = `http://localhost:5173/listing/7FZfOTLYaKVYdY81J0xi5J589Fl2`;
	let showGuide = false;
</script>

<div class="dashboard">
	<Corners>
		<h1>Dashboard</h1>
		<Guides />
		<hr />
		<div class="link-bar">
			<a href={`/edit/${$userKey}`} class:active={$page.url.pathname == `/edit/${$userKey}`}>Edit</a
			>
			<br />
			<a
				href={`/listing/${$userKey}`}
				target="_blank"
				class:active={$page.url.pathname == `/my-page/${$userKey}`}>My Listing</a
			>
			<button class="copy-url"> My URL </button>
		</div>
	</Corners>
</div>

<style lang="stylus">
.dashboard 
	//margin-top 2rem
	padding 1rem
	position relative
.link-bar
	display flex
	gap .4rem
	margin 1rem auto
	width fit-content
	a, button 
		background var(--iota)
		border 1px solid var(--theta)
		border-radius 1rem
		color var(--beta)
		font-size 1rem
		//height 2.2rem
		outline none
		padding .4rem 1rem //.3rem
		text-align center
		transition all .5s
		//width 6.5rem 
hr 
	border 1px solid var(--gamma)
	margin 1.5rem auto
	width 50%
// .guide-dropdown 
// 	border 1px solid var(--delta)
// 	//border-radius 2rem
// 	height 0
// 	margin auto
// 	opacity 0
// 	position absolute
// 	left 50%
// 	top 8rem
// 	transform translate(-50%)
// 	transition all .5s
// 	width calc(var(--globalWidth) - 4rem)
// 	z-index -1
// .showGuide 
// 	height 18rem
// 	opacity 1
// 	z-index 1
// .guide-btn 
// 	background var(--beta)
// 	border-radius 0 0 1.2rem 1.2rem
// 	color var(--alpha)
// 	font-size 1.2rem
// 	font-weight bold
// 	height 2rem
// 	padding .3rem 1.2rem
// 	position absolute 
// 	left 50%
// 	top 2rem
// 	transform translate(-50%)
// 	transition all .5s
// 	width fit-content
// 	z-index 2
// .close-btn 
// 	display block
// 	margin auto
h1 
	margin-bottom 1rem
	text-align center

</style>
