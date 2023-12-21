<script>
	
	import {getByTitles} from '$lib/stores/store.js'
	export let data;

	let titles = data.uniqueTitles;
	//uniq = [...new Set(array)];
	console.log('search.svelte', typeof(titles))

</script>
<h1>search titles</h1>
<p>get title{$getByTitles}</p>
<ul class="card">
	{#each titles as title}
		<li>
			<a href='/results' data-sveltekit-preload-data="off" on:click={()=>{
				$getByTitles = title
				}}>{title}</a>
		</li>
	{/each}
</ul>

<style lang="stylus">
.card 
	display grid 
	gap .6rem
	grid-template-columns 1fr 1fr
	list-style none
p 
	color #fff
</style>