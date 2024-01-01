<script>
	import Nav from '$comps/navigation/Nav.svelte';
	import GlobalFrame from '$comps/GlobalFrame.svelte'
	import messagesStore from '$lib/stores/messages.store';
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	import authStore from '$lib/stores/auth.store.js';
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	export let data;
	let isLoggedIn = data.isLoggedIn;
	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;
	let timerId;
	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (error) {
			clearInterval(timerId);
			messagesStore.showError();
			console.log(error);
		}
	}
	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(
				async () => {
					await sendServerToken();
				},
				1000 * 10 * 60
			);
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
		return () => {
			clearInterval(timerId);
		};
	});
	function closeMessage() {
		messagesStore.hide();
	}
</script>

<!-- <SideNav /> -->
<!-- <h2>Pathname: {$page.url.pathname}</h2> -->
<main>
	<GlobalFrame brand={'Firekit'}>
		<Nav {isLoggedIn} />
	
		{#if $messagesStore.show}
			<div class="messages">
				<div class="messages-liner">
					<div
						class:alert-danger={$messagesStore.type === 'error'}
						class:alert-success={$messagesStore.type === 'success'}
						class="alert alert-dismissible"
						role="alert"
					>
						<strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}:</strong>
						{$messagesStore.message}
						<button type="button" on:click={closeMessage} class="btn-close" aria-label="Close"
							>X</button
						>
					</div>
				</div>
			</div>
		{/if}

		<slot />
		<!-- <div class="swatches">
			<div class="swatch alpha"></div>
			<div class="swatch beta"></div>
			<div class="swatch gamma"></div>
			<div class="swatch delta"></div>
		</div> -->
</GlobalFrame>
</main>

<style lang="stylus" global>


* 
	box-sizing border-box
	margin 0
	padding 0

:root 
	--globalWidth 26.25rem
	--globalHeight 39rem

	--alpha #FEE3C5	
	--delta #FC7391
	--gamma #B77171
	--beta #FFB19D
	//--------------------
	--alpha #D6A97B	
	--beta #5B4024
	--gamma #4C311B
	--delta #AD7B41

	//--------------------
	--alpha #EEE3CB	
	--beta #D7C0AE
	--gamma #967E76
	--delta #B7C4CF

	//--------------------
	--alpha #F2DAC3	
	--beta #F1CA89
	--gamma #CC9B6D
	--delta #C8C2BC
	//--------NEON------------
	--alpha #FFEADB	//cream
	--beta #F11A7B //redish
	--gamma #0F6292 //dark blue
	--delta #39B5E0 //blue


//--------------------
.swatches 
	//background grey
	display flex 
	justify-content center
	padding 1rem
.swatch 
	height 2rem
	width 2rem

.alpha 
	background var(--alpha)
.beta 
	background var(--beta)
.gamma
	background var(--gamma)
.delta
	background var(--delta)
main 
	background linear-gradient(to bottom left,var(--delta),  var(--gamma));
	display flex 
	align-items center
	justify-content center
	min-height 100vh
.main-frame
	//background var(--alpha)
	//background-image url('/imgs/site/puppy.png') rgba(255,255,255,.02)
	//border 1px solid var(--alpha)
	//border-radius 1rem
	height var(--globalHeight)
	max-width var(--globalWidth)
	//overflow hidden
	position relative
	width 100%
	font-size 1.6rem
	line-height 1.3
	text-align center
// .bg-img 
// 	position absolute
// 	left 50%
// 	top 50%
// 	opacity .1
// 	transform translate(-50%, -50%)
// 	z-index 0
// -----SEMANTIC-------------------
h1 
	color var(--beta)
	font-size 1.5rem
	text-align center
h3 
	color var(--gamma)
	font-size 1.3rem
	line-height 1
	margin 0  0 .5rem
	font-weight 400
p
	font-size 1rem
a 
	font-size 1rem
	text-decoration none
button 
	cursor pointer
.logout-btn
	background transparent
	border 0px solid transparent
	color var(--light-1)
	font-size 1rem
	outline none
img 
	border none
	max-width 100%
	object-fit cover

</style>
