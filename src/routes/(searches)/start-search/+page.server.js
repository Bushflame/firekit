import { getListings } from '$lib/firebase/database.server';


export async function load({ locals }) {
    const page = url.searchParams.get('page') || 1;
    const { listings, next, previous } = await getListings(locals?.user?.id, +page);
    return {
        listings,
        next,
        previous,
        page
    }
}