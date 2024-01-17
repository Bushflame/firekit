<script>
	import PublicFrame from '$frames/PublicFrame.svelte';
	export let tit = '';
	export let para = '';
	export let li_a = '';
	export let li_b = '';
	export let li_c = '';
	export let li_d = '';
	export let li_e = '';
	export let li_f = '';
	export let img = '';
	//contact details
	export let li_tel = '';
	export let li_email = '';
	export let li_fb = '';
	export let front = false;
</script>

<PublicFrame {front}>
	<div class="card one" slot="one">
		<h1>{tit}</h1>
		<div class="img">
			<div class="corner small top-left-corner" />
			<div class="corner small top-right-corner" />
			<div class="corner small bottom-right-corner" />
			<div class="corner small bottom-left-corner" />
			<img src={img} alt={tit} />
		</div>
	</div>
	<!-- contact / terms section -->
	<div class="card two" slot="two">
		<div class="card-inner card-inner-2">
			<div class="corner small top-left-corner" />
			<div class="corner small top-right-corner" />
			<div class="corner small bottom-right-corner" />
			<div class="corner small bottom-left-corner" />
			<p class="title">{tit}</p>
			<div class="spacer" />
			{#if para !== ''}
				<p>
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
				{#if li_e != ''}
					<li>
						{li_e}
					</li>
				{/if}
				{#if li_f != ''}
					<li>
						{li_f}
					</li>
				{/if}
			</ul>
		</div>
	</div>
</PublicFrame>

<style lang="stylus">
.one, .two
    display flex
    flex-direction column
    height 100%
    position relative
.one 
    margin-right .5rem
.two 
    margin-left .5rem
img 
    height 100%
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
p
    color var(--epsilon)
    line-height 1.5
p.title 
    font-size 1.2rem
    font-weight 800 
    text-align center
ul 
    display flex
    gap .4rem
    flex-direction column
    list-style none
    margin-top 1rem
li 
    color var(--epsilon)
    font-style italic
    padding  .2rem  0 .1rem 2rem
    position relative
li::before 
    content ''
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
