<script>
    import { enhance } from '$app/forms';
    import {formNum} from '$lib/stores/store.js'
/**
	 * @type {any}
	 */

/**
	 * @type {any}
	 */
 export let submitForm
 /**
	 * @type {any}
	 */
  export let submitting

 

</script>

<div class="form-wrap">

    <form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
    <slot/>
    <button disabled={submitting} type="submit" class="btn btn-submit" style='background:green; border:none;color:#fff;font-size:1rem'>
        {#if submitting}
            Submitting...
        {:else}
            Submit
        {/if}
    </button>
    </form>
    <div class="paginator">
        <button on:click={()=>{
            $formNum='form-1'
        }}>1</button>
        <button on:click={()=>{
            $formNum='form-2'
        }}>2</button>
        <button on:click={()=>{
            $formNum='form-3'
        }}>3</button>
        <button on:click={()=>{
            $formNum='form-4'
        }}>4</button>
    </div>
</div>

<style lang="stylus">
.form-wrap
    height calc(100% - 2.5rem)
    margin-top 1.5rem
    max-width 25rem
    padding 1rem
    position relative
    width 100%
form 
    display flex
    flex-direction column
    gap .8rem
    width 100%
button.btn-submit.btn 
    background green
    border none
    border-radius 1rem
    margin auto
    outline none
    padding .6rem
    width 16rem
.paginator 
    background rgba(255,255,255,.1)
    //border 1px solid #fff
    display flex 
    align-items center 
    justify-content center
    gap 1rem
    padding .6rem
    position absolute 
    bottom 0
    left 0
    width 100%
    button 
        background transparent
        border 1px solid rgba(255,255,255,.4)
        color #fff
        height 2rem 
        width 2rem
</style>