

<script>
		export let img =false;
	let title  = true;
	export {title as class}
	export let para = false;
	export let list = false;
</script>

<div class="btn-wrap">
	<button
		class:img
		on:click|preventDefault={() => {
			img = !img;
			title = !title //false;
			para = false;
			list = false;
		}}
	>
		Edit image
	</button>
	<button
		class:title
		on:click|preventDefault={() => {
			title = !title;
			img = false;
			para = false;
			list = false;
		}}
	>
		Edit title
	</button>

	<button
		class:para
		on:click|preventDefault={() => {
			para = !para;
			img = false;
			title = false;
			list = false;
		}}
	>
		Edit paragraph
	</button>
	<button
		class:list
		on:click|preventDefault={() => {
			list = true; //!list
			img = false;
			title = false;
			para = false;
		}}
	>
		Edit List items
	</button>
	<slot />
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
button.img,button.title, button.para,  button.list 
	background var(--beta)
	color var(--gamma)
.dropdown.img,.dropdown.title,.dropdown.para, .dropdown.list
	opacity 1
	z-index 1
</style>
