<script>
	import Nav from '$comps/navigation/Nav.svelte';
	import { page } from '$app/stores';
	//$page.url.pathname === '/login'
	//import GlobalFrame from '$comps/GlobalFrame.svelte';
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
	<img src="/imgs/generic/woman-bike.jpg" class='bg' alt="dog with woman pushing a bicycle background">
	<!-- <GlobalFrame> -->
	<div class="global-frame">
		{#if $page.url.pathname !== '/login'}
			{#if $page.url.pathname !== '/signup'}
				<Nav {isLoggedIn} />
			{/if}
		{/if}
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
	</div>
</main>

<style lang="stylus" global>

* 
	box-sizing border-box
	margin 0
	padding 0
.global-frame 
	display flex
	align-items center
	justify-content center
	height var(--globalHeight)
	//overflow hidden
	position relative
	width var(--globalWidth)
img.bg 
	position absolute
:root 
	--globalWidth 422px
	--globalHeight 750px
	--ddWidth 23rem

	//BROWNS
	// dark start 	62, 26, 0
	--alpha rgba(255, 234, 219,1)
	--beta  darken(#FFEADB,10%)
	--beta-alpha rgba(255, 234, 219,.1)
	--beta-alpha-d rgba(62, 26, 0,.1)
	//---
	--gamma darken(#FFEADB,20%)
	--gamma-alpha rgba(255, 234, 219,.2)
	--gamma-alpha-d rgba(62, 26, 0,.2)
	//---
	--delta darken(#FFEADB,30%)
	--delta-alpha rgba(255, 234, 219,.3)
	--delta-alpha-d rgba(62, 26, 0,.3)
	//---
	--epsilon darken(#FFEADB,40%)
	--epsilon-alpha rgba(255, 234, 219,.4)
	--epsilon-alpha-d rgba(62, 26, 0,.4)
	//---
	--eta darken(#FFEADB,50%)
	--eta-alpha rgba(255, 234, 219,.5)
	--eta-alpha-d rgba(62, 26, 0,.5)
	//---
	--zeta darken(#FFEADB,60%)
	--zeta-alpha rgba(255, 234, 219,.6)
	--zeta-alpha-d rgba(62, 26, 0,.6)
	//---
	--theta darken(#FFEADB,70%)
	--theta-alpha rgba(255, 234, 219,.7)
	--theta-alpha-d rgba(62, 26, 0,.7)
	//---
	--iota darken(#FFEADB,80%)
	--iota-alpha rgba(255, 234, 219,.8)
	--iota-alpha-d rgba(62, 26, 0,.8)
	//---
	--kappa darken(#FFEADB,90%)
	--kappa-alpha rgba(255, 234, 219,.9)
	--kappa-alpha-d rgba(62, 26, 0,.9)
	//---
	--lambda darken(#FFEADB,95%)
	--lambda-alpha rgba(255, 234, 219,.95)
	--lambda-alpha-d rgba(62, 26, 0,.95)

	//reds #ffe5e5
	// --beta  darken(#ffe5e5,10%)
	// --gamma darken(#ffe5e5,30%)
	// --delta darken(#ffe5e5,20%)
	// --epsilon darken(#ffe5e5,40%)
	// --eta darken(#ffe5e5,50%)
	// --zeta darken(#ffe5e5,60%)
	// --theta darken(#ffe5e5,70%)
	// --iota darken(#ffe5e5,80%)
	// --kappa darken(#ffe5e5,90%)
	// --lambda darken(#ffe5e5,95%)

	//GREYS
	// --beta darken(#fff, 10%)
	// --gamma darken(#fff,20%)
	// --delta darken(#fff,30%)
	// --epsilon darken(#fff,40%)
	// --eta darken(#fff,50%)
	// --zeta darken(#fff,60%)
	// --theta darken(#fff,70%)
	// --iota darken(#fff,80%)
	// --kappa darken(#fff,90%)
	// --lambda darken(#fff,95%)
	// Turquoise
	// --beta darken(#EBFBFA, 10%)
	// --gamma darken(#EBFBFA,20%)
	// --delta darken(#EBFBFA,30%)
	// --epsilon darken(#EBFBFA,40%)
	// --eta darken(#EBFBFA,50%)
	// --zeta darken(#EBFBFA,60%)
	// --theta darken(#EBFBFA,70%)
	// --iota darken(#EBFBFA,80%)
	//Teal
	// --beta darken(#e2ffff, 10%)
	// --gamma darken(#e2ffff,20%)
	// --delta darken(#e2ffff,30%)
	// --epsilon darken(#e2ffff,40%)
	// --eta darken(#e2ffff,50%)
	// --zeta darken(#e2ffff,60%)
	// --theta darken(#e2ffff,70%)
	// --iota darken(#e2ffff,80%)

	//aqua 	#ecfefa
	// --beta #ecfefa
	// --gamma darken(#ecfefa,10%)
	// --delta darken(#ecfefa,20%)
	// --epsilon darken(#ecfefa,30%)
	// --eta darken(#ecfefa,40%)
	// --zeta darken(#ecfefa,50%)
	// --theta darken(#ecfefa,60%)
	// --iota darken(#ecfefa,70%)

	// raspberry pink #fbe7f1
	// --beta #fbe7f1
	// --gamma darken(#fbe7f1,10%)
	// --delta darken(#fbe7f1,20%)
	// --epsilon darken(#fbe7f1,30%)
	// --eta darken(#fbe7f1,40%)
	// --zeta darken(#fbe7f1,50%)
	// --theta darken(#fbe7f1,60%)
	// --iota darken(#fbe7f1,70%)

	// gold #fff9d8
	// --beta #fff9d8
	// --gamma darken(#fff9d8,10%)
	// --delta darken(#fff9d8,20%)
	// --epsilon darken(#fff9d8,30%)
	// //--eta darken(#fff9d81,40%)
	// --zeta darken(#fff9d8,50%)
	// --theta darken(#fff9d8,60%)
	// --iota darken(#fff9d8,70%)

main 
	//background linear-gradient(to bottom left,var(--beta),  var(--gamma));
	//box-shadow inset 0 0 40px 20px var(--delta)
	background var(--iota)
	display flex 
	align-items center
	justify-content center
	min-height 100vh
// -----SEMANTIC-------------------
h1 
	color var(--theta)
	font-size 1.5rem
	text-align center
h3 
    color var(--theta)
    font-weight 800
p
	font-size 1.1rem
	
a 
	color var(--eta)
	font-size 1rem
	text-decoration none
button 
	border none
	cursor pointer
	outline none
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
@media(min-width: 900px)
	:root 
		--globalWidth 860px
		//--globalHeight 39rem
</style>
