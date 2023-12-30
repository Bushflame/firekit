<script>
	import { enhance } from '$app/forms';
	import { formNum, formsData } from '$lib/stores/store.js';
	import FormFrame from '$comps/forms/ListingFormFrame.svelte';
	/**
	 * @type {{ success: boolean; title: any; error_title: any; intro: any; error_intro: any; error_img_2a: any; img_2a: any; }}
	 */
	export let form;
	let submitting = false;

	$: if (form && form.success === false) {
		submitting = false;
	}
	/**
	 * @param {any}
	 */
	function submitForm() {
		submitting = true;
	}
	/**
	 * @type {{ title: any; error_title: any; author: any; error_author: any; short_intro: any; error_short_intro: any; intro: any; error_intro: any; main_picture: any; error_main_picture: any; small_picture: any; error_small_picture: any; }}
	 */
	//$formNum = 'form-1'
	let show_slide_2 = true;
	// let show_slide_2 = false;
	// let show_slide_3 = false;
	// let show_slide_4 = false;
	let slide_2_isActive = true
	// let slide_2_isActive = false
	// let slide_3_isActive = false
	// let slide_4_isActive = false
	
	export let img_2a,title_2a
	export let intro_2a
	export let li_2a,li_2b,li_2c, li_2d
</script>


	<section class="slide-grid">
		<!-- SLIDE 	1----------------------------------------------------------------------- -->
		<div class="slide" class:show-2={show_slide_2}>
			<h3>form b</h3>
			<!-- -------------------------image----------------------------- -->
			<div class="mb-3">
				<label for="img_2a" class="form-label"
					>
					<input
						class="form-control"
						id="img_2a"
						accept="image/*"
						name="img_2a"
						class:is-invalid={form?.error_img_2a}
						type="file"
					/>
					{#if form?.error_img_2a}
						<div class="invalid-feedback">{form?.img_2a}</div>
					{/if}
				</label>
			</div>
			<!-- -----------------------------title------------------------------- -->
			<div class="mb-3">
				<label for="title_2a" class="form-label">Listing Title</label>
				<input
					type="text"
					name="title_2a"
					id={title_2a}
					class="form-control"
					value={form?.title_2a || ''}
					class:is-invalid={form?.error_title}
					placeholder="Title"
				/>
				<!-- ----------------------intro------------------------------ -->
				{#if form?.error_title}
					<div class="invalid-feedback">{form?.error_title}</div>
				{/if}
			</div>

			<div class="mb-3">
				<label class="form-label" for="intro_2a">intro</label>
				<textarea
					class="form-control"
					placeholder="Listing intro here"
					id="intro_2a"
					name="intro_2a"
					value={form?.intro_2a || ''}
					class:is-invalid={form?.error_intro}
					style="height: 60px"
				/>
				{#if form?.error_intro}
					<div class="invalid-feedback">{form?.error_intro}</div>
				{/if}
			</div>

			<!-- ---------------------list items--------------------------- -->
			<ul>
				<p>List items</p>
				<li>
					<input
						type="text"
						name="li_2a"
						id="li_2a"
						class="form-control"
						value={form?.li_2a || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<!--  -->
					<input
						type="text"
						name="li_2b"
						id="li_2b"
						class="form-control"
						value={form?.li_2b || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<input
						type="text"
						name="li_2c"
						id="li_2c"
						class="form-control"
						value={form?.li_2c || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<input
						type="text"
						name="li_2d"
						id="li_2d"
						class="form-control"
						value={form?.li_2d || ''}
						placeholder="List item"
					/>
				</li>
			</ul>
		</div>
	
			
	</section>

<style lang="stylus">
@require '../../stylus/listingForm.styl'  
</style>
