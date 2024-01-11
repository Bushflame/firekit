<script>
	import { page } from '$app/stores';
	import { userKey } from '$lib/stores/store';
	import GeneralGuide from '$comps/guides/GeneralGuide.svelte';
	//import { copy } from 'svelte-copy';

	export let data;
	$userKey = data.userid;
	//let url = `/listing/${data.thisId}`
	//let clickToGo = `https://renttogo.co.uk/view${$uidkey}`;
	let showGuide = false;
</script>

<button
	class="guide-btn"
	on:click={() => {
		showGuide = !showGuide;
	}}
>
	{#if !showGuide}
		General Guide
	{:else}
		Close Guide
	{/if}
</button>
<div class="dashboard">
	<h1>Dashboard</h1>
	<div class="link-bar">
		<a href={`/edit/${$userKey}`} class:active={$page.url.pathname == `/edit/${$userKey}`}>Edit</a>
		<br />
		<a href={`/listing/${$userKey}`} class:active={$page.url.pathname == `/my-page/${$userKey}`}
			>My Listing</a
		>
	</div>
	<h3>Copy and paste into social media</h3>
	<div class="guide-dropdown" class:showGuide>
		<GeneralGuide title={'Editing your pages'} />
		<!-- <button class='close-btn'>Close</button> -->
	</div>
</div>

<style lang="stylus">
.dashboard 
	margin-top 2rem
.link-bar
	display flex
	gap .4rem
	margin 1rem auto
	width fit-content
	a 
		background transparent
		border 1px solid var(--delta)
		border-radius 1rem
		color var(--delta)
		font-size 1rem
		//height 2.2rem
		outline none
		padding .3rem 0 //.3rem
		text-align center
		transition all .5s
		width 6rem 
.guide-dropdown 
	border 1px solid var(--delta)
	//border-radius 2rem
	height 0
	margin auto
	opacity 0
	position absolute
	left 50%
	top 8rem
	transform translate(-50%)
	transition all .5s
	width calc(var(--globalWidth) - 4rem)
	z-index -1
.showGuide 
	height 18rem
	opacity 1
	z-index 1
.guide-btn 
	background var(--beta)
	border-radius 0 0 1.2rem 1.2rem
	color var(--alpha)
	font-size 1.2rem
	font-weight bold
	height 2rem
	padding .3rem 1.2rem
	position absolute 
	left 50%
	top 2rem
	transform translate(-50%)
	transition all .5s
	width fit-content
	z-index 2
.close-btn 
	display block
	margin auto
h3 
	text-align center
</style>
