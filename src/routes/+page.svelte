<script>
	import Corners from '$comps/Corners.svelte';
	import ToggleBtn from '$comps/buttons/ToggleBtn.svelte';
	import PublicGrid from '$comps/grids/PublicGrid.svelte';
	import GlobalList from '$comps/lists/GlobalList.svelte';
	let sellers = false;
</script>

<PublicGrid>
	<div slot="one" class="one">
		<Corners>
			<h1>one</h1>
			<a href="/search">Search</a>
		</Corners>
	</div>

	<div slot="two" class="two">
		<Corners>
			<h1>two</h1>
		</Corners>
	</div>
</PublicGrid>

<style lang="stylus">

</style>
