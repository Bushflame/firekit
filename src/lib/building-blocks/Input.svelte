<script>
	export let lab = '';
	export let nam = '';
	export let name = '';
</script>

<label for={nam}>{lab}</label>
<input type="text" id={nam} name={name || ''} value={nam} />

<style lang="stylus">
@require './inputs.styl'
</style>
