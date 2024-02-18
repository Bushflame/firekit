<script>
	import { page } from '$app/stores';
	import Ul from '$lib/building-views/Ul.svelte';
	import FlatLi from '$lib/building-views/FlatLi.svelte';
	import ALink from '$lib/building-views/ALink.svelte';
	import Pages from '$lib/book/Pages.svelte'
	import Quote from '$lib/book/Blockquote.svelte'
	import MountPage from '$lib/book/MountPage.svelte'
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
	import {onMount} from 'svelte'

let loadPage = false
onMount(()=>{
	setTimeout(()=> {
		loadPage = true
	},10)

})

</script>
<MountPage>
<Pages showPaginator={false}>
    <span slot='slot-1a' class='slot-1a'> 
        <img src="/imgs/bulldog.jpg" alt="" class='bg'>
		<div class="flex-box">

				<div class="title-box">
					<!-- <p class='intro'>DogsFX brings you...</p> -->
					<h1><span>Dogs</span><br/> for sale</h1>
					<p class='intro'>The place to buy and sell new best friends</p>
				</div>
	</div>
    </span>
    <span slot='slot-1b'>
		<div class="filter"></div>
			<img src="/imgs/bulldog.jpg" class='bg flip' alt="">
		<div class="flex-box center">
			<Quote><p class='quote'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p></Quote>
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
</MountPage>

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
	justify-content end
	gap .8rem
	height 100% 
	padding 2.4rem 1rem 1.5rem
	position relative
	z-index 2
.filter //styl
	background  rgba(0,0,0,.7)
	height 100%
	position absolute
	left 0
	top 0 
	width 100%
	z-index 2
.flip 
	transform rotateY(180deg)
.center 
	justify-content center


.title-box 
	background var(--iota-alpha-d) //rgba(0,0,0,.5)
	margin-left -1rem
	margin-bottom 1.5rem
	padding 1rem .8rem 1rem .5rem
	width fit-content
h1 
	color var(--gamma)
	font-size 2.2rem
	line-height 1
	font-weight 800
	margin 0rem 0 1rem 1rem
	text-align left
	text-transform: uppercase
h1 span 
	font-size 4rem
p 
	font-size 1.1rem
	line-height 1.3
p.intro 
	color var(--alpha)
	font-size 1.1rem
	margin-left 1.1rem
p.quote 
	color var(--beta)
	margin 1rem 0
</style>
