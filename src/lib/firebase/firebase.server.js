import serviceAccount from './firebase-secrets.server.json';
import admin from 'firebase-admin';


if (admin.apps.length === 0) {
	admin.initializeApp({
		// @ts-ignore
		credential: admin.credential.cert(serviceAccount)
	});
}

export const db = admin.firestore();

export const auth = admin.auth();
export const storage = admin.storage();
