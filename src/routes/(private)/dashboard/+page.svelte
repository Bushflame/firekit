<script>
	import { page } from '$app/stores';
	import { userKey } from '$lib/stores/store';
	import Guides from '$comps/guides/Guides.svelte';
	import Corners from '$comps/Corners.svelte';
	//import { copy } from 'svelte-copy';

	export let data;
	let expires = data.expiresOn
	let created = data.createdOn

	$userKey = data.userid;
	console.log('dat',)
	let clickToGo = `http://localhost:5173/listing/7FZfOTLYaKVYdY81J0xi5J589Fl2`;
	var today = new Date().toDateString();
// 	var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate()+1);
console.log('tom ', today)

</script>

<div class="dashboard">
	<Corners>
		<h1>Dashboard</h1>
		<Guides />
		<hr />
		<div class="link-bar">

			<a href={`/edit/${$userKey}`} class:active={$page.url.pathname == `/edit/${$userKey}` } data-sveltekit-preload-data="off">Edit</a
			>
			<br />
			<a
				href={`/listing/${$userKey}`}
				target="_blank"
				class:active={$page.url.pathname == `/my-page/${$userKey}`}>My Listing</a
			>
			<button class="copy-url"> My URL </button>
		</div>
		<div class="acc-details">
			<h3>Account details</h3>
			<p>Created on: {created}</p>
			<p>Expires on: {expires}</p>
		</div>
	</Corners>
</div>

<style lang="stylus">
.dashboard 
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

h1 
	margin-bottom 1rem
	text-align center
.acc-details 
	margin auto
	text-align center
	width fit-content
	h3
		color var(--theta)
		margin-bottom .6rem

p 
	color var(--iota)
	line-height 1.5
</style>
