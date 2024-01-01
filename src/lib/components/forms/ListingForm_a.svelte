<script>
import {editing} from '$lib/stores/store.js'


import DropdownBtns from '$comps/edit-dropdown/DropdownBtns.svelte'
import Dropdown from '$comps/edit-dropdown/Dropdown.svelte'
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
	//$formNum = 'form-1'
	let show_slide_1 = true;

	export let img_1a,title_1a
	export let intro_1a
	export let li_1a,li_1b,li_1c, li_1d
</script>

<DropdownBtns/>
	<section class="slide-grid">
		<!-- SLIDE 	1----------------------------------------------------------------------- -->
		
		<div class="slide" class:show-1={show_slide_1}>
			
			<!-- -------------------------image----------------------------- -->
			{#if $editing ==='edit-img'}
			<div class="dropdown">
				<label for="img_1a" class="form-label"
					>
					<input
						class="form-control"
						id="img_1a"
						accept="image/*"
						name={img_1a}
						class:is-invalid={form?.error_img_1a}
						type="file"
					/>
					{#if form?.error_img_1a}
						<div class="invalid-feedback">{form?.img_1a}</div>
					{/if}
				</label>
			</div>
			{/if}
			<!-- -----------------------------title------------------------------- -->
			{#if $editing ==='edit-title'}
				<div class="dropdown">
					<label for="title_1a" class="form-label">Listing Title</label>
					<input
						type="text"
						name="title_1a"
						id='title_1a'
						class="form-control"
						value={form?.title_1a || ''}
						class:is-invalid={form?.error_title}
						placeholder="Title"
					/>
					
					{#if form?.error_title}
						<div class="invalid-feedback">{form?.error_title}</div>
					{/if}
				</div>
			{/if}
<!-- ----------------------intro------------------------------ -->
			{#if $editing ==='edit-para'}
			<div class="dropdown">
				<label class="form-label" for="intro_1a">Paragraph</label>
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
			{/if}

			<!-- ---------------------list items--------------------------- -->
			{#if $editing ==='edit-list'}
				<div class="dropdown">
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
		</div>
		{/if}
	</section>

<style lang="stylus">
@require '../../stylus/listingForm.styl'  
</style>
