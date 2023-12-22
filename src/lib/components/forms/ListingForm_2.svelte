<script>
	import { enhance } from '$app/forms';
	
	import FormFrame from '$comps/forms/ListingFormFrame.svelte'
	/**
	 * @type {{ success: boolean; title: any; error_title: any; description: any; error_description: any; error_img_1a: any; img_1a: any; }}
	 */
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

</script>

<FormFrame {submitForm} {submitting}>
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
			<!-- ----------------------Description------------------------------ -->
			{#if form?.error_title}
				<div class="invalid-feedback">{form?.error_title}</div>
			{/if}
		</div>

		<div class="mb-3">
			<label class="form-label" for="description_1a">Description</label>
			<textarea
				class="form-control"
				placeholder="Listing Description here"
				id="description_1a"
				name="description_1a"
				value={form?.description_1a || ''}
				class:is-invalid={form?.error_description}
				style="height: 60px"
			/>
			{#if form?.error_description}
				<div class="invalid-feedback">{form?.error_description}</div>
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
		<!-- ------------------------------------------------------------ -->
		<!-- <button disabled={submitting} type="submit" class="btn btn-submit w-100">
			{#if submitting}
				Submitting...
			{:else}
				Submit
			{/if}
		</button>
	</form>
</div> -->
</FormFrame>

<style lang="stylus">
@require '../../stylus/listingForm.styl'  

</style>
