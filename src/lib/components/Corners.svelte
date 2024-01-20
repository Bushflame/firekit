<script>
</script>

<div class="corners">
	<div class="corner small top-left-corner" />
	<div class="corner small top-right-corner" />
	<div class="corner small bottom-right-corner" />
	<div class="corner small bottom-left-corner" />
	<slot />
</div>

<style lang="stylus">
.corners
    border 1px solid transparent
    box-shadow inset 0 0 40px 20px var(--gamma)
    height var(--height)
    margin auto
    //width calc(var(--globalWidth) - 4rem)
    padding 2rem 1rem
    position relative
    width 100% //10rem
    z-index 20
.corner 
    background var(--beta)
    color  var(--beta)
    position absolute
    z-index 4
.corner.small
    height 2rem
    width 2rem
.corner.top-left-corner
    border-right .4rem solid
    border-bottom .4rem solid
    border-radius 0 0 100% 0
    left 0
    top 0
.corner.top-right-corner
    border-left .4rem solid
    border-bottom .4rem solid// .spacer 
    border-radius 0 0 0 100%
    right 0
    top 0
.corner.bottom-right-corner
    border-left .4rem solid
    border-top .4rem solid
    border-radius 100% 0 0 0
    right 0
    bottom 0
.corner.bottom-left-corner
    border-right .4rem solid
    border-top .4rem solid
    border-radius 0 100% 0 0
    left 0
    bottom 0
</style>
