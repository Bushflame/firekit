<script>
	import { page } from '$app/stores';
	//import authStore from '$lib/stores/auth.store';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { goto } from '$app/navigation';
	import NavWrap from '$comps/navigation/NavWrap.svelte';
	/**
	 * @type {any}
	 */
	 export let isLoggedIn;
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
{#if $page.url.pathname != '/dashboard' }
<NavWrap>
	<li>
		<a href="/">
			<h3 class="brand">Firekit</h3>
		</a>
	</li>
	{#if isLoggedIn}
	<li>
		<a href="/" class:active={$page.url.pathname == '/'}>Home</a>
	</li>
	<li>
		<a href="/search" class:active={$page.url.pathname === '/search'}>Search</a>
	</li>
		<li>
			<a
				href="/dashboard"
				class:active={$page.url.pathname == '/dashboard'}>Dashboard</a
			>
		</li>

		<li>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		</li>
		<li>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
		</li>
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span on:click={onLogout} class="nav-link logout-btn">Logout</span>
		</li>

	{:else}
		<li>
			<a href="/" class:active={$page.url.pathname == '/'}>Home</a>
		</li>
		<li>
			<a href="/search" class:active={$page.url.pathname === '/search'}>Search</a>
		</li>
		<li>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		</li>
		<li>
			<a href="/login" class:active={$page.url.pathname === '/login'}>Login</a>
		</li>
		<li>
			<a href="/signup" class:active={$page.url.pathname === '/signup'}>Sign Up</a>
		</li>
		<li>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
		</li>
	{/if}
</NavWrap>
{/if}

<style lang="stylus">
// active link
.active 
	color var(--primary)

li 
	border-bottom  1px solid var(--light-1)
	padding .4rem //1rem
	white-space: nowrap
	width 100%

h3 
	background transparent
	text-align center
.logout-btn
	background transparent
	border 0px solid transparent
	color var(--primary-l-4)
	font-size 1rem
	outline none
</style>
