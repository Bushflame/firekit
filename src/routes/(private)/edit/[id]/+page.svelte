<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import EditForm from '$comps/forms/EditForm.svelte';
	export let data;
	export let form;
	let li = data.listing;
	let pageNum = 1
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
<h3>Page {pageNum}</h3>
<form
	on:submit={submitForm}
	{submitting}
	use:enhance
	enctype="multipart/form-data"
	method="POST"
	form={{ ...data.listing, ...form }}
>
	<div class="slide-grid">
		<div class="slide" class:show-1={show_slide_1}>
			<EditForm
				imgErrMsg={li.error_img_1a}
				imgStr={'img_1a'}
				titleErrMsg={li.error_title}
				titleVal={li.title_1a || ''}
				titleStr={'title_1a'}
				paraErrMsg={li.error_para}
				paraVal={li.para_1a || ''}
				paraStr={'para_1a'}
				li_1Val={li.li_1a || ''}
				li_2Val={li.li_1b || ''}
				li_3Val={li.li_1c || ''}
				li_4Val={li.li_1d || ''}
				li_5Val={li.li_1e || ''}
				li_6Val={li.li_1f || ''}
				li_1Str={'li_1a'}
				li_2Str={'li_1b'}
				li_3Str={'li_1c'}
				li_4Str={'li_1d'}
				li_5Str={'li_1e'}
				li_6Str={'li_1f'}
			/>
		</div>

		<div class="slide" class:show-2={show_slide_2}>
			<EditForm
				imgErrMsg={li.error_img_2a}
				imgStr={'img_2a'}
				titleErrMsg={li.error_title}
				titleVal={li.title_2a || ''}
				titleStr={'title_2a'}
				paraErrMsg={li.error_para}
				paraVal={li.para_2a || ''}
				paraStr={'para_2a'}
				li_1Val={li.li_2a || ''}
				li_2Val={li.li_2b || ''}
				li_3Val={li.li_2c || ''}
				li_4Val={li.li_2d || ''}
				li_5Val={li.li_2e || ''}
				li_6Val={li.li_2f || ''}
				li_2Str={'li_2a'}
				li_1Str={'li_2b'}
				li_3Str={'li_2c'}
				li_4Str={'li_2d'}
				li_5Str={'li_2e'}
				li_6Str={'li_2f'}
			/>
		</div>

		<div class="slide" class:show-3={show_slide_3}>
			<EditForm
				imgErrMsg={li.error_img_3a}
				imgStr={'img_3a'}
				titleErrMsg={li.error_title}
				titleVal={li.title_3a || ''}
				titleStr={'title_3a'}
				paraErrMsg={li.error_para}
				paraVal={li.para_3a || ''}
				paraStr={'para_3a'}
				li_1Val={li.li_3a || ''}
				li_2Val={li.li_3b || ''}
				li_3Val={li.li_3c || ''}
				li_4Val={li.li_3d || ''}
				li_5Val={li.li_3e || ''}
				li_6Val={li.li_3f || ''}
				li_1Str={'li_3a'}
				li_2Str={'li_3b'}
				li_3Str={'li_3c'}
				li_4Str={'li_3d'}
				li_5Str={'li_3e'}
				li_6Str={'li_3f'}
			/>
		</div>

		<div class="slide" class:show-4={show_slide_4}>
			<EditForm
				imgErrMsg={li.error_img_4a}
				imgStr={'img_4a'}
				titleErrMsg={li.error_title}
				titleVal={li.title_4a || ''}
				titleStr={'title_4a'}
				paraErrMsg={li.error_para}
				paraVal={li.para_4a || ''}
				paraStr={'para_4a'}
				li_1Val={li.li_4a || ''}
				li_2Val={li.li_4b || ''}
				li_3Val={li.li_4c || ''}
				li_4Val={li.li_4d || ''}
				li_5Val={li.li_4e || ''}
				li_6Val={li.li_4f || ''}
				li_1Str={'li_4a'}
				li_2Str={'li_4b'}
				li_3Str={'li_4c'}
				li_4Str={'li_4d'}
				li_5Str={'li_4e'}
				li_6Str={'li_4f'}
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
			pageNum = 1
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
			pageNum = 2
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
			pageNum = 3
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
			pageNum = 4
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
@require '/src/lib/stylus/listingForm.styl'
h3 
	color var(--alpha)
	margin-top -2rem
	position relative
	text-align center
</style>
