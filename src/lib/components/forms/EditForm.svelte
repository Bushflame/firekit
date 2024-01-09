<script>
	import { slide,fade } from 'svelte/transition';
	//import DropdownBtns from '$comps/edit-dropdown/DropdownBtns.svelte'
	//import Guide from '$comps/edit-dropdown/GuideDropdown.svelte'
	import ListGuide from 	'$comps/guides/ListGuide.svelte'
	import ParaGuide from 	'$comps/guides/ParaGuide.svelte'
	import TitleGuide from 	'$comps/guides/TitleGuide.svelte'
	import ImgGuide from 	'$comps/guides/ImgGuide.svelte'
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
		li_5Val = '',
		li_6Val = '';
	export let imgStr = '';
	export let titleStr = '';
	export let paraStr = '';
	export let li_1Str = '';
	export let li_2Str = '';
	export let li_3Str = '';
	export let li_4Str = '';
	export let li_5Str = '';
	export let li_6Str = '';
	// dropdown & dropdown-btns classes
	let img = false;
	let title = false;
	let para = false;
	let list = false;
	let guide = false
	let showListGuide = false
	let showParaGuide = false
	let showTitleGuide = false
	let showImgGuide = false
	//close all guides when navigatiing between sections
	const closeGuides =()=>{
	showListGuide = false
	showParaGuide = false
	showTitleGuide = false
	showImgGuide = false
	}

