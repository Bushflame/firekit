<script>
	import { getByTitles } from '$lib/stores/store.js';
	export let linkTo = '/results';
	export let titles;
	export let heading = 'heading';
</script>

<div class="wrap">
	<!-- <h3>{heading}</h3> -->
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
    //display grid
    margin 1rem auto
    position absolute
    left .3rem
    right .3rem
    top 6rem
    //padding-top 2rem
    //width calc(var(--globalWith) / 2)
h3 
    //background var(--gamma)
    border-radius 1rem
    color var(--iota)
    margin 1rem auto
    text-align center
    width fit-content
.card 
    //border 1px solid red
    display grid 
    gap .6rem
    grid-template-columns 1fr 1fr
    align-items start
    //height 30rem
    list-style none
    margin auto
    //width 24rem //calc(var(--globalWith) - (var(--globalWith)* 0.5))

li 
    //border 1px solid red
    width 100%
a 
    background var(--kappa)
    //border-bottom 1px solid var(--delta)
    border-radius 4px
    color  var(--beta)
    display flex 
    justify-content space-between
    font-size .9rem
    padding .4rem .2rem
    position relative
    text-align left //center
    //width calc(100% - (border-left / 2))
    span 
        color  var(--delta)
        font-size 3rem
        font-weight bold 
        position absolute
        right .4rem
        top 30%
        transform translate(0,-50%)


</style>
