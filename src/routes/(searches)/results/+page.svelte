<script>
    
    import Slide_1 from '$comps/slides/slide_1.svelte'
    export let data
    //console.log('data',data.results)
    let slides = data.results
    //console.log('slides',slides)

</script>

<h1>results</h1>
<Slide_1 {slides}/>
<!-- <h2>{results}</h2>
<h2>{$getByTitles}</h2> -->
<!-- <h2>{$getByTitles}</h2> -->
<style lang="stylus">

</style>