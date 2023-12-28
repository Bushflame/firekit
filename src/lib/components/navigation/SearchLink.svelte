<script>
import { getByTitles } from '$lib/stores/store.js';
export let linkTo ='/results'
export let titles
export let heading = 'heading'
</script>
<div class="wrap">
    <h3>{heading}</h3>
<ul class='card'>
    {#each titles as title}
    <li>
        <a href={linkTo}
        data-sveltekit-preload-data="off"
        on:click={()=>{
            $getByTitles = title;
        }}
        >{title}<span>&#8250;</span></a>
    </li>
    {/each}
</ul>
</div>
<!-- <SearchLink heading={'The Heading'} linkTo={'/results'} {titles}/> -->

<style lang="stylus">
.wrap 
    margin auto
    width fit-content
h3 
    background var(--beta)
    color var(--alpha)
    margin .6rem auto
    padding .4rem
    text-align center
.card 
    //border 1px solid red
    display grid 
    gap .4rem
    grid-template-columns 1fr 1fr
    list-style none
    margin auto
    //max-width 20rem
    width fit-content
li 
    //border 1px solid red
    width 10rem
a 
    background var(--delta)
    color  var(--beta)
    display flex 
    justify-content space-between
    //font-weight bold
    //margin .2rem 
    padding .2rem .5rem .2rem 2rem
    position relative
    text-align center
    width calc(100% - (border-left / 2))
    span 
        color  var(--beta)
        font-size 3rem
        font-weight bold 
        position absolute
        right .4rem
        top 30%
        transform translate(0,-50%)

a::before
    background var(--beta)
    //border-right 4px solid  var(--alpha)
    content ''
    height 100% 
    position absolute
    left 0
    top 0
    width .8rem


a::after 
    background var(--beta)
    //border-right 4px solid  var(--alpha)
    content ''
    height 100% 
    position absolute
    left 1.2rem
    top 0
    width .2rem

</style>