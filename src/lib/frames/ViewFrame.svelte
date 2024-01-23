<script>
    import Nav from '$comps/navigation/Nav.svelte'
    import Title from '$lib/building-views/Title.svelte'
let one = true
let two = false
let page_1 = true
let page_2 = false
let page_3 = false
let page_4 = false
export let toggleTxt = ''
export let title = ''
</script>

<div class="outer">
    <header>
        <button 
        class='toggle-btn'
        on:click={()=>{
            one= !one
            two= !two
        }}
        >{#if one}
        {#if page_1}
            Contact
        {:else}
        Details
        {/if}
        {:else}
        Back 
        {/if}
        </button>
    </header>
    <div class="wrap">
        <section  class='page' class:page_1>
            <!-- for edits-  usae ifs -->
            {#if 'challenge'}
            <div class="side side-1" class:one>
                <slot name='slot-1a'/>
            </div>
            <div class="side side-2" class:two>
                <slot name='slot-1b'/>
            </div>
            {:else}

            {/if}
        </section>


        <section  class='page' class:page_2>
            <div class="side side-1" class:one>
                <slot name='slot-2a'/>
            </div>
            <div class="side side-2" class:two>
                <slot name='slot-2b'/>
            </div>
        </section>

        <section  class='page' class:page_3>
            <div class="side side-1" class:one>
                <slot name='slot-3a'/>
            </div>
            <div class="side side-2" class:two>
                <slot name='slot-3b'/>
            </div>
        </section>

        <section  class='page' class:page_4>
            <div class="side side-1" class:one>
                <slot name='slot-4a'/>
            </div>
            <div class="side side-2" class:two>
                <slot name='slot-4b'/>
            </div>
        </section>

    </div>
<footer>
    <div class="paginator">
        <button
            class:page_1
            on:click|preventDefault={() => {
                //close side 2 when navigating
                one = true
                two = false
                page_1 = true
                page_2 = false
                page_3 = false
                page_4 = false
            }}>1</button
        >
        <button
            class:page_2
            on:click|preventDefault={() => {
                one = true
                 two = false
                page_1 = false
                page_2 = true
                page_3 = false
                page_4 = false
            }}>2</button
        >
        <button
            class:page_3
            on:click|preventDefault={() => {
                one = true
                 two = false
                page_1 = false
                page_2 = false
                page_3 = true
                page_4 = false
            }}>3</button
        >
        <button
            class:page_4
            on:click|preventDefault={() => {
                one = true
                two = false
                page_1 = false
                page_2 = false
                page_3 = false
                page_4 = true
            }}>4</button
        >
    </div>
</footer>
</div>
<style lang="stylus">
.outer 
    background var(--iota)
    height calc(var(--globalHeight))
    position relative
.toggle-btn 
    background  transparent 
    border 1px solid var(--beta)
    border-radius 1.5rem
    color var(--beta)
    display block   
    font-size 1.2rem
    font-weight 800
    outline none
    padding .6rem 2rem
    text-align center
.wrap
    //background pink
    display grid 
    justify-content center
    grid-template-columns 1fr
    grid-template-rows 1
    height calc(var(--globalHeight) - 8rem)
    padding 1rem
    position relative
    width calc(var(--globalWidth)  )
.page 
    background #000 var(--iota)
    display grid
    grid-template-columns 1fr
    grid-template-rows 1
    grid-column 1 / 2 
    grid-row 1 / 2
    height calc(var(--globalHeight) - 10rem)
    order 0
    opacity 0
    transform scale(.5)
    transition all 1s
    width calc(var(--globalWidth) - 20px)

.page.page_1, .page.page_2, .page.page_3, .page.page_4
    //display grid
    grid-template-columns 1fr
    order 1
    opacity 1
    width 100%


.side-1, .side-2
    display flex
    justify-content space-between
    height calc(var(--globalHeight) - 10rem)
    opacity 0
    transition all .5s
.side-1 
    margin-top calc(10rem - var(--globalHeight))
    order 2
    //top 0
.side-2 
    //background blue
    //bottom 0
    order 1
.spacer 
    flex-grow 1
header, footer 
    //background var(--beta)
    //border-radius 2rem
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    justify-content  center
    height 4rem 
    left 0
    width 100%
footer 
    bottom 0
.side-1.one
    margin-left 0
    opacity 1
.side-2.two
    margin-right 0rem
    opacity 1

.page.page_1, .page.page_2, .page.page_3, .page.page_4
    display grid
    grid-template-columns 1fr
    opacity 1
    transform scale(1)
    width 100%

.paginator 
    display flex 
    align-items center 
    justify-content space-between
    gap 1rem
    padding .6rem
    width fit-content
    z-index 4
    button 
        background transparent
        border 1px solid var(--beta) 
        border-radius 50%
        color var(--beta)
        height 2rem 
        outline none
        transition all .5s
        width 2rem
button.page_1, button.page_2, button.page_3, button.page_4
    background var(--gamma)
    color var(--iota)

@media(min-width 880px)
    .outer 
        background #000 var(--iota)
    header, footer 
        border-radius 2rem
    .toggle-btn
        display none
    .page
        //border-radius 2rem
        grid-template-columns 1fr 1fr 
        gap .8rem
        padding 1rem
        width calc(var(--globalWidth) - 5rem)

    .side-1.one,.side-2.two, .side-1,.side-2
        //width calc(var(--globalWidth) / 2 + 2px )
        display grid ///???
        opacity 1
    .side-1
        grid-column 1 / 2
        margin-top 0
        order 1
    .side-2 
        grid-column 2 / 3
        margin-right 0
        order 1
    .togglr-btn 
        display none

</style>