<script>
	import SinglePageFrame from '$frames/SinglePageFrame.svelte'
	import Corners from '$lib/grids/Corners.svelte'
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'
	import Frame from '$frames/ResultsFrame.svelte'
	import FrameWrap from '$frames/FrameWrap.svelte'
</script>
<FrameWrap>
	<Header></Header>
	<Frame>
		<span slot='slot-1a' class='slot-1a'>
			<Corners  img={'/imgs/alsation-dog-1.jpg' } >
			</Corners>
		</span>
		<span slot='slot-1b'  class='slot-1b'>
			<Corners  >
				<h1>page 2</h1>
			</Corners> 
		</span>
	</Frame>
	<Footer
	></Footer>
</FrameWrap>
<style lang="stylus">
// calc(var(--(globalWidth) - 2rem))
</style>
