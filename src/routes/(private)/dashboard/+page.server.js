// @ts-nocheck
import { getAdminListing } from '$lib/firebase/database.server';
//provide dashboard user.id with doc id to filter and create dynamic edit + my page
export async function load({ locals }) {
	const listings = await getAdminListing();

	const userid = locals.user.id;
	//console.log('listings', listings.userKeys)
	let thisId;
	let createdOn
	let expiresOn

	for (let i = 0; i < listings.userKeys.length; i++) {

		if (listings.userKeys[i].userid === userid) {
			thisId = listings.userKeys[i].uid;
			createdOn = listings.userKeys[i].createdAt
			expiresOn = listings.userKeys[i].expDate
			console.log('created on page server',createdOn)

			
		}
	}
	return {
		expiresOn,
		createdOn,
		thisId,
		userid
	};
}
