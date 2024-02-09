<script>
	export let nam = '';
	export let alt = '';
	export let lab = '';
	export let name = '';
</script>

<label for={nam}>{lab}</label>
<input class="img-input" accept="image/*" id={nam} name={name || ''} type="file" {alt} />

<style lang="stylus">
@require './inputs.styl'
input[type=file]::file-selector-button 
	background transparent
	border: 1px solid var(--delta)
	border-radius 1rem
	color: var(--theta)
	font-weight 800
	margin-right: 20px
	padding: .3rem 1rem
	transition: .5s
</style>
