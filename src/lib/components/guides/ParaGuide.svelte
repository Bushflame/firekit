<script>
export let title
</script>

<div class="guide">
    <h3>{title}</h3>
    <p>
        Paragraph text is optional. leave empty if you don't wish to use it. Paragragraphs can be
        used with or without the bullet lists. Maybe you want use it as a suubtitle to introduce the
        following bullet list.
    </p>
    <p>
        While line breaks will occur naturally, to start a new line yourself: click return / enter.
        Clicking return / enter twice will add extra space below, essentially creating a new
        paragraph.
    </p>
    <p>For readabilty, short sentences / line breaks are recommended.</p>

</div>

<style lang="stylus">
.guide 
    background var(--alpha) 
    border 1px solid var(--delta)
    border-radius 2rem
    color var(--delta)
    height fit-content //20rem
    padding 2rem 1rem 2rem
    position absolute
    top 0
    text-align center
    z-index 50
h3 
    color var(--delta)
    margin 0 auto 1rem
    text-align center
p 
    line-height 1.5
    margin-bottom 1rem

</style>