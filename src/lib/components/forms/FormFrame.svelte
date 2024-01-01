<script>
	import { enhance } from '$app/forms';
import ListingForm_a from './ListingForm_a.svelte'
import ListingForm_b from './ListingForm_b.svelte'
import ListingForm_c from './ListingForm_c.svelte'
import ListingForm_d from './ListingForm_d.svelte'
export let form;
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
	/**
	 * @type {{ title: any; error_title: any; author: any; error_author: any; short_description: any; error_short_description: any; description: any; error_description: any; main_picture: any; error_main_picture: any; small_picture: any; error_small_picture: any; }}
	 */
export let img_1a, title_1a, intro_1a, li_1a,li_1b,li_1c,li_1d

export let img_2a,title_2a
export let intro_2a
export let li_2a,li_2b,li_2c, li_2d

export let img_3a,title_3a
export let intro_3a
export let li_3a,li_3b,li_3c, li_3d

export let img_4a,title_4a
export let intro_4a
export let li_4a,li_4b,li_4c, li_4d

	let show_slide_1 = true;
	let show_slide_2 = false;
	let show_slide_3 = false;
	let show_slide_4 = false;
	let slide_1_isActive = true
	let slide_2_isActive = false
	let slide_3_isActive = false
	let slide_4_isActive = false
	let showingSlide =1
	</script>
	
	<div class="authframe">
		<form on:submit={submitForm} {submitting} use:enhance enctype="multipart/form-data" method="POST">
			<div class="slide" class:show-1={show_slide_1} >
			<ListingForm_a {img_1a}  {title_1a} {intro_1a} {li_1a} {li_1b} {li_1c} {li_1d} {form}/>
		</div>
			<div class="slide" class:show-2={show_slide_2} >
			<ListingForm_b {img_2a}  {title_2a} {intro_2a} {li_2a} {li_2b} {li_2c} {li_2d} {form}/>
		</div>
		<div class="slide" class:show-3={show_slide_3} >
			<ListingForm_c {img_3a}  {title_3a} {intro_3a} {li_3a} {li_3b} {li_3c} {li_3d} {form}/>
		</div>
			<div class="slide" class:show-4={show_slide_4} >
			<ListingForm_d {img_4a}  {title_4a} {intro_4a} {li_4a} {li_4b} {li_4c} {li_4d} {form}/>
		</div>
			<!-- <button disabled={submitting} type="submit" class="btn btn-submit w-100">
				{#if submitting}
					Submitting...
				{:else}
					Submit
				{/if}
			</button>
		</form> -->
		<!-- paginator -->

	</div>
	<div class="paginator">
		<button
			class:showing-1={slide_1_isActive}
			on:click={() => {
				showingSlide = 1;
				show_slide_1 = true;
				show_slide_2 = false;
				show_slide_3 = false;
				show_slide_4 = false;
				slide_1_isActive =true
				slide_2_isActive =false
				slide_3_isActive =false
				slide_4_isActive =false
			}}>1</button
		>
		<button
		class:showing-2={slide_2_isActive}
			on:click={() => {
				showingSlide = 2;
				show_slide_1 = false;
				show_slide_2 = true;
				show_slide_3 = false;
				show_slide_4 = false;
				slide_1_isActive =false
				slide_2_isActive =true
				slide_3_isActive =false
				slide_4_isActive =false
			}}>2</button
		>
		<button
			class:showing-3={slide_3_isActive}
			on:click={() => {
				showingSlide = 3;
				show_slide_1 = false;
				show_slide_2 = false;
				show_slide_3 = true;
				show_slide_4 = false;
				slide_1_isActive =false
				slide_2_isActive =false
				slide_3_isActive =true
				slide_4_isActive =false
			}}>3</button
		>
		<button
			class:showing-4={slide_4_isActive}
			on:click={() => {
				showingSlide = 4
				show_slide_1 = false;
				show_slide_2 = false;
				show_slide_3 = false;
				show_slide_4 = true;
				slide_1_isActive =false
				slide_2_isActive =false
				slide_3_isActive =false
				slide_4_isActive =true
			}}>4</button
		>
	</div>
<style lang="stylus">
@require '../../stylus/listingForm.styl'  
.btn-submit
	position absolute
	bottom 4rem

</style>
