<script>
	import Nav from '$comps/navigation/Nav.svelte';
	import GlobalFrame from '$comps/GlobalFrame.svelte';
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
	<GlobalFrame>
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
	--ddWidth 23rem

	//single colour
	--alpha #fff
	--beta #FFEADB
	--gamma darken(#FFEADB,10%)
	--delta darken(#FFEADB,20%)
	--epsilon darken(#FFEADB,30%)
	--eta darken(#FFEADB,40%)
	--zeta darken(#FFEADB,50%)
	--theta darken(#FFEADB,60%)
	--iota darken(#FFEADB,70%)
	
	--breakpoint 54rem
main 
	background linear-gradient(to bottom left,var(--beta),  var(--gamma));
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
@media(min-width: 54rem)
	:root 
		--globalWidth 52.5rem
		--globalHeight 39rem
</style>
