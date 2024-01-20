import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.client.js';
/**
 * @param {string} userId
 */
//use current date to set expiry date
var today = new Date().toDateString();
let now = new Date()
let later = new Date();
later.setDate(now.getDate() + 90);
let expDate = later.toDateString()

//console.log('tom ', tomorrow.toDateString())









export async function create(userId) {
	const docRef = doc(db, 'listings', userId);
	setDoc(
		docRef,
		{
			created_at:today,
			expDate: expDate,
			img_1a: '',
			img_2a: '',
			img_3a: '',
			img_4a: '',

			title_1a: 'new build title 1',
			title_2a: '',
			title_3a: '',
			title_4a: '',

			para_1a: '',
			para_2a: '',
			para_3a: '',
			para_4a: '',

			li_1a: '',
			li_1b: '',
			li_1c: '',
			li_1d: '',
			li_1e: '',

			li_2a: '',
			li_2b: '',
			li_2c: '',
			li_2d: '',
			li_2e: '',

			li_3a: '',
			li_3b: '',
			li_3c: '',
			li_3d: '',
			li_3e: '',

			li_4a: '',
			li_4b: '',
			li_4c: '',
			li_4d: '',
			li_4e: '',

			name: '',
			email: '',
			tel: '',
			fbook: '',

			terms: '',

			user_id: userId
		},
		{ merge: true }
	);
}
