<script>
// used by edit page
// sits inside Page component
// each dropdown holds 1 specific page item - eg image / title
// 1 btn per dropdown
//btns open their respective dropdowns
//btn background colour and dropdown state are controlled using the same class:
// dropdown dd_0 is set to true to show a clean edit page when opening

//dropdown show / btns
let dd_1 = false ,dd_2 = false, dd_3 = false,  dd_4 = false, dd_5 = false,dd_6 = false, dd_0 = true
//dropdown button text
export let txt_1 = '', txt_2='', txt_3='', txt_4='', txt_5='', txt_6 =''

</script>
<div class="wrapper">
    <div class="btns">
    <button
    class:dd_1
    class='one'
    on:click|preventDefault={()=>{
        dd_1 = !dd_1
        dd_2 = false
        dd_3 = false
        dd_4 = false
        dd_5 = false
        dd_6 = false


    }}
 
    >
        {txt_1}
    </button>
    <button
    class:dd_2
    class='two'
    on:click|preventDefault={()=>{
        dd_1 = false
        dd_2 = !dd_2
        dd_3 = false
        dd_4 = false
        dd_5 = false
        dd_6 = false
    }}
    >
        {txt_2}
    </button>
    <button
    class:dd_3
    class='three'
    on:click|preventDefault={()=>{
        dd_1 = false
        dd_2 = false
        dd_3 = !dd_3
        dd_4 = false
        dd_5 = false
        dd_6 = false
    }}
    >
        {txt_3}
    </button>
    <button
    class:dd_4
    class='four'
    on:click|preventDefault={()=>{
        dd_1 = false
        dd_2 = false
        dd_3 = false
        dd_4 = !dd_4
        dd_5 = false
        dd_6 = false
    }}
    >
        {txt_4}
    </button>
    <button
    class:dd_5
    class='five'
    on:click|preventDefault={()=>{
        dd_1 = false
        dd_2 = false
        dd_3 = false
        dd_4 = false
        dd_5 = !dd_5
        dd_6 = false
    }}
    >
        {txt_5}
    </button>
    <button
    class:dd_6
    class='six'
    on:click|preventDefault={()=>{
        dd_1 = false
        dd_2 = false
        dd_3 = false
        dd_4 = false
        dd_5 = false
        dd_6 = !dd_6
    }}
    >
        {txt_6}
    </button>
    </div>
  
    <div class="dropdown" class:dd_1={dd_1}><slot name='slot-1' /></div>
    <div class="dropdown" class:dd_2={dd_2}><slot name='slot-2'/></div>
    <div class="dropdown" class:dd_3={dd_3}><slot name='slot-3'/></div>
    <div class="dropdown" class:dd_4={dd_4}><slot name='slot-4'/></div>
    <div class="dropdown" class:dd_5={dd_5}><slot name='slot-5'/></div>
    <div class="dropdown" class:dd_6={dd_6}><slot name='slot-6'/></div>
    <div class="dropdown" class:dd_0={dd_0}></div>
</div>

<style lang="stylus">
.wrapper
    height 21rem
    margin 0 auto
    position relative
    width 22rem
.dropdown 
    background   var(--iota)
    border-radius 2rem 
    height 22rem
    padding 1rem
    position absolute
    bottom 0
    top 5.5rem
    //left 1rem
    transition all .3s
    width 100%
    z-index -1
.dropdown.dd_1,.dropdown.dd_2,.dropdown.dd_3,.dropdown.dd_4,.dropdown.dd_5, .dropdown.dd_6
    opacity 1
    z-index 1
.one 
    grid-area one
.two 
    grid-area two
.three 
    grid-area three
.four 
    grid-area four
.five 
    grid-area five
.six 
    grid-area six
.btns 
    display grid 
    gap 1rem
    grid-template-columns repeat(6,1fr)
    grid-template-areas 'one one two two three three' 'four four five five six six'
    justify-content space-between
    margin 0 auto
    position relative
    width 100%
    z-index 4
button
    background var(--beta)
    border 1px solid var(--gamma)
    border-radius 1rem
    color var(--theta)
    font-size 1rem
    padding .3rem .8rem
    transition background .5s
button.dd_1 ,button.dd_2, button.dd_3, button.dd_4, button.dd_5,button.dd_6
    background var(--gamma)
    border none
    color var(--iota)
</style>