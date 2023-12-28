<script>
	import { enhance } from '$app/forms';
	import { formNum } from '$lib/stores/store.js';
	import FormFrame from '$comps/forms/ListingFormFrame.svelte';
	/**
	 * @type {{ success: boolean; title: any; error_title: any; intro: any; error_intro: any; error_img_1a: any; img_1a: any; }}
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
</script>

<FormFrame {submitForm} {submitting}>
	<!-- <form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST"> -->
	<!-- <div class="authframe">

	<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST"> -->

	<!-- -------------------------image----------------------------- -->
	<div class="mb-3">
		<label for="img_1a" class="form-label"
			>Image 1
			<input
				class="form-control"
				id="img_1a"
				accept="image/*"
				name="img_1a"
				class:is-invalid={form?.error_img_1a}
				type="file"
			/>
			{#if form?.error_img_1a}
				<div class="invalid-feedback">{form?.img_1a}</div>
			{/if}
		</label>
	</div>
	<!-- -----------------------------title------------------------------- -->
	<div class="mb-3">
		<label for="title_1a" class="form-label">Listing Title</label>
		<input
			type="text"
			name="title_1a"
			id="title_1a"
			class="form-control"
			value={form?.title_1a || ''}
			class:is-invalid={form?.error_title}
			placeholder="Title"
		/>
		<!-- ----------------------intro------------------------------ -->
		{#if form?.error_title}
			<div class="invalid-feedback">{form?.error_title}</div>
		{/if}
	</div>

	<div class="mb-3">
		<label class="form-label" for="intro_1a">intro</label>
		<textarea
			class="form-control"
			placeholder="Listing intro here"
			id="intro_1a"
			name="intro_1a"
			value={form?.intro_1a || ''}
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
				name="li_1a"
				id="li_1a"
				class="form-control"
				value={form?.li_1a || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<!--  -->
			<input
				type="text"
				name="li_1b"
				id="li_1b"
				class="form-control"
				value={form?.li_1b || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<input
				type="text"
				name="li_1c"
				id="li_1c"
				class="form-control"
				value={form?.li_1c || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<input
				type="text"
				name="li_1d"
				id="li_1d"
				class="form-control"
				value={form?.li_1d || ''}
				placeholder="List item"
			/>
		</li>
	</ul>

	<!-- </form> -->
</FormFrame>

<style lang="stylus">
@require '../../stylus/listingForm.styl'  

</style>
