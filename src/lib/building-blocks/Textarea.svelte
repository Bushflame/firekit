<script>
	export let lab = '';
	export let nam = '';
	export let rows = 6;
	export let name = '';
</script>

<label for={nam}>{lab}</label>
<textarea name={name || ''} id={nam} cols="30" {rows} value={nam} />

<style lang="stylus">
@require './textarea.styl'
</style>
