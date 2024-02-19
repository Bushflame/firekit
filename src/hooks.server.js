import { auth } from '$lib/firebase/firebase.server';
import { redirect } from '@sveltejs/kit';
//runs on every request - only runs on server
/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
	const protectRoutes = ['/create', '/edit', '/profile', '/dashboard', '/build'];

	const guestRoutes = ['/login', '/signup', '/forgot-password', '/results'];

	try {
		// @ts-ignore
		event.locals.user = await getFirebaseUser(event.cookies.get('jwt'));
	} catch (error) {
		// @ts-ignore
		event.locals.user = null;
	}

	// @ts-ignore
	const user = event.locals?.user;
	const url = event.url;

	if (url.pathname !== '/') {
		if (!user && protectRoutes.find((u) => url.pathname.indexOf(u) > -1)) {
			redirect(302, `/login?redirect=${url.pathname}`);
		}
		if (user && guestRoutes.find((u) => url.pathname.indexOf(u) > -1)) {
			redirect(302, '/');
		}
	}

	const response = await resolve(event);

	return response;
}

/**
 * @param {string | undefined} token
 */
async function getFirebaseUser(token) {
	if (!token) {
		return null;
	}

	const decodedToken = await auth.verifyIdToken(token, true);
	const user = await auth.getUser(decodedToken.uid);

	return {
		id: user.uid,
		email: user.email
	};
}
