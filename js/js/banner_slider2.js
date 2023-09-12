$(function() {

    const eleWidth = $('.frame ul li').innerWidth()
    let state = false
    let playOn = false
    let direction = 'left'
    let bannerAuto

    function play() {
        if(!playOn) {
            playOn = true
            bannerAuto = setInterval(function(){
                if(direction === 'left') {
                    $('.prev').click()
                } else {
                    $('.prev').click()
                } 
            }, 2000)
        }
        if(playOn) {
            $('.frame li a').mouseover(function() {
                stop()
            })
        }
    } //play()

    function stop() {
        if(playOn) {
            playOn = false
            clearInterval(bannerAuto)
        }
        $('.frame li a').mouseout(function() {
            play()
        })
        $('.frame li a').click(function(){
            location.href
        })
    } //stop()

    function left(){
        stop()
        direction = 'left'
        $('.frame ul').animate({left: eleWidth * -1}, 500, function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'))
            $(this).css('left', 0)
            state = false
            play()
        })
    } //left()

    function right() {
        stop()
        direction = 'right'
        $('.frame ul li:last').insertBefore($('.frame ul li:first'))
        $('.frame ul').css('left', eleWidth * -1)
        $('.frame ul').animate({left:0}, 500, function() {
            state = false
            play()
        })
    } //right()

    $('.prev').click(function() {
        if(!state) {
            state = true
            left()
        }
    }) //prev_btn_click_event

    $('.next').click(function() {
        if(!state) {
            state = true
            right()
        }
    }) //next_btn_click_event

    $('.stop').click(function() {
        stop()
    }) //stop_btn_click_event


    $('.play').click(function() {
        play(0)
    }) //play_btn_click_ebent


    $('.play').click() //초기 강제 자동실행(이벤트 실행)

}) //jquery_function