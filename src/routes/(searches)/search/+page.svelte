<script>
	import { getByTitles } from '$lib/stores/store.js';
	export let data;

	let titles = data.uniqueTitles;
</script>

<ul class="card">
	{#each titles as title}
		<li>
			<a
				href="/results"
				data-sveltekit-preload-data="off"
				on:click={() => {
					$getByTitles = title;
				}}>{title}</a
			>
		</li>
	{/each}
</ul>

<style lang="stylus">
.card 
	display grid 
	gap .6rem
	grid-template-columns 1fr 1fr
	list-style none
	margin 6rem auto 2rem
	max-width 20rem
	width fit-content
p 
	color #fff
li 
	background rgba(255,255,255,.1)
	padding .3rem 1rem
</style>
