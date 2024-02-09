<script>
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ResultsFrame from '$frames/IndexFrame.svelte';
	import Frame from '$frames/ViewFrame.svelte';
	import FrameWrap from '$frames/FrameWrap.svelte';
	import Pages from '$lib/book/Pages.svelte'
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
	import Bg_img from '$lib/book/BgImage.svelte'
	import Corners from '$lib/grids/Corners.svelte';
	import HalfCorners from '$lib/grids/ShortCorners.svelte';
	import Header from '$lib/building-views/Header.svelte';
	import Footer from '$lib/building-views/Footer.svelte';
	import Img from '$lib/building-views/Img.svelte';
	import Title from '$lib/building-views/Title.svelte';
	import Para from '$lib/building-views/Para.svelte';
	import Li from '$lib/building-views/FlatLi.svelte';
	import Ul from '$lib/building-views/Ul.svelte';

	//contact details
	export let li_tel = '';
	export let li_email = '';
	export let li_fb = '';

	/**
	 * @type {string | any[]}
	 */
	export let results = [];
	$: counter = 0;
	let isIndex = false;
</script>

<!-- <div class="card-wrap"> -->
{#if counter > 0}
	<button
		class="prev counter-btn"
		on:click={() => {
			{
				counter--; // = counter - 1;
			}
		}}
		>&#8249;
	</button>
{/if}
{#if counter < results.length - 1}
	<button
		class="next counter-btn"
		on:click={() => {
			counter++; // = counter + 1;
		}}
		>&#8250;
	</button>
{/if}
<FrameWrap>
	<!-- <Header></Header> -->

	{#each results as res, index}
		{#if index == counter}
			<Pages showPaginator={false}>
				<span slot="slot-1a">
					<div class="img">
						<Bg_img bg_img={res.img_1a}/>
						<Glazed isTitle={true}>
							<Title title={res.title_1a} />
						</Glazed>
					</div>

					
					
					<Para
						txt={res.para_1a}
						--align="center"
						--color={'var(--beta'}
						--margin="2rem auto .5rem"
						--weight="400"
						hr={false}
					/>
					<!-- li's need if != ' ' -->
					<Ul>
						<Li item={res.li_1a} --color={'var(--beta'} />
						<Li item={res.li_1b} --color={'var(--beta'}/>
						<Li item={res.li_1c} --color={'var(--beta'}/>
						<!-- <Li item={res.li_1d} /> -->
					</Ul>
				</span>
				
				<span slot="slot-1b">
					
						<Bg_img bg_img={'/imgs/lab.jpg'}/>
					
					
					<div class="flex-box">
						<Glazed>
							<Para bold={'Contact Details'} --align="center" --margin=".2rem 1rem .3rem" />
							<Para
								bold={'Name:'}
								txt={res.name}
								--align="left"
								--margin=".2rem 1rem 1rem  "
								flex={true}
							/>
							<Para
								bold={'Email:'}
								txt={res.email}
								--align="left"
								--margin=".2rem 1rem 1rem "
								flex={true}
							/>
							<Para
								bold={'Tel::'}
								txt={res.tel}
								--align="left"
								--margin=".2rem 1rem 1rem "
								flex={true}
							/>
							<Para
								bold={'FaceBook:'}
								txt={res.fbook}
								--align="left"
								--margin=".2rem 1rem 1rem "
								flex={true}
							/>
						
					</Glazed>
					
					<Glazed>
						<Para bold={'Terms and Conditions'} --align="center" --margin=".2rem auto 1rem " />
						<Para txt={res.terms} --align="left" --margin=".2rem 1rem .3rem " />
					</Glazed>
				</div>
				</span>
				
			</Pages>
			<a href={`/listing/${res.id}`} data-sveltekit-preload-data="">View Full Details</a>
			<p class="show-count">Showing {counter + 1} of {results.length} results</p>
		{/if}
	{/each}
	<!-- <Footer/> -->
</FrameWrap>

<!-- </div> -->

<style lang="stylus">

@import '/src/lib/stylus/single-col'
.flex-box
	display flex
	flex-direction column
	gap 2rem
	height 100% 
	padding 4rem 1rem
	position relative
	z-index 2
.center 
	justify-content center
.between 
	justify-content space-between
.img 
	display flex
	align-items end
	height 300px
	position relative
.img-tall 
	height 100%
	position relative

p.show-count 
	border-radius 1rem
	color var(--beta)
	left 50% 
	margin auto
	padding .3rem 1rem
	transform translate(-50%,0)
	position absolute
	bottom 1rem
	//top 1rem
	text-align center
	width fit-content //18rem
	z-index 2

a 
	position absolute
	bottom 5rem
	left 50%
	transform translate(-50%)
	z-index 3
.prev, .next 
	position absolute 
	bottom .5rem
.prev 
	left 5rem 

.next 
	right 5rem
@media(min-width 860px)
	a 
		bottom 5rem
		left 25%
		transform translate(-50%)
	.next 
		right calc(var(--globalWidth) / 2 + 5rem)
	p.show-count 
		left 25% 
		transform translate(-50%,0)
button.counter-btn 
	background var(--iota) //rgba(0,0,0,.4)
	border 1px solid var(--beta)
	border-radius 50%
	color #fff
	display flex
	align-items center
	justify-content center
	font-size 2.2rem
	height 2.2rem
	outline 0
	padding-bottom .3rem
	position absolute 
	bottom 1rem
	//top 10px //50% 
	//transform translate(0, -50%)
	transition all .5s
	text-align center
	width 2.2rem
	z-index 10

</style>
