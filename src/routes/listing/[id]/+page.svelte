<script>
	import FrameWrap from '$frames/FrameWrap.svelte';
	
	import Para from '$lib/building-views/Para.svelte';
	import Header from '$lib/building-views/Header.svelte';
	import Footer from '$lib/building-views/Footer.svelte';
	import Ul from '$lib/building-views/Ul.svelte';
	import Li from '$lib/building-views/FlatLi.svelte';
	import Title from '$lib/building-views/Title.svelte';
	import Corners from '$lib/grids/Corners.svelte';
	import HalfCorners from '$lib/grids/ShortCorners.svelte';
	import { limit } from 'firebase/firestore';
	import ViewFrame from '$lib/frames/ViewFrame.svelte';

	import Pages from '$lib/book/Pages.svelte'
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
	import Bg_img from '$lib/book/BgImage.svelte'

	export let data;
	let l = data.listing;
	let pageNum;
	let page_1 = true;
	let page_2 = false;
	let page_3 = false;
	let page_4 = false;
</script>

<!-- <FrameWrap> -->
<!-- <Header></Header> -->
<Pages>
	<span slot="slot-1a" class="slot-1a">
		<div class="img">
			<Bg_img bg_img={l.img_1a}/>
			<Glazed isTitle={true}>
				<Title title={l.title_1a} />
			</Glazed>
		</div>

		<Para txt={l.para_1a} --align="center" --margin="1rem auto" hr={false} />
		<Ul>
			<Li item={l.li_1a}  --color={'var(--beta'}/>
			<Li item={l.li_1b}  --color={'var(--beta'} />
			<Li item={l.li_1c}  --color={'var(--beta'} />
		</Ul>
	</span>
	<span slot="slot-1b">
		<Bg_img bg_img={'/imgs/lab.jpg'}/>
		<div class="flex-box">
			<Glazed isTitle={false}>
			<Para bold={'Contact Details'} --align="center" --margin=".2rem 1rem .3rem" hr={true} />
			<Para bold={'Name:'} txt={l.name} --align="left" --margin=".2rem 1rem .4rem  " flex={true} />
			<Para bold={'Email:'} txt={l.email} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
			<Para bold={'Tel::'} txt={l.tel} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
			<Para
				bold={'FaceBook:'}
				txt={l.fbook}
				--align="left"
				--margin=".2rem 1rem .4rem "
				flex={true}
			/>
		</Glazed>
		<Glazed>
			<Para bold={'Terms and Conditions'} --align="center" --margin=".2rem auto .4rem " hr={true} />
			<Para txt={l.terms} --align="left" --margin=".2rem 1rem .3rem " />
		</Glazed>
	</div>
	</span>

	<span slot="slot-2a">
		<!-- <Corners  img={l.img_2a } --width='400px' --height='100%'> -->
		<!-- <img src={l.img_2a} alt={l.title_2a} class="img" /> -->
		<!-- <Bg_img bg_img={'/imgs/lab.jpg'}/> -->
		<div class="img-tall">
		<Bg_img bg_img={l.img_2a}/>
		<Glazed isTitle={true}>
		<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
	</Glazed>
</div>
		<!-- </Corners> -->
	</span>
	<span slot="slot-2b">
		<!-- <div class="img-tall"> -->
			<Bg_img bg_img={'/imgs/lab.jpg'}/>
		<!-- </div> -->
		<div class="flex-box">
			
			<Glazed>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800" />
			</Glazed>
			<Glazed>
				<Ul>
					<Li item={l.li_1a} --color={'var(--lambda'}/>
					<Li item={l.li_1b}  --color={'var(--lambda'}/>
					<Li item={l.li_1c}  --color={'var(--lambda'}/>
				</Ul>
			</Glazed>
		</div>
	</span>

	<span slot="slot-3a">
		<!-- <Corners  img={l.img_2a } --width='400px' --height='100%'> -->
		<!-- <img src={l.img_2a} alt={l.title_2a} class="img" /> -->
		<!-- <Bg_img bg_img={'/imgs/lab.jpg'}/> -->
		<div class="img-tall">
		<Bg_img bg_img={l.img_2a}/>
		<Glazed isTitle={true}>
		<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
	</Glazed>
