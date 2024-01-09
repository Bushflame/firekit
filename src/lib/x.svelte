<script>
	export let img_4a, title_4a;
	export let intro_4a;
	export let li_4a, li_4b, li_4c, li_4d;
</script>

<!-- svelte-ignore missing-declaration -->
<MainFrame
	form={{ ...data.listing, ...form }}
	imgErrMsg={form?.error_img_4a}
	formImg={form?.img_4a}
	imgStr={'img_4a'}
	titleErrMsg={form?.error_title}
	titleVal={form?.title_4a || ''}
	titleStr={'title_4a'}
	introErrMsg={form?.error_intro}
	introVal={form?.intro_4a || ''}
	introStr={'intro_4a'}
	li_1Val={form?.li_4a || ''}
	li_2Val={form?.li_4b || ''}
	li_3Val={form?.li_4c || ''}
	li_4Val={form?.li_4d || ''}
	li_1Str={'li_4a'}
	li_2Str={'li_4b'}
	li_3Str={'li_4c'}
	li_4Str={'li_4d'}
/>

<style lang="stylus">

</style>
