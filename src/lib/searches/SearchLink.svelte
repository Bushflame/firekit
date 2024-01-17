<script>
	import { getByTitles } from '$lib/stores/store.js';
	export let linkTo = '/results';
	export let titles;
	export let heading = 'heading';
</script>

<div class="wrap">
	<h3>{heading}</h3>
	<ul class="card">
		{#each titles as title}
			<li>
				<a
					href={linkTo}
					data-sveltekit-preload-data="off"
					on:click={() => {
						$getByTitles = title;
					}}>{title}<span>&#8250;</span></a
				>
			</li>
		{/each}
	</ul>
</div>

<!-- <SearchLink heading={'The Heading'} linkTo={'/results'} {titles}/> -->

<style lang="stylus">
.wrap 
    margin auto
    width calc(var(--globalWith) / 2)
h3 
    //background var(--gamma)
    border-radius 1rem
    color var(--iota)
    margin 1rem auto
    padding .4rem 2rem
    text-align center
    width fit-content
.card 
    display grid 
    gap .8rem
    grid-template-columns 1fr 1fr
    list-style none
    margin auto
    width 25rem //calc(var(--globalWith) - (var(--globalWith)* 0.5))

li 
    //border 1px solid red
    //width 10rem
a 
    //background var(--delta)
    border-bottom 1px solid var(--gamma)
    color  var(--theta)
    display flex 
    justify-content space-between
    padding .4rem 1rem
    position relative
    text-align center
    //width calc(100% - (border-left / 2))
    span 
        color  var(--delta)
        font-size 3rem
        font-weight bold 
        position absolute
        right .4rem
        top 30%
        transform translate(0,-50%)

// a::before
//     background var(--beta)
//     content ''
//     height 100% 
//     position absolute
//     left 0
//     top 0
//     width .8rem


// a::after 
//     background var(--beta)
//     content ''
//     height 100% 
//     position absolute
//     left 1.2rem
//     top 0
//     width .2rem

</style>
