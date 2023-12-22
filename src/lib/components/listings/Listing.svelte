<script>
	/**
	 * @type {{ img_1a: any; title: any; title_1a: any; description_1a: any; }}
	 */
	export let listing;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="row mt-2">
	<div class="col col-12 col-sm-6 col-md-4">
		<img src={listing.img_1a} alt={listing.title_1a} />
	</div>
	<div class="col col-12 col-sm-6 col-md-8">
		<h2>{listing.title_1a}</h2>
		<p>
			{listing.description_1a}
		</p>
	</div>
</div>

<style>
	img {
		max-width: 90%;
		margin: 5px auto;
		max-height: 200px;
		display: block;
	}
	.row {
		border: solid 1px gray;
		cursor: pointer;
	}
</style>
