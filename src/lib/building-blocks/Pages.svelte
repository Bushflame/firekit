<script>
let page_1 = true
let page_2 = false
let page_3 = false
let page_4 = false
export let pageNum = 1
</script>
<div class="main-wrap">
<div class="pages">
    <section class="page"
    class:page_1
    >
        <slot name='page-1'/>
    </section>

    <section class="page"
    class:page_2
    >   
    <slot name='page-2'/>
    </section>

    <section class="page"
    class:page_3
    >
    <slot name='page-3'/>
    </section>

    <section class="page"
    class:page_4
    >  
    <slot name='page-4'/>
    </section>

    <section class="submit"
    >  
    <slot name='submit'/> 
    </section>
</div>
</div>
<div class="paginator">
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
</div>
<style lang="stylus">
.main-wrap
	padding 1rem
	position relative
.pages
	// height set on page with var
	height 26rem
	display grid
	gap 1rem
	//columns -> var
	grid-template-columns 1fr
	grid-template-rows 1
	justify-content center
	margin auto
	position relative
	left 50%
	top -2.4rem
	transform translate(-50%)
	//width set on page with var
	width 22rem
.page 
	//border 1px solid blue
	height 26rem
	margin-left -40rem
	opacity 0
	position absolute
	transition all .5s
	width 0 //100%
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
	bottom -2.8rem
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