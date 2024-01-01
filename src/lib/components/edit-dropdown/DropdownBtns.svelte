<script>

import {editing} from '$lib/stores/store.js'
let img = false
let title = false
let para = false
let list = false
</script>

<div class="btn-wrap">
        <button
        class:img={img}
            on:click|preventDefault={()=>{
                img = !img
                title = false
                para = false
                list = false
            }}
            >
            Edit image
            </button>
        <button
            class:title={title}
            on:click|preventDefault={()=>{
                    title = !title
                    img = false
                    para = false
                    list = false
                }}
                >
                Edit title
            </button>

            <button
            class:para={para}
            on:click|preventDefault={()=>{
                    para = !para
                    img = false
                    title = false
                    list = false
                }}
                >
                Edit paragraph
            </button>    
            <button
            class:list={list}
            on:click|preventDefault={()=>{
                    list = !list
                    img = false
                    title = false
                    para = false
                }}
                >
                Edit List items
            </button>            
</div>

<style lang="stylus">
.img,.title, .para, .list 
    background var(--beta)
.btn-wrap 
    //border 1px solid green
    display flex
    gap 1px
    justify-content space-between
    //margin-top 1rem
    position absolute
    left 1rem
    right 1rem
    top .5rem
    //width 100%
    z-index 2
button 
    border none
    color var(--alpha)
    height 2.2rem
    outline none
    padding .1rem .3rem
    transition all .5s
    width 25%
    background var(--delta)
</style>