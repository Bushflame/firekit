<script>
	import FrameWrap from '$frames/FrameWrap.svelte'
	import Para from '$lib/building-views/Para.svelte'
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'
	import Ul from '$lib/building-views/Ul.svelte'
	import Li from '$lib/building-views/FlatLi.svelte'
	import Title from '$lib/building-views/Title.svelte'
	import Corners from '$lib/grids/Corners.svelte';
	import HalfCorners from '$lib/grids/ShortCorners.svelte';
	import { limit } from 'firebase/firestore';
	import DoubleFrame from '$frames/DoubleFrame.svelte'

	export let data;
	let l = data.listing;
let pageNum
	let page_1 = true
    let page_2 = false
    let page_3 = false
    let page_4 = false

</script>
<FrameWrap>
	<Header></Header>
<DoubleFrame>
    <span slot='slot-1a' class='slot-1a'>
		<HalfCorners  img={l.img_1a } --mb='14px' >
			<Title title={l.title_1a}/>
		</HalfCorners>
		<HalfCorners >
			
			<Para txt={l.para_1a} --align='center' --margin='-1rem auto .5rem'/>
			<Ul>
				<Li item={l.li_1a}/>
				<Li item={l.li_1b}/>
				<Li item={l.li_1c}/>
			</Ul>
		</HalfCorners>
	</span>
	<span slot='slot-1b' class='slot-1b'>
		<Corners>
			<Para bold={'Contact Details'} --align='center' --margin='.2rem 1rem .3rem'/>
			<Para bold={'Name:'} txt={l.name} --align='left' --margin='.2rem 1rem .4rem  ' flex={true}/>
			<Para bold={'Email:'}  txt={l.email} --align='left' --margin='.2rem 1rem .4rem ' flex={true}/>		
			<Para bold={'Tel::'} txt={l.tel} --align='left' --margin='.2rem 1rem .4rem 'flex={true}/>	
			<Para bold={'FaceBook:'} txt={l.fbook} --align='left' --margin='.2rem 1rem .4rem 'flex={true}/>	
			<Para bold={'Terms and Conditions'} --align='center' --margin='.2rem auto .4rem '/>					
			<Para  txt={l.terms} --align='left' --margin='.2rem 1rem .3rem '/>	
		</Corners> 
	</span>
    

    <span slot='slot-2a'>
		<Corners  img={l.img_2a } --width='400px' --height='100%'>
			<Title title={l.title_1a}/>
		</Corners>
	</span>
    <span slot='slot-2b'>
		<Corners --width='400px' --height='100%'>
			<Para txt={l.para_1a} --align='center' --margin='.5rem auto .5rem' --weight='800'/>
			<Ul>
				<Li item={l.li_1a}/>
				<Li item={l.li_1b}/>
				<Li item={l.li_1c}/>
			</Ul>
		</Corners>
	</span>

    <span slot='slot-3a'>
		<Corners --width='420px' --height='100%'>
			<Title title={l.title_1a}/>
		</Corners>
	</span>
    <span slot='slot-3b'>
		<Corners --width='420px' --height='100%'>
			<Para txt={l.para_1a} --align='center' --margin='.5rem auto .5rem' --weight='800'/>
			<Ul>
				<Li item={l.li_1a}/>
				<Li item={l.li_1b}/>
				<Li item={l.li_1c}/>
			</Ul>
		</Corners>
	</span>

    <span slot='slot-4a'>
		<Corners --width='420px' --height='100%'>
			<Title title={l.title_1a}/>
		</Corners>
	</span>
    <span slot='slot-4b'>
		<Corners --width='420px' --height='100%'>
			<Para txt={l.para_1a} --align='center' --margin='.5rem auto .5rem' --weight='800'/>
			<Ul>
				<Li item={l.li_1a}/>
				<Li item={l.li_1b}/>
				<Li item={l.li_1c}/>
			</Ul>
		</Corners>
	</span>
</DoubleFrame>
<Footer></Footer>
</FrameWrap>
<!-- <div class="wrap"> -->
<!-- <div class="page"  class:page_1>
	<Views isFront={true}>
			<span slot='slot-1a'>
				<Title title={l.title_1a}/>
				<Img img={l.img_1a}/>
			</span>
		<span slot='slot-1b'>
			<Para txt={l.para_1a} --align='center' --margin='-1rem auto .5rem' --weight='800'/>
			<Ul>
				<Li li={l.li_1a}/>
				<Li li={l.li_1b}/>
				<Li li={l.li_1c}/>
			</Ul>
		</span>
		<span slot='slot-1c'>
			<Para bold={'Contact Details'} --align='center' --margin='.2rem auto .3rem'/>
			<Para bold={'Name:'} txt={l.name} --align='left' --margin='.2rem auto 1rem  ' flex={true}/>
			<Para bold={'Email:'}  txt={l.email} --align='left' --margin='.2rem auto 1rem ' flex={true}/>		
			<Para bold={'Tel::'} txt={l.tel} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'FaceBook:'} txt={l.fbook} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'Terms and Conditions'} --align='center' --margin='.2rem auto 1rem '/>					
			<Para  txt={l.terms} --align='left' --margin='.2rem auto .3rem '/>							 
		</span>
	</Views>
</div>
<div class="page" class:page_2>
	<Views isFront={false}>
		<span slot='slot-1'>
			<Title title={l.title_1a}/>
			<Img img={l.img_1a}/>
		</span>
		<span slot='slot-1c'>
			<Para bold={'Contact Details'} --align='center' --margin='.2rem auto .3rem'/>
			<Para bold={'Name:'} txt={l.name} --align='left' --margin='.2rem auto 1rem  ' flex={true}/>
			<Para bold={'Email:'}  txt={l.email} --align='left' --margin='.2rem auto 1rem ' flex={true}/>		
			<Para bold={'Tel::'} txt={l.tel} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'FaceBook:'} txt={l.fbook} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'Terms and Conditions'} --align='center' --margin='.2rem auto 1rem '/>					
			<Para  txt={l.terms} --align='left' --margin='.2rem auto .3rem '/>							 
		</span>
	</Views>
</div>
</div> -->

<!-- <div class="paginator">
	<button
		class:page_1
		on:click|preventDefault={() => {
			pageNum = 1;
			page_1 = true
			page_2 = false
			page_3 = false
			page_4 = false
		}}>1</button
	>
	<button
		class:page_2
		on:click|preventDefault={() => {
			pageNum = 2;
			page_1 = false
			page_2 = true
			page_3 = false
			page_4 = false
		}}>2</button
	>
	<button
		class:page_3
		on:click|preventDefault={() => {
			pageNum = 3;
			page_1 = false
			page_2 = false
			page_3 = true
			page_4 = false
		}}>3</button
	>
	<button
		class:page_4
		on:click|preventDefault={() => {
			pageNum = 4;
			page_1 = false
			page_2 = false
			page_3 = false
			page_4 = true
		}}>4</button
	>
</div> -->
<!-- <a href={`/search`} data-sveltekit-reload>Back</a> -->

<!-- <svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head> -->

<style lang="stylus">
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
	justify-content center
	//height calc(var(--globalHeight) - 8rem)
	//position absolute
	top 3.5rem
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
	height calc(var(--globalHeight) - 12rem)// 100%
	padding 0
	opacity 0
	position absolute //relative 
	top 1rem
	transition all .5s
	z-index -1
.page.page_1, .page.page_2, .page.page_3, .page.page_4
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
