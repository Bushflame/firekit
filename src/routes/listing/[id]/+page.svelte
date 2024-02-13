<script>
// @ts-nocheck
	import Pages from '$lib/book/Pages.svelte'
	import Para from '$lib/building-views/Para.svelte';
	import Ul from '$lib/building-views/Ul.svelte';
	import Li from '$lib/building-views/FlatLi.svelte';
	import Title from '$lib/building-views/Title.svelte';
	import Sticker from '$lib/book/Sticker.svelte'
	import Glazed from '$lib/book/Glazed.svelte'
	import Quote from '$lib/book/Blockquote.svelte'
	import Bg_img from '$lib/book/BgImage.svelte'

	export let data;
	let l = data.listing;

</script>

<Pages tit_1={l.title_1a} tit_4={l.title_4a}>
	<span slot="slot-1a" class="slot-1a">
		<div class="img">
			<Bg_img bg_img={l.img_1a}/>
			<Glazed isTitle={true}>
				<Title title={l.title_1a} />
			</Glazed>
		</div>
		<div class="flex-box-bg">
			<img src={l.img_1a} alt="" class="slot-1a-img">
			{#if l.para_1a.length > 4}
				<div class="pad-lr">
					<Quote lg_first={true}><Para txt={l.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800"  /></Quote>
					<Glazed>
					<Ul>
						<Li item={l.li_1a} />
						<Li item={l.li_1b} />
						<Li item={l.li_1c}  />
					</Ul>
				</Glazed>
			</div>
			{/if}
	</div>
	</span>

	<span slot="slot-1b">
		<Bg_img bg_img={'/imgs/lab.jpg'}/>
		<div class="filter"></div>
		<div class="flex-box">
			<Glazed isTitle={false}>
				<h3>Contact Details</h3>
			<Para bold={'Contact Details'} --align="center" --margin=".2rem 1rem .3rem" hr={true} />
			<Para bold={'Name:'} txt={l.name} --align="left" --margin=".2rem 1rem .4rem  " flex={true} />
			<Para bold={'Email:'} txt={l.email} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
			<Para bold={'Tel::'} txt={l.tel} --align="left" --margin=".2rem 1rem .4rem " flex={true} />
			<Para
				bold={'FaceBook:'}
				txt={l.fbook}
				--align="left"
				--margin=".2rem 1rem .4rem "
				flex={true}
			/>
		</Glazed>
		<Glazed>
			<h3>Terms and Conditions</h3>
			<Para bold={'Terms and Conditions'} --align="center" --margin=".2rem auto .4rem " hr={true} />
			<Para txt={l.terms} --align="left" --margin=".2rem 1rem .3rem " />
		</Glazed>
	</div>
	</span>
<!-- ------------------------------------------------------------ -->	
	<span slot="slot-2a">
			<div class="img-tall">
			<Bg_img bg_img={l.img_2a}/>
			<Glazed isTitle={true}>
			<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
		</Glazed>
			</div>
	</span>

	<span slot="slot-2b">
		<Bg_img bg_img={l.img_2a} flip={true}/>
		<div class="filter"></div>
		<div class="flex-box">
			{#if l.para_1a.length > 4}
				<Quote><Para txt={l.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800" /></Quote>
			{/if}
			<Sticker>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800"  dark_txt={false}/>
			</Sticker>
			{#if l.li_1a.length > 4}
			<Glazed>
				<Ul >
					<Li item={l.li_1a} />
					{#if l.li_1b.length > 4}
					<Li item={l.li_1b} />
					{/if}
					{#if l.li_1c.length > 4}
					<Li item={l.li_1c}  />
					{/if}
					{#if l.li_1d.length > 4}
					<Li item={l.li_1d} />
					{/if}
					{#if l.li_1e.length > 4}
					<Li item={l.li_1e} />
					{/if}
				</Ul>
			</Glazed>
			{/if}
		</div>
	</span>
<!-- ------------------------------------------------------------ -->
	<span slot="slot-3a">
		<div class="img-tall">
			<Bg_img bg_img={l.img_2a}/>
			<Glazed isTitle={true}>
				<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
			</Glazed>
		</div>
	</span>

	<span slot="slot-3b">
		<Bg_img bg_img={l.img_2a} flip={true}/>
		<div class="filter"></div>
		<div class="flex-box">
			{#if l.para_1a.length > 4}
				<Quote><Para txt={l.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800" /></Quote>
			{/if}
			<Sticker>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800"  dark_txt={false}/>
			</Sticker>
			{#if l.li_1a.length > 4}
			<Glazed>
				<Ul >
					<Li item={l.li_1a} />
					{#if l.li_1b.length > 4}
					<Li item={l.li_1b} />
					{/if}
					{#if l.li_1c.length > 4}
					<Li item={l.li_1c}  />
					{/if}
					{#if l.li_1d.length > 4}
					<Li item={l.li_1d} />
					{/if}
					{#if l.li_1e.length > 4}
					<Li item={l.li_1e} />
					{/if}
				</Ul>
			</Glazed>
			{/if}
		</div>
</span>
<!-- ------------------------------------------------------------ -->
	<span slot="slot-4a">
		<!-- <Corners  img={l.img_2a } --width='400px' --height='100%'> -->
		<!-- <img src={l.img_2a} alt={l.title_2a} class="img" /> -->
		<!-- <Bg_img bg_img={'/imgs/lab.jpg'}/> -->
		<div class="img-tall">
		<Bg_img bg_img={l.img_2a}/>
		<Glazed isTitle={true}>
		<Title title={l.title_1a} --position={'absolute'} --color={'var(--theta)'} />
	</Glazed>
</div>
		<!-- </Corners> -->
	</span>
	<span slot="slot-4b">
		<Bg_img bg_img={l.img_2a} flip={true}/>
		<div class="filter"></div>
	
		<div class="flex-box">
			{#if l.para_1a.length > 4}
				<Quote><Para txt={l.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800" /></Quote>
			{/if}
			<Sticker>
				<Para txt={l.para_1a} --align="center" --margin="2rem auto .5rem" --weight="800"  dark_txt={false}/>
			</Sticker>
			{#if l.li_1a.length > 4}
			<Glazed>
				<Ul >
					<Li item={l.li_1a} />
					{#if l.li_1b.length > 4}
					<Li item={l.li_1b} />
					{/if}
					{#if l.li_1c.length > 4}
					<Li item={l.li_1c}  />
					{/if}
					{#if l.li_1d.length > 4}
					<Li item={l.li_1d} />
					{/if}
					{#if l.li_1e.length > 4}
					<Li item={l.li_1e} />
					{/if}
				</Ul>
			</Glazed>
			{/if}
		</div>
</span>
</Pages>

<!-- <svelte:head>
	<title>FireKit - {l.title_1a}</title>
</svelte:head> -->

<style lang="stylus">
@import '/src/lib/stylus/pages'
// .filter //styl
// 	background  rgba(0,0,0,.6)
// 	height 100%
// 	position absolute
// 	left 0
// 	top 0 
// 	width 100%
// 	z-index 1
// .flex-box
// 	display flex
// 	flex-direction column
// 	gap 2rem
// 	height 100% 
// 	padding 4rem 1rem
// 	position relative
// 	z-index 2
// .flex-box-bg //styl
// 	background var(--beta)
// 	background linear-gradient(var(--eta), var(--lambda))
// 	height 100%
// 	padding 1rem 0
// 	position relative
// .slot-1a-img //styl
// 	height 100%
// 	opacity .4
// 	position absolute
// 	left 0
// 	top 0
// 	width 100%
// 	z-index -1
// .img //styl
// 	display flex
// 	align-items end
// 	height 300px
// 	margin-bottom 1rem
// 	position relative
// .img-tall 
// 	border 1px solid rgba(0,0,0,.0)
// 	height 100%
// 	margin 0
// 	position relative
// 	top 0
// .pad-lr 
// 	padding 0 1rem

</style>
