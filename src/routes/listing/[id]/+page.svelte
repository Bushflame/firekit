<script>
	import Views from '$lib/building-views/Views.svelte'
	import Img from '$lib/building-views/Img.svelte'
	import Title from '$lib/building-views/Title.svelte'
	import Para from '$lib/building-views/Para.svelte'
	import Ul from '$lib/building-views/Ul.svelte'
	import Li from '$lib/building-views/Li.svelte'
	import Corners from '$comps/Corners.svelte';
	import { slide, fade, fly, scale } from 'svelte/transition';
	import Card from '$comps/cards/Card.svelte';
	import FrontCard from '$comps/cards/PublicFrontCard.svelte';
	import InnerCard from '$comps/cards/PublicInnerCard.svelte';
	import { limit } from 'firebase/firestore';

	export let data;
	let l = data.listing;

</script>

<div class="wrap">

	<Views>
			<span slot='slot-1a'>
				<Title title={l.title_1a}/>
				<Img img={l.img_1a}/>
			</span>
		<span slot='slot-1b'>
			<Para txt={l.para_1a} --align='center' --margin='-1rem auto .5rem' --weight='800'/>
			<Ul>
				<Li li={l.li_1a}/>
				<Li li={l.li_1b}/>
				<Li li={l.li_1c}/>
			</Ul>
		</span>
		<span slot='slot-1c'>
			<Para bold={'Contact Details'} --align='center' --margin='.2rem auto .3rem'/>
			<Para bold={'Name:'} txt={l.name} --align='left' --margin='.2rem auto 1rem  ' flex={true}/>
			<Para bold={'Email:'}  txt={l.email} --align='left' --margin='.2rem auto 1rem ' flex={true}/>		
			<Para bold={'Tel::'} txt={l.tel} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'FaceBook:'} txt={l.fbook} --align='left' --margin='.2rem auto 1rem 'flex={true}/>	
			<Para bold={'Terms and Conditions'} --align='center' --margin='.2rem auto 1rem '/>					
			<Para  txt={l.terms} --align='left' --margin='.2rem auto .3rem '/>							 
		</span>

	</Views>
	<!-- {#if show_slide_1}
		<div
			class="transition"
			in:scale={{ duration: 500, delay: 100 }}
			out:fly={{ x: -200, duration: 400 }}
		>
			<FrontCard
				{front}
				img={l.img_1a}
				tit={l.title_1a}
				para={l.para_1a}
				li_a={l.li_1a}
				li_b={l.li_1b}
				li_c={l.li_1c}
				li_d={l.li_1d}
				li_e={l.li_1e}
				email={l.email}
				tel={l.tel}
				fbook={l.fbook}
				terms={l.terms}

			/>
		</div>
	{/if} -->

	<!-- {#if show_slide_2}
		<div
			class="transition"
			in:scale={{ duration: 500, delay: 100 }}
			out:fly={{ x: -200, duration: 400 }}
		>
			<InnerCard
				img={l.img_2a}
				tit={l.title_2a}
				para={l.para_2a}
				li_a={l.li_2a}
				li_b={l.li_2b}
				li_c={l.li_2c}
				li_d={l.li_2d}
				li_e={l.li_2e}
			/>
		</div>
	{/if}
	{#if show_slide_3}
		<Card
			img={l.img_3a}
			tit={l.title_3a}
			para={l.para_3a}
			li_a={l.li_3a}
			li_b={l.li_3b}
			li_c={l.li_3c}
			li_d={l.li_3d}
			li_e={l.li_3e}

		/>
	{/if}
	{#if show_slide_4}
		<Card
			img={l.img_4a}
			tit={l.title_4a}
			para={l.para_4a}
			li_a={l.li_4a}
			li_b={l.li_4b}
			li_c={l.li_4c}
			li_d={l.li_4d}
			li_e={l.li_4e}

		/>
	{/if} -->
</div>
<!-- <div class="paginator">
	{#if l.title_2a}
		<button
			class:showing-1={slide_1_isActive}
			on:click={() => {
				show_slide_1 = true;
				show_slide_2 = false;
				show_slide_3 = false;
				show_slide_4 = false;
				slide_1_isActive = true;
				slide_2_isActive = false;
				slide_3_isActive = false;
				slide_4_isActive = false;
			}}>1</button
		>
	{/if}
	{#if l.title_2a}
		<button
			class:showing-2={slide_2_isActive}
			on:click={() => {
				show_slide_1 = false;
				show_slide_2 = true;
				show_slide_3 = false;
				show_slide_4 = false;
				slide_1_isActive = false;
				slide_2_isActive = true;
				slide_3_isActive = false;
				slide_4_isActive = false;
			}}>2</button
		>
	{/if}
	{#if l.title_3a}
		<button
			class:showing-3={slide_3_isActive}
			on:click={() => {
				show_slide_1 = false;
				show_slide_2 = false;
				show_slide_3 = true;
				show_slide_4 = false;
				show_slide_4 = false;
				slide_1_isActive = false;
				slide_2_isActive = false;
				slide_3_isActive = true;
				slide_4_isActive = false;
			}}>3</button
		>
	{/if}
	{#if l.title_4a}
		<button
			class:showing-4={slide_4_isActive}
			on:click={() => {
				show_slide_1 = false;
				show_slide_2 = false;
				show_slide_3 = false;
				show_slide_4 = true;
				slide_1_isActive = false;
				slide_2_isActive = false;
				slide_3_isActive = false;
				slide_4_isActive = true;
			}}>4</button
		>
	{/if}
</div> -->

<!-- <a href={`/search`} data-sveltekit-reload>Back</a> -->

<svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head>

<style lang="stylus">


</style>
