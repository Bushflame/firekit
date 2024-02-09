<script>
	let one = true;
	let two = false;
	let page_1 = true;
	let page_2 = false;
	let page_3 = false;
	let page_4 = false;
	export let toggleTxt = 'toggle';
	export let title = '';
	export let btnToSide = true;
	export let showPaginator = true;
</script>

<div class="wrap">
	<!-- <header> -->
	<button
		class="toggle-btn"
		class:btnToSide
		on:click={() => {
			one = !one;
			two = !two;
		}}
		>{#if one}
			{#if page_1}
				Contact
			{:else}
				Details
			{/if}
		{:else}
			Back
		{/if}
	</button>
	<!-- </header> -->
	<div class="pages">
		<!-- <div class="box-4"></div>
        <div class="box-5"></div> -->
		<!-- <div class="spine"></div> -->
		<section class="page" class:page_1>
			<!-- for edits-  usae ifs -->
			<!-- {#if 'challenge'} -->
			<div class="side side-1" class:one>
				<!-- <div class="box-2"></div> -->
				<div class="head"></div>
				<!-- <div class="box-3"></div> -->

				<!-- <h3>page 1 / 1a</h3> -->
				<slot name="slot-1a" />
			</div>
			<div class="shadows"></div>
			<!-- <div class="shadows shadow-2"></div> -->
			<div class="side side-2" class:two>
				<!-- <div class="box"></div> -->
				<!-- <div class="box-2"></div> -->

				<slot name="slot-1b" />
			</div>
			<!-- {:else} -->

			<!-- {/if} -->
		</section>

		<section class="page" class:page_2>
			<div class="side side-1" class:one>
				<slot name="slot-2a" />
			</div>
			<div class="side side-2" class:two>
				<slot name="slot-2b" />
			</div>
		</section>

		<section class="page" class:page_3>
			<div class="side side-1" class:one>
				<slot name="slot-3a" />
			</div>
			<div class="side side-2" class:two>
				<slot name="slot-3b" />
			</div>
		</section>

		<section class="page" class:page_4>
			<div class="side side-1" class:one>
				<slot name="slot-4a" />
			</div>
			<div class="side side-2" class:two>
				<slot name="slot-4b" />
			</div>
		</section>
	</div>
	<!-- <footer> -->
	{#if showPaginator}
		<div class="paginator">
			<button
				class:page_1
				on:click|preventDefault={() => {
					//close side 2 when navigating
					one = true;
					two = false;
					page_1 = true;
					page_2 = false;
					page_3 = false;
					page_4 = false;
				}}>1</button
			>
			<button
				class:page_2
				on:click|preventDefault={() => {
					one = true;
					two = false;
					page_1 = false;
					page_2 = true;
					page_3 = false;
					page_4 = false;
				}}>2</button
			>
			<button
				class:page_3
				on:click|preventDefault={() => {
					one = true;
					two = false;
					page_1 = false;
					page_2 = false;
					page_3 = true;
					page_4 = false;
				}}>3</button
			>
			<button
				class:page_4
				on:click|preventDefault={() => {
					one = true;
					two = false;
					page_1 = false;
					page_2 = false;
					page_3 = false;
					page_4 = true;
				}}>4</button
			>
		</div>
	{/if}
	<!-- </footer> -->
</div>

<style lang="stylus">
.box 
    //background var(--theta)
    border-left 5px solid rgba(0,0,0,.1)
    //border-right 15px solid rgba(0,0,0,.5)
    clip-path: polygon(0 1%, 20% 0, 19% 98%, 0 100%);
    //background: var(--delta) // linear-gradient(90deg, rgba(0,0,0,0.12648809523809523) 13%, rgba(0,0,0,0.12) 34%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.12) 65%, rgba(0,0,0,0.08) 88%)
    background repeating-linear-gradient( 90deg, #fff, #fff 3px, #000 3px, #000 6px)
    background repeating-linear-gradient( 90deg, rgba(0,0,0,0.40), rgba(0,0,0,0.40) 2px, rgba(0,0,0,0.30) 2px, rgba(0,0,0,0.30) 4px)
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    height: 758px
    opacity .5
    position absolute
    right -128px
    top -8px
    width: 130px
    //clip-path: polygon(0 3%, 26% 1%, 23% 97%, 0 100%)
.box-2
    background var(--gamma)
    //background: linear-gradient(90deg, rgba(0,0,0,0.12) 13%, rgba(0,0,0,0.38) 34%, rgba(0,0,0,0.46) 50%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.08) 88%)
    //border-left 15px solid blue //rgba(1,1,1,1)
    background repeating-linear-gradient( 180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20) 3px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 6px)
    clip-path: polygon(100% 90%, 90% 98%, 1% 100%, 0 96%);
    clip-path: polygon(0 96%, 100% 96%, 91% 100%, 8% 100%);
    height 152px
    position absolute
    left -9px
    top -153px
    ///transform rotate(-178deg)
    width 468px
    z-index -1
.box-3
    background var(--theta)
    background: linear-gradient(90deg, rgba(0,0,0,0.12648809523809523) 13%, rgba(0,0,0,0.38) 34%, rgba(0,0,0,0.46) 50%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.08) 88%)
    //border-left 15px solid blue //rgba(1,1,1,1)
    clip-path: polygon(100% 87%, 90% 98%, 0 100%, 0 96%);
    height 175px
    position absolute
    left -120px
    top 0px
    transform rotate(-178deg)
    width 438px
    //z-index -1
.box-4
    background var(--theta)
    background: linear-gradient(90deg, rgba(0,0,0,0.08) 3%, rgba(0,0,0,0.12) 3%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.12) 65%, rgba(0,0,0,0.08) 88%)
    //border-left 15px solid blue //rgba(1,1,1,1)
    clip-path: polygon(0 100%, 5% 95%, 100% 94%, 97% 100%);
    height 175px
    position absolute
    left 11px ///-120px
    top -173px
    //transform rotate(-178deg)
    width 894px
.box-5
    background var(--beta)
    //background: linear-gradient(90deg, rgba(0,0,0,0.12648809523809523) 13%, rgba(0,0,0,0.12) 34%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.12) 65%, rgba(0,0,0,0.08) 88%)
    //background orange
    //border-left 15px solid blue //rgba(1,1,1,1)
    clip-path: polygon(49% 2%, 0 0, 100% 0);    
    height 520px
    position absolute
    left 50%
    top -12px //-174px
    transform translate(-50%)
    width 856px

.wrap 
    //background red //var(--beta)
    //border 3px solid red
    height 100% 

    width 96%

button.toggle-btn 
    background var(--theta)
    border-radius 1rem 0 0 1rem
    color var(--beta)
    font-size 1.2rem
    padding 1rem .5rem 1rem .5rem
    position absolute
    right 0
    top 50%
    transform translate(0, -50%)
    transition all .5s
    width 1.4rem
    word-wrap break-word 
    z-index 4
.pages
    //background transparent
    //border 1px solid blue
    display grid 
    //gap 1rem
    //justify-content center
    grid-template-columns 1fr
    grid-template-rows 1
    height 100%
    //padding 1rem
    //position relative
    width calc(var(--globalWidth)  - 0px)
.page 
    //background var(--alpha)
    //box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    //border 4px solid green
    display grid
    //gap 1rem
    grid-template-columns 1fr
    grid-template-rows 1
    grid-column 1 / 2 
    grid-row 1 / 2
    height calc(var(--globalHeight) - 0rem)
    order 0
    opacity 0
    //position relative
    transform scale(.5)
    transition all .5s
    width 422px
.shadows 
    background: rgba(0,0,0,1);
    background: linear-gradient(90deg, 
    rgba(0,0,0,0) 0%, 
    rgba(0,0,0,0.08) 12%, 
    rgba(0,0,0,0.20) 35%,  
    rgba(0,0,0,.09) 50%,  
    rgba(0,0,0,0.20) 65%, 
    rgba(0,0,0,0.08) 88%, 
    rgba(0,0,0,0) 100%);
    height 100%
    position absolute 
    left 50% 
    top 0
    transform translate(-50%)
    width 4rem
    z-index 2
.shadow-2 
    transform rotate(180deg)

.page.page_1, .page.page_2, .page.page_3, .page.page_4
    grid-template-columns 1fr
    grid-template-rows 1fr
    order 1
    opacity 1
    width 100%

.head 
    background var(--theta)
    height 4rem
    margin-top 0
    opacity .3
    position absolute
    top 0
    width 100%
    z-index 2
.side-1, .side-2    
    background var(--alpha)
    display flex
    flex-direction column
    align-items center
    //justify-content center
    order 1
    width 100%
    //box-shadow inset 0 0 40px 20px var(--delta)

    //border 1rem solid var(--gamma)
    grid-column 1 / 3
    grid-row 1 / 2
    height 0 
    opacity 0
    overflow hidden
    transform scale(.5)
    transition all .5s
    //width 422px
    //width calc(var(--globalWidth) - 14px)  //100%
.side-1 
    order 2

.side-1::after 
    background var(--theta)
    //border-top 1px solid var(--theta)
    content ''
    height 4rem
    //opacity .4
    position absolute
    left 0 
    bottom 0
    right -4px
    //width 100%
.page_2 .side-1::before, .page_3 .side-1::before , .page_4 .side-1::before 
    background var(--theta)
    //border-top 1px solid var(--theta)
    content ''
    height 4rem
    opacity .3
    position absolute
    left 0 
    top 0
    width 100%
.page_2 .side-1::after , .page_3 .side-1::after , .page_4 .side-1::after 
    opacity .3
.side-2 

    display flex
    align-items center
    justify-content center
    order 1
    width 100%
    //clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%)
    display flex
    align-items center
    justify-content center
    order 1
    width 100%
.side-2::before, .side-2::after 
    background var(--theta)
    content ''
    height 4rem 
    position absolute
    left 0px
    width 100% //calc(100% - 34px)
.side-2::before
    top 0
.side-2::after
    bottom 0
    right 8px
.side-1.one
    //margin-left 0
    height  100%
    opacity 1
    transform scale(1)
    width 422px //100%
.side-2.two
    //margin-right 0rem
    display flex
    align-items center
    height 100%
    opacity 1
    transform scale(1)
    width 422px

.page.page_1, .page.page_2, .page.page_3, .page.page_4
    display grid
    grid-template-columns 1fr 1fr
    opacity 1
    transform scale(1)
    width 100%

.paginator 
    //border 1px solid red
    display flex 
    align-items center 
    justify-content center //space-between
    gap 1rem
    //padding .6rem
    position absolute //relative
    left 0 //-26%
    right 0
    //transform translate(25%)
    bottom .8rem
    width 100% //fit-content
    z-index 40
    button 
        background var(--beta) //transparent
        //border 1px solid var(--eta) 
        border-radius 50%
        color var(--eta)
        height 2rem 
        outline none
        transition all .5s
        width 2rem
button.page_1, button.page_2, button.page_3, button.page_4
    background var(--eta)
    color var(--beta)

@media(min-width 850px)
    .wrap 
        background #000 var(--iota)
    .page.page_1, .page.page_2
        grid-template-columns 1fr 1fr 
        //gap 8px
        //width calc(var(--globalWidth) - 5rem)

    .side-1.one,.side-2.two, .side-1,.side-2
        opacity 1
        transform scale(1)
    .side-1
        grid-column 1 / 2
        //margin-top 0
        order 1
        width 100%
    .side-2 
        grid-column 2 / 3
        height 100%
        //margin-right 0
        order 2
        width 100%


    .paginator
        left 0% //-26%
        //right 75%
        width 50%
    .toggle-btn 
        display none

</style>
