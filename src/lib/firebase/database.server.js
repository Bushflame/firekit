import { db } from '$lib/firebase/firebase.server';
import admin from 'firebase-admin';
import { saveFileToBucket } from './firestorage.server';
// testing set doc
import { doc, setDoc } from 'firebase/firestore';
/**
 * @param {{ title: any; description: any; img_1a: any; }} listing
 * @param {any} userId
 */
//-------------------------------CREATE-------------------------------------------
export async function addListing(listing, userId) {
	const listingCollection = db.collection('listings');
	const listingRef = await listingCollection.add({
		//titles-----------------------
		title_1a: listing.title_1a || '',
		title_2a: listing.title_2a || '',
		title_3a: listing.title_3a || '',
		title_4a: listing.title_4a || '',
		//paras------------------------
		para_1a: listing.para_1a || '',
		para_1b: listing.para_1b || '',
		para_1c: listing.para_1c || '',

		para_2a: listing.para_2a || '',
		para_2b: listing.para_2b || '',
		para_2c: listing.para_2c || '',

		para_3a: listing.para_3a || '',
		para_3b: listing.para_3b || '',
		para_3c: listing.para_3c || '',

		para_4a: listing.para_4a || '',
		para_4b: listing.para_4b || '',
		para_4c: listing.para_4c || '',
		//lists--------------------------
		list_1a: listing.li_1a || '',
		list_1b: listing.li_1b || '',
		list_1c: listing.li_1c || '',
		list_1d: listing.li_1d || '',
		list_1e: listing.li_1e || '',

		list_2a: listing.li_2a || '',
		list_2b: listing.li_2b || '',
		list_2c: listing.li_2c || '',
		list_2d: listing.li_2d || '',
		list_2e: listing.li_2e || '',

		list_3a: listing.li_3a || '',
		list_3b: listing.li_3b || '',
		list_3c: listing.li_3c || '',
		list_3d: listing.li_3d || '',
		list_3e: listing.li_3e || '',

		list_4a: listing.li_4a || '',
		list_4b: listing.li_4b || '',
		list_4c: listing.li_4c || '',
		list_4d: listing.li_4d || '',
		list_4e: listing.li_4e || '',

		name: listing.name || '',
		email: listing.email || '',
		tel: listing.tel || '',
		fbook: listing.fbook || '',
		terms: listing.terms || '',
		user_id: userId,
		created_at: admin.firestore.Timestamp.now().seconds
		//likes: 0
	});
	// save the pictures
	const img_1aUrl = await saveFileToBucket(listing.img_1a, `${userId}/${listingRef.id}/img_1a`);
	const img_2aUrl = await saveFileToBucket(listing.img_2a, `${userId}/${listingRef.id}/img_2a`);
	const img_3aUrl = await saveFileToBucket(listing.img_3a, `${userId}/${listingRef.id}/img_3a`);
	const img_4aUrl = await saveFileToBucket(listing.img_4a, `${userId}/${listingRef.id}/img_4a`);
	// update the doc in firestore database with the picture urls
	await listingRef.update({
		img_1a: img_1aUrl,
		img_2a: img_2aUrl,
		img_3a: img_3aUrl,
		img_4a: img_4aUrl
	});
	return listingRef.id;
}

//----------------------------EDIT-----------------------------------------
//only gets doc when id is pasted into browser
// need to get doc id before this request
export async function editListing(id, form, userId) {
	const listingRef = await db.collection('listings').doc(id);
	let img_1a = form.img_1a || null;
	let img_2a = form.img_2a || null;
	let img_3a = form.img_3a || null;
	let img_4a = form.img_4a || null;
	delete form.img_1a;
	delete form.img_2a;
	delete form.img_3a;
	delete form.img_4a;
	await listingRef.update(form);
	if (img_1a) {
		const img_1aUrl = await saveFileToBucket(img_1a, `${userId}/img_1a`);

		listingRef.update({ img_1a: img_1aUrl });
	}
	if (img_2a) {
		const img_2aUrl = await saveFileToBucket(img_2a, `${userId}/img_2a`);

		listingRef.update({ img_2a: img_2aUrl });
	}
	if (img_3a) {
		const img_3aUrl = await saveFileToBucket(img_3a, `${userId}/img_3a`);

		listingRef.update({ img_3a: img_3aUrl });
	}
	if (img_4a) {
		const img_4aUrl = await saveFileToBucket(img_4a, `${userId}/img_4a`);

		listingRef.update({ img_4a: img_4aUrl });
	}
}
/**
 * @param {string} id
 */
// ---------------------GET ONE BY  ID------------------------------

export async function getListing(id) {
	const listingRef = await db.collection('listings').doc(id).get();
	if (listingRef.exists) {
		return { id: listingRef.id, ...listingRef.data() };
		// 	console.log('temp',temp, uid)
	}
}

//  -------------GET ALL LISTINGS----------------------------------------------
export async function getListings() {

	let all = [];
	const listingsRef = db.collection('listings');
	const snapshot = await listingsRef.get();

	snapshot.forEach((doc) => {
		let temp = [];
		let getUid = {
			uid: doc.id
		};
		temp.push(doc.data(), getUid);
		all.push(temp);
		console.log('from db.server', all);
	});
	return {
		all
	};
}
//------------------- get by titles--------------------------------
// gets the titles for initiating the search
export async function getListingTitles() {
	/**
	 * @type {{ uid: string; userid: any; }[]}
	 */
	let listingTitles = [];
	const listingsRef = db.collection('listings');
	const snapshot = await listingsRef.get();
	snapshot.forEach((doc) => {
		let getData = {
			title: doc.data().title_1a
		};
		listingTitles.push(getData.title);
	});
	return {
		listingTitles
	};
}

//---------------------get frst pages------------------------------
// export async function getListingTitles() {

// 	/**
// 	 * @type {{ uid: string; userid: any; }[]}
// 	 */
// 	let listingTitles = [];
// 	const listingsRef = db.collection('listings');
// 	const snapshot = await listingsRef.get();

// 	snapshot.forEach((doc) => {
// 		//let temp = [];
// 		let getData = {
// 			uid: doc.id,
// 			title: doc.data().title_1a
// 		};
// 		console.log('db.server get data',getData);
// 		//temp.push(doc.data());
// 		listingTitles.push(getData);
// 	});
// 	return {
// 		listingTitles
// 	};
// }

//-------------------   dashboard data---------------------
// get user id and user's doc.id creds
export async function getAdminListing() {
	/**
	 * @type {{ uid: string; userid: any; }[]}
	 */
	let userKeys = [];
	const listingsRef = db.collection('listings');
	const snapshot = await listingsRef.get();

	//get user(to match dashboard user) and doc ids (to create url to edit page + my listing)

	snapshot.forEach((doc) => {
		let temp = [];
		let getUid = {
			createdAt: doc.data().created_at,
			expDate: doc.data().expDate,
			uid: doc.id,
			userid: doc.data().user_id
		};
		let dat = new Date(getUid.expDate * 1000);
		console.log('exp datw', getUid.expDate);
		temp.push(doc.data());
		userKeys.push(getUid);
	});
	return {
		userKeys
	};
}
