<script>
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import PublicFrame from '$frames/PublicFrame.svelte';
	// export let tit = '';
	// export let para = '';
	// export let li_a = '';
	// export let li_b = '';
	// export let li_c = '';
	// export let li_d = '';
	// export let li_e = '';
	// export let li_f = '';
	// export let img = '';
	//contact details
	export let li_tel = '';
	export let li_email = '';
	export let li_fb = '';
	export let front = true;

	export let slides = [];
	export let counter = 0;
</script>

<div class="card-wrap">
	{#if counter > 0}
		<button
			class="prev counter-btn"
			on:click={() => {
				{
					counter--; // = counter - 1;
				}
			}}
			>&#8250;
		</button>
		<!-- <p class="show-count">Showing {counter + 1} of {slides.length} results</p> -->
	{/if}
	{#if counter < slides.length - 1}
		<button
			class="next counter-btn"
			on:click={() => {
				counter++; // = counter + 1;
			}}
			>&#8249;
		</button>
		<!-- <p class="show-count">Showing {counter+1} of {slides.length} results</p> -->
	{/if}
	<!-- <p class="show-count">Showing {counter + 1} of {slides.length} results</p> -->

	{#each slides as slide, index}
		{#if index == counter}
			<PublicFrame {front}>
				<div class="card one" slot="one" in:scale={{ duration: 500, delay: 100 }}>
					<h1>{slide.title_1a}</h1>
					<div class="img">
						<div class="corner small top-left-corner" />
						<div class="corner small top-right-corner" />
						<div class="corner small bottom-right-corner" />
						<div class="corner small bottom-left-corner" />
						<img src={slide.img_1a} alt={slide.title_1a} />
					</div>
					<div class="card-body">
						<div class="corner small top-left-corner" />
						<div class="corner small top-right-corner" />
						<div class="corner small bottom-right-corner" />
						<div class="corner small bottom-left-corner" />

						<div class="card-inner card-inner-1">
							{#if slide.para_1a !== ''}
								<p class="para">
									{slide.para_1a}
								</p>
							{/if}
							<ul>
								{#if slide.li_1a}
									<li>
										{slide.li_1a}
									</li>
								{/if}
								{#if slide.li_1b}
									<li>
										{slide.li_1b}
									</li>
								{/if}
								{#if slide.li_1c}
									<li>
										{slide.li_1c}
									</li>
								{/if}
								{#if slide.li_1d}
									<li>
										{slide.li_1d}
									</li>
								{/if}
								<!-- needs to be the doc id -->
							</ul>
						</div>
					</div>
				</div>
				<!-- contact / terms section -->
				<div
					class="card two"
					slot="two"
					in:scale={{ duration: 500, delay: 100 }}
					out:fly={{ x: -200, duration: 400 }}
				>
					<div class="card-inner card-inner-2">
						<div class="corner small top-left-corner" />
						<div class="corner small top-right-corner" />
						<div class="corner small bottom-right-corner" />
						<div class="corner small bottom-left-corner" />
						<h3>Contact Details</h3>

						<p><span>Email: </span>me@me.com {li_email}</p>
						<!-- {#if tel !== ''} -->
						<p><span>Tel: </span>123 4567 890 {li_tel}</p>
						<!-- {:else if fb !== '' } -->
						<p><span>FaceBook: </span>facebook url {li_fb}</p>
						<!-- {/if} -->
						<div class="spacer" />
						<h3>Terms and Conditions</h3>
						<p class="terms">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							<br />
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat
						</p>
					</div>
				</div>
			</PublicFrame>
			<a href={`/listing/${slide.id}`} data-sveltekit-preload-data="off">View Full Details</a>
		{/if}
	{/each}
</div>

<style lang="stylus">
.card-body 
    height 45%
    margin-top 1rem
    box-shadow inset 0 0 40px 20px var(--gamma)
    flex-grow 1
    padding 1.2rem
    position relative
p.show-count 
    border-radius 1rem
    color var(--eta)
    margin-left 50% 
    padding .3rem 1rem
    transform translate(-50%,0)
    position absolute
    top 1rem
    text-align center
    width fit-content //18rem
    z-index 2

.one, .two
    display flex
    flex-direction column
    height 100%
    position relative
    width 100%
.one 
    max-width 95%
img 
    height 100% //55% //16rem
    //max-height 16rem
    min-height 16rem
    object-fit cover
    width 100%
.img 
    height 55%
    max-width 100%
    overflow hidden
    position relative
.img::after 
    box-shadow inset 0 0 40px 20px var(--gamma)
    content ''
    height 100%
    position absolute
    left 0
    width 100%
    z-index 5

h1 
    background var(--alpha)
    border-radius 1.2rem
    color var(--eta)
    padding .3rem 1rem
    position absolute
    left 50%
    top 1rem
    transform translate(-50%,0)
    width fit-content
    white-space nowrap
    z-index 5

h3 
    color var(--eta)
    margin-bottom .6rem
    text-align center
p
    color var(--zeta)
    line-height 1.5
    margin-bottom .4rem
    span 
        font-weight 800
p.para 
    color var(--theta)
    text-align center
.terms 
    padding 0 1rem
ul 
    display flex
    gap .4rem
    flex-direction column
    list-style none
    margin-top 1rem
li 
    color var(--zeta)
    font-style italic
    padding  .2rem  0 .1rem 2rem
    position relative
li::before 
    content ''
    //background var(--delta)
    border 1px solid var(--delta)
    border-radius 50% 
    height 1rem 
    position absolute
    left 0 
    top 50%
    transform translate(0,-50%)
    width 1rem

.card-inner-1
    position relative
    flex-grow 1
.card-inner-2
    box-shadow inset 0 0 40px 20px var(--gamma)
    display flex
    gap 1rem
    flex-direction column
    justify-content space-around
    height 100%
    padding 2rem 1.2rem 4rem
    position relative
a 
    background var(--gamma)
    border-radius 1rem
    color var(--theta)
    padding .4rem 1rem
    position absolute 
    bottom .6rem 
    right calc(50% - 11rem)
    //left 50% 
    //transform translate(-50%,0)
    width 10rem
    z-index 10
@media(min-width 54rem)
    a 
        left 50%
        transform translate(-50%)
button.counter-btn 
    background var(--epsilon) //rgba(0,0,0,.4)
    border 0
    //border-radius 50%
    color #fff
    display flex
    align-items center
    justify-content center
    font-size 2rem
    height 2rem
    outline 0
    padding-bottom .3rem
    position absolute 
    top 54% 
    transform translate(0, -50%)
    text-align center
    width 2rem
    z-index 10
.prev 
    left 0 //1rem
    //transform translate(-35%)
    ///transform rotate(180deg)
.next 
    right 0 //1rem
    //transform translate(-35%)
.corner 
    background var(--beta)
    color  var(--beta)
    position absolute
    z-index 6

.corner.small
    height 2rem
    width 2rem
.corner.top-left-corner
    border-right .4rem solid
    border-bottom .4rem solid
    border-radius 0 0 100% 0
    left 0
    top 0
.corner.top-right-corner
    border-left .4rem solid
    border-bottom .4rem solid// .spacer 
    border-radius 0 0 0 100%
    right 0
    top 0
.corner.bottom-right-corner
    border-left .4rem solid
    border-top .4rem solid
    border-radius 100% 0 0 0
    right 0
    bottom 0
.corner.bottom-left-corner
    border-right .4rem solid
    border-top .4rem solid
    border-radius 0 100% 0 0
    left 0
    bottom 0
</style>
