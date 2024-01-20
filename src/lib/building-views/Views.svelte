<script>
    	import Corners from '$comps/Corners.svelte';
    let page_1 = true
    let page_2 = false
    let page_3 = false
    let page_4 = false
    let side_1a = true
    let side_1b = true
    export let pageNum = 1
    </script>
    <div class="main-wrap">
    <div class="pages">
        <section class="page page-1"
            class:page_1 
            >
                <span class="side side-1a"
                class:side_1a
                >
                <Corners --height='calc(50% - .5rem'>
                    <slot name='slot-1a'/>
                </Corners>
                <div class="spacer"></div>
                <Corners --height='calc(50% - .5rem'>
                    <slot name='slot-1b'/>
                </Corners>
                </span>
                <span class="side side-1c"
                class:side_1b
                >
                <Corners --height='100%'>
                    <slot name='slot-1c'/>
                </Corners>
                </span>
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
    //border 1px solid red
    padding 1rem
    position relative
.pages
    display grid
    gap 1rem
    //columns -> var
    //grid-template-columns 50% 50% //1fr 1fr
    //grid-template-rows 1
    justify-content center
    height 28rem //100%
    margin auto
    position relative
    //left 50%
    top 0 //-2.4rem
    //transform translate(-50%)
    //width set on page with var
    //width 100% //22rem
.page 
    //border 1px solid blue
    display grid
    gap 1rem
    grid-template-columns  1fr 1fr
    height 100% //26rem
    //margin-left -60rem
    opacity 0
    //position absolute
    transition all .5s
    width 0 //100%
    z-index -1

.page.page_1, .page.page_2, .page.page_3, .page.page_4
    margin-left 0
    opacity 1
    width 100%
    z-index 1	
.side 
    position relative
    width 25rem
.spacer 
    height 1rem
    position reletive
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