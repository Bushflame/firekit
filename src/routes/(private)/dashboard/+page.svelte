<script>
	import { page } from '$app/stores';
	import { userKey } from '$lib/stores/store';
	import Guides from '$comps/guides/Guides.svelte';
	import Frame from '$frames/Single.svelte';
	import FrameWrap from '$frames/FrameWrap.svelte';
	import Header from '$lib/building-views/Header.svelte';
	import Footer from '$lib/building-views/Footer.svelte';
	import Corners from '$lib/grids/FullWidth.svelte';
	//import { copy } from 'svelte-copy';

	export let data;
	let expires = data.expiresOn;
	let created = data.createdOn;

	$userKey = data.userid;
	console.log('dat');
	let clickToGo = `http://localhost:5173/listing/7FZfOTLYaKVYdY81J0xi5J589Fl2`;
	var today = new Date().toDateString();
	// 	var today = new Date();
	// var tomorrow = new Date();
	// tomorrow.setDate(today.getDate()+1);
	console.log('tom ', today);
</script>

<Frame>
	<div class="liner">
		<h3>Dashboard</h3>
		<Guides />
		<hr />
		<div class="link-bar">
			<a
				href={`/edit/${$userKey}`}
				class:active={$page.url.pathname == `/edit/${$userKey}`}
				data-sveltekit-preload-data="off">Edit</a
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
			<h4>Account details</h4>
			<p>Created on: {created}</p>
			<p>Expires on: {expires}</p>
		</div>
	</div>
</Frame>

<style lang="stylus">
.liner 
	margin-top 4rem
h3 
	color var(--alpha)
	font-size 2rem
	margin-bottom 1rem
	text-align center
.link-bar
	display flex
	gap .4rem
	margin 1rem auto
	width fit-content
	a, button 
		background var(--delta)
		border 1px solid var(--theta)
		border-radius 1rem
		color var(--theta)
		font-size 1rem
		//height 2.2rem
		outline none
		padding .4rem 1rem //.3rem
		text-align center
		transition all .5s
		width 7rem 
hr 
	border 1px solid var(--delta)
	margin 2rem auto
	width 50%

h1 
	margin-bottom 1rem
	text-align center
.acc-details 
	color var(--beta)
	margin 2rem auto
	text-align center
	width fit-content
	h4
		color var(--beta)
		margin-bottom .6rem

p 
	color var(--beta)
	line-height 1.5
</style>
