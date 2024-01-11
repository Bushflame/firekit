<script>
	export let readMore = false;
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

		<button
			class="read-more-btn"
			on:click={() => {
				readMore = !readMore;
			}}
		>
			R <br />
			e<br />
			a<br />
			d<br /><br />
			m<br />
			o<br />
			r<br />
			e
		</button>
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
	border none
	outline none
	padding 1rem .4rem
	position absolute
	right 0 
	top 50% 
	transform translate(0, -50%)
	width fit-content
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
