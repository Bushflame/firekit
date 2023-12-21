import { getListingTitles } from '$lib/firebase/database.server';

export async function load() {
	const titles = await getListingTitles();
    const titleData = titles.listingTitles
	let uniqueTitles = [...new Set(titleData)]

	return {
		uniqueTitles
	};
}