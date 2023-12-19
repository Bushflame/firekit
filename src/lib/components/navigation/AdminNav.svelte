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
	//$page.url.pathname
</script>
<NavWrap>
	<li>
		<a href="/">
			<h3 class="brand">SvelteFire</h3>
		</a>
	</li>
        <li>
			<a href="/" class:active={$page.url.pathname === '/'}>admin nav Home</a>
		</li>
        <li>
			<a
				href="/dashboard"
				class:active={$page.url.pathname == '/dashboard'}>Dashboard</a
			>
		</li>
		<li>
			<a
				href="/create"
				class:active={$page.url.pathname == '/create'}>Create</a
			>
		</li>
        <li>
			<a
				href="/edit"
				class:active={$page.url.pathname == '/edit'}>Edit</a
			>
		</li>

		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span on:click={onLogout} class="nav-link logout-btn">Logout</span>
		</li>

</NavWrap>

<style lang="stylus">
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