<script>

	/**
	 * @type {{ title: any; error_title: any; author: any; error_author: any; short_description: any; error_short_description: any; description: any; error_description: any; main_picture: any; error_main_picture: any; small_picture: any; error_small_picture: any; }}
	 */


	// let show_slide_1 = true;
	// let show_slide_2 = false;
	// let show_slide_3 = false;
	// let show_slide_4 = false;
	// let slide_1_isActive = true
	// let slide_2_isActive = false
	// let slide_3_isActive = false
	// let slide_4_isActive = false
	// let showingSlide =1


// @ts-ignore
export let imgErrMsg,imgInval
// @ts-ignore
export let titleErrMsg, titleVal
// @ts-ignore
export let introErrMsg, introVal
// @ts-ignore
export let li_1Val = '', li_2Val = '',li_3Val = '', li_4Val = ''
export let imgStr = ''
export let titleStr = ''
export let introStr = ''
export let li_1Str = ''
export let li_2Str = ''
export let li_3Str = ''
export let li_4Str = ''
	</script>
					<div class="dropdown">
						<label for={imgStr} class="form-label"
							>
							<input
								class="form-control"
								id={imgStr}
								accept="image/*"
								name={imgStr || ''}
								class:is-invalid={imgErrMsg}
								type="file"
							/>
							{#if imgErrMsg}
								<div class="invalid-feedback">{imgInval}</div>
							{/if}
						</label>
						<p>img{imgStr}</p>
					</div>
		<!-- -----------------------------title------------------------------- -->
						<div class="dropdown">
							<label for={titleStr} class="form-label">Listing Title</label>
							<input
								type="text"	
								name={titleStr || ''}
								id={titleStr}
								class="form-control"
								value={titleVal || ''}
								class:is-invalid={titleErrMsg}
								placeholder="Title"
							/>
							{#if titleErrMsg}
								<div class="invalid-feedback">{titleErrMsg}</div>
							{/if}
						</div>		
		<!-- ----------------------intro------------------------------ -->
					<div class="dropdown">
						<label class="form-label" for={introStr}>Paragraph</label>
						<textarea
							class="form-control"
							placeholder="Listing intro here"
							id={introStr}
							name={introStr}
							value={introVal || ''}
							class:is-invalid={introErrMsg}
							style="height: 60px"
						/>
						{#if introErrMsg}
							<div class="invalid-feedback">{introErrMsg}</div>
						{/if}
					</div>
		<!-- ---------------------list items--------------------------- -->
					
						<div class="dropdown">
					<ul>
						<p>List items</p>
						<li>
							<input
								type="text"
								name={li_1Str}
								id={li_1Str}
								class="form-control"
								value={li_1Val}
								placeholder="List item"
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
								placeholder="List item"
							/>
						</li>
						<li>
							<input
								type="text"
								name={li_3Str}
								id={li_3Str}
								class="form-control"
								value={li_3Val}
								placeholder="List item"
							/>
						</li>
						<li>
							<input
								type="text"
								name={li_4Str}
								id={li_4Str}
								class="form-control"
								value={li_4Val}
								placeholder="List item"
							/>
						</li>
					</ul>
				</div>	
<style lang="stylus"> 
p 
    color var(--gamma)

label 
	color var(--gamma)
	margin-bottom 1rem

input, textarea 
	background rgba(255,255,255,.2)
	border none
	color var(--gamma)
	margin-top .4rem
	outline none
	padding .6rem
	width 100%
ul 
	list-style none
	margin auto
	width 100%
li 
	width 100%
// button 
//     cursor pointer
// 	.show-img, .show-title, .show-intro, .show-list
// 	height 0
// 	opacity 0
// 	overflow hidden
// 	transition all .5s
// .showing-img-1, .showing-img-2, .showing-img-3, .showing-img-4
// .showing-title-1, .showing-title-2, .showing-title-3, .showing-title-4
// .showing-intro-1, .showing-intro-2, .showing-intro-3, .showing-intro-4
// .showing-list-1, .showing-list-2, .showing-list-3, .showing-list-4
// 	height auto 
// 	opacity 1
// 	transition all .5s
// 	button 
// 		background var(--delta)
// 		border none
// 		color var(--alpha)
// 		display block
// 		margin 1rem auto .2rem
// 		padding .2rem 1rem
</style>
