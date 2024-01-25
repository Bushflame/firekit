<script>
	import { fade, fly } from 'svelte/transition';
	let open = false;
</script>

<button
	tabindex="0"
	aria-label="Navigation"
	class="burger"
	transition:fade
	on:click={() => {
		open = !open;
	}}
></button>

{#if open}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="navwrap" transition:fly={{ y: -300, duration: 500 }}>
		<!-- <img src="/imgs/site/puppy.png" alt="puppy" class="bg-img" /> -->

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
		<!-- <footer></footer> -->
	</div>
{/if}

<style lang="stylus">
.brand 
	color var(--iota)
	font-size 1.4rem
	font-weight bold


//----------------------------------------
.navwrap
	background var(--gamma)
	border 1px solid var(--epsilon)
	border-radius 2rem
	display flex
	flex-direction column
	gap .6rem
	justify-content start
	height calc(var(--globalHeight) - 9rem)
	overflow hidden
	padding 2rem 1rem 6rem
	width calc(var(--globalWidth) - 1rem)
	position absolute
	left 50%
	top 50%
	transform translate(-50%,-50%)
	overflow hidden
	padding-top 1rem
	z-index 200
nav 

	margin	1rem
	position absolute
	//width  calc(var(--globalWidth)- 8rem) 
ul 
	//border 1px solid var(--beta)
	display flex
	align-items left
	flex-direction column 
	gap 1rem
	height 20rem //100%
	list-style none
	//position absolute
	width 22rem
.burger 
	background   transparent //var(--epsilon) //rgba(255,255,255,.1)
	border 1px solid var(--theta)
	border-radius 50% // 0  0 0 50%// 6px
	display flex
	flex-direction column
	justify-content space-around
	height 2.2rem 
	//paddin2 3px
	position absolute
	top .8rem
	right 1rem // .8rem 
	width 2.2rem
	z-index 8
</style>
