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
		<button
	tabindex="0"
	aria-label="Navigation"
	class="burger"
	transition:fade
	on:click={() => {
		open = !open;
	}}
></button>
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
// .brand 
// 	color var(--iota)
// 	font-size 1.4rem
// 	font-weight bold


//----------------------------------------
.navwrap
	background var(--theta)
	//border 4px solid var(--beta)
	//border-radius 2rem
	display flex
	flex-direction column
	gap .6rem
	//justify-content start
	height calc(var(--globalHeight) - 2rem)
	//margin 1rem
	overflow hidden
	padding 2rem 0rem 6rem
	width calc(var(--globalWidth) -6rem)
	position absolute
	left 1rem //.5rem
	//top 50.2%
	bottom 1rem
	//right 0rem
	//transform translate(0,-58%)
	overflow hidden
	width 92.4%
	z-index 20

nav 

	margin	1rem
	position absolute

ul 
	display flex
	align-items left
	flex-direction column 
	gap 1rem
	height 24rem //100%
	list-style none

	width 22rem
.burger 
	background  var(--iota) //rgba(255,255,255,.1)
	border 1px solid var(--beta)
	border-radius 50% // 0  0 0 50%// 6px
	display flex
	flex-direction column
	justify-content space-around
	height 2.2rem 
	//paddin2 3px
	position absolute
	top 1.4rem
	right 1.6rem //rem // .8rem 
	width 2.2rem
	z-index 8
.navwrap .burger
	top .8rem
	right .8rem
@media(min-width 860px)
	.navwrap 
		left  calc(50% + 22px) //50%
		left 50.6%
		//right 2px
		//transform translate(0, -50%)
		width calc(50% - 20px)
</style>
