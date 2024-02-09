<script>

</script>

<div class="frame">
    <div class="back"><h1>hello world</h1></div>
</div>

<style lang="stylus">

.frame 
    background blue
    //display none
    height 600px //100%
    perspective: 100px;
    perspective-origin: top right;
    transform-style: preserve-3d;
    width 600px //100%
.back 

    background grey
    height 600px //100%
    transform: translateX(-16px) rotateY(359deg);
    transform-style: preserve-3d;
    //transform: translateX(-30px) rotate(2deg);
    width 100%
</style>