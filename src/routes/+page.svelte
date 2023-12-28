<script>
	import GlobalList from '$comps/lists/GlobalList.svelte';

</script>
<h1>WELCOME TO FIREKIT</h1>
<p class="sub-title">Absorbeth into thee naught from ye bull</p>
	<div class="grid">
	<div class="visitor-info info-box">
		<GlobalList listTitle={'Visitor Info'} linkTxt={'Begin Your Search'} linkTo={'/search'}/>
	</div>
	<div class="lister-info info-box">
		<GlobalList listTitle={'Publisher Info'} linkTxt={'Full Details'}/>
	</div>

</div>

<style lang="stylus">

.grid  
	display grid 
	gap 1rem
.info-box
	margin auto
	min-height 6rem
p.sub-title 
	color var(--gamma)
	font-size 1.2rem
	font-weight bold
	margin auto
	max-width 18rem
	text-align center
	width 100%

</style>
