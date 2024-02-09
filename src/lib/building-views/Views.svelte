<script>
	import Corners from '$comps/Corners.svelte';
	let page_1 = true;
	let page_2 = false;
	let page_3 = false;
	let page_4 = false;
	let side_1a = true;
	let side_1b = true;
	export let pageNum = 1;
	let sideWrap_1a = true;
	let sideWrap_1b = false;

	//if front page or not
	export let isFront = true;
</script>

<!-- <div class="main-wrap"> -->
<!-- <button class="toggle"
            on:click={()=>{
                sideWrap_1a = !sideWrap_1a
                sideWrap_1b = !sideWrap_1b
            }}
            >toggle</button> -->
<!-- <div class="pages"> -->
<section class="page page-1" class:page_1>
	<div class="side-wrap side-wrap-1a" class:sideWrap_1a>
		<!-- pos if -->

		<span class="side side-1a" class:side_1a>
			{#if isFront}
				<Corners --height="calc(50% - .5rem">
					<slot name="slot-1a" />
				</Corners>
				<div class="spacer"></div>
				<Corners --height="calc(50% - .5rem)">
					<slot name="slot-1b" />
				</Corners>
			{:else}
				<Corners --height="100%">
					<slot name="slot-1" />
				</Corners>
			{/if}
		</span>
	</div>
	<div class="side-wrap side-wrap-1b" class:sideWrap_1b>
		<span class="side side-1c" class:side_1b>
			<Corners --height="100%">
				<slot name="slot-1c" />
			</Corners>
		</span>
	</div>
</section>

<!-- <section class="page"
            class:page_2
            >   
            <slot name='page-2'/>view 2
            </section>
        
            <section class="page"
            class:page_3
            >
            <slot name='page-3'/>view 3
            </section>
        
            <section class="page"
            class:page_4
            >  
            <slot name='page-4'/> view 4
            </section> -->
<!-- </div> -->
<!-- </div> -->
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
<style lang="stylus">
// .main-wrap 
//     background var(--beta)
//     border 1px solid blue
//     height calc(var(--globalHeight) - 8rem)
//     display flex
//     //margin-left 2px //1rem
//     overflow hidden
//     padding  0
    //position relative
    //width var(--globalWidth) //calc(var(--globalWidth) - 0rem)// 40rem //100%
.toggle
    position absolute 
    right 0
    top 0

.page
    //border 1px solid blue
    display grid
    //gap 1rem
    grid-template-columns  1fr //1fr
    height calc(var(--globalHeight ) - 8.5rem)
    margin 0 //1rem
    opacity 0
    position relative 
    left 1rem //5rem 
    transition all .5s
    z-index -1
//toggle inner pages with toggle btn
.side-wrap 
    //border 1px solid yellow
    height calc(var(--globalHeight) - 8.5rem)//  -6 on small
    margin-left -30rem
    opacity 0
    position absolute
    //top 1rem
    bottom 0
    //transform translate(-52.2%)
    transition all .5s
    width 24.2rem
    z-index -1
.side 
    border 0px solid yellow
.side-wrap.sideWrap_1a, .side-wrap.sideWrap_1b
    margin-left 0rem
    opacity 1
    z-index 1
@media(min-width 50rem)
    .page 
        grid-template-columns 1fr 1fr
        //left 25%
        //transform translate(-48%)
        position relative //absolute
    .side-wrap 
        height calc(var(--globalHeight) - 8.5rem)//  -6 on small
        margin-left 1.8rem
        opacity 1
        position relative
        //left 47%
    .toggle 
        display none
//toggle main pages with paginator
.page.page_1, .page.page_2, .page.page_3, .page.page_4
    margin-left 0
    opacity 1
    width 100%
    z-index 1	

.side 
    //position relative
    width 25rem

.spacer 
    height 1rem
    position relative
// .side-1a 			
//     position relative
    //width 100%
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
