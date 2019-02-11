$(document).ready(() => {
    const $popUp = $('.pop--up'),
        $bigBox = $('#bigBox'),
        $wrapper = $('.wrapper');


    $bigBox.on('click', () => {
        TweenMax.set($popUp, {
            display: 'block'
        });
        TweenMax.set($('.fade'), {
            opacity: 0
        })
        TweenMax.from($('.fade'), 0.4, {
            opacity: 1
        })
        TweenMax.from($popUp, 0.5, {
            y: 200,
            opacity: 0,
            ease: Power1.easeIn
        });
        TweenMax.set($('section'), {
            display: 'none'
        })

    })

    $wrapper.on('click', () => {
        TweenMax.set($popUp, {
            display: 'none'
        });
        TweenMax.set($('.fade'), {
            opacity: 1
        })
        TweenMax.from($('.fade'), 0.4, {
            opacity: 0,
            ease: Power1.easeIn
        });
        TweenMax.set($('section'), {
            display: 'block'
        })
    })



    /**************************************************SECOND SECTION CLOCK ANIME */
    const $clockNum = $('.st2'),
        $straigtArm = $('#big--hand'),
        $clock = $('#red--hand'),
        $checkCircle = $('#check--circle'),
        $check = $('#check'),
        clockArray = [$straigtArm, $clock, $clockNum, $checkCircle, $check],
        clockTl = new TimelineMax({
            paused: true
        });

    TweenMax.set(clockArray, {
        display: 'block'
    });

    clockTl.from($('.center'), 0.5, {
            autoAlpha: 0,
            ease: Power1.easeIn
        })
        .staggerFrom($clockNum, 0.1, {
            opacity: 0,
            ease: Power1.easeIn
        }, 0.1)
        .from($straigtArm, 0.3, {
            drawSVG: '50% 50%',
            opacity: 0,
            strokeWidth: 120
        })
        .from($clock, 0.3, {
            drawSVG: '50% 50%',
            opacity: 0,
            stroke: 120,
            delay: 0.5
        })
        .to($straigtArm, 0.5, {
            rotation: 360,
            transformOrigin: "50% 100%"
        })
        .staggerTo($clockNum, 0.1, {
            opacity: 0,
            ease: Power1.easeIn
        }, 0.1)
        .set($('.hand'), {
            display: 'none'
        })
        .from($checkCircle, 0.5, {
            drawSVG: '50% 50%',
            fill: '#fff',
            strokeWidth: 100,
            opacity: 0,
            ease: Power1.easeIn
        })
        .from($check, 0.5, {
            opacity: 0,
            ease: Power1.easeIn
        });


    /************************************SETTINGS ********************/
    const $stCircles = $('.st3'),
        $cog = $('#cog'),
        $stCog = $('.st4'),
        $smallCirc = $('#small--circle'),
        $last = $('#circle--last'),
        $midCirc = $('#mid--circ'),
        $greenCircle = $('#green--circle'),
        $allCirc = [$stCircles, $cog, $smallCirc, $midCirc, $greenCircle, $last];
    TweenMax.set($allCirc, {
        display: 'block'
    });
    TweenMax.set($stCircles, {
        scale: 0,
        transformOrigin: 'center'
    })
    TweenMax.set($stCog, {
        fill: '#d84728'
    })
    TweenMax.set($smallCirc, {
        fill: '#fff'
    })



    let mysettingsTl = new TimelineMax({
        paused: true
    })
    mysettingsTl.from($greenCircle, 0.4, {
            drawSVG: '0',
            opacity: 0
        })
        .from($('#balls'), 0.5, {
            rotation: 360,
            scale: 1.2,
            opacity: 0,
            transformOrigin: 'center'
        }, '-=0.2')
        .to($('#balls'), 0.3, {
            scale: 0.9,
            transformOrigin: 'center'
        })
        .staggerFrom($stCircles, 0.4, {
            scale: 0.9,
            transformOrigin: 'center'
        }, 0.1)
        .to($greenCircle, 0.4, {
            drawSVG: '0'
        }, '-=0.3')
        .from($smallCirc, 0.3, {
            opacity: 0,
            scale: 0,
            transformOrigin: 'center'
        }, '-=0.5')
        .from($cog, 0.3, {
            rotation: 360,
            transformOrigin: 'center',
            opacity: 0
        }, '-=0.3')
        .to($smallCirc, 0.3, {
            fill: '#d84728'
        })
        .to($greenCircle, 0.3, {
            drawSVG: '100%',
            stroke: '#d84728'
        })
        .to([$cog, $smallCirc], 0.5, {
            rotation: 360,
            transformOrigin: 'center',
            opacity: 0
        })
        .set($last, {
            fill: '#d84728'
        })
        .to($greenCircle, 0.4, {
            drawSVG: '50%',
            opacity: 0,
            display: 'none'
        })
        .from($last, 0.4, {
            opacity: 0
        }, '-=0.4')









    /***************SCROLLMAJIC ************/
    const $section = $('.center');


    const controller = new ScrollMagic.Controller();

    let myScene = new ScrollMagic.Scene({
            triggerElement: '.center', //TARGETS ALL CHILDREN INDIVIDUALLY
            triggerHook: "onEnter",
            reverse: false
        })
        .setTween(clockTl.play()).addTo(controller);



    let sectionTwo = new ScrollMagic.Controller();
    let $grid = $('.grid');

    let $appear = TweenMax.from($grid, 0.4, {
        opacity: 0,
        ease: Power1.easeIn
    }).pause();

    let sceneTwo = new ScrollMagic.Scene({
            triggerElement: '.grid', //TARGETS ALL CHILDREN INDIVIDUALLY
            triggerHook: "onEnter",
            reverse: false
        })
        .setTween($appear.play()).addTo(sectionTwo);


    let sectionThree = new ScrollMagic.Controller();
    let sceneThree = new ScrollMagic.Scene({
            triggerElement: '#Security', //TARGETS ALL CHILDREN INDIVIDUALLY
            triggerHook: "onEnter",
            reverse: false
        })
        .setTween(mysettingsTl.play()).addTo(sectionThree);


    const sectionTexts = new ScrollMagic.Controller();
    let settingsThree = $('.section--3 .text');

    let $show = TweenMax.from(sectionTexts, 0.4, {
        opacity: 0,
        ease: Power1.easeIn
    }).pause();


    let sceneTween = new ScrollMagic.Scene({
            triggerElement: '.section--3 .text', //TARGETS ALL CHILDREN INDIVIDUALLY
            triggerHook: "onEnter",
            reverse: false
        })
        .setTween($show.play()).addTo(sectionTexts);



    /*****************************HARMBURGER MENU CLICK BUTTON *****************/

    let $wrapperIpad = $('.wrapper--ipad'),
        $allContents = $('.cover--wrapper'),
        $coverNav = $('.cover--nav');

    TweenMax.set($allContents, {
        display: 'block'
    });
    $wrapperIpad.on('click', () => {
        if ($wrapperIpad.hasClass('wrap')) {
            $wrapperIpad.removeClass('wrap').addClass('remove');
            TweenMax.set($('section'), {
                display: 'none'
            })
            TweenMax.set($allContents, {
                backgroundColor: '#ffffff'
            })
            TweenMax.set($coverNav, {
                display: 'block'
            });
            TweenMax.from($coverNav, 0.5, {
                y: -400, opacity: 0
            })


        } else if ($wrapperIpad.hasClass('remove')) {
            $wrapperIpad.removeClass('remove').addClass('wrap')
            TweenMax.set($('section'), {
                display: ''
            })

            TweenMax.set($allContents, {
                backgroundColor: 'none'
            })
            TweenMax.set($coverNav, {
                display: ''
            });
            
            TweenMax.from($coverNav, 0.5, {
                y: 0
            })
        }
    })

    /*
    let $wrapperIpad = $('.wrapper--ipad'),
        $allContents = $('.cover--wrapper');

    
     mediaSize()

    window.addEventListener('resize', mediaSize, false);


    function mediaSize() {

        if (window.matchMedia('(max-width: 970px)').matches) {

            $wrapperIpad.on('click', () => {
                if ($wrapperIpad.hasClass('wrap')) {
                    $wrapperIpad.removeClass('wrap').addClass('remove');
                    
                    console.log('clicked')

                    TweenMax.set($('section'), {
                        display: 'none'
                    })

                    $allContents.addClass('block')
                    $('.cover--nav').addClass('display')
                    $('.subscribe').addClass('navigation')
                    $('a, .drop-btn').addClass('drop')
                    $('.dropdown-content').addClass('contents')
                    //$('.uls').addClass('list')






                } else if ($wrapperIpad.hasClass('remove')) {
                    $wrapperIpad.removeClass('remove').addClass('wrap')
                    


                    $allContents.removeClass('block')
                    $('.cover--nav').removeClass('display')
                    $('.subscribe').removeClass('navigation')
                    $('a, .drop-btn').removeClass('drop')
                    $('.dropdown-content').removeClass('contents')







                    TweenMax.set($('section'), {
                        display: 'block'
                    })







                }
                
                return false;
                
            })









        } else {
             $wrapperIpad.removeClass('remove').addClass('wrap')
            $allContents.removeClass('block')
            $('.cover--nav').removeClass('display')
            $('.subscribe').removeClass('navigation')
            $('a, .drop-btn').removeClass('drop')
            $('.dropdown-content').removeClass('contents')
        }



    }
   

    */








})
