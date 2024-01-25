<script>
	import Ul from '$blocks/Ul.svelte'
	import Li from '$blocks/Li.svelte'
    let dd_1 = true ,dd_2 = false, dd_3 = false,  dd_4 = false, dd_5 = false
    
    export let txt_1 = '', txt_2='', txt_3='', txt_4='', txt_5=''
    
    </script>
    <div class="wrapper">
        <!-- <hr> -->
        <div class="btns">
        <button
        class:dd_1
        on:click|preventDefault={()=>{
            dd_1 = !dd_1
            dd_2 = false
            dd_3 = false
            dd_4 = false
            dd_5 = false
    
    
        }}
     
        >
            {txt_1}
        </button>
        <button
        class:dd_2
        on:click|preventDefault={()=>{
            dd_1 = false
            dd_2 = !dd_2
            dd_3 = false
            dd_4 = false
            dd_5 = false
        }}
        >
            {txt_2}
        </button>
        <button
        class:dd_3
        on:click|preventDefault={()=>{
            dd_1 = false
            dd_2 = false
            dd_3 = !dd_3
            dd_4 = false
            dd_5 = false
        }}
        >
            {txt_3}
        </button>
        <button
        class:dd_4
        on:click|preventDefault={()=>{
            dd_1 = false
            dd_2 = false
            dd_3 = false
            dd_4 = !dd_4
            dd_5 = false
        }}
        >
            {txt_4}
        </button>
        <button
        class:dd_5
        on:click|preventDefault={()=>{
            dd_1 = false
            dd_2 = false
            dd_3 = false
            dd_4 = false
            dd_5 = !dd_5
        }}
        >
            {txt_5}
        </button>
        </div>
        <Ul>
            <li class="dropdown" class:dd_1={dd_1}><slot name='slot-1' /></li>
            <li class="dropdown" class:dd_2={dd_2}><slot name='slot-2'/></li>
            <li class="dropdown" class:dd_3={dd_3}><slot name='slot-3'/></li>
            <li class="dropdown" class:dd_4={dd_4}><slot name='slot-4'/></li>
            <li class="dropdown" class:dd_5={dd_5}><slot name='slot-5'/></li>
        </Ul>
    </div>
    
<style lang="stylus">
.wrapper
    height 15rem
    margin 0 auto
    position relative
    width 20rem
.dropdown 
    background transparent //red //var(--beta)
    position absolute
    bottom 0
    top 4rem
    transition all .3s
    width 100%
    z-index -1
.dropdown.dd_1,.dropdown.dd_2,.dropdown.dd_3,.dropdown.dd_4,.dropdown.dd_5
    opacity 1
    z-index 1
.btns 
    display flex
    gap 1rem
    justify-content center
    margin 0 auto
    position relative
    width 100%
    z-index 0
button
    background var(--beta)
    border 1px solid var(--gamma)
    border-radius 1rem
    color var(--theta)
    font-size .9rem
    height 2rem
    transition background .5s
    width 2rem
button.dd_1 ,button.dd_2, button.dd_3, button.dd_4, button.dd_5
    background var(--gamma)
    border none
    color var(--iota)
hr 
    border 1px solid var(--gamma)
    margin .5rem auto 1.5rem
    width 50%
</style>