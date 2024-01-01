<script>
	import Nav from '$comps/navigation/AdminNav.svelte';
	import '$lib/firebase/firebase.client';
	export let data;
	console.log('data is logged in', data);
</script>

<Nav />
<slot />

<style lang="stylus">
</style>
