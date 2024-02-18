<script>
	import { page } from '$app/stores';
	import { userKey } from '$lib/stores/store';
	import Guides from '$comps/guides/Guides.svelte';
	import SinglePage from '$lib/book/SinglePage.svelte';
	//import { copy } from 'svelte-copy';

	export let data;
	let expires = data.expiresOn;
	let created = data.createdOn;

	$userKey = data.userid;
	console.log('dat');
	let clickToGo = `http://localhost:5173/listing/7FZfOTLYaKVYdY81J0xi5J589Fl2`;


</script>

<SinglePage >
	<!-- <div class="filter"></div> -->
	<span  class="slot">

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
	</span>
	<!-- <span slot='slot-1b'> <h1>slot 1b</h1></span> -->
</SinglePage>

<style lang="stylus">
.slot 
	background var(--eta-alpha-d)
	border-radius 1rem
	margin auto
	padding .5rem
	//position relative
	width 380px
	z-index 2
.filter 
	background var(--kappa-alpha-d)
	height 100%
	position absolute 
	left 1rem
	top 0
	width 100%
	z-index 1
h3 
	color var(--beta)
	font-size 2rem
	margin 2rem 0 1rem
	text-align center
.link-bar
	display flex
	gap .4rem
	margin auto
	width fit-content
	a, button 
		background var(--delta)
		border 1px solid var(--theta)
		border-radius 1rem
		color var(--theta)
		font-size 1rem
		//height 2.2rem
		outline none
		padding .4rem //1rem //.3rem
		text-align center
		transition all .5s
		width 7rem 
hr 
	border 1px solid var(--theta)
	height 0px
	margin 2rem auto
	width 50%

h1 
	margin-bottom 1rem
	text-align center
.acc-details 
	color var(--beta)
	font-weight 800
	margin 2rem auto
	text-align center
	width fit-content
	h4
		color var(--beta)
		font-size 1.4rem
		margin-bottom .6rem

p 
	color var(--beta)
	line-height 1.5
</style>
