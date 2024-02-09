<script>
	import Frame from '$lib/frames/ListingFront.svelte';
	import Img from '$lib/building-views/Img.svelte';
	import Title from '$lib/building-views/Title.svelte';
	import Para from '$lib/building-views/Para.svelte';
	import Li from '$lib/building-views/FlatLi.svelte';
	import Ul from '$lib/building-views/Ul.svelte';

	/**
	 * @type {string | any[]}
	 */
	export let results = [];
	$: counter = 0;
</script>

<!-- {#if counter > 0}
<button
    class="prev counter-btn"
    on:click={() => {
        {
            counter--; // = counter - 1;
        }
    }}
                >&#8249;

</button>
{/if}
{#if counter < results.length - 1}
<button
    class="next counter-btn"
    on:click={() => {
        counter++; // = counter + 1;
    }}
>&#8250;
</button>
{/if} -->
<p class="show-count">Showing {counter + 1} of {results.length} results</p>

<!-- <FrameWrap> -->
<!-- <Header></Header> -->

{#each results as res, index}
	{#if index == counter}
		<Frame>
			<span slot="slot-1" class="slot-1a">
				<header>
					<p class="show-count">Showing {counter + 1} of {results.length} results</p>
				</header>
				<Img img={res.img_1a} />
				<!-- <img src={res.img_1a} alt="">  -->
				<!-- <HalfCorners  img={res.img_1a } --mb='14px' > -->
				<Title title={res.title_1a} />

				<Para txt={res.para_1a} --align="center" --margin=".5rem auto .5rem" --weight="400" />
				<!-- li's need if != ' ' -->
				<Ul>
					<Li item={res.li_1a} />
					<Li item={res.li_1b} />
					<Li item={res.li_1c} />
					<Li item={res.li_1d} />
					<Li item={res.li_1e} />
				</Ul>

				<a href={`/listing/${res.id}`} data-sveltekit-preload-data="off">View Full Details</a>
			</span>
			<span slot="slot-1b">
				<!-- <Corners> -->
				<Para bold={'Contact Details'} --align="center" --margin=".2rem 1rem .3rem" />
				<Para
					bold={'Name:'}
					txt={res.name}
					--align="left"
					--margin=".2rem 1rem 1rem  "
					flex={true}
				/>
				<Para
					bold={'Email:'}
					txt={res.email}
					--align="left"
					--margin=".2rem 1rem 1rem "
					flex={true}
				/>
				<Para bold={'Tel::'} txt={res.tel} --align="left" --margin=".2rem 1rem 1rem " flex={true} />
				<Para
					bold={'FaceBook:'}
					txt={res.fbook}
					--align="left"
					--margin=".2rem 1rem 1rem "
					flex={true}
				/>
				<Para bold={'Terms and Conditions'} --align="center" --margin=".2rem auto 1rem " />
				<Para txt={res.terms} --align="left" --margin=".2rem 1rem .3rem " />
				<!-- </Corners>  -->
			</span>
		</Frame>
	{/if}
{/each}

<!-- <Footer/> -->
<!-- </FrameWrap> -->
<style lang="stylus">
a 
    position absolute
</style>
