import { getListingTitles } from '$lib/firebase/database.server';

export async function load() {
	const titles = await getListingTitles();
    const titleData = titles.listingTitles
	console.log('search ps', titleData)
	return {
		titleData
	};
}