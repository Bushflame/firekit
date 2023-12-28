<script>
	import ListingForm from '$comps/forms/ListingForm.svelte';
	import ListingForm_1 from '$comps/forms/ListingForm_1.svelte';
	import ListingForm_2 from '$comps/forms/ListingForm_2.svelte';
	import ListingForm_3 from '$comps/forms/ListingForm_3.svelte';
	import { formNum } from '$lib/stores/store.js';
	export let data;
	export let form;
</script>

<!-- {#if $formNum === 'form-1'}
<ListingForm_1 form={{ ...data.listing, ...form }} />
{/if}
{#if $formNum === 'form-2'}
<ListingForm_2 form={{ ...data.listing, ...form }} />
{/if}
{#if $formNum === 'form-3'}
<ListingForm_3 form={{ ...data.listing, ...form }} />
{/if} -->
<ListingForm form={{ ...data.listing, ...form }} />
