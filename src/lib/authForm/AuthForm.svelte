<script>
	import { page } from '$app/stores';
	import Glazed from '$lib/book/Glazed.svelte'
	/**
	 * @type {any}
	 */
	export let btnName;
	export let forgotPassword = false;
	/**
	 * @type {string}
	 */
	let currPage;
	if ($page.url.pathname === '/login') {
		currPage = 'Sign in';
	} else if ($page.url.pathname === '/signup') {
		currPage = 'Register';
	} else if ($page.url.pathname === '/forgot-password') {
		currPage = 'Reset Password';
	}
</script>
<Glazed>
	<div class="authframe">
		<form on:submit|preventDefault>
			<h1>{currPage}</h1>
			<div class="wrap">
				<label for="email" class="form-label">Email</label>
				<input
					type="email"
					name="email"
					class="form-control"
					id="email"
					placeholder="Email"
					required
				/>
			</div>
			{#if !forgotPassword}
				<div class="wrap">
					<label for="password" class="form-label">Password</label>
					<input
						type="password"
						name="password"
						class="form-control"
						id="password"
						placeholder="Password"
					/>
				</div>
			{/if}
			{#if currPage === 'Sign in'}
				<a href="/forgot-password">Forgot Password?</a>
			{:else if currPage === 'Register'}
				<a href="/login">Already have an account?</a>
			{/if}
			<button type="submit" class="btn-success">{btnName}</button>
		</form>
		<a href="/" class="cancel">Cancel</a>
		<div class="slot">
			<slot />
		</div>
	</div>
</Glazed>

<style lang="stylus">
.authframe
	//background rgba(255,255,255,.1)
	height fit-content
	margin auto
	max-width 22rem
	padding 1rem
	position relative
	width 100%
form 
	display flex
	flex-direction column
	gap 1.4rem
	justify-content center
	margin auto
	width fit-content //100%
h1 
	color var(--beta)
	text-align center
.wrap 
	display flex
	flex-direction column
	align-items center
	justify-content space-between
	margin auto
	width 100%
label.form-label 
	display block
	color var(--beta)
	font-weight 800
	text-align left
	width 100%
	//margin-bottom 1rem

input[type="email"], input[type="password"]  
	display block
	background var(--gamma)// rgba(255,255,255,.2)
	border none
	margin-top .4rem
	outline none
	padding .5rem
	width 100% //20rem
button 
	padding .7rem
	background var(--eta)
	color var(--beta)
	font-size 1.1rem
.slot 
	padding-top 1rem
a 
	font-size .9rem
	color var(--beta)
	text-align right
a.cancel 
	display block
	font-size 1rem
	margin-top 2rem
	text-align center
</style>
