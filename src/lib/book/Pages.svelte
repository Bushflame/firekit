<script>
    import Page from '$lib/book/Page.svelte'
    let page_1 = true
    let page_2 = false
    let page_3 = false
    let page_4 = false
    export let showPaginator = true;
    export let tit_1 = ''
    export let tit_4 = ''

</script>
<div class="pages">
    <section class="page page-1" class:page_1>
        <Page toggleTxt={''}>
            <span slot='side-1' class='side-1 side-la'>
                <slot name='slot-1a'/>

            </span>
            <span slot='side-2'>
                <slot name='slot-1b'/>

            </span>
        </Page>
    </section>
    <section class="page page-2" class:page_2>
        <Page toggleTxt={'Details'}>
            <span slot='side-1'>
                <slot name='slot-2a'/>

            </span>
            <span slot='side-2'>
                <h1>slot 2b</h1>
                <slot name='slot-2b'/>

            </span>
        </Page>
    </section>
    <section class="page page-4" class:page_3>
        <Page>
            <span slot='side-1'>
                <slot name='slot-3a'/>

            </span>
            <span slot='side-2'>
                <slot name='slot-3b'/>

            </span>
        </Page>
    </section>
    {#if tit_4.length > 4}
    <section class="page page-4" class:page_4>
        <Page>
            <span slot='side-1'>
                <slot name='slot-4a'/>

            </span>
            <span slot='side-2'>
                <slot name='slot-4b'/>

            </span>
        </Page>
    </section>
    {/if}
	{#if showPaginator}
		<div class="paginator">
            {#if tit_1}
			<button
				class:page_1
				on:click|preventDefault={() => {
					//close side 2 when navigating
					page_1 = true;
					page_2 = false;
					page_3 = false;
					page_4 = false;
				}}>1</button
			>
            {/if}
			<button
				class:page_2
				on:click|preventDefault={() => {
					page_1 = false;
					page_2 = true;
					page_3 = false;
					page_4 = false;
				}}>2</button
			>
			<button
				class:page_3
				on:click|preventDefault={() => {;
					page_1 = false;
					page_2 = false;
					page_3 = true;
					page_4 = false;
				}}>3</button
			>
            {#if tit_4.length > 4}
			<button
				class:page_4
				on:click|preventDefault={() => {
					page_1 = false;
					page_2 = false;
					page_3 = false;
					page_4 = true;
				}}>4</button
			>
            {/if}
		</div>
	{/if}

</div>


<style lang="stylus">
// div 
//     background skyblue
section, .pages
    height 100%
    overflow hidden
    width 100%
.page 
    height 0
    transition all .5s
    width 0
.page.page_1,.page.page_2,.page.page_3,.page.page_4
    height 100%
    width 100%

.paginator 
    //border 1px solid red
    display flex 
    align-items center 
    justify-content center //space-between
    gap 1rem
    //padding .6rem
    position absolute //relative
    left 0 //-26%
    right 0
    //transform translate(25%)
    bottom 1.5rem
    width 100% //fit-content
    z-index 40
    button 
        background var(--beta) //transparent
        //border 1px solid var(--eta) 
        border-radius 50%
        color var(--eta)
        height 2rem 
        outline none
        transition all .5s
        width 2rem
button.page_1, button.page_2, button.page_3, button.page_4
    background var(--eta)
    color var(--beta)
</style>