import { db } from '$lib/firebase/firebase.server';
import admin from 'firebase-admin';
import { saveFileToBucket } from './firestorage.server';
// testing set doc
import { doc, setDoc } from "firebase/firestore"; 
/**
 * @param {{ title: any; description: any; img_1a: any; }} listing
 * @param {any} userId
 */
//-------------------------------CREATE-------------------------------------------
export async function addListing(listing, userId) {
	// save to the firestore database without picture information
	const listingCollection = db.collection('listings');
	const listingRef = await listingCollection.add({
		title_1a: listing.title_1a,
		description_1a: listing.description_1a,
		user_id: userId,
		created_at: admin.firestore.Timestamp.now().seconds
		//likes: 0
	});
	// save the pictures
	const img_1aUrl = await saveFileToBucket(listing.img_1a, `${userId}/${listingRef.id}/img_1a`);
	// update the doc in firestore database with the picture urls
	await listingRef.update({
		img_1a: img_1aUrl
	});
	return listingRef.id;
}


//----------------------------EDIT-----------------------------------------
//only gets doc when id is pasted into browser
// need to get doc id before this request
export async function editListing(id, form, userId) {
	const listingRef = await db.collection('listings').doc(id);

	let img_1a = form.img_1a || null;
	delete form.img_1a;
	await listingRef.update(form);
	if (img_1a) {
		const img_1aUrl = await saveFileToBucket(img_1a, `${userId}/${listingRef.id}/img_1a`);

		listingRef.update({ img_1a: img_1aUrl });
	}
}
/**
 * @param {string} id
 */
// ---------------------GET ONE BY  ID--------------unused ???----------------

export async function getListing(id) {
	const listingRef = await db.collection('listings').doc(id).get();

	if (listingRef.exists) {
		return { id: listingRef.id, ...listingRef.data() };
	}
}

//  -------------GET ALL LISTINGS----(only for getting titles & doc.id's. Used in search------------------------------------------
//*******************change to getListingTitles - here + ???**************** */
export async function getListings() {
	/**
	 * @type {firestore.DocumentData[]}
	 */
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
		console.log('from db.server', all)
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
	let temp = [];
	snapshot.forEach((doc) => {

		let getData = {
			title: doc.data().title_1a
		};
		temp.push(getData.title)
		//console.log('db.server get data temp',temp);
		//temp.push(doc.data());
		listingTitles.push(getData.title);
		console.log('db.server get data',listingTitles);
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
			uid: doc.id,
			userid: doc.data().user_id
		};
		//console.log('doc.data', doc.data);
		temp.push(doc.data());
		userKeys.push(getUid);
	});
	return {
		userKeys
	};
}
