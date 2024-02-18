<script>
	import { fade, scale, fly } from 'svelte/transition';
	import Pages from '$lib/book/Pages.svelte'
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
	import Quote from '$lib/book/Blockquote.svelte'
	import Bg_img from '$lib/book/BgImage.svelte';
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
<!-- <FrameWrap> -->
	<!-- <Header></Header> -->

	{#each results as res, index}
		{#if index == counter}
		<Pages showPaginator={false} tit_1={res.title_1a} tit_4={res.title_4a}>
			<span slot="slot-1a" class="slot-1a">
				<div class="img">
					<Bg_img bg_img={res.img_1a}/>
					<Glazed isTitle={true}>
						<Title title={res.title_1a} />
					</Glazed>
					
					<p class="show-count">Showing {counter + 1} of {results.length} results</p>
				</div>
				<div class="flex-box-bg">
					<img src={res.img_1a} alt="" class="slot-1a-img">
					{#if res.para_1a.length > 4}
						<div class="flex-box">
							<Quote lg_first={true}><Para txt={res.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800"  /></Quote>
							<Glazed>
								<Ul>
									<Li item={res.li_1a} />
									<Li item={res.li_1b} />
									<Li item={res.li_1c}  />
								</Ul>
						</Glazed>
						
					</div>
					{/if}
			</div>
			</span>
				
			<span slot="slot-1b">
				<Bg_img bg_img={'/imgs/lab.jpg'}/>
				<div class="filter"></div>
				<div class="flex-box flex-box-1b">
					<Glazed isTitle={false}>
						<h3>Contact Details</h3>
						<Para bold={'Contact Details'} --align="center" --margin=".2rem 1rem .3rem" hr={true} />
						<Para bold={'Name:'} txt={res.name} --align="left" --margin=".2rem 1rem .4rem  " flex={true} />
						<Para bold={'Email:'} txt={res.email} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
						<Para bold={'Tel::'} txt={res.tel} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
						<Para
							bold={'FaceBook:'}
							txt={res.fbook}
							--align="left"
							--margin=".2rem 1rem .4rem "
						/>
					</Glazed>
					<Glazed>
						<h3>Terms and Conditions</h3>
						<Para bold={'Terms and Conditions'} --align="center" --margin=".2rem auto .4rem " hr={true} />
						<Para txt={res.terms} --align="left" --margin=".2rem 1rem .3rem " />
					</Glazed>
				</div>
			</span>
				
			</Pages>
			<a href={`/listing/${res.id}`} data-sveltekit-preload-data="">View Full Details</a>
			
		{/if}
		

	{/each}
	<!-- <Footer/> -->
<!-- </FrameWrap> -->

<!-- </div> -->

<style lang="stylus">


@import '/src/lib/stylus/pages'
// .slot-1a
// 	position relative
.flex-box 
	//background red
	display flex
	flex-direction column
	gap 1rem
	height fit-content //12rem
	padding-top 0
.flex-box-1b
	padding-top 4rem
.img 
	background red
	height 270px
	//padding 2rem
	position relative
p.show-count 
	background var(--zeta-alpha-d) //green
	border-radius 1rem
	color var(--alpha)
	left 50% 
	margin auto
	padding .5rem 1rem
	transform translate(-50%,0)
	position absolute
	bottom 14px
	//top 1rem
	text-align center
	width 14rem
	z-index 2

a 
	background var(--beta)
	border-radius 1rem

	transform translate(-50%)
	z-index 3
	box-shadow rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
	rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
	rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
	rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, 
	rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, 
	rgba(0, 0, 0, 0.09) 0px 32px 16px
	color var(--lambda)
	padding .5rem 1rem
	position absolute
	bottom 2rem
	left 50%
    text-align center
.prev, .next 
	position absolute 
	bottom 2.8rem
.prev 
	left 7rem 

.next 
	left 18.5rem
@media(min-width 860px)
	a 
		bottom 2rem
		left 25%
		transform translate(-50%)
	.next 
		right calc(var(--globalWidth) / 2 + 5rem)
	p.show-count 
		left 50% 
		transform translate(-50%,0)
button.counter-btn 
	background transparent  //var(--iota) //rgba(0,0,0,.4)
	//border 1px solid var(--beta)
	border-radius 50%
	color #fff
	display flex
	align-items center
	justify-content center
	font-size 2rem
	height 2rem
	outline 0
	padding-bottom .3rem
	position absolute 
	//bottom 1.5rem
	top 240px //50% 
	//transform translate(0, -50%)
	transition all .5s
	text-align center
	width 2rem
	z-index 10

</style>
