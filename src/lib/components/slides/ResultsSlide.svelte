<script>
	import { fade, fly } from 'svelte/transition';

	import PublicFrame from '$lib/frames/PublicFrame.svelte';
	/**
	 * @type {any}
	 */
	export let slides = [];

	/**
	 * @type {number}
	 */
	export let counter = 0;
</script>

<PublicFrame>
	<div class="card-wrap">
		{#if counter > 0}
			<button
				class="prev counter-btn"
				on:click={() => {
					{
						counter = counter - 1;
					}
				}}>prev</button
			>
		{/if}
		{#if counter < slides.length - 1}
			<button
				class="next counter-btn"
				on:click={() => {
					counter = counter + 1;
				}}>next</button
			>
		{/if}

		<p class="show-count">Showing {counter + 1} of {slides.length} results</p>
		<article class="card">
			{#each slides as slide, index}
				{#if index == counter}
					<div class="card-liner" transition:fly={{ x: -300, duration: 500 }}>
						<img src={slide.img_1a} alt="" />
						<div class="card-body">
							<h1>{slide.title_1a}</h1>
							<div class="card-inner">
								<p>{slide.para_1a}</p>
								<ul>
									{#if slide.li_1a}
										<li>
											{slide.li_1a}
										</li>
									{/if}
									{#if slide.li_1b}
										<li>
											{slide.li_1b}
										</li>
									{/if}
									{#if slide.li_1c}
										<li>
											{slide.li_1c}
										</li>
									{/if}
									{#if slide.li_1d}
										<li>
											{slide.li_1d}
										</li>
									{/if}
									{#if slide.li_1e}
										<li>
											{slide.li_1e}
										</li>
									{/if}
									{#if slide.li_1f}
										<li>
											{slide.li_1f}
										</li>
									{/if}
								</ul>
								<!-- needs to be the doc id -->
								<a href={`/listing/${slide.id}`} data-sveltekit-preload-data="off">View</a>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</article>
	</div>
</PublicFrame>

<style lang="stylus">
.card-wrap
    height 100%
article.card 
    color #fff
    display flex 
    flex-direction column
    gap .6rem
    margin 0rem auto 0
    max-width var(--globalWidth) //  calc(var(--globalWidth) - 2rem)
    position relative
    width var(--globalWidth)
.card-liner 
    border-radius 1rem
    height  var(--globalHeight)
    position absolute
    width var(--globalWidth)
.card-body 
    display grid
    grid-template-columns 1fr
    gap .6rem
    padding .5rem 1rem
p 
	color red //var(--gamma)
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
p.show-count 
    border-radius 1rem
    color red //var(--alpha)
    margin-left 50% 
    padding .3rem 1rem
    transform translate(-50%,0)
    position absolute
    top 1rem
    text-align center
    width fit-content //18rem
    z-index 2
img 
    height 260px
    object-fit cover
    //width calc(var(--globalWidth) - 2px)
a 
    color var(--alpha)
    position absolute 
    bottom 4rem 
    left 50% 
    transform translate(-50%,0)
    z-index 10
button.counter-btn 
    background red //var(--delta) //rgba(0,0,0,.4)
    border 0
    border-radius 50%
    color #fff
    height 2.8rem
    outline 0
    padding .4rem
    position absolute 
    top 30% 
    transform translate(0, -50%)
    text-align center
    width 2.8rem
    z-index 1
.prev 
    left 1rem
.next 
    right 1rem
</style>
