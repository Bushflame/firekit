<script>
export let title = ''
</script>

<div class="guide">
    <h3>{title}</h3>
    <p>
        While only the first page is required, titles are required on every page you decide to use.
    </p>
    <p>
        The first page title helps visitors search for the desired breed. As such it should only
        contain the actual breed of the dog.
    </p>
    <p>
        On the secondary pages you may wish to discuss the parent's pedigree and so a short precise
        title will be helpful.
    </p>
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