<script>

</script>

<div class="post-it">
    <slot/>
</div>

<style lang="stylus">
.post-it 
	background var(--delta-alpha)// rgba(0,0,0,.6)
	background-color rgba(255, 255, 255, .09)
	//background rgba(255,255,255,.7) 
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	color var(--beta)
	position:relative
	overflow:hidden
	//margin:4rem auto 0
	padding 1rem 1rem 1.5rem 
	border-radius:0 0 0 30px/45px
	//font-family: 'Permanent Marker', cursive
	//line-height:1.7rem
	font-size:16px
	//color red //var(--theta)

.post-it:before 
	content:""
	display:block
	position:absolute
	width:20px
	height:25px
	background:rgba(0,0,0,.05)// var(--gamma)// #ffa;
	box-shadow 3px -2px 10px rgba(0,0,0,0.4),
	inset 15px -15px 15px rgba(0,0,0,0.5)
	left:0;
	bottom:0;
	z-index:2;
	transform:skewX(25deg)
</style>