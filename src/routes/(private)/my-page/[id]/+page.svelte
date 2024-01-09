<script>
	export let data;
	let l = data.listing;
	import Card from '$comps/cards/Card.svelte';
</script>

<div class="page-wrap">
	<!-- <div class="page-item">
		<img class="img_1a" src={l.img_1a} alt={l.title_1a} />
	</div>
	<div class="page-item">
		<Card tit={l.title_1a}/>


	</div>
	<div class="page-item">
		<p>{l.para_1a}</p>
	</div> -->

	<Card
		img={l.img_1a}
		tit={l.title_1a}
		para={l.para_1a}
		li_a={l.li_1a}
		li_b={l.li_1b}
		li_c={l.li_1c}
		li_d={l.li_1d}
		li_f={l.li_1e}
		li_d={l.li_1f}
	/>
</div>

<svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head>

<style lang="stylus">
.page-wrap
	background rgba(255,255,255,.1)
	display flex
	flex-direction column
	gap 1rem
	max-width 25rem
	padding 1rem 0
	width 100%
.page-item
	padding  0 1rem 
p 
	color #fff
</style>
