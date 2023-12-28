<script>
	import { enhance } from '$app/forms';
	import { formNum } from '$lib/stores/store.js';
	import FormFrame from '$comps/forms/ListingFormFrame.svelte';
	/**
	 * @type {{ success: boolean; title: any; error_title: any; intro: any; error_intro: any; error_img_4a: any; img_4a: any; }}
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
		<label for="img_4a" class="form-label"
			>Image 3
			<input
				class="form-control"
				id="img_4a"
				accept="image/*"
				name="img_4a"
				class:is-invalid={form?.error_img_4a}
				type="file"
			/>
			{#if form?.error_img_4a}
				<div class="invalid-feedback">{form?.img_4a}</div>
			{/if}
		</label>
	</div>
	<!-- -----------------------------title------------------------------- -->
	<div class="mb-3">
		<label for="title_4a" class="form-label">Listing Title</label>
		<input
			type="text"
			name="title_4a"
			id="title_4a"
			class="form-control"
			value={form?.title_4a || ''}
			class:is-invalid={form?.error_title}
			placeholder="Title"
		/>
		<!-- ----------------------intro------------------------------ -->
		{#if form?.error_title}
			<div class="invalid-feedback">{form?.error_title}</div>
		{/if}
	</div>

	<div class="mb-3">
		<label class="form-label" for="intro_4a">intro</label>
		<textarea
			class="form-control"
			placeholder="Listing intro here"
			id="intro_4a"
			name="intro_4a"
			value={form?.intro_4a || ''}
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
				name="li_4a"
				id="li_4a"
				class="form-control"
				value={form?.li_4a || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<!--  -->
			<input
				type="text"
				name="li_4b"
				id="li_4b"
				class="form-control"
				value={form?.li_4b || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<input
				type="text"
				name="li_4c"
				id="li_4c"
				class="form-control"
				value={form?.li_4c || ''}
				placeholder="List item"
			/>
		</li>
		<li>
			<input
				type="text"
				name="li_4d"
				id="li_4d"
				class="form-control"
				value={form?.li_4d || ''}
				placeholder="List item"
			/>
		</li>
	</ul>

	<!-- </form> -->
</FormFrame>

<style lang="stylus">
@require '../../stylus/listingForm.styl'  

</style>
