<script>
	import { goto } from '$app/navigation';
	import { getByTitles } from '$lib/stores/store';
	import Card from '$comps/cards/Card.svelte';
	import Slide_1 from '$comps/slides/ResultsSlide.svelte'
	export let data;
	let l = data.listing;

	let show_slide_1 = true;
	let show_slide_2 = false;
	let show_slide_3 = false;
	let show_slide_4 = false;
	let slide_1_isActive = true
	let slide_2_isActive = false
	let slide_3_isActive = false
	let slide_4_isActive = false

	
</script>
{#if show_slide_1}
<Card
	img={l.img_1a}
	tit={l.title_1a}
	intro={l.intro_1a}
	li_a={l.li_1a}
	li_b={l.li_1b}
	li_c={l.li_1c}
	li_d={l.li_1d}
/>
{/if}

{#if show_slide_2}
<Card
	img={l.img_2a}
	tit={l.title_2a}
	intro={l.intro_2a}
	li_a={l.li_2a}
	li_b={l.li_2b}
	li_c={l.li_2c}
	li_d={l.li_2d}
/>
{/if}
{#if show_slide_3}
<Card
	img={l.img_3a}
	tit={l.title_3a}
	intro={l.intro_3a}
	li_a={l.li_3a}
	li_b={l.li_3b}
	li_c={l.li_3c}
	li_d={l.li_3d}
/>
{/if}

<ul class="paginator">
	{#if l.title_2a}
	<button
		class:showing-1={slide_1_isActive}
		on:click={() => {
			show_slide_1 = true;
			show_slide_2 = false;
			show_slide_3 = false;
			show_slide_4 = false;
			slide_1_isActive =true
			slide_2_isActive =false
			slide_3_isActive =false
			slide_4_isActive =false
		}}>1</button
	>
	{/if}
	{#if l.title_2a}
	<button
	class:showing-2={slide_2_isActive}
		on:click={() => {
			show_slide_1 = false;
			show_slide_2 = true;
			show_slide_3 = false;
			show_slide_4 = false;
			slide_1_isActive =false
			slide_2_isActive =true
			slide_3_isActive =false
			slide_4_isActive =false
		}}>2</button
	>
	{/if}
	{#if l.title_3a}
	<button
		class:showing-3={slide_3_isActive}
		on:click={() => {
			show_slide_1 = false;
			show_slide_2 = false;
			show_slide_3 = true;
			show_slide_4 = false;
			show_slide_4 = false;
			slide_1_isActive =false
			slide_2_isActive =false
			slide_3_isActive =true
			slide_4_isActive =false
		}}>3</button
	>
	{/if}
	{#if l.title_4a}
	<button
		class:showing-4={slide_4_isActive}
		on:click={() => {
			show_slide_1 = false;
			show_slide_2 = false;
			show_slide_3 = false;
			show_slide_4 = true;
			slide_1_isActive =false
			slide_2_isActive =false
			slide_3_isActive =false
			slide_4_isActive =true
		}}>4</button
	>
	{/if}
	</ul>

<!-- <div class="page-wrap">
	<img class="img_1a" src={l.img_1a} alt={l.title_1a} />
	<div class="page-item">
		<h1>{l.title_1a}</h1>
	</div>
	{#if l.intro_1a}
	<div class="page-item">
		<p>{l.intro_1a}</p>
	</div>
	{/if}
	<div class="page-item">
	<ul>
		{#if l.li_1a}
			<li>
				{l.li_1a}
			</li>
		{/if}
		{#if l.li_1b}
			<li>
				{l.li_1b}
			</li>
		{/if}
		{#if l.li_1c}
			<li>
				{l.li_1c}
			</li>
		{/if}
		{#if l.li_1d}
		<li>
			{l.li_1d}
		</li>

		{/if}
	</ul>
</div>



	<a href={`/search`} data-sveltekit-reload>Back</a>
</div> -->








<svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head>

<style lang="stylus">
section 
	border 1px solid red
	position relative
.page-wrap
	background rgba(255,255,255,.1)
	display flex
	flex-direction column
	gap 1rem
	//max-width 25rem
	//padding 1rem 0
	width 100%
.page-item
	padding  0 1rem 
p 
	color var(--gamma)
ul 
	display flex
	gap .4rem
	flex-direction column
	list-style none
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

//paginator 
ul.paginator 
	background rgba(255,255,255,.1)
	border 1px solid red
	display grid 
	grid-template-columns 1fr 1fr 1fr 1fr
	align-items center 
	justify-content center
	gap 1rem
	height 2.5rem
	padding .6rem
	position absolute 
	bottom .6rem
	left 50%
	transform translate(-50%,0)
	width fit-content //16rem //100%
	z-index 4
	button 
		background transparent
		border 1px solid rgba(255,255,255,.4)
		color #fff
		height 2rem 
		width 2rem
.slide-grid 
	//border 1px solid #000
	display grid
	justify-content center
	grid-template-columns 1fr
	grid-template-rows 1
	//margin auto
	position relative
.slide 
	//border 1px solid green
	position absolute
	top 0
	opacity 0
	transition all .5s
	width 100%
	z-index - 1

.show-1 
	z-index 1
	opacity 1
	transition all .5s
.show-2 
	opacity 1
	z-index 1
.show-3 
	opacity 1	
	z-index 1
.show-4 
	opacity 1
	z-index 1
.paginator
	.showing-1
		background var(--delta)
	.showing-2
		background var(--delta)	
	.showing-3
		background var(--delta)
	.showing-4
		background var(--delta)	
</style>
