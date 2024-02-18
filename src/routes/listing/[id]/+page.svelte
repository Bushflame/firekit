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

<Pages>
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
				<!-- <div class="pad-lr"> -->
				<!-- <Quote lg_first={true}><Para txt={l.para_1a} --align="left" --margin="1rem auto .5rem" --weight="800"  /></Quote> -->
				<p>
					{l.para_1a}
				</p>
			{/if}
			{#if l.li_1a.length > 5}
				<Glazed>
					<Ul>
						<Li item={l.li_1a} />
						{#if l.li_1b.length > 5}
							<Li item={l.li_1b} />
						{/if}
						{#if l.li_1c.length > 5}
							<Li item={l.li_1c} />
						{/if}
					</Ul>
				</Glazed>
			{/if}
			<!-- </div> -->
			
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
			<Title title={l.title_2a} --position={'absolute'} --color={'var(--theta)'} />
		</Glazed>
			</div>
	</span>

	<span slot="slot-2b">
		<Bg_img bg_img={l.img_2a} flip={true}/>
		<div class="filter"></div>
		<div class="flex-box">
			{#if l.para_2a.length > 4}
				<Quote>
					<Para txt={l.para_2a} --align="left" --margin="1rem auto .5rem" --weight="800" />
					<!-- <p>{l.para_2a}</p> -->
				</Quote>
			{/if}
			{#if l.para_2b.length > 4}
			<Sticker>
				<Para txt={l.para_2b} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>
				<!-- <p>{l.para_2b}</p> -->
			</Sticker>
			
			{/if}
			<!-- {#if l.para_2c.length > 5}
				<Glazed>
					<Para txt={l.para_2c} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>					
				</Glazed>
				{/if} -->
				<!-- -------------------------------- -->
			{#if l.li_2a.length > 4}
			<Glazed>
				<Ul >
					<Li item={l.li_2a} />
					{#if l.li_2b.length > 4}
					<Li item={l.li_2b} />
					{/if}
					{#if l.li_2c.length > 4}
					<Li item={l.li_2c}  />
					{/if}
					{#if l.li_2d.length > 4}
					<Li item={l.li_2d} />
					{/if}
					{#if l.li_2e.length > 4}
					<Li item={l.li_2e} />
					{/if}
				</Ul>
			</Glazed>
			{/if}
		</div>
	</span>
<!-- ------------------------------------------------------------ -->
	<span slot="slot-3a">
		<div class="img-tall">
			<Bg_img bg_img={l.img_3a}/>
			<Glazed isTitle={true}>
				<Title title={l.title_3a} --position={'absolute'} --color={'var(--theta)'} />
			</Glazed>
		</div>
	</span>

	<span slot="slot-3b">
		<Bg_img bg_img={l.img_3a} flip={true}/>
		<div class="filter"></div>
		<div class="flex-box">
			{#if l.para_3a.length > 4}
				<Quote>
					<Para txt={l.para_3a} --align="left" --margin="1rem auto .5rem" --weight="800" />
					<!-- <p>{l.para_3a}</p> -->
				</Quote>
			{/if}
			{#if l.para_3b.length > 4}
			<Sticker>
				<Para txt={l.para_3b} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>
			</Sticker>
			{/if}
			{#if l.para_3c.length > 5}
				<Glazed>
					<Para txt={l.para_3c} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>					
				</Glazed>
				{/if}
				<!-- -------------------------------- -->
			{#if l.li_3a.length > 4}
			<Glazed>
				<Ul >
					<Li item={l.li_3a} />
					{#if l.li_3b.length > 4}
					<Li item={l.li_3b} />
					{/if}
					{#if l.li_3c.length > 4}
					<Li item={l.li_3c}  />
					{/if}
					{#if l.li_3d.length > 4}
					<Li item={l.li_3d} />
					{/if}
					{#if l.li_3e.length > 4}
					<Li item={l.li_3e} />
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
			{#if l.para_4a.length > 4}
				<Quote>
					<Para txt={l.para_4a} --align="left" --margin="1rem auto .5rem" --weight="800" />
				</Quote>
			{/if}
			{#if l.para_4b.length > 4}
			<Sticker>
				<Para txt={l.para_4b} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>
			</Sticker>
			{/if}
			{#if l.para_4c.length > 5}
				<Glazed>
					<Para txt={l.para_4c} --align="center" --margin="1rem auto .5rem" --weight="800"  dark_txt={false}/>					
				</Glazed>
				{/if}
				<!-- -------------------------------- -->
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
p 
	color var(--beta)
	font-size 1.2rem
	line-height 1.3
	margin var(--margin)
	white-space pre-wrap

</style>
