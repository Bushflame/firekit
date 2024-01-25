<script>
		import { page } from '$app/stores';
	import SinglePageFrame from '$frames/SinglePageFrame.svelte'
	
	import Corners from '$lib/grids/Corners.svelte'
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'
	import Frame from '$frames/ResultsFrame.svelte'
	import FrameWrap from '$frames/FrameWrap.svelte'
	import Ul from '$lib/building-views/Ul.svelte'
	import FlatLi from '$lib/building-views/FlatLi.svelte'
	import ALink from '$lib/building-views/ALink.svelte'
</script>
<FrameWrap>
	<Header></Header>
	<Frame btnTxt={"Let's get started"}>
		<span slot='slot-1a' class='slot-1a'>
			<Corners  img={'/imgs/german-shepherd.jpg' } >
				<header>
					<div class="title">
						<span>T<br/>H<br/>E</span> <h1>DOGFINDER</h1>
					</div>
					<br/>
					<!-- <p>Welcome to the world of dogs</p> -->
				</header>

			</Corners>
		</span>
		<span slot='slot-1b'  class='slot-1b'>
			<Corners  img={'/imgs/bulldog.jpg '  } --opacity={0}>
				<div class="box-wrap"> 	
				<div class="buyers box">
					<h3>Buyers</h3>
					<Ul >
						<FlatLi item={'List item'}/>
						<FlatLi item={'List item'}/>
						<FlatLi item={'List item'}/>
					</Ul>
					<ALink linkTo={'/search'} linkTxt={'Begin your search'}/>
				</div>
				<div class="sellers box">
					<h3>Sellers</h3>
					<Ul>
						<FlatLi item={'List item'}/>
						<FlatLi item={'List item'}/>
						<FlatLi item={'List item'}/>
					</Ul>
					<ALink linkTo={'/'} linkTxt={'Find out more'}/>
				</div>
			</div>
			</Corners> 
		</span>
	</Frame>
	<Footer
	></Footer>
</FrameWrap>
<style lang="stylus">
header 
	//border 1px solid red
	position absolute
	top 3rem	
	width 22rem
.title 
	display flex
	align-items center

h1 
	color var(--delta)
	font-size 50px
	font-weight 900
	font-family: Arial
	text-shadow: 0px 1px, 1px 0px, 1px 1px, 1px 2px,2px 1px, 2px 2px, 2px 3px, 3px 2px, 3px 3px, 4px 4px, 5px 5px;
	letter-spacing 2px
	transform scale(1,2.2)
h3 
	color var(--theta)
	font-size 1.6rem
	font-weight 200
p 
	background var(--iota)
	color var(--beta)
	font-size 1.2rem
	line-height 1
	margin-left auto
	margin-top -.2rem
	padding 2px 4px
	text-align right
	width fit-content
header span 
	color  var(--delta)
	font-size 36px
	font-weight bold
	//padding-left 6px
	margin-bottom -8px
	text-align center
	line-height .85
	margin-right 4px
	font-family: Arial, Helvetica, sans-serif;
	text-shadow: 0px 1px, 1px 0px, 1px 1px, 1px 2px,2px 1px
.box-wrap 
	//border 1px solid red
	width 90%
.box 
	//border 1px solid red
	min-height 15rem
	//margin 2rem
	width 100%
.next-btn 
	background var(--iota)
	border none
	border-radius 1.3rem
	color var(--beta)
	font-size 1.1rem
	outline none 
	padding .8rem 2rem
	position absolute
	bottom 8rem
img
	height 100%
	object-fit cover
	width 100%
img.bg 
	opacity .4
</style>
