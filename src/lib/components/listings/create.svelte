<script>
	import { onMount } from 'svelte';
	import 'firebase/storage'; // not needed???
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client.js';
	//need user.id - can use stores - temp user.id
	/**
	 * @type {string}
	 */
	let userkey;
	// create doc with id to match user upon register
	//
	// leave all fields as empty strings

	function build() {
		const docRef = doc(db, 'listings', userkey);
		setDoc(
			docRef,
			{
				img_1a: '',
				img_2a: '',
				img_3a: '',
				img_4a: '',

				title_1a: '',
				title_2a: '',
				title_3a: '',
				title_4a: '',

				para_1a: '',
				para_2a: '',
				para_3a: '',
				para_4a: '',

				li_1a: '',
				li_1b: '',
				li_1c: '',
				li_1d: '',
				li_1e: '',
				li_1f: '',

				li_2a: '',
				li_2b: '',
				li_2c: '',
				li_2d: '',
				li_2e: '',
				li_2f: '',

				li_3a: '',
				li_3b: '',
				li_3c: '',
				li_3d: '',
				li_3e: '',
				li_3f: '',

				li_4a: '',
				li_4b: '',
				li_4c: '',
				li_4d: '',
				li_4e: '',
				li_4f: '',

				user_id: userkey
			},
			{ merge: true }
		);
	}
	onMount(() => {
		build();
	});
</script>

<template lang="pug">

</template>

<style lang="stylus">

</style>
