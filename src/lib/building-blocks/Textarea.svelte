<script>

export let lab = ''
export let nam = ''
export let rows = 3

</script>
<label for={nam}>{lab}</label>
<textarea name={nam} id={nam} cols="30" rows={rows} value={nam}/>


<style lang="stylus">
@require './textarea.styl'
</style>