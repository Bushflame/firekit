<script>
	import ListDropdown from '$comps/edit-dropdown/ListDropdown.svelte';

	// @ts-ignore
	//export let imgErrMsg, imgInval;
	// @ts-ignore
	export let titleErrMsg, titleVal;
	// @ts-ignore
	export let paraErrMsg, paraVal;
	// @ts-ignore
	export let li_1Val = '',
		li_2Val = '',
		li_3Val = '',
		li_4Val = '',
		li_5Val = '';
	export let nameVal = '',
		emailVal = '',
		telVal = '',
		fbookVal = '';
	export let imgStr = '';
	export let titleStr = '';
	export let paraStr = '';
	export let li_1Str = '';
	export let li_2Str = '';
	export let li_3Str = '';
	export let li_4Str = '';
	export let li_5Str = '';
	export let nameStr = '',
		emailStr = '',
		telStr = '',
		fbookStr = '';

	//export let li_6Str = '';
	// dropdown & dropdown-btns classes
	let img = false;
	let title = false;
	let para = false;
	let list = false;
	let contact = false;
</script>

<div class="btn-wrap dropdown-btns">
	<button
		class:img
		on:click|preventDefault={() => {
			img = !img;
			title = false;
			para = false;
			list = false;
			contact = false;
		}}>Image</button
	>

	<button
		class:title
		on:click|preventDefault={() => {
			title = !title;
			img = false;
			para = false;
			list = false;
			contact = false;
		}}>Title</button
	>
	<button
		class:para
		on:click|preventDefault={() => {
			para = !para;
			img = false;
			title = false;
			list = false;
			contact = false;
		}}>Text</button
	>

	<button
		class:list
		on:click|preventDefault={() => {
			list = !list;
			img = false;
			title = false;
			para = false;
			contact = false;
		}}>List</button
	>
	<button
		class:contact
		on:click|preventDefault={() => {
			contact = !contact;
			list = false;
			img = false;
			title = false;
			para = false;
		}}>Contact</button
	>
</div>
<!-- -------------------------image---------------------------------- -->
<div class="dropdown img-dropdown" class:img>
	<div class="form-group">
		<label for={imgStr}>Image</label>
		<input class="img-input" accept="image/*" name={imgStr || ''} type="file" />
	</div>
</div>
<!-- -----------------------------title------------------------------- -->
<div class="dropdown title-dropdown" class:title>
	<div class="form-group">
		<label for={titleStr}>Title</label>
		<input
			type="text"
			name={titleStr || ''}
			id={titleStr}
			class="form-control"
			value={titleVal || ''}
			class:is-invalid={titleErrMsg}
		/>
		{#if titleErrMsg}
			<div class="invalid-feedback">{titleErrMsg}</div>
		{/if}
	</div>
</div>
<!-- ----------------------para------------------------------ -->
<div class="dropdown para-dropdown" class:para>
	<div class="form-group">
		<label for={paraStr}>Paragraph text</label>
	</div>
	<textarea
		class="form-control para"
		id={paraStr}
		name={paraStr}
		value={paraVal || ''}
		class:is-invalid={paraErrMsg}
		style="height: 60px"
	/>
	{#if paraErrMsg}
		<div class="invalid-feedback">{paraErrMsg}</div>
	{/if}
</div>
<!-- ---------------------list items--------------------------- -->
<div class="dropdown ul-dropdown" class:list>
	<ListDropdown
		{li_1Str}
		{li_2Str}
		{li_3Str}
		{li_4Str}
		{li_5Str}
		{li_1Val}
		{li_2Val}
		{li_3Val}
		{li_4Val}
		{li_5Val}
	/>
</div>
<!-- ---------------------contact--------------------------- -->

<div class="dropdown contact-dropdown contact-li" class:contact>
	<ul>
		<li>
			<label for={nameStr}>Name</label>
			<input
				type="text"
				name={nameStr || ''}
				id={nameStr}
				class="form-control"
				value={nameVal || ''}
			/>
		</li>
		<li>
			<label for={emailStr}>Email</label>
			<input
				type="text"
				name={emailStr || ''}
				id={emailStr}
				class="form-control"
				value={emailVal || ''}
			/>
		</li>
		<li>
			<label for={telStr}>Telephone</label>
			<input
				type="text"
				name={telStr || ''}
				id={telStr}
				class="form-control"
				value={telVal || ''}
			/>
		</li>

		<li>
			<label for={fbookStr}>FaceBook</label>
			<input
				type="text"
				name={fbookStr || ''}
				id={fbookStr}
				class="form-control"
				value={fbookVal || ''}
			/>
		</li>
		<li></li>
		<!-- <li>
			<input type="text" name={li_6Str} id={li_6Str} class="form-control" value={li_6Val} />
		</li> -->
	</ul>
</div>

<style lang="stylus">
// .form-group
// 	border 1px solid red
// 	height fit-content
label 
	color var(--theta)
	display block
	margin .4rem 0
input, textarea
	background transparent
	border 1px solid var(--delta) 
	border-radius 1rem 
	color var(--theta)
	font-family Times
	font-size 1rem
	line-height 1.5
	//margin-left -1.2rem
	outline none
	padding .2rem .4rem
	width 20rem // calc(var(--globalWidth) - 2rem)

.img-input 
	background transparent
	border 1px solid
	border-radius 1.4rem
	color var(--theta)
	//margin-top 4rem

input[type=file]::file-selector-button 
	background transparent
	border: 1px solid var(--delta)
	border-radius 1rem
	color: var(--theta)
	font-weight 800
	margin-right: 20px
	padding: .3rem 1rem
	transition: .5s

textarea.para 
	min-height 16rem
ul  
	list-style none
	margin 2rem auto
	textarea 
		height 3.5rem
.contact 
	input 
		16rem //width 100%
.dropdown
	align-items top
	height calc(var(--globalHeight) - 16rem)
	opacity 0
	position absolute 
	left  0 //.4rem
	transition all .5s
	z-index -1
.ul-dropdown
	height 14rem
	top 1rem
.img-dropdown
	padding-top 4rem
	top -1rem
.contact-dropdown 
	top 1rem
.title-dropdown,.para-dropdown
	top 3rem
// active dropdown
.dropdown.img,.dropdown.title,.dropdown.para, .dropdown.list,.dropdown.contact
	opacity 1
	z-index 1
.btn-wrap 
	//border 1px solid red
	display flex
	align-items center
	gap .4rem
	justify-content space-between
	margin-bottom 1rem
	position absolute
	left 0 //.5rem
	//right .5rem
	padding-bottom 1rem
	top 0rem
	width 100%
	z-index 2
	button 
		border 1px solid var(--delta)
		color var(--theta)
button 
	background transparent
	border none
	border 1px solid var(--beta)
	border-radius 1rem
	color var(--beta)
	font-size .9rem
	height 2rem
	outline none
	padding .1rem .7rem
	transition all .5s
	//width 6rem 
	//background var(--delta)
button.img,button.title, button.para,  button.list, button.contact
	background var(--theta)
	border 1px solid var(--gamma)
	color var(--beta)
	transition all .5s
</style>
