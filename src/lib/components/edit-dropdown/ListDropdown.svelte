<script>
	let item_1 = true;
	let item_2 = false;
	let item_3 = false;
	let item_4 = false;
	let item_5 = false;
	export let li_1Str = '',
		li_2Str = '',
		li_3Str = '',
		li_4Str = '',
		li_5Str = '';
	export let li_1Val = '',
		li_2Val = '',
		li_3Val = '',
		li_4Val = '',
		li_5Val = '';
</script>

<div class="list-wrap">
	<div class="btns">
		<button
			type="button"
			class:item_1
			on:click={() => {
				item_1 = !item_1;
				item_2 = false;
				item_3 = false;
				item_4 = false;
				item_5 = false;
			}}
		>
			Item 1
		</button>

		<button
			type="button"
			class:item_2
			on:click={() => {
				item_1 = false;
				item_2 = !item_2;
				item_3 = false;
				item_4 = false;
				item_5 = false;
			}}
		>
			Item 2
		</button>

		<button
			type="button"
			class:item_3
			on:click={() => {
				item_1 = false;
				item_2 = false;
				item_3 = !item_3;
				item_4 = false;
				item_5 = false;
			}}
		>
			Item 3
		</button>

		<button
			type="button"
			class:item_4
			on:click={() => {
				item_1 = false;
				item_2 = false;
				item_3 = false;
				item_4 = !item_4;
				item_5 = false;
			}}
		>
			Item 4
		</button>

		<button
			type="button"
			class:item_5
			on:click={() => {
				item_1 = false;
				item_2 = false;
				item_3 = false;
				item_4 = false;
				item_5 = !item_5;
			}}
		>
			Item 5
		</button>
	</div>
	<ul class="items">
		<li class=" item" class:item_1>
			<label for={li_1Str}>List item 1</label>
			<textarea cols="30" name={li_1Str} id={li_1Str} class="form-control" value={li_1Val} />
		</li>

		<li class="item" class:item_2>
			<label for={li_2Str}>List item 2</label>
			<textarea cols="30" name={li_2Str} id={li_2Str} class="form-control" value={li_2Val} />
		</li>

		<li class="item" class:item_3>
			<label for={li_3Str}>List item 3</label>
			<textarea cols="30" name={li_3Str} id={li_3Str} class="form-control" value={li_3Val} />
		</li>
		<li class="item" class:item_4>
			<label for={li_4Str}>List item 4</label>
			<textarea cols="30" name={li_4Str} id={li_4Str} class="form-control" value={li_4Val} />
		</li>

		<li class="item" class:item_5>
			<label for={li_5Str}>List item 5</label>
			<textarea cols="30" name={li_5Str} id={li_5Str} class="form-control" value={li_5Val} />
		</li>
	</ul>
</div>

<style lang="stylus">
label 
    color var(--theta)
    display block
    margin .4rem 0
textarea
    background transparent
    border 1px solid var(--delta) 
    border-radius 1rem 
    color var(--theta)
    font-family Times
    font-size 1rem
    height 6rem
    line-height 1.5
    outline none
    padding .2rem .4rem
    position relative
    width 20rem
    z-index 10
.list-wrap 
    height 10rem
    width 20rem
.btns 
    display flex
    gap .5rem
    justify-content space-between
    margin-top 3rem
    3rem
    width 100%
button 
    background var(--beta)
    border 1px solid var(--theta)
    border-radius 1rem
    color var(--theta)
    padding .2rem
    width 4rem
.items 
    position relative
.item
    height 0
    overflow hidden
    position absolute
    transition all .5s
    z-index -1

.item.item_1,.item.item_2,.item.item_3,.item.item_4,.item.item_5
    height 8rem
    z-index 1
button.item_1,button.item_2,button.item_3,button.item_4,button.item_5
    background var(--theta)
    color var(--beta)
</style>
