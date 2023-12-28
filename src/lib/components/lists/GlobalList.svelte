<script>

export let linkTo = ''
export let linkTxt = 'Link to text'

	/**
	 * @type {any[]}
	 */
export let items = ['item 1', 'item 2', 'item 3', 'item 4']
export let listTitle = 'List title'
</script>

<ul>
    <h3 >{listTitle}</h3>
    {#each items as item}
    <li>
        <div class="icon">
            <!-- <img src="/imgs/site/pug.png" alt="Pug's head"> -->
        </div>
        <span>{item}</span>
    </li>
    {/each}
    <a href={linkTo}>{linkTxt}<span>&#8250;</span></a>
</ul>

<style lang="stylus">
ul 
    //border 1px solid #fff
    display flex
    flex-direction column
    gap .4rem
    position relative
    width 18rem
h3
	font-weight bold
	text-align center //left
    

.outlined {
  color: var(--delta);
  letter-spacing 3px
  text-shadow:
    -1px -1px 0 var(--gamma),
     0   -1px 0 var(--gamma),
     1px -1px 0 var(--gamma),
     1px  0   0 var(--gamma),
     1px  1px 0 var(--gamma),
     0    1px 0 var(--gamma),
    -1px  1px 0 var(--gamma),
    -1px  0   0 var(--gamma);
}
li 
    border-bottom 1px solid var(--beta)
    display flex
    align-items center
    gap .4rem
    padding-bottom .1rem
.icon 
    background var(--beta)
    border-radius 50%
    //border 1px solid  var(--gamma)
    height .8rem
    //opacity .5
    width .8rem
span
    font-size 1rem
    color var(--delta)
a 
    background var(--delta)  //linear-gradient(to bottom left,var(--delta),  var(--gamma));

    color  var(--beta)
    display flex 
    justify-content space-between
    font-weight bold
    margin .2rem 
    padding .3rem .5rem .3rem 4rem
    position relative
    text-align center
    width calc(100% - (border-left / 2))
    span 
        color  var(--beta)
        font-size 3rem
        font-weight bold 
        position absolute
        right .4rem
        top 30%
        transform translate(0,-50%)

a::before
    background var(--beta)
    //border-right 4px solid  var(--alpha)
    content ''
    height 100% 
    position absolute
    left 0
    top 0
    width .8rem


a::after 
    background var(--beta)
    //border-right 4px solid  var(--alpha)
    content ''
    height 100% 
    position absolute
    left 1.2rem
    top 0
    width .2rem


</style>