<script>
	import { enhance } from '$app/forms';
	import { formNum, formsData } from '$lib/stores/store.js';
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
	//$formNum = 'form-1'
	let show_slide_1 = true;
	let show_slide_2 = false;
	let show_slide_3 = false;
	let show_slide_4 = false;
	let slide_1_isActive = true
	let slide_2_isActive = false
	let slide_3_isActive = false
	let slide_4_isActive = false
	console.log('showing slide 1',slide_1_isActive)
</script>

<FormFrame {submitForm} {submitting}>
	<section class="slide-grid">
		<!-- SLIDE 	1----------------------------------------------------------------------- -->
		<div class="slide" class:show-1={show_slide_1}>
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
		</div>
		<!-- SLIDE 2------------------------------------------------------------------------------------ -->
		<div class="slide" class:show-2={show_slide_2}>
			<!-- -------------------------image----------------------------- -->

			<div class="mb-3">
				<label for="img_2a" class="form-label"
					>Image 2
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
					id="title_2a"
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
		<!-- SLIDE 3------------------------------------------------------------------------------------- -->
		<div class="slide" class:show-3={show_slide_3}>
			<!-- -------------------------image----------------------------- -->
			<div class="mb-3">
				<label for="img_3a" class="form-label"
					>Image 3
					<input
						class="form-control"
						id="img_3a"
						accept="image/*"
						name="img_3a"
						class:is-invalid={form?.error_img_3a}
						type="file"
					/>
					{#if form?.error_img_3a}
						<div class="invalid-feedback">{form?.img_3a}</div>
					{/if}
				</label>
			</div>
			<!-- -----------------------------title------------------------------- -->
			<div class="mb-3">
				<label for="title_3a" class="form-label">Listing Title</label>
				<input
					type="text"
					name="title_3a"
					id="title_3a"
					class="form-control"
					value={form?.title_3a || ''}
					class:is-invalid={form?.error_title}
					placeholder="Title"
				/>
				<!-- ----------------------intro------------------------------ -->
				{#if form?.error_title}
					<div class="invalid-feedback">{form?.error_title}</div>
				{/if}
			</div>

			<div class="mb-3">
				<label class="form-label" for="intro_3a">intro</label>
				<textarea
					class="form-control"
					placeholder="Listing intro here"
					id="intro_3a"
					name="intro_3a"
					value={form?.intro_3a || ''}
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
						name="li_3a"
						id="li_3a"
						class="form-control"
						value={form?.li_3a || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<!--  -->
					<input
						type="text"
						name="li_3b"
						id="li_3b"
						class="form-control"
						value={form?.li_3b || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<input
						type="text"
						name="li_3c"
						id="li_3c"
						class="form-control"
						value={form?.li_3c || ''}
						placeholder="List item"
					/>
				</li>
				<li>
					<input
						type="text"
						name="li_3d"
						id="li_3d"
						class="form-control"
						value={form?.li_3d || ''}
						placeholder="List item"
					/>
				</li>
			</ul>
		</div>
		<!-- slide 4 -->
		<div class="slide" class:show-4={show_slide_4}>
			<!-- -------------------------image----------------------------- -->
			<div class="mb-3">
				<label for="img_4a" class="form-label"
					>Image 4
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
		</div>
	</section>
</FormFrame>
<!-- paginator -->
<div class="paginator">
	<button
		class:showing-1={slide_1_isActive}
		on:click={() => {
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
			show_slide_1 = false;
			show_slide_2 = false;
			show_slide_3 = true;
			show_slide_4 = false;
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
.paginator 
	background rgba(255,255,255,.1)
	//border 1px solid #fff
	display flex 
	align-items center 
	justify-content center
	gap 1rem
	padding .6rem
	position absolute 
	bottom 0
	left 0
	width 100%
	z-index 4
	button 
		background transparent
		border 1px solid rgba(255,255,255,.4)
		color #fff
		height 2rem 
		width 2rem
.slide-grid 
	//border 1px solid #000
	display grid
	justify-content center
	grid-template-columns 1fr
	grid-template-rows 1
	//margin auto
	position relative
.slide 
	//border 1px solid green
	position absolute
	top 0
	opacity 0
	transition all .5s
	width 100%
	z-index - 1

.show-1 
	z-index 1
	opacity 1
	transition all .5s
.show-2 
	opacity 1
	z-index 1
.show-3 
	opacity 1	
	z-index 1
.show-4 
	opacity 1
	z-index 1
.paginator
	.showing-1
		background var(--delta)
	.showing-2
		background var(--delta)	
	.showing-3
		background var(--delta)
	.showing-4
		background var(--delta)	
</style>
