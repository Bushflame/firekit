<script>
import {fly, fade} from 'svelte/transition'
export let url
</script>

{#key url}
<div class="transition" 
in:fly={{y:-50, duration:250, delay:300}} 
out:fly={{y:50, duration:250}}><slot></slot></div>
{/key}

<style lang="stylus">

</style>