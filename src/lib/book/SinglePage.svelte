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
<div class="page">

                <slot/>

        <!-- </Page> -->

</div>


<style lang="stylus">
section, .pages 
    display flex
    height 100%
    overflow hidden
    width 100%
.page 
    display flex
    height 0
    transition all .5s
    width 0
.page
    height 100%
    width 100%

// .page-1 .side-1.side-1a 
//     background red

</style>