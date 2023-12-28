<script>
	import { page } from '$app/stores';
	import { userKey, hasListing } from '$lib/stores/store';
	//import { copy } from 'svelte-copy';

	export let data;
	$userKey = data.thisId;
	// console.log('has listing', data.thisId.length);

	// if (data.thisId.length < 10) {
	// 	$hasListing = false;
	// }
	//let url = `/listing/${data.thisId}`
	//let clickToGo = `https://renttogo.co.uk/view${$uidkey}`;
</script>

<h1>Dashboard</h1>
<h1>{data.thisId}</h1>
