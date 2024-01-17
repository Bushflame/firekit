<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import Corners from '$comps/Corners.svelte';
	import Dropdown from '$blocks/Dropdown.svelte'
	import Img from '$blocks/ImgInput.svelte'
	import Input from '$blocks/Input.svelte'
	import Textarea from '$blocks/Textarea.svelte'
	import UlDropdown from '$blocks/UlDropdown.svelte'

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
let page_1 = true
let page_2 = false
let page_3 = false
let page_4 = false
</script>

<h3>Page {pageNum}</h3>

<div class="main-wrap">
	<Corners>
		<form
			on:submit={submitForm}
			{submitting}
			use:enhance
			enctype="multipart/form-data"
			method="POST"
			form={{ ...data.listing, ...form }}
		>
			<div class="page-grid">
				<div class="page" class:page_1>
					<Dropdown txt_1={'Image'} txt_2={'Title'} txt_3={'Text'} txt_4={'List'} txt_5={'Contact'}>
						<span slot='slot-1'>
							<Img nam={li.img_1a} lab={'Image'} />
						</span>
						<span slot='slot-2'>
							<Input  nam={li.title_1a} lab={'Title'}/>
						</span>
						<span slot='slot-3'>
							<Textarea lab={'Text'} nam={li.para_1a} rows={10}/>
						</span>
						<span slot='slot-4'>
							<UlDropdown txt_1={1}  txt_2={2}  txt_3={3}  txt_4={4}  txt_5={5}>
								<li slot='slot-1'>
									<Textarea lab={'List item 1'} nam={li.li_1a}/>
								</li>
								<li slot='slot-2'>
									<Textarea lab={'List item 2'} nam={li.li_1b}/>
								</li>
								<li slot='slot-3'>
									<Textarea lab={'List item 3'} nam={li.li_1c}/>
								</li>
								<li slot='slot-4'>
									<Textarea lab={'List item 4'} nam={li.li_1d}/>
								</li>
								<li slot='slot-5'>
									<Textarea lab={'List item 5'} nam={li.li_1e}/>
								</li>
							
							</UlDropdown>
						</span>
						<span slot='slot-5'>
							<Input  nam={li.name} lab={'Name'}/>
							<Input  nam={li.email} lab={'Email'}/>
							<Input  nam={li.tel} lab={'Telephone'}/>
							<Input  nam={li.fbook} lab={'FaceBook'}/>
						</span>
						
					</Dropdown>
				</div>
				<div class="page" class:page_2>
					<Dropdown txt_1={'Image'} txt_2={'Title'} txt_3={'Text'} txt_4={'List'} txt_5={'Contact'}>
						<span slot='slot-1'>
							<Img nam={li.img_2a} lab={'Image'} />
						</span>
						<span slot='slot-2'>
							<Input  nam={li.title_2a} lab={'Title'}/>
						</span>
						<span slot='slot-3'>
							<Textarea lab={'Text'} nam={li.para_2a} rows={10}/>
						</span>
						<span slot='slot-4'>
							<UlDropdown txt_1={1}  txt_2={2}  txt_3={3}  txt_4={4}  txt_5={5}>
								<li slot='slot-1'>
									<Textarea lab={'List item 1'} nam={li.li_2a}/>
								</li>
								<li slot='slot-2'>
									<Textarea lab={'List item 2'} nam={li.li_2b}/>
								</li>
								<li slot='slot-3'>
									<Textarea lab={'List item 3'} nam={li.li_2c}/>
								</li>
								<li slot='slot-4'>
									<Textarea lab={'List item 4'} nam={li.li_2d}/>
								</li>
								<li slot='slot-5'>
									<Textarea lab={'List item 5'} nam={li.li_2e}/>
								</li>
							
							</UlDropdown>
						</span>
						<span slot='slot-5'>
							<Input  nam={li.name} lab={'Name'}/>
							<Input  nam={li.email} lab={'Email'}/>
							<Input  nam={li.tel} lab={'Telephone'}/>
							<Input  nam={li.fbook} lab={'FaceBook'}/>
						</span>
						
					</Dropdown>
				</div>
				<div class="page" class:page_3>
					<Dropdown txt_1={'Image'} txt_2={'Title'} txt_3={'Text'} txt_4={'List'} txt_5={'Contact'}>
						<span slot='slot-1'>
							<Img nam={li.img_3a} lab={'Image'} />
						</span>
						<span slot='slot-2'>
							<Input  nam={li.title_3a} lab={'Title'}/>
						</span>
						<span slot='slot-3'>
							<Textarea lab={'Text'} nam={li.para_3a} rows={10}/>
						</span>
						<span slot='slot-4'>
							<UlDropdown txt_1={1}  txt_2={2}  txt_3={3}  txt_4={4}  txt_5={5}>
								<li slot='slot-1'>
									<Textarea lab={'List item 1'} nam={li.li_3a}/>
								</li>
								<li slot='slot-2'>
									<Textarea lab={'List item 2'} nam={li.li_3b}/>
								</li>
								<li slot='slot-3'>
									<Textarea lab={'List item 3'} nam={li.li_3c}/>
								</li>
								<li slot='slot-4'>
									<Textarea lab={'List item 4'} nam={li.li_3d}/>
								</li>
								<li slot='slot-5'>
									<Textarea lab={'List item 5'} nam={li.li_3e}/>
								</li>
							
							</UlDropdown>
						</span>
						<span slot='slot-5'>
							<Input  nam={li.name} lab={'Name'}/>
							<Input  nam={li.email} lab={'Email'}/>
							<Input  nam={li.tel} lab={'Telephone'}/>
							<Input  nam={li.fbook} lab={'FaceBook'}/>
						</span>
						
					</Dropdown>
				</div>
				<div class="page" class:page_4>
					<Dropdown txt_1={'Image'} txt_2={'Title'} txt_3={'Text'} txt_4={'List'} txt_5={'Contact'}>
						<span slot='slot-1'>
							<Img nam={li.img_4txt_4a} lab={'Image'} />
						</span>
						<span slot='slot-2'>
							<Input  nam={li.title_4txt_4a} lab={'Title'}/>
						</span>
						<span slot='slot-3'>
							<Textarea lab={'Text'} nam={li.para_4txt_4a} rows={10}/>
						</span>
						<span slot='slot-4'>
							<UlDropdown txt_1={1}  txt_2={2}  txt_3={3}  txt_4={4}  txt_5={5}>
								<li slot='slot-1'>
									<Textarea lab={'List item 1'} nam={li.li_4txt_4a}/>
								</li>
								<li slot='slot-2'>
									<Textarea lab={'List item 2'} nam={li.li_4txt_4b}/>
								</li>
								<li slot='slot-3'>
									<Textarea lab={'List item 3'} nam={li.li_4txt_4c}/>
								</li>
								<li slot='slot-4'>
									<Textarea lab={'List item 4'} nam={li.li_4txt_4d}/>
								</li>
								<li slot='slot-5'>
									<Textarea lab={'List item 5'} nam={li.li_4txt_4e}/>
								</li>
							
							</UlDropdown>
						</span>
						<span slot='slot-5'>
							<Input  nam={li.name} lab={'Name'}/>
							<Input  nam={li.email} lab={'Email'}/>
							<Input  nam={li.tel} lab={'Telephone'}/>
							<Input  nam={li.fbook} lab={'FaceBook'}/>
						</span>
						
					</Dropdown>
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
	</Corners>
