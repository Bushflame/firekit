<script>
	import { page } from '$app/stores';
	import { hasListing, userKey } from '$lib/stores/store';
	//import authStore from '$lib/stores/auth.store';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { goto } from '$app/navigation';
	import NavWrap from '$comps/navigation/NavWrap.svelte';
	/**
	 * @type {any}
	 */
	//export let isLoggedIn;
	async function onLogout() {
		try {
			await logout();
			goto('/');
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<NavWrap>
	<li>
		<a href="/" class:active={$page.url.pathname === '/'}> Home</a>
	</li>
	<li>
		<a
			href="/dashboard"
			class:active={$page.url.pathname === '/dashboard'}
			data-sveltekit-preload-data="off">Dashboard</a
		>
	</li>
	<li>
		<button on:click={onLogout} class="nav-link logout-btn">Logout</button>
	</li>
</NavWrap>

<style lang="stylus">
	// active link
	.active 
		color var(--theta)
	
	li 
		//border-bottom  1px solid red //d var(--light-1)
		//padding .4rem //1rem
		text-align left
		white-space: nowrap
		width 20rem
	a 
		border-bottom 1px solid var(--delta)
		color  var(--iota)
		display flex
		align-items center
		height 2rem
		position relative
		width 20rem
	.logout-btn
		background transparent
		border-bottom 1px solid var(--delta)
		color  var(--iota)
		display flex
		align-items center
		font-size 1rem
		height 2rem
		position relative
		outline none
		width 100%
</style>
