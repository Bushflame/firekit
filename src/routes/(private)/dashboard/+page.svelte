<script>
	import { page } from '$app/stores';
	import { userKey, docId } from '$lib/stores/store';
	//import { copy } from 'svelte-copy';

	export let data;
	$userKey = data.thisId;
	$docId = data.userid
	// console.log('has listing', data.thisId.length);

	// if (data.thisId.length < 10) {
	// 	$hasListing = false;
	// }
	//let url = `/listing/${data.thisId}`
	//let clickToGo = `https://renttogo.co.uk/view${$uidkey}`;
</script>

<h1>Dashboard</h1>
<h1>{data.thisId}</h1>
<h1>cookie {$docId}</h1>
