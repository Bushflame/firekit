<script>
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ResultsFrame from '$frames/ResultsFrame.svelte';
    import FrameWrap from '$frames/FrameWrap.svelte'
    import Corners from '$lib/grids/Corners.svelte'
	import HalfCorners from '$lib/grids/ShortCorners.svelte';
	import Header from '$lib/building-views/Header.svelte'
	import Footer from '$lib/building-views/Footer.svelte'

    import Title from '$lib/building-views/Title.svelte'
    import Para from '$lib/building-views/Para.svelte'
    import Li from '$lib/building-views/Li.svelte'
    import Ul from '$lib/building-views/Ul.svelte'

	//contact details
	export let li_tel = '';
	export let li_email = '';
	export let li_fb = '';


	/**
	 * @type {string | any[]}
	 */
	 export let results = [];
	export let counter = 0;
let isIndex = false
</script>

<!-- <div class="card-wrap"> -->
	{#if counter > 0}
		<button
			class="prev counter-btn"
			on:click={() => {
				{
					counter--; // = counter - 1;
				}
			}}
			>&#8250;
		</button>
		<!-- <p class="show-count">Showing {counter + 1} of {results.length} results</p> -->
	{/if}
	{#if counter < results.length - 1}
		<button
			class="next counter-btn"
			on:click={() => {
				counter++; // = counter + 1;
			}}
			>&#8249;
		</button>
		<!-- <p class="show-count">Showing {counter+1} of {results.length} results</p> -->
	{/if}
	<!-- <p class="show-count">Showing {counter + 1} of {results.length} results</p> -->
<FrameWrap>
    <Header></Header>
	{#each results as res, index}
		{#if index == counter}
			<ResultsFrame {isIndex}>
                <span slot='slot-1a'>               
                    <HalfCorners  img={res.img_1a } --mb='14px' >
                    </HalfCorners>
                    <HalfCorners >
                        <Title title={res.title_1a}/>
                        <Para txt={res.para_1a} --align='center' --margin='.5rem auto .5rem' --weight='800'/>
                        <Ul>
                            <Li li={res.li_1a}/>
                            <Li li={res.li_1b}/>
                            <Li li={res.li_1c}/>
                        </Ul>
                    </HalfCorners>
            </span>
				<span
					slot="slot-1b"
				>
                <Corners>
                    <Para bold={'Contact Details'} --align='center' --margin='.2rem 1rem .3rem'/>
                    <Para bold={'Name:'} txt={res.name} --align='left' --margin='.2rem 1rem 1rem  ' flex={true}/>
                    <Para bold={'Email:'}  txt={res.email} --align='left' --margin='.2rem 1rem 1rem ' flex={true}/>		
                    <Para bold={'Tel::'} txt={res.tel} --align='left' --margin='.2rem 1rem 1rem 'flex={true}/>	
                    <Para bold={'FaceBook:'} txt={res.fbook} --align='left' --margin='.2rem 1rem 1rem 'flex={true}/>	
                    <Para bold={'Terms and Conditions'} --align='center' --margin='.2rem auto 1rem '/>					
                    <Para  txt={res.terms} --align='left' --margin='.2rem 1rem .3rem '/>	
                </Corners> 
					</span>
				
			</ResultsFrame>
			<a href={`/listing/${res.id}`} data-sveltekit-preload-data="off">View Full Details</a>
		{/if}
	{/each}
    <Footer/>
</FrameWrap>
<!-- </div> -->

<style lang="stylus">
// .card.two 
//     display none

p.show-count 
    border-radius 1rem
    color var(--eta)
    margin-left 50% 
    padding .3rem 1rem
    transform translate(-50%,0)
    position absolute
    top 1rem
    text-align center
    width fit-content //18rem
    z-index 2




.card-inner-2
    box-shadow inset 0 0 40px 20px var(--gamma)
    display flex
    gap 1rem
    flex-direction column
    justify-content space-around
    height 100%
    padding 2rem 1.2rem 4rem
    position relative
a 
    background var(--gamma)
    border-radius 1rem
    color var(--theta)
    padding .4rem 1rem
    position absolute 
    bottom .8rem 
    left 50%
    transform translate(-50%)
    //left 50% 
    //transform translate(-50%,0)
    width 10rem
    z-index 10
@media(min-width 54rem)
    a 
        left 50%
        transform translate(-50%)
button.counter-btn 
    background var(--epsilon) //rgba(0,0,0,.4)
    border 0
    //border-radius 50%
    color #fff
    display flex
    align-items center
    justify-content center
    font-size 2rem
    height 2rem
    outline 0
    padding-bottom .3rem
    position absolute 
    top 51% 
    transform translate(0, -50%)
    text-align center
    width 2rem
    z-index 10
.prev 
    left 0 //1rem

.next 
    right 0 //1rem



</style>
