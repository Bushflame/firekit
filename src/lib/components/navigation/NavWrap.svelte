<script>
	import { fade, fly } from 'svelte/transition';
	let open = false;
</script>

{#if !open}
	<button on:click={() => (open = true)} class="burger" transition:fade>
		<span />
		<span />
		<span />
	</button>
{/if}
{#if open}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="navwrap" transition:fly={{ x: -300, duration: 300 }}>
		<img src="/imgs/site/puppy.png" alt="puppy" class='bg-img'>
		<header>			
			<a href="/">
			<span class="brand">Firekit</span>
		</a></header>
		<button on:click={() => (open = false)} class="burger">
			<span />
			<span />
			<span />
		</button>
		<nav data-sveltekit-reload>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<ul
				on:click={() => {
					setTimeout(() => {
						open = !open;
					}, 100);
				}}
			>
				<slot />
			</ul>
		</nav>
		<footer></footer>
	</div>
{/if}

<style lang="stylus">

header, footer
	background var(--beta)
	display flex
	align-items center
	height 3.2rem
	padding-left .6rem
	position absolute
	left 0
	width var(--globalWidth)
header 
	top 0
footer
	bottom 0
.brand 
	color var(--delta)
	font-size 1.4rem
	font-weight bold
.bg-img 
		position absolute
		left 50%
		top 50%
		opacity .2
		transform translate(-50%, -50%)
		z-index 0

//----------------------------------------
.navwrap
	background var(--alpha)
	display flex
	flex-direction column
	gap .6rem
	justify-content start
	height var(--globalHeight)
	overflow hidden
	padding 4rem 1rem 6rem
	position relative
	width var(--globalWidth)
	position absolute
	left 0
	top 0
	overflow hidden
	padding-top 4rem
	z-index 4
nav 
	margin-left 1rem
	width   calc(var(--globalWidth)- 2rem) 
ul 
	align-items left
	flex-direction column 
	gap 1rem
	height 100%
	list-style none
	width 100%
.burger 
	background   var(--delta) //rgba(255,255,255,.1)
	border none //1px solid var(--beta)
	border-radius 50% // 0  0 0 50%// 6px
	display flex
	flex-direction column
	justify-content space-around
	height 2.2rem 
	//paddin2 3px
	position absolute
	top .5rem //.8rem
	right .5rem // .8rem 
	width 2.2rem
	z-index 2
</style>
