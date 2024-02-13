<script>
	import { getByTitles } from '$lib/stores/store.js';
	export let linkTo = '/results';
	/**
	 * @type {any}
	 */
	 export let titles;

</script>

	<!-- <h3>{heading}</h3> -->
	<ul class="card">
		{#each titles as title}
        <!-- {#if title.length >= 18}
			<li class='span-2'>
				<a
                    
					href={linkTo}
					data-sveltekit-preload-data="off"
					on:click={() => {
						$getByTitles = title;
					}}>{title}</a
				>
			</li>
            {:else} -->
            <li>
            <a
            href={linkTo}
            data-sveltekit-preload-data="off"
            on:click={() => {
                $getByTitles = title;
            }}>{title}</a
        >
    </li>
    <!-- {/if} -->
		{/each}
	</ul>

<!-- <SearchLink heading={'The Heading'} linkTo={'/results'} {titles}/> -->

<style lang="stylus">

.card 
    //border 1px solid red
    display grid 
    gap .6rem
    grid-template-columns 1fr 1fr
    align-items start
    //height 30rem
    list-style none
    margin 2rem auto
    width 22rem //calc(var(--globalWith) - (var(--globalWith)* 0.5))

li 
    //border 1px solid red
    max-width 10.8rem
    width 100%

    //width fit-content
a 
    background var(--beta)
    border-radius 1rem
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
    rgba(0, 0, 0, 0.06) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
    color var(--theta)
    display block
    font-size 1rem
    font-weight 800
    //margin 1rem 1rem //0 auto  
    padding .5rem //1rem
    text-align left
    text-transform capitalize

    width 100% //fit-content
    overflow: hidden
    white-space: nowrap
    overflow: hidden
    //padding-right 3rem
    resize: horizontal
    text-overflow: ellipsis



</style>
