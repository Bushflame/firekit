
<script>

    let one = true
    let two = false
    </script>
        <div class="magazine">
            <button
            class="toggle-btn"
            on:click={() => {
                one = !one;
                two = !two;
            }}
            >{#if one}
                
            &#8250;
    
            {:else}
            &#8249;
            {/if}
        </button>       
                <div class="pages">
                    <div class="page page-1" class:one>
                        <div class="side side-1" >
                            <div class="shadows shadow-1"></div>
                          <slot name='side-1'/>
                        </div>
                    </div>
                    <div class="page page-2" class:two>
                        <div class="side side-2" >
                            <div class="shadows shadow-2"></div>  
                            <slot name='side-2'/>            
                        </div>
                    </div>
                </div>
        </div>
    
    <style lang="stylus">
    h1 
        font-size 2rem
        line-height 1
    img 
        height 100% //320px
        width 100% //400px
    .magazine 
        position relative
    .magazine,.pages, .page, .side 
        height 100%
        width 100%
    .pages
        background var(--kappa)
        display grid 
        gap 1rem
        grid-template-columns 1fr 
        padding: 1rem;
        //padding .4rem
    .page 
        //background  var(--beta) //rgba(0,0,0,0.3)
    
        //gap .2rem
        color: #000;
        height 0
        overflow hidden
        transition all .7s
        width 0
    
        //opacity 0
    
        position relative
    .page-1
        grid-column 1 / 2 
        grid-row 1 / 2
        order 2
    .page-2
        grid-column 1 / 2 
        grid-row 1 / 2
        order 1

    .side 
        //background var(--epsilon)// #fff
        position relative
    .side-2   
        //padding-top 3rem
    .page.one, .page.two
        height 100%
        transform rotateX(360deg)
        width 100%
    .shadows 
      height 100%
      position absolute 
      background: rgb(0,0,0);
      background linear-gradient(90deg,
      rgba(0,0,0,.35), rgba(0,0,0,.05), rgba(0,0,0,0) 100%)
      top 0
      width 4rem
      z-index 2
      //display none
    .shadow-2 
        left 0 
    button.toggle-btn 
        background var(--theta)
        //border-radius 1rem 0 0 1rem
        color var(--beta)
        font-size 1.4rem
        padding .5rem //1rem .5rem 1rem .5rem
        position absolute
        right 0
        top 50%
        transform translate(0, -50%)
        transition all .5s
        width 1.6rem
        word-wrap break-word 
        z-index 4
    @media(min-width 880px)
        .pages
            grid-template-columns 1fr 1fr
            //padding 1rem
        .page.page-1
            grid-column 1 / 2 
            grid-row 1 / 2
            height 100%
            order 2
            width 100%
        .page.page-2
            grid-column 2 / 3 
            grid-row 1 / 2
            height 100%
            order 2
            width 100%
        .side-1
            //clip-path: polygon(0 2%, 100% 0%, 100% 100%, 0 98%);
            //clip-path: polygon(0 0, 100% 2%, 100% 98%, 0% 100%);
        .side-2
            //clip-path: polygon(0 2%, 100% 0%, 100% 100%, 0 98%);
            //clip-path: polygon(0 0, 100% 2%, 100% 98%, 0% 100%); 
        .shadow-1
            right 0
            transform rotate(180deg)
        .shadow-2 
            left 0 
        .toggle-btn 
            display none
    </style>