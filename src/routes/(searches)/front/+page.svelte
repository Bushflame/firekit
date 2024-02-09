<script>
</script>

<div class="rack">

  <div class="back">
    <div class="inner-pages inner-pages-1"></div>
    <div class="inner-pages inner-pages-2"></div>
    <div class="inner-pages inner-pages-3"></div>
    <div class="back-shadow"></div>
  </div>
	<div class="magazine">
		<div class="shadows"></div>
    <div class="page">
      <div class="side side-1">
        <img src="/imgs/alsation-dog-1.jpg" alt="">
      </div>
      <div class="side side-2"></div>
    </div>

		<!-- <div class="shadows shadow-2"></div> -->
	</div>
</div>

<style lang="stylus">
.page 
  display grid 
  grid-template-columns 1fr 1fr
  height 100%
.side 
  height 100%
img 
  height 100%
.rack 
  border 1px solid #000
  height 100%
  display flex 
  align-items center
  //justify-content center
  overflow hidden
  position relative
  width 100%
.magazine
  align-self end
  background #fff
  border-left 5px solid var(--iota)
  height 97.5%
  position relative
  width 97.5%
  z-index 2
.back 
  align-self top
  background var(--iota)
  border 2px solid var(--kappa)
  border-radius 2.4rem 0 0 0 
  height 97.5%
  position absolute
  right 0
  top 0
  width 100% 

.inner-pages 
  background var(--iota)
  border 2px solid grey //var(--kappa)
  border-radius 2.4rem 0 0 0 
  height 99.5%
  position absolute
  width 99%
  z-index 1
.inner-pages-1 
  right .5%
  top .5%
.inner-pages-2 
  right 1%
  top 1%
.inner-pages-3 
  right 1.5%
  top 1.5%
.back-shadow
  background: linear-gradient(90deg, 
  rgba(0,0,0,0.05) 5%,
  rgba(0,0,0,0.07) 10%, 
  rgba(0,0,0,0.13) 15%, 
  rgba(0,0,0,0.25) 25%, 
  rgba(0,0,0,0.35) 45%, 
  rgba(0,0,0,0.55) 65%, 
  rgba(0,0,0,0.6.5) 70%, 
  rgba(0,0,0,0.7) 85%, 
  rgba(10,9,9,0.95) 95%, 
  )
  height 100%
  position absolute 
  top 0
  width 40rem

.magazine::before, .magazine::after, .back::before, .back::after
  content ''
  //background var(--iota)
  height 4rem
  position absolute
  left 0
  width 100%
  z-index 0
.back::before 
  border-radius 2.4rem 0 0 0 

.magazine::after, .back::after  
  bottom 0
.magazine::after 
  z-index 2
.shadows 
  top 0
  width 4rem
  z-index 200

.shadows 
  background: rgb(0,0,0);
  background: linear-gradient(90deg, 
  rgba(10,9,9,0.95) 5%, 
  rgba(10,9,9,0.85) 10%, 
  rgba(0,0,0,0.7) 15%, 
  rgba(0,0,0,0.6.5) 25%, 
  rgba(0,0,0,0.55) 45%, 
  rgba(0,0,0,0.35) 65%, 
  rgba(0,0,0,0.25) 70%, 
  rgba(0,0,0,0.13) 85%, 
  rgba(0,0,0,0.07) 90%, 
  rgba(0,0,0,0.05) 95%, 
  rgba(0,0,0,0) 100%)
  height 100%
  position absolute 
  left -6px
  top 0
  width 100% //4rem
  z-index 200
</style>
