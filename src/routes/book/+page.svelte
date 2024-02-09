<script>
    import Pages from '$lib/book/Pages.svelte'

</script>
<Pages>
    <span slot='slot-1a'> 
        <img src="/imgs/german-shepherd.jpg" alt="">
    </span>
    <span slot='slot-1b'>slot 1b</span>

    <span slot='slot-2a'> slot 2a</span>
    <span slot='slot-2b'>slot 2b</span>

    <span slot='slot-3a'> slot 3a</span>
    <span slot='slot-3b'>slot 3b</span>

    <span slot='slot-4a'> slot 4a</span>
    <span slot='slot-4b'>slot 4b</span>
</Pages>




<style lang="stylus">
img 
    height 100%
</style>