<script>
	//import { enhance } from '$app/forms';
	import MainFrame from '$comps/forms/EditForm.svelte';
	export let data;
	export let form;
	let li = data.listing;

	//===================================================================

	let submitting = false;

	$: if (form && form.success === false) {
		submitting = false;
	}
	/**
	 * @param {any} e
	 */
	function submitForm(e) {
		submitting = true;
	}
	let show_slide_1 = true;
	let show_slide_2 = false;
	let show_slide_3 = false;
	let show_slide_4 = false;
	let slide_1_isActive = true;
	let slide_2_isActive = false;
	let slide_3_isActive = false;
	let slide_4_isActive = false;
	let showingSlide = 1;
</script>

<form
	on:submit={submitForm}
	{submitting}
	enctype="multipart/form-data"
	method="POST"
	form={{ ...data.listing, ...form }}
>
	<div class="slide-grid">
		<div class="slide" class:show-1={show_slide_1}>
			<MainFrame
				imgStr={'img_1a'}
				titleStr={'title_1a'}
				introStr={'intro_1a'}
				li_1Str={'li_1a'}
				li_2Str={'li_1b'}
				li_3Str={'li_1c'}
				li_4Str={'li_1d'}
			/>
		</div>

		<div class="slide" class:show-2={show_slide_2}>
			<MainFrame
				imgStr={'img_2a'}
				titleStr={'title_2a'}
				introStr={'intro_2a'}
				li_2Str={'li_2a'}
				li_1Str={'li_2b'}
				li_3Str={'li_2c'}
				li_4Str={'li_2d'}
			/>
		</div>

		<div class="slide" class:show-3={show_slide_3}>
			<MainFrame
				imgStr={'img_3a'}
				titleStr={'title_3a'}
				introStr={'intro_3a'}
				li_1Str={'li_3a'}
				li_2Str={'li_3b'}
				li_3Str={'li_3c'}
				li_4Str={'li_3d'}
			/>
		</div>

		<div class="slide" class:show-4={show_slide_4}>
			<MainFrame
				imgStr={'img_4a'}
				titleStr={'title_4a'}
				introStr={'intro_4a'}
				li_1Str={'li_4a'}
				li_2Str={'li_4b'}
				li_3Str={'li_4c'}
				li_4Str={'li_4d'}
			/>
		</div>
	</div>

	<button disabled={submitting} type="submit" class="btn btn-submit">
		{#if submitting}
			Submitting...
		{:else}
			Submit
		{/if}
	</button>
</form>

<div class="paginator">
	<button
		class:showing-1={slide_1_isActive}
		on:click|preventDefault={() => {
			showingSlide = 1;
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
	<button
		class:showing-2={slide_2_isActive}
		on:click|preventDefault={() => {
			showingSlide = 2;
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
	<button
		class:showing-3={slide_3_isActive}
		on:click|preventDefault={() => {
			showingSlide = 3;
			show_slide_1 = false;
			show_slide_2 = false;
			show_slide_3 = true;
			show_slide_4 = false;
			slide_1_isActive = false;
			slide_2_isActive = false;
			slide_3_isActive = true;
			slide_4_isActive = false;
		}}>3</button
	>
	<button
		class:showing-4={slide_4_isActive}
		on:click|preventDefault={() => {
			showingSlide = 4;
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
</div>

<style lang="stylus">
	//@require '/src/lib/stylus/listingForm.styl'
</style>