</div>
<div class="paginator">
	<button
		class:page_1
		on:click|preventDefault={() => {
			pageNum = 1;
			//showingSlide = 1;
			page_1 = true
			page_2 = false
			page_3 = false
			page_4 = false
		}}>1</button
	>
	<button
		class:page_2
		on:click|preventDefault={() => {
			pageNum = 2;
			page_1 = false
			page_2 = true
			page_3 = false
			page_4 = false
		}}>2</button
	>
	<button
		class:page_3
		on:click|preventDefault={() => {
			pageNum = 3;
			page_1 = false
			page_2 = false
			page_3 = true
			page_4 = false
		}}>3</button
	>
	<button
		class:page_4
		on:click|preventDefault={() => {
			pageNum = 4;
			page_1 = false
			page_2 = false
			page_3 = false
			page_4 = true
		}}>4</button
	>
</div>

<style lang="stylus">
//@require '/src/lib/stylus/listingForm.styl'
.main-wrap
	padding 1rem
	position relative
.page-grid 
	display grid
	justify-content center
	grid-template-columns 1fr
	grid-template-rows 1
	position relative
form 
	height 26rem //calc(var(--globalHeight) -6rem)
	margin auto
	padding 1rem 1rem 0
	position relative
	width 22rem //calc(var(--globalWidth) - 4rem)
h3 
	color var(--theta)
	position absolute //relative
	left 50%  
	top 1rem
	transform translate(-50%)
	text-align center
	z-index 200
.page 
	margin-left -40rem
	opacity 0
	position absolute
	transition all .5s
	width 0 //100%
	z-index -1
.page.page_1, .page.page_2, .page.page_3, .page.page_4
	margin-left 0
	opacity 1
	width 100%
	z-index 1	
.paginator 
	display flex 
	align-items center 
	justify-content space-between
	gap 1rem
	padding .6rem
	position absolute 
	bottom 0
	left 50%
	transform translate(-50%)
	width fit-content
	z-index 4
	button 
		background transparent
		border 1px solid var(--gamma) 
		border-radius 50%
		color var(--theta)
		height 2rem 
		outline none
		transition all .5s
		width 2rem
button.page_1, button.page_2, button.page_3, button.page_4
	background var(--gamma)
	color var(--iota)
.btn-submit 
	background transparent //var(--delta)
	border 1px solid
	border-radius 1.5rem
	color var(--theta)
	font-size 1.2rem
	margin 0 auto
	outline none
	padding .5rem 0
	position absolute
	left 50%
	bottom 1rem 
	transform translate(-50%)
	width 12rem
</style>
