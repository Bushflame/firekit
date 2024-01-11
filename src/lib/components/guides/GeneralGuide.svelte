<script>
	export let title = '';
</script>

<div class="guide">
	<h3>{title}</h3>
	<!-- <p>At the top of each page you'll see the buttons to edit different different sections</p> -->
	<ul>
		<li>Use the buttons in the footer to navigate between pages.</li>
		<li>At the top of each page you'll see the buttons to edit different different sections</li>
		<li>Each page has a guide telling you more about that particular section</li>
		<li>Clicking the submit button will uplosd all pages. You don't hsve to submit every page</li>
	</ul>
</div>

<style lang="stylus">
.guide 
    background var(--alpha) 

    color var(--delta)
    //height  20rem
    padding 2rem 1rem 2rem
h3 
    color var(--delta)
    margin 0 auto 1rem
    text-align center
ul 
    list-style none
li 
    margin-bottom .6rem
</style>
