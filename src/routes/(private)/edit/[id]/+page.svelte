<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import FrameWrap from '$frames/FrameWrap.svelte';
	import Frame from '$frames/Single.svelte';
	import Header from '$lib/building-views/Header.svelte';
	import Footer from '$lib/building-views/Footer.svelte';
	import Pages from '$blocks/Pages.svelte';
	import Corners from '$lib/grids/FullWidth.svelte';
	import Dropdown from '$blocks/Dropdown.svelte';
	import Img from '$blocks/ImgInput.svelte';
	import Input from '$blocks/Input.svelte';
	import Textarea from '$blocks/Textarea.svelte';
	import UlDropdown from '$blocks/UlDropdown.svelte';

	export let data;
	export let form;
	let li = data.listing;
	let pageNum = 1;
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
	// let page_1 = true
	// let page_2 = false
	// let page_3 = false
	// let page_4 = false
</script>

<Frame>
	<div class="main-wrap">
		<form
			on:submit={submitForm}
			{submitting}
			use:enhance
			enctype="multipart/form-data"
			method="POST"
			form={{ ...data.listing, ...form }}
		>
			<Pages {pageNum}>
				<span slot="page-1">
					<Dropdown
						txt_1={'Image'}
						txt_2={'Title'}
						txt_3={'Text'}
						txt_4={'List'}
						txt_5={'Contact'}
						txt_6={'Terms'}
					>
						<span slot="slot-1">
							<Img nam={li.img_1a} lab={'Image'} name={'img_1a'} />
						</span>
						<span slot="slot-2">
							<Input nam={li.title_1a} name={'title_1a'} lab={'Title'} />
						</span>
						<span slot="slot-3">
							<Textarea lab={'Text'} nam={li.para_1a} rows={10} name={'para_1a'} />
						</span>
						<span slot="slot-4">
							<UlDropdown txt_1={1} txt_2={2} txt_3={3} txt_4={4} txt_5={5}>
								<li slot="slot-1">
									<Textarea lab={'List item 1'} nam={li.li_1a} name={'li_1a'} />
								</li>
								<li slot="slot-2">
									<Textarea lab={'List item 2'} nam={li.li_1b} name={'li_1b'} />
								</li>
								<li slot="slot-3">
									<Textarea lab={'List item 3'} nam={li.li_1c} name={'li_1c'} />
								</li>
								<li slot="slot-4">
									<Textarea lab={'List item 4'} nam={li.li_1d} name={'li_1d'} />
								</li>
								<li slot="slot-5">
									<Textarea lab={'List item 5'} nam={li.li_1e} name={'li_1e'} />
								</li>
							</UlDropdown>
						</span>
						<span slot="slot-5">
							<Input nam={li.name} lab={'Name'} name={'name'} />
							<Input nam={li.email} lab={'Email'} name={'email'} />
							<Input nam={li.tel} lab={'Telephone'} name={'tel'} />
							<Input nam={li.fbook} lab={'FaceBook'} name={'fbook'} />
						</span>
						<span slot="slot-6">
							<Textarea lab={'Terms'} nam={'Terms'} name={'terms'} rows={10} />
						</span>
					</Dropdown>
				</span>
				<span slot="page-2">
					<Dropdown
						txt_1={'Image'}
						txt_2={'Title'}
						txt_3={'Text'}
						txt_4={'List'}
						txt_5={'Contact'}
						txt_6={'Terms'}
					>
						<span slot="slot-1">
							<Img nam={li.img_2a} lab={'Image'} name={'img_2a'} />
						</span>
						<span slot="slot-2">
							<Input nam={li.title_2a} name={'title_2a'} lab={'Title'} />
						</span>
						<span slot="slot-3">
							<Textarea lab={'Text'} nam={li.para_2a} rows={10} name={'para_2a'} />
						</span>
						<span slot="slot-4">
							<UlDropdown txt_1={1} txt_2={2} txt_3={3} txt_4={4} txt_5={5}>
								<li slot="slot-1">
									<Textarea lab={'List item 1'} nam={li.li_2a} name={'li_2a'} />
								</li>
								<li slot="slot-2">
									<Textarea lab={'List item 2'} nam={li.li_2b} name={'li_2b'} />3
								</li>
								<li slot="slot-3">
									<Textarea lab={'List item 3'} nam={li.li_2cb} name={'li_2c'} />
								</li>
								<li slot="slot-4">
									<Textarea lab={'List item 4'} nam={li.li_2d} name={'li_2d'} />
								</li>
								<li slot="slot-5">
									<Textarea lab={'List item 5'} nam={li.li_2e} name={'li_2e'} />
								</li>
							</UlDropdown>
						</span>
						<span slot="slot-5">
							<Input nam={li.name} lab={'Name'} name={'name'} />
							<Input nam={li.email} lab={'Email'} name={'email'} />
							<Input nam={li.tel} lab={'Telephone'} name={'tel'} />
							<Input nam={li.fbook} lab={'FaceBook'} name={'fbook'} />
						</span>
						<span slot="slot-6">
							<Textarea lab={'Terms'} nam={'Terms'} name={'terms'} rows={10} />
						</span>
					</Dropdown>
				</span>
				<span slot="page-3">
					<Dropdown
						txt_1={'Image'}
						txt_2={'Title'}
						txt_3={'Text'}
						txt_4={'List'}
						txt_5={'Contact'}
						txt_6={'Terms'}
					>
						<span slot="slot-1">
							<Img nam={li.img_3a} lab={'Image'} name={'img_3a'} />
						</span>
						<span slot="slot-2">
							<Input nam={li.title_3a} name={'title_3a'} lab={'Title'} />
						</span>
						<span slot="slot-3">
							<Textarea lab={'Text'} nam={li.para_3a} rows={10} name={'para_3a'} />
						</span>
						<span slot="slot-4">
							<UlDropdown txt_1={1} txt_2={2} txt_3={3} txt_4={4} txt_5={5}>
								<li slot="slot-1">
									<Textarea lab={'List item 1'} nam={li.li_3a} name={'li_3a'} />
								</li>
								<li slot="slot-2">
									<Textarea lab={'List item 2'} nam={li.li_3b} name={'li_3b'} />
								</li>
								<li slot="slot-3">
									<Textarea lab={'List item 3'} nam={li.li_3c} name={'li_3c'} />
								</li>
								<li slot="slot-4">
									<Textarea lab={'List item 4'} nam={li.li_3d} name={'li_3d'} />
								</li>
								<li slot="slot-5">
									<Textarea lab={'List item 5'} nam={li.li_3e} name={'li_3e'} />
								</li>
							</UlDropdown>
						</span>
						<span slot="slot-5">
							<Input nam={li.name} lab={'Name'} name={'name'} />
							<Input nam={li.email} lab={'Email'} name={'email'} />
							<Input nam={li.tel} lab={'Telephone'} name={'tel'} />
							<Input nam={li.fbook} lab={'FaceBook'} name={'fbook'} />
						</span>
						<span slot="slot-6">
							<Textarea lab={'Terms'} nam={'Terms'} name={'terms'} rows={10} />
						</span>
					</Dropdown>
				</span>
				<span slot="page-4">
					<Dropdown
						txt_1={'Image'}
						txt_2={'Title'}
						txt_3={'Text'}
						txt_4={'List'}
						txt_5={'Contact'}
						txt_6={'Terms'}
					>
						<span slot="slot-1">
							<Img nam={li.img_4a} lab={'Image'} name={'img_4a'} />
						</span>
						<span slot="slot-2">
							<Input nam={li.title_4a} name={'title_4a'} lab={'Title'} />
						</span>
						<span slot="slot-3">
							<Textarea lab={'Text'} nam={li.para_4a} rows={10} name={'para_4a'} />
						</span>
						<span slot="slot-4">
							<UlDropdown txt_1={1} txt_2={2} txt_3={3} txt_4={4} txt_5={5}>
								<li slot="slot-1">
									<Textarea lab={'List item 1'} nam={li.li_4a} name={'li_4a'} />
								</li>
								<li slot="slot-2">
									<Textarea lab={'List item 2'} nam={li.li_4b} name={'li_4b'} />
								</li>
								<li slot="slot-3">
									<Textarea lab={'List item 3'} nam={li.li_4c} name={'li_4c'} />
								</li>
								<li slot="slot-4">
									<Textarea lab={'List item 4'} nam={li.li_4d} name={'li_4d'} />
								</li>
								<li slot="slot-5">
									<Textarea lab={'List item 5'} nam={li.li_4e} name={'li_4e'} />
								</li>
							</UlDropdown>
						</span>
					</Dropdown>
				</span>
				<span slot="submit">
					<button disabled={submitting} type="submit" class="btn btn-submit">
						{#if submitting}
							Submitting...
						{:else}
							Submit
						{/if}
					</button>
				</span>
			</Pages>
		</form>
	</div>
</Frame>

<style lang="stylus">
//@require '/src/lib/stylus/listingForm.styl'
form 
	margin auto
	position relative

.btn-submit 
	background var(--delta)
	border-radius 1.5rem
	color var(--theta)
	font-size 1.2rem
	margin 0 auto
	outline none
	padding .5rem 0
	position absolute
	left 50%
	bottom -2rem 
	transform translate(-50%)
	width 12rem
	z-index 20
</style>
