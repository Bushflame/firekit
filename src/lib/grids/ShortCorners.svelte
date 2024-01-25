<script>
export let img = ''
</script>

<div class="grid">
    <img src={img} alt="">
    <div class="filter"><slot/></div>
    <div class="corner a"/>
    <div class="corner b"/>
    <div class="corner c"/>
    <div class="corner d"/>
</div>

<style lang="stylus">
// half page size
// calcs based on header 64px footer 64px page padding 16px x 2 gap 16px / 2
.grid
    background var(--gamma)
    display  grid
    grid-template-columns 2rem 1fr 2rem
    grid-template-rows 2rem 1fr 2rem
    height calc((var(--globalHeight) - 172px) / 2)
    margin auto
    // to create gap whe stacking
    margin-bottom var(--mb)
    position relative
    width calc(var(--globalWidth) - 32px)
.corner 
    background var(--gamma)
.img, .filter,img
    grid-column 1 / 4
    grid-row 1 / 4

.filter 
    box-shadow inset 0 0 40px 20px var(--delta)
    display flex 
    align-items center
    flex-direction column
    justify-content center
.a
    border-radius 0 0 100% 0
    grid-column 1 / 2
    grid-row 1 / 2

.b
    border-radius 0 0 0 100% 
    grid-column 3 / 4
    grid-row 1 / 2

.c
    border-radius 100% 0 0 0
    grid-column 3 / 4
    grid-row 3 / 4

.d
    border-radius 0  100% 0 0
    grid-column 1 / 2
    grid-row 3 / 4


img 
    height 100% 
    object-fit cover
    width 100%
@media(min-width 880px)
    .grid 
        //height calc(var(--globalHeight) - 160px)   // 100% //var(--wHeight)
        width calc(var(--globalWidth) / 2 - 24px)
</style>