<script>
	import { page } from '$app/stores';
	import {userKey} from '$lib/stores/store'
	//import { copy } from 'svelte-copy';

	export let data;
	$userKey = data.thisId
	//let url = `/listing/${data.thisId}`
	//let clickToGo = `https://renttogo.co.uk/view${$uidkey}`;
</script>


	<h1>Dashboard</h1>
	<h1>{data.thisId}</h1>

