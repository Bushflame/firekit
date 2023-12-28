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
		<a href="/">
			<h3 class="brand">Firekit Admin</h3>
		</a>
	</li>
	<li>
		<a href="/" class:active={$page.url.pathname === '/'}> Home</a>
	</li>
	<li>
		<a href="/dashboard" class:active={$page.url.pathname === '/dashboard'}>Dashboard</a>
	</li>
	<!-- {#if $hasListing} -->
	<li>
		<a href="/create" class:active={$page.url.pathname == '/create'}>Create</a>
	</li>
	<!-- {/if} -->
	<li>
		<a href={`/edit/${$userKey}`} class:active={$page.url.pathname == `/edit/${$userKey}`}>Edit</a>
	</li>
	<li>
		<a href={`/my-page/${$userKey}`} class:active={$page.url.pathname == `/my-page/${$userKey}`}
			>My Page</a
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
	color var(--beta)

li 
	//border-bottom  1px solid red //d var(--light-1)
	//padding .4rem //1rem
	text-align left
	white-space: nowrap
	width 20rem
a 
	border-bottom 1px solid var(--beta)
	color  var(--gamma)
	display flex
	align-items center
	height 2rem
	position relative
	width 20rem

h3 
	background transparent
	
	text-align center
.logout-btn
	background transparent
	border-bottom 1px solid var(--beta)
	color  var(--gamma)
	display flex
	align-items center
	font-size 1rem
	height 2rem
	outline none
</style>
