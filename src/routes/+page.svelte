<script>
	import { page } from '$app/stores';
	import SinglePageFrame from '$frames/SinglePageFrame.svelte';

	import Corners from '$lib/grids/Corners.svelte';
	import Header from '$lib/building-views/Header.svelte';
	import Footer from '$lib/building-views/Footer.svelte';
	import Frame from '$frames/Index.svelte';
	import FrameWrap from '$frames/FrameWrap.svelte';
	import Ul from '$lib/building-views/Ul.svelte';
	import FlatLi from '$lib/building-views/FlatLi.svelte';
	import ALink from '$lib/building-views/ALink.svelte';

	import Pages from '$lib/book/Pages.svelte'
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
</script>
<Pages showPaginator={false}>
    <span slot='slot-1a' class='slot-1a'> 
        <img src="/imgs/lab.jpg" alt="" class='bg'>
		<div class="flex-box between">
			<Glazed>
				<h1>the title</h1>
			</Glazed>
			<Glazed>
				<span class="large">
					WELCOME...<br/>
					DOG BUYERS <br />
					&<br/>
					DOG SELLERS <br />
				</span>
			</Glazed>
	</div>
    </span>
    <span slot='slot-1b'>
			<img src="/imgs/bulldog.jpg" class='bg' alt="">
		<div class="flex-box center">
			<Sticker>
				<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
				<ALink linkTo={'/search'} linkTxt={'Start searching'} />
			</Sticker>
			<Glazed>
					<Ul>
						<FlatLi item={'Lorem ipsum is placeholder text commonly used in the graphic, print'} />
						<FlatLi item={'List item'} />
						<FlatLi item={'List item'} />
					</Ul>
					<ALink linkTo={'/search'} linkTxt={'Find out more'} />
				</Glazed>
		</div>
	</span>
</Pages>

<style lang="stylus">
img.bg 
	width 100%
	position absolute
	left 0
	top 0
	height 100%
	z-index 1
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

.large
	color var(--theta)
	font-size 2.1rem 
	font-weight 800
	line-height 1
	text-transform: uppercase
	z-index 1
h1 
	color var(--iota)
	text-transform: uppercase
</style>
