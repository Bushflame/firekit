<script>
	import { goto } from '$app/navigation';
	import AuthForm from '$lib/authForm/AuthForm.svelte';
	import LoginWithGoogle from '$lib/authForm/LoginWithGoogle.svelte';
	import { registerWithEmailandPassword } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { page } from '$app/stores';
	import { afterLogin } from '$lib/helpers/route.helper';
	import { create } from '$lib/helpers/create';
	/**
	 * @param {{ target: HTMLFormElement | undefined; }} e
	 */
	async function register(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			if (!email || !password) {
				messagesStore.showError('Please enter a valid email and password.');
				return;
			}
			// @ts-ignore
			if (password.length < 6) {
				messagesStore.showError('Password must be 6 characters or more.');
				return;
			}
			// @ts-ignore
			const user = await registerWithEmailandPassword(email, password);
			// init create process to create listing using user.uid
			// on submit - goto create then dashboard
			create(user.uid);
			// @ts-ignore
			afterLogin($page.url, user.uid);
		} catch (e) {
			// @ts-ignore
			if (e.code === 'auth/email-already-in-use') {
				messagesStore.showError('You have already registered, please log in.');
				await goto('/login');
				return;
			}
			console.log(e);
			messagesStore.showError();
		}
	}
</script>
<section>
<AuthForm on:submit={register} btnName="Register with email and password">
	<!-- <LoginWithGoogle btnName="Register with Google" /> -->
</AuthForm>
</section>
<svelte:head>
	<title>Sveltefire: Sign Up</title>
</svelte:head>

<style lang="stylus">
section
	margin auto
	max-width 25rem
	width 100%
</style>
