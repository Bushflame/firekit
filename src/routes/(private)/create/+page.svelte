<script>
	import ListingForm_1 from '$comps/forms/ListingForm_1.svelte';
	import ListingForm_2 from '$comps/forms/ListingForm_2.svelte';
	import {formNum} from '$lib/stores/store.js'
	export let form;
	$formNum //= 'form-2'
</script>
<h1>create</h1>
{#if form && form.success}
	<h2>Successfully submitted</h2>
{:else}
	<!-- {#if $formNum === 'form-1'} -->
	<ListingForm_1 {form} />
	<!-- {/if} -->
	<!-- {#if $formNum === 'form-2'}
	<h3>xxxx 2</h3>
	<ListingForm_2 {form}  />
	{/if} -->
{/if}


<svelte:head>
	<title>Firekit: create listng</title>
</svelte:head>
