<script>
	import { slide, fade, fly, scale } from 'svelte/transition';
	let guide = '';
</script>

<div class="guide-wrap">
	<h3>Guides</h3>
	{#if guide === ''}
		<div class="btns">
			<button
				on:click={() => {
					guide = 'general';
				}}
			>
				General
			</button>
			<button
				on:click={() => {
					guide = 'img';
				}}
			>
				Image
			</button>
			<button
				on:click={() => {
					guide = 'title';
				}}
			>
				Title
			</button>
			<button
				on:click={() => {
					guide = 'para';
				}}
			>
				Text
			</button>
			<button
				on:click={() => {
					guide = 'list';
				}}
			>
				list
			</button>
			<button
				on:click={() => {
					guide = 'contact';
				}}
			>
				Contact
			</button>
		</div>
	{/if}
	<div class="guides">
		{#if guide === 'general'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>General guide</h3>
				<ul>
					<li>Use the buttons in the footer to navigate between pages</li>
					<li>
						At the top of each page you'll see the buttons to edit different different sections
					</li>
					<li>Edit / update your listing as often as you like</li>
					<li>
						Clicking the submit button will uplosd all pages. You don't hsve to submit every page
					</li>
					<li>The "My listing" button will open up your listing in a new window</li>
					<li>
						Clicking the "My URL" button will copy your listing URL for pasting into your social
						media accounts
					</li>
				</ul>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}

		{#if guide === 'img'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>Image guide</h3>
				<p>
					Your front page is what potential buyers will see when filtering by breed. A good option
					here would be an image of the litter. To prevent distortion, a landscape orientation is
					preferable.
				</p>
				<p>To prevent distortion, a landscape orientation is preferable.</p>
				<p>
					Inner pages require a portrait image. These are ideal for showing images of the parents.
				</p>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}

		{#if guide === 'title'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>Title guide</h3>
				<p>
					While only the first page is required, titles are required on every page you decide to
					use.
				</p>
				<p>
					The first page title helps visitors search for the desired breed. As such it should only
					contain the actual breed of the dog.
				</p>
				<p>
					On the secondary pages you may wish to discuss the parent's pedigree and so a short
					precise title will be helpful.
				</p>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}

		{#if guide === 'para'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>Text guide</h3>
				<p>
					Paragraph text is optional. leave empty if you don't wish to use it. Paragragraphs can be
					used with or without the bullet lists. Maybe you want use it as a suubtitle to introduce
					the following bullet list.
				</p>
				<p>
					While line breaks will occur naturally, to start a new line yourself: click return /
					enter. Clicking return / enter twice will add extra space below, essentially creating a
					new paragraph.
				</p>
				<p>For readabilty, short sentences / line breaks are recommended.</p>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}

		{#if guide === 'list'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>List guide</h3>
				<p>Bullet lists make descriptions easier to read and are often prefered by visitors</p>
				<p>
					As with paragraph text, bullet list items are optional and can be used with or without
					paragraph text. Leave any unwanted list items empty.
				</p>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}

		{#if guide === 'contact'}
			<div class="guide" in:fly={{ y: -200, duration: 400 }} out:fly={{ y: -200, duration: 400 }}>
				<h3>Contact guide</h3>
				<p>
					Only one method of contact is required. However: Providing more will give the potential
					buyer more confidence and assert trust.
				</p>
				<p>Your name will not be displayed but is a legal requirement.</p>
				<button
					class="close"
					on:click={() => {
						guide = '';
					}}>Close</button
				>
			</div>
		{/if}
	</div>
</div>

<style lang="stylus">
.guides 
	position relative
.guide
	background var(--beta)
	border-radius 1rem
	height 24rem
	padding 2rem 1rem
	position absolute
	left 50%
	top -7.5rem 
	transform translate(-50%)
	width 390px
.btns 
	display grid
	gap 1rem
	grid-template-columns 1fr 1fr 1fr
	justify-content space-between
	padding 0 .4rem
	width 100%
button 
	background var(--gamma)
	border 1px solid var(--epsilon)
	border-radius 1.2rem
	color var(--theta)
	font-size 1rem
	padding .5rem .8rem
button.close 
	display block
	margin 2rem auto
	width 8rem
h3 
	color var(--theta)
	margin-bottom .5rem
	text-align center
p 
	color var(--theta)
	line-height 1.5
ul 
	list-style none
li 
	color var(--theta)
	margin-bottom .3rem

</style>