$: getImg = 1
$:changeId = ()=>{
	
	setTimeout(()=>{document.getElementById(`img${getImg}`).click()},500)	
	getImg++
}
let prevImg =false
let getRandom
</script>
<div class="guide-btns">
	{#if img}
	<button  class='guide-btn' on:click|preventDefault={()=>{
		showImgGuide = !showImgGuide
		}}>
		{#if !showImgGuide}
			Images guide
		{:else}
			Close guide
		{/if}
	</button>
	{/if}
	{#if title}
	<button  class='guide-btn' on:click|preventDefault={()=>{
		showTitleGuide = !showTitleGuide
		}}>
			{#if !showTitleGuide}
				Titles guide
			{:else}
				Close guide
			{/if}
		</button>
	{/if}
	{#if para}
	<button  class='guide-btn' on:click|preventDefault={()=>{
		showParaGuide = !showParaGuide
		}}>
		{#if !showParaGuide}
		Paragraph guide
	{:else}
		Close guide
	{/if}</button>
	{/if}
	{#if list}
	<button  class='guide-btn' on:click|preventDefault={()=>{
		showListGuide = !showListGuide
		}}>
		{#if !showListGuide}
		List items  guide
	{:else}
		Close guide
	{/if}</button>
	{/if}
</div>

	<div class="btn-wrap dropdown-btns">
		<button
			class:img
			on:click|preventDefault={() => {
				
				img = !img;
				title = false;
				para = false;
				list = false;
				closeGuides()
			}}>Image</button
		>
	
		<button
			class:title
			on:click|preventDefault={() => {
				title = !title;
				img = false;
				para = false;
				list = false;
				closeGuides()
			}}>Title</button
		>
		<button
			class:para
			on:click|preventDefault={() => {
				para = !para;
				img = false;
				title = false;
				list = false;
				closeGuides()

			}}>Paragraph</button
		>
	
		<button
			class:list
			on:click|preventDefault={() => {
				list = !list;
				img = false;
				title = false;
				para = false;
				closeGuides()

			}}>List items</button
		>
	</div>


<!-- <section> -->
<div class="dropdown img-dropdown" class:img>
	<div class="guide-wrap" class:showImgGuide={showImgGuide}>
		<ImgGuide title={'Add / edit image'}/>
	</div> 
			<input class='img-input'  accept="image/*" name={imgStr || ''} type="file"  />

</div>
	<!-- -----------------------------title------------------------------- -->
	<div class="dropdown title-dropdown" 
	class:title={title}>
		<div class="guide-wrap" class:showTitleGuide={showTitleGuide}>
			<TitleGuide title={'Add / edit title'}/>
		</div>
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
	<!-- ----------------------para------------------------------ -->
	<div class="dropdown para-dropdown" class:para={para}>
		<div class="guide-wrap" class:showParaGuide={showParaGuide}>
			<ParaGuide title={'Add / edit paragraph text'}/>		
		</div>
			<textarea
				class="form-control"
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
	<div class="dropdown ul-dropdown" class:list={list}>
			<div class="guide-wrap" class:showListGuide={showListGuide}>
				<ListGuide title={'Create / edit list items'}/>
			</div>
			<ul>
				<li>
					<input
						type="text"
						name={li_1Str}
						id={li_1Str}
						class="form-control"
						value={li_1Val}
					/>
				</li>
				<li>
					<!--  -->
					<input
						type="text"
						name={li_2Str}
						id={li_2Str}
						class="form-control"
						value={li_2Val}
					/>
				</li>
				<li>
					<input
						type="text"
						name={li_3Str}
						id={li_3Str}
						class="form-control"
						value={li_3Val}
					/>
				</li>
				<li>
					<input
						type="text"
						name={li_4Str}
						id={li_4Str}
						class="form-control"
						value={li_4Val}
					/>
				</li>
				<li>
					<input
						type="text"
						name={li_5Str}
						id={li_5Str}
						class="form-control"
						value={li_5Val}
					/>
				</li>
				<li>
					<input
						type="text"
						name={li_6Str}
						id={li_6Str}
						class="form-control"
						value={li_6Val}
					/>
				</li>
			</ul>
	</div>

<style lang="stylus">
//@require '/src/lib/stylus/guides.styl'
input, textarea
	border none //1px solid var(--beta)
	border-radius 1rem 
	color var(--beta)
	font-size 1rem
	margin-top 2rem
	outline none
	padding .6rem
	width calc(var(--globalWidth) - 2rem)

.img-input
	background #fff //var(--beta)
	border-radius 1.4rem
	color var(--beta)
	margin-top 4rem
input[type=file]::file-selector-button 
	background #fff //var(--beta)
	border: 1px solid var(--beta)
	border-radius 1rem
	color: var(--beta)
	font-weight 800
	margin-right: 20px
	padding: .3rem 15px
	transition: .5s

textarea 
	min-height 16rem
#uploadPreview 
	margin-top  4rem
	position relative
	left 46%
	transform translate(-50%)
	max-width 14rem 

ul  
	list-style none
	margin 2rem auto
	input 
		margin .2rem auto .2rem

.dropdown
	opacity 0
	position absolute 
	top 5rem
	transition all .5s
	z-index -1
.ul-dropdown,.img-dropdown,
	display flex
	align-items center
	height calc(var(--globalHeight) - 16rem)
	top 5rem
.title-dropdown
	//display flex
	align-items top
	height calc(var(--globalHeight) - 16rem)
.para-dropdown
	display flex
	align-items center
	height calc(var(--globalHeight) - 16rem)
button.img,button.title, button.para,  button.list 
	border 1px solid var(--gamma)
	color var(--gamma)
	transition all .5s
.dropdown.img,.dropdown.title,.dropdown.para, .dropdown.list
	opacity 1
	z-index 1
.btn-wrap 
	display flex
	align-items center
	gap .8rem
	justify-content center //space-between
	margin-bottom 1rem
	position absolute
	left 1rem
	right 1rem
	padding-bottom 1rem
	top 2rem
	z-index 2
button 
	background transparent
	border none
	border 1px solid var(--beta)
	border-radius 1rem
	color var(--beta)
	font-size 1rem
	height 2.2rem
	outline none
	padding .1rem .3rem
	transition all .5s
	width 6rem //25%
	//background var(--delta)
.guide-btns
	background var(--beta)
	border-radius 0 0 1.2rem 1.2rem
	display flex 
	align-items center
	justify-content center
	margin-top 1rem
	position relative
.guide-btn 
	background var(--beta)
	border-radius 0 0 1.2rem 1.2rem
	color var(--alpha)
	font-size 1.2rem
	font-weight bold
	height 2rem
	padding .3rem 1.2rem
	position absolute 
	bottom 0rem
	transition all .5s
	width fit-content
	z-index 20
.guide-wrap 
	background var(--alpha)
	display flex
	align-items top
	height 0
	opacity 0
	overflow hidden
	position absolute
	left 50%
	top -10%
	transform translate(-50%, 10%)
	transition all .5s
	width calc(var(--globalWidth)- 2rem)
	z-index -4
.showImgGuide,.showTitleGuide,.showParaGuide,.showListGuide 
	height 26.5rem
	opacity 1
	z-index 40
</style>
