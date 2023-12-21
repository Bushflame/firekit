<script>
	
	import {getByTitles} from '$lib/stores/store.js'
	export let data;
	let titles = data.titleData;
	console.log('search.svelte', titles)
</script>
<h1>search titles</h1>
<ul class="card">
	{#each titles as title}
		<li>
			<a href='/results' data-sveltekit-preload-data="off" on:click={()=>{
				$getByTitles = title
				console.log('grtby',$getByTitles)}}>{title}</a>
		</li>
	{/each}
</ul>

<style lang="stylus">

</style>