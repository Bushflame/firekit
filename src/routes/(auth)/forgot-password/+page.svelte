<script>
	import AuthForm from '$lib/authForm/AuthForm.svelte';
	import { mailResetPasswordEmail } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	let hideForm = false;
	// @ts-ignore
	async function onForgotPassword(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			// @ts-ignore
			await mailResetPasswordEmail(email);
			hideForm = true;
			messagesStore.showSuccess('Reset Password Email Sent! :)');
		} catch (error) {
			// @ts-ignore
			if (error.code === 'auth/user-not-found') {
				messagesStore.showError('Email not found, please try again.');
				return;
			}
			messagesStore.showError();
		}
	}
</script>
<section> 
{#if !hideForm}
	<AuthForm on:submit={onForgotPassword} forgotPassword={true} btnName="Reset Password" />
{/if}
</section>
<svelte:head>
	<title>Sveltefire - Forgot Password</title>
</svelte:head>
<style lang='stylus'>
section
	margin auto
	max-width 25rem
	width 100%
</style>
