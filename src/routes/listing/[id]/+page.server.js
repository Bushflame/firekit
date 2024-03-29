import { getListing } from '$lib/firebase/database.server';
import { error } from '@sveltejs/kit';
let uid = 'ljSNvobkTzgxk8xmuda5';
export async function load({ params }) {
	const listing = await getListing(params.id);
	if (!listing) {
		error(404, { message: 'Listing not found!' });
	}
	return {
		listing
	};
}