</div>
		<!-- </Corners> -->
	</span>
	<span slot="slot-3b">
		<!-- <div class="img-tall"> -->
			<Bg_img bg_img={'/imgs/lab.jpg'}/>
		<!-- </div> -->
		<div class="flex-box">
			
			<Glazed>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800" />
			</Glazed>
			<Glazed>
				<Ul>
					<Li item={l.li_1a} --color={'var(--lambda'}/>
					<Li item={l.li_1b}  --color={'var(--lambda'}/>
					<Li item={l.li_1c}  --color={'var(--lambda'}/>
				</Ul>
			</Glazed>
		</div>
	</span>

	<span slot="slot-4a">
		<!-- <Corners  img={l.img_2a } --width='400px' --height='100%'> -->
		<!-- <img src={l.img_2a} alt={l.title_2a} class="img" /> -->
		<!-- <Bg_img bg_img={'/imgs/lab.jpg'}/> -->
		<div class="img-tall">
		<Bg_img bg_img={l.img_2a}/>
		<Glazed isTitle={true}>
		<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
	</Glazed>
</div>
		<!-- </Corners> -->
	</span>
	<span slot="slot-4b">
		<!-- <div class="img-tall"> -->
			<Bg_img bg_img={'/imgs/lab.jpg'}/>
		<!-- </div> -->
		<div class="flex-box">
			
			<Glazed>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800" />
			</Glazed>
			<Glazed>
				<Ul>
					<Li item={l.li_1a} --color={'var(--lambda'}/>
					<Li item={l.li_1b}  --color={'var(--lambda'}/>
					<Li item={l.li_1c}  --color={'var(--lambda'}/>
				</Ul>
			</Glazed>
		</div>
	</span>
</Pages>

<!-- <svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head> -->

<style lang="stylus">

.flex-box
	//border 1px solid red
	display flex
	flex-direction column
	gap 2rem
	height 100% 
	padding 4rem 1rem
	position relative
	z-index 2
.img 
	display flex
	align-items end
	height 300px
	position relative
.img-tall 
	border 1px solid rgba(0,0,0,.0)
	height 100%
	margin 0
	position relative
	top 0
.bar 
	//background var(--theta)
	//border-bottom 1px solid var(--theta)
	display flex
	align-items center
	//height 4rem
	//margin-top -1rem
.details-title 
	color var(--beta)
	font-size 1.4rem
	font-weight bold
	margin 2rem auto 2rem
	text-align center

// .slot-1b
// 	position relative 
// .slot-1b::after 
// 	box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.75)
// 	content ''
// 	position absolute
// 	//height 100%
// 	bottom 2rem
// 	top 2rem
// 	right 0
// 	width 1px
// 	z-index -1
.spacer 
	flex-grow 1
.wrap 
	//background var(--alpha)
	display grid
	//justify-content center
	//height calc(var(--globalHeight) - 8rem)
	//position absolute
	//top 3.5rem
	width var(--globalWidth)
// .grid 
// 	background green
// 	height 100%
// 	padding 1rem
// 	width 100%

.page
	//background var(--beta)
	display grid
	gap 1rem
	grid-template-columns  1fr 1fr
	height 0 //100% //calc(var(--globalHeight) - 12rem)// 100%
	padding 0
	//opacity 0
	//position absolute //relative 
	//top 1rem
	transition all .5s
	z-index -1
.page.page_1, .page.page_2, .page.page_3, .page.page_4
	height 100%
	margin-left 0
	opacity 1
	width 100%
	z-index 1	
.paginator 
	display flex 
	align-items center 
	justify-content space-between
	gap 1rem
	padding .6rem
	position absolute 
	bottom 0 //-2.8rem
	left 50%
	transform translate(-50%)
	width fit-content
	z-index 4
    button 
		background transparent
		border 1px solid var(--gamma) 
		border-radius 50%
		color var(--theta)
		height 2rem 
		outline none
		transition all .5s
		width 2rem
button.page_1, button.page_2, button.page_3, button.page_4
	background var(--gamma)
	color var(--iota)

</style>
