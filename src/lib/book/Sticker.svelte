<script>

</script>

<div class="post-it">
    <slot/>
</div>

<style lang="stylus">
.post-it 
	background var(--gamma)// rgba(0,0,0,.03)
	background rgba(255,255,255,.7) 
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	position:relative
	overflow:hidden
	//margin:4rem auto 0
	padding: 2rem 20px 
	border-radius:0 0 0 30px/45px
	font-family: 'Permanent Marker', cursive
	//line-height:1.7rem
	font-size:19px
	color var(--theta)

.post-it:before 
	content:""
	display:block
	position:absolute
	width:20px
	height:25px
	background:rgba(0,0,0,.03)// var(--gamma)// #ffa;
	box-shadow 3px -2px 10px rgba(0,0,0,0.2),
	inset 15px -15px 15px rgba(0,0,0,0.3)
	left:0;
	bottom:0;
	z-index:2;
	transform:skewX(25deg)
</style>