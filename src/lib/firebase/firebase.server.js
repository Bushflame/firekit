import admin from 'firebase-admin';
import * as credential from './firebase-secrets.server.json';
//import {GOOGLE_SERVICE_ACCOUNT} from '$env/static/private'
	if (admin.apps.length === 0) {
		console.log('bollox',credential)
	admin.initializeApp({

		//Credential: admin.credential.cert(JSON.parse(GOOGLE_SERVICE_ACCOUNT))
		//PUBLIC_PROJECT_ID=sveltefire-e88f7
		projectId: 'sveltefire-e88f7',
		//credential: admin.credential.cert(JSON.parse(GOOGLE_SERVICE_ACCOUNT))
		 credential: admin.credential.cert(credential)
		//credential: admin.credential.cert(GOOGLE_SERVICE_ACCOUNT)
		//credential: admin.credential.cert(JSON.parse(credential))
		
	});

} else {
	
}


export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();