<script>
	export let tit = '';
	export let para = '';
	export let li_a = '';
	export let li_b = '';
	export let li_c = '';
	export let li_d = '';
	export let li_e = '';
	export let li_f = '';
	export let img = '';
</script>

<div class="card">
	<h1>{tit}</h1>
	<img src={img} alt={tit} />
	<div class="card-body">
		<div class="card-inner">
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
</div>

<style lang="stylus">
.card-body 
	height 100%
	padding 1rem
.card-inner 
	display flex 
	flex-direction column
	height 100%
h1 
	background var(--alpha)
	padding .3rem 1rem
	position absolute
	left 50%
	top 4rem
	transform translate(-50%,0)
	width fit-content
	white-space nowrap
img 
	height 16rem
	object-fit cover
	width 100%
p 
	color var(--gamma)
ul 
	display flex
	gap .4rem
	flex-direction column
	list-style none
	margin-top 1rem
li 
	border-bottom 1px solid var(--delta)
	color var(--gamma)
	padding  .2rem  0 .1rem 2rem
	position relative
li::before 
	content ''
	background var(--delta)
	border-radius 50% 
	height 1rem 
	position absolute
	left 0 
	top 50%
	transform translate(0,-50%)
	width 1rem
</style>
