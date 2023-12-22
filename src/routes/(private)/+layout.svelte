<script>
	import { page } from '$app/stores';
	import Nav from '$comps/navigation/AdminNav.svelte';
	import messagesStore from '$lib/stores/messages.store'; //???
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	import authStore from '$lib/stores/auth.store.js';
	import { onDestroy } from 'svelte';
	export let data;
	console.log('data is logged in', data.isLoggedIn);
</script>

<Nav />
<slot />

<style lang="stylus">

</style>
