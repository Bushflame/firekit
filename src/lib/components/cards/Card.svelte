<script>
	export let tit = '';
	export let intro = '';
	export let li_a = '';
	export let li_b = '';
	export let li_c = '';
	export let li_d = '';
	export let img = '';
	// let show_slide_1 = true;
	// let show_slide_2 = false;
	// let show_slide_3 = false;
	// let show_slide_4 = false;
	// let slide_1_isActive = true
	// let slide_2_isActive = false
	// let slide_3_isActive = false
	// let slide_4_isActive = false
</script>

<!-- <Card 
    img={l.img_1a}
    tit={l.title_1a} 
    intro={l.intro_1a}
    li_a={l.li_1a}
    li_b={l.li_1b}   
    li_c={l.li_1c}   
    li_d={l.li_1d}           
/> -->

<div class="card">
	<h1>{tit}</h1>
	<img src={img} alt={tit} />
	<div class="card-body">

	<div class="card-inner">
	{#if intro !== ''}
		<p>
			{intro}
		</p>

	{/if}
	<ul>
		{#if li_a != ''}
			<li>
				{li_a}
			</li>
		{/if}
		{#if li_b != ''}
			<li>
				{li_b}
			</li>
		{/if}
		{#if li_c != ''}
			<li>
				{li_c}
			</li>
		{/if}
		{#if li_d != ''}
			<li>
				{li_d}
			</li>
		{/if}
	</ul>
</div>
</div>
</div>


<style lang="stylus">
.card-body 
	height 100%
	padding 1rem
.card-inner 
	display flex 
	flex-direction column
	height 100%
h1 
	background var(--alpha)
	padding .3rem 1rem
	position absolute
	left 50%
	top 4rem
	transform translate(-50%,0)
	width fit-content
	white-space nowrap
img 
	height 16rem
	object-fit cover
	width 100%
p 
	color var(--gamma)
ul 
	display flex
	gap .4rem
	flex-direction column
	list-style none
	margin-top 1rem
li 
	border-bottom 1px solid var(--delta)
	color var(--gamma)
	padding  .2rem  0 .1rem 2rem
	position relative
li::before 
	content ''
	background var(--delta)
	border-radius 50% 
	height 1rem 
	position absolute
	left 0 
	top 50%
	transform translate(0,-50%)
	width 1rem
</style>
