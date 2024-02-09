<script>

</script>

<div id="wrapper">
    <div id="container">

        <section class="open-book">
            <header>
                <h1>Book Layout</h1>
                <h6>Erin E. Sullivan</h6>
            </header>
           
            <article>
                 <img src="/imgs/alsation-dog-1.jpg" alt="">
                <!-- <h2 class="chapter-title">Waiting on projects</h2> -->
                <p>
                    Sublime Text 2 was opened and a new document was created. "I love this time of year," Erin gleefully thought to herself.
                </p>
                <p>
                    The "time of year" that is being referenced relates to Erin's job when the pile of projects temporarily slow down. This doesn't happen to just her. The reduction of work happens to many, but at various times throughout the year, depending on their position. She could submit to boredom and brainlessly surf the Internet, but this particular developer decided to take advantage of the situation.
                </p>
                <p>
                    Erin brainstorms on ideas that are both fun and can strengthen her development skills. After all, however she spends her free time at work should be used in a way that becomes helpful for future projects.
                </p>
      
             


            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>


<style lang='stylus' >
*,
:before,
:after {
    box-sizing: border-box;
}

body {
    background-color: #1d1f20;
    color: #e5e5e5;
    font: 16px/1.25 'Crimson Text', sans-serif;
    margin: 0;
}

#wrapper {
    margin-left: auto;
    margin-right: auto;
    //max-width: 80em;
}

#container {
    background grey
    float: left;
    padding: 1em;
    //width: 100%;
}




.open-book {
    background: #fff;
    box-shadow: rgba(0,0,0,0.5) 0 1em 3em;
    color: #000;
    padding: 2em;
}

.open-book * {
    position: relative;
}


.open-book *::-moz-selection {
    background: rgba(222,255,0,0.75);
}

.open-book *::selection {
    background: rgba(222,255,0,0.75);
}


.open-book header {
    padding-bottom: 1em;
}

.open-book header *,
.open-book footer * {
    font: 700 1em/1.25 'Playfair Display', sans-serif;
    letter-spacing: 0.125em;
    margin: 0;
}

.open-book header * {
    font-size: 0.75em;
    text-transform: uppercase;
}

.open-book footer {
    padding-top: 1em
}

.open-book footer #page-numbers {
    display: none;
    list-style: none;
    padding: 0;
    text-align: left;
}

.open-book footer #page-numbers > li:last-child {
    text-align: right;
}


/* Body Copy */
.open-book article {
    line-height: 1.5;
}












@media only screen and ( min-width: 50em ) {

    .open-book {
        margin: 1em;
        position: relative;
    }

    .open-book:before {
        background-color: #8B4513;
        border-radius: 0.25em;
        bottom: -1em;
        content: '';
        left: -1em;
        position: absolute;
        right: -1em;
        top: -1em;
        z-index: -1;
    }

    .open-book:after {
        background: linear-gradient(to right, transparent 0%,rgba(0,0,0,0.2) 46%,rgba(0,0,0,0.5) 49%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.5) 51%,rgba(0,0,0,0.2) 52%,transparent 100%);
        bottom: -1em;
        content: '';
        left: 50%;
        position: absolute;
        top: -1em;
        transform: translate(-50%,0);
        width: 4em;
        z-index: 1;
    }

    .open-book > * {
        column-count: 2;
        column-gap: 6em;
        position: relative;
        z-index: 1;
    }


    .open-book header:before,
    .open-book header:after,
    .open-book footer:before,
    .open-book footer:after {
        background: #fff;
        border-radius: 25%;
        content: '';
        height: 2em;
        position: absolute;
        z-index: -1;
        width: calc(50% + 2em);
    }

    .open-book header:before,
    .open-book footer:before,
    .open-book footer:after {
        border-top-left-radius: 0;
    }

    .open-book header:after,
    .open-book footer:before,
    .open-book footer:after {
        border-top-right-radius: 0;
    }

    .open-book header:before,
    .open-book header:after,
    .open-book footer:after {
        border-bottom-right-radius: 0;
    }

    .open-book header:before,
    .open-book header:after,
    .open-book footer:before {
        border-bottom-left-radius: 0;
    }

    .open-book header:before,
    .open-book header:after {
        top: -2.65em;
    }

    .open-book header:before,
    .open-book footer:before {
        right: 50%;
    }

    .open-book header:before {
        transform: rotate(-2deg);
    }

    .open-book header:after,
    .open-book footer:after {
        left: 50%;
    }

    .open-book header:after {
        transform: rotate(2deg);
    }

    .open-book footer:before,
    .open-book footer:after {
        bottom: -2.65em;
    }

    .open-book footer:before {
        transform: rotate(2deg);
    }

    .open-book footer:after {
        transform: rotate(-2deg);
    }

    // .open-book header > *:last-child,
    // .open-book footer > *:last-child {
    //     text-align: right;
    // }

    .open-book footer #page-numbers {
        display: block;
    }

 


    .open-book .chapter-title:before,
    .open-book .chapter-title:after {
        height: 0.125em;
    }

  


}
</style>