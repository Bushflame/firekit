<script>
	import FormFrame from '$comps/forms/FormFrame.svelte';
	import ListingForm_1 from '$comps/forms/ListingForm_1.svelte';
	import ListingForm_2 from '$comps/forms/ListingForm_2.svelte';
	import ListingForm_3 from '$comps/forms/ListingForm_3.svelte';
	import { formNum } from '$lib/stores/store.js';
	export let data;
	export let form;
	let li = data.listing
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
<!-- <ListingForm form={{ ...data.listing, ...form }} /> -->
<FormFrame  form={{ ...data.listing, ...form }} 
img_1a={li.img_1a} title_1a={li.title_1a } intro_1a={li.intro_1a} li_1a={li.li_1a} li_1b={li.li_1b} li_1c={li.li_1c} li_1d={li.li_1d}
img_2a={li.img_2a} title_2a={li.title_2a } intro_2a={li.intro_2a} li_2a={li.li_2a} li_2b={li.li_2b} li_2c={li.li_2c} li_2d={li.li_2d}
img_3a={li.img_3a} title_3a={li.title_3a } intro_3a={li.intro_3a} li_3a={li.li_3a} li_3b={li.li_3b} li_3c={li.li_3c} li_3d={li.li_3d}
img_4a={li.img_4a} title_4a={li.title_4a } intro_4a={li.intro_4a} li_4a={li.li_4a} li_4b={li.li_4b} li_4c={li.li_4c} li_4d={li.li_4d}
/>
