<script>
	import { page } from '$app/stores';
	import GlobalFrame from '$comps/GlobalFrame.svelte';
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

{#if $page.url.pathname != '/dashboard'}
	<NavWrap>
		{#if isLoggedIn}
			<li>
				<a href="/" class:active={$page.url.pathname == '/'}>Home</a>
			</li>
			<li>
				<a
					href="/search"
					class:active={$page.url.pathname === '/search'}
					data-sveltekit-preload-data="off">Search</a
				>
			</li>
			<li>
				<a
					href="/dashboard"
					class:active={$page.url.pathname == '/dashboard'}
					data-sveltekit-preload-data="off">Dashboard</a
				>
			</li>

			<li>
				<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
			</li>
			<li>
				<a href="/cropper" class:active={$page.url.pathname === '/cropper'}>Cropper</a>
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
.logout-btn
	background transparent
	border-bottom 1px solid var(--beta)
	color  var(--gamma)
	display flex
	align-items center
	font-size 1rem
	height 2rem
	position relative
	outline none
</style>
