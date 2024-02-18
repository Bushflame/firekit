<script>
import {onMount} from 'svelte'
let loadPage = false
onMount(()=>{
	setTimeout(()=> {
		loadPage = true
	},10)

})
</script>

<div class="page" class:loadPage>
    <slot/>
</div>

<style lang="stylus">
.page 
    height 100%
    margin-top -2000px
    overflow hidden
    position relative
    right 0
    transition all .4s
.page.loadPage 
    margin-top 0
    opacity 1
    width 100%
</style>