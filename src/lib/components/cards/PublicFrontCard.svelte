<script>
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import PublicFrame from '$frames/PublicFrame.svelte';
	export let tit = '';
	export let para = '';
	export let li_a = '';
	export let li_b = '';
	export let li_c = '';
	export let li_d = '';
    export let li_e = '';
	export let img = '';
	//contact details
	export let tel = '';
	export let email = '';
	export let fbook = '';
    export let terms = ''
	export let front = true;
</script>

<PublicFrame {front}>
	<div
		class="card one"
		slot="one"
		in:scale={{ duration: 500, delay: 100 }}
		out:fly={{ x: -200, duration: 400 }}
	>
		<h1>{tit}</h1>
		<div class="img">
			<div class="corner small top-left-corner" />
			<div class="corner small top-right-corner" />
			<div class="corner small bottom-right-corner" />
			<div class="corner small bottom-left-corner" />
			<img src={img} alt={tit} />
		</div>
		<div class="card-body">
			<div class="corner small top-left-corner" />
			<div class="corner small top-right-corner" />
			<div class="corner small bottom-right-corner" />
			<div class="corner small bottom-left-corner" />
			<div class="card-inner card-inner-1">
				{#if para !== ''}
					<p class="para">
						{para}
					</p>
				{/if}
				<ul>
					{#if li_a != ''}
						<li>
							{li_a}
						</li>
					{/if}
					{#if li_b != ''}
						<li>
							{li_b}
						</li>
					{/if}
					{#if li_c != ''}
						<li>
							{li_c}
						</li>
					{/if}
					{#if li_d != ''}
						<li>
							{li_d}
						</li>
					{/if}
                    {#if li_e!= ''}
                    <li>
                        {li_e}
                    </li>
                {/if}
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

			<p><span>Email: </span>{email}</p>
			<!-- {#if tel !== ''} -->
			<p><span>Tel: </span>{tel}</p>
			<!-- {:else if fb !== '' } -->
			<p><span>FaceBook: </span>{fbook}</p>
			<!-- {/if} -->
			<div class="spacer" />
			<h3>Terms and Conditions</h3>
			<p class="terms">
                {terms}
			</p>
		</div>
	</div>
</PublicFrame>
<svelte:head>
	<title>{tit}</title>
	<meta name="description" content={para} />
</svelte:head>

<style lang="stylus">
.card-body 
    margin-top 1rem
    box-shadow inset 0 0 40px 20px var(--gamma)
    flex-grow 1
    padding 1.2rem
    position relative
.one, .two
    display flex
    flex-direction column
    height 100%
    position relative

img         
    height 16rem
    object-fit cover
    width 100%
.img 
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
    padding .3rem 1rem
    position absolute
    left 50%
    top 1rem
    transform translate(-50%,0)
    width fit-content
    white-space nowrap
    z-index 5

h3 
    color var(--iota)
    margin-bottom .6rem
    text-align center

p
    color var(--iota)
    line-height 1.5
    margin-bottom .4rem
    span 
        font-weight 800
p.para 
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
    //border-bottom 1px solid var(--delta)
    color var(--iota)
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
    flex-direction column
    justify-content space-around
    height 100%
    padding 2rem 1.2rem 4rem
    position relative
.corner 
    background var(--beta)
    color  var(--beta)
    position absolute
    z-index 6
.corner.large
    height 3rem
    width 3rem
.corner.small
    height 2rem
    width 2rem
.corner.top-left-corner
    border-right .4rem solid
    border-bottom .4rem solid
    border-radius 0 0 100% 0
    left -.35rem
    top -.35rem
.corner.top-right-corner
    border-left .4rem solid
    border-bottom .4rem solid// .spacer 
    border-radius 0 0 0 100%
    right -.35rem
    top -.35rem
.corner.bottom-right-corner
    border-left .4rem solid
    border-top .4rem solid
    border-radius 100% 0 0 0
    right -.35rem
    bottom -.35rem
.corner.bottom-left-corner
    border-right .4rem solid
    border-top .4rem solid
    border-radius 0 100% 0 0
    left -.35rem
    bottom -.35rem
</style>
