<script>
	import { fade, scale, fly } from 'svelte/transition';
	export let readMore = false;
	export let front = false;
</script>

<div class="frame">
	<!-- touchscreen devices-->

	<div class="insert-1">
		{#if !readMore}
			<div class="one">
				<slot name="one" />
			</div>
		{:else}
			<div class="two">
				<slot name="two" />
			</div>
		{/if}
		{#if front}
			<button
				class="read-more-btn"
				on:click={() => {
					readMore = !readMore;
				}}
			>
				{#if !readMore}
					Contact
				{:else}
					Back
				{/if}
			</button>
		{:else}
			<button
				class="read-more-btn"
				on:click={() => {
					readMore = !readMore;
				}}
			>
				{#if !readMore}
					Details
				{:else}
					Back
				{/if}
			</button>
		{/if}
	</div>

	<!-- desktop -->
	<div class="insert-2">
		<div class="one">
			<slot name="one" />
		</div>
		<div class="spacer"></div>
		<div class="two">
			<slot name="two" />
		</div>
	</div>
</div>

<style lang="stylus">
.frame
	display flex
	align-items center
	height calc(var(--globalHeight) - 8.4rem)
	overflow hidden
	padding 1rem
	width calc(var(--globalWidth) - 2px)
.insert-1, .insert-2 
	height 100% 
	margin auto
	width var(--globalWidth)
.insert-2 
	display none
.one, .two 
	height 100%
	width 100%
.read-more-btn 
	background var(--gamma)
	border none
	border-radius 1rem 
	color var(--theta)
	font-size 1rem
	outline none
	padding  .4rem 1rem
	position absolute
	//left 50% 
	left calc(50% - 11rem)
	bottom .6rem 
	//transform translate(-50%)
	width 10rem //fit-content
	z-index 10
@media(min-width 840px)
	.insert-1 
		display none
	.insert-2 
		display flex
	.one, .two 
		width 50%
		display flex
		align-items center
		height 100%
		//padding 1rem

</style>
