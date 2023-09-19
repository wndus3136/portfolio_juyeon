/* new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: "#efc102"
}) */

$(function () {
    const btn = $('.lnb ul li')
    const page = $('.wrap > div')

    let index = 0
    let top = 0

    btn.click(function () {
        index = $(this).index()
        top = page.eq(index).offset().top

        $('html, body').stop().animate({
            scrolltop: top
        }, 1000)

    }) //lnb 메뉴 바에서 이동

    const indi = $('.indicate li')

    $('.indicate').css('top', $(window).height() / 2 - $('.indicate').height() / 2)



    $(window).scroll(function () {

        let point = $(this).scrollTop() + ($(window).height() / 2 - $('.indicate').height() / 2)

        $('.indicate').stop().animate({
            top: point
        }, 500)


        page.each(function () {
            let point = $(window).scrollTop()
            let index = $(this).index()

            if (point >= $(this).offset().top) {
                indi.removeClass('on')
                indi.eq(index).addClass('on')
            }
        })
    })

    indi.click(function () {
        let index = $(this).index()
        let top = page.eq(index).offset().top

        $('html, body').stop().animate({
            scrollTop: top
        }, 1000)
    }) //btn_click_event



    /*********************************************************/

    const $text = document.querySelector(".typing .text");
    const $tag = document.querySelector(".page1_tit .tag");

    // 글자 모음
    const textLetters = [
        "이 주 연",
    ];

    // 글자 입력 속도
    const textSpeed = 100;
    let textIndex = 0;

    // 타이핑 효과
    const typingText = async () => {
        const letter = textLetters[textIndex].split("");

        while (letter.length) {
            await wait(textSpeed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(900);

        // 지우는 효과
        removeText();
    }

    // 글자 지우는 효과
    const removeText = async () => {
        const letter = textLetters[textIndex].split("");

        while (letter.length) {
            await wait(textSpeed);
            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        textIndex = (textIndex + 1) % textLetters.length;
        typingText();
    }

    // 글자 모음
    const tagLetters = [
        "# 긍정적",
        "# 도전적",
        "# 끈기있는"
    ];

    // 글자 입력 속도
    const tagSpeed = 100;
    let tagIndex = 0;

    // 타이핑 효과
    const typingTags = async () => {
        const tag = tagLetters[tagIndex];
        let displayTag = "";

        for (let k = 0; k < tag.length; k++) {
            await wait(tagSpeed);
            displayTag += tag[k];
            $tag.textContent = displayTag;
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        removeTags();
    }

    // 글자 지우는 효과
    const removeTags = async () => {
        const tag = tagLetters[tagIndex];
        let displayTag = tag;

        for (let k = tag.length - 1; k >= 0; k--) {
            await wait(tagSpeed);
            displayTag = displayTag.slice(0, -1);
            $tag.textContent = displayTag;
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        tagIndex = (tagIndex + 1) % tagLetters.length;
        typingTags();
    }

    // 딜레이 기능 (마이크로초)
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typingText, 1500);
    setTimeout(typingTags, 1500);




    /*********************************************************/




    const tab1 = document.querySelector('#page_tab01')
    const tab2 = document.querySelector('#page_tab02')
    const tab3 = document.querySelector('#page_tab03')
    const tab4 = document.querySelector('#page_tab04')

    const pageBack = document.querySelector('#page_back')

    tab1.addEventListener('click', function () {
        pageBack.src = "./image/back_1.jpg"
    });

    tab2.addEventListener('click', function () {
        pageBack.src = "./image/back_2.jpg"
    });

    tab3.addEventListener('click', function () {
        pageBack.src = "./image/back_3.jpg"
    });

    tab4.addEventListener('click', function () {
        pageBack.src = "./image/back_4.jpg"
    });

    const templateParams = {
        name: 'juyeon',
    }


});



$(document).ready(function () {
    $('.Project_tab > li').click(function () {
        $('.Project_tab > li').removeClass('on')
        $(this).addClass('on')

        let i = $(this).index()

        $('.Project_sheet > li').fadeOut(0)
        $('.Project_sheet > li').eq(i).fadeIn()
    }) //sheet_tab

    $('.plan_tab > li').click(function () {
        $('.plan_tab > li').removeClass('choice')
        $(this).addClass('choice')

        let i = $(this).index()

        $('.plan_sheet > li').fadeOut(0)
        $('.plan_sheet > li').eq(i).fadeIn()
    }) //plan_tab

    $('.plan_tab3 > li').click(function () {
        $('.plan_tab3 > li').removeClass('choice3')
        $(this).addClass('choice3')

        let i = $(this).index()

        $('.plan_sheet3 > li').fadeOut(0)
        $('.plan_sheet3 > li').eq(i).fadeIn()
    }) //plan_tab3




})



const topButton = $('.top_btn');
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        topButton.fadeIn();
    } else {
        topButton.fadeOut();
    }
});

topButton.click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}); //top버튼

$('.wrap > div').mousewheel(function (event, delta) {

    if (delta > 0) { //스크롤을 위로 움직임
        let prev = $(this).prev().offset().top
        $('html, body').stop().animate({
            scrollTop: prev
        }, 1000)
    } else if (delta < 0) { //스크롤을 아래로 움직임
        let next = $(this).next().offset().top
        $('html, body').stop().animate({
            scrollTop: next
        }, 1000)
    }
}) //mousewheel_event




window.addEventListener('DOMContentLoaded', (event) => {
            const progress = document.querySelector('.right .progress');
            const progress1 = document.querySelector('.right1 .progress');
            const progress2 = document.querySelector('.right2 .progress');
            const progress3 = document.querySelector('.right3 .progress');
            const numb = document.querySelector('.numb');
            const numb1 = document.querySelector('.numb1');
            const numb2 = document.querySelector('.numb2');
            const numb3 = document.querySelector('.numb3');

            let counter = 50;
            let counter1 = 50;
            let counter2 = 50;
            let counter3 = 50;

            function startAnimation() {
                progress.style.animation = 'right 3s linear both';
                progress1.style.animation = 'right1 3s linear both';
                progress2.style.animation = 'right2 3s linear both';
                progress3.style.animation = 'right3 3s linear both';

                setInterval(() => {
                    if (counter === 95) {
                        clearInterval();
                    } else {
                        counter += 1;
                        numb.textContent = counter + '%';
                    }
                }, 62);

                setInterval(() => {
                    if (counter1 === 95) {
                        clearInterval();
                    } else {
                        counter1 += 1;
                        numb1.textContent = counter1 + '%';
                    }
                }, 62);

                setInterval(() => {
                    if (counter2 === 80) {
                        clearInterval();
                    } else {
                        counter2 += 1;
                        numb2.textContent = counter2 + '%';
                    }
                }, 62);

                setInterval(() => {
                    if (counter3 === 70) {
                        clearInterval();
                    } else {
                        counter3 += 1;
                        numb3.textContent = counter3 + '%';
                    }
                }, 62);
            } //게이지 숫자 증가

            function handleScroll() {
                const page2Element = document.getElementById('page2');
                const rect = page2Element.getBoundingClientRect();

                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    startAnimation();
                    window.removeEventListener('scroll', handleScroll);
                }
            }

            window.addEventListener('scroll', handleScroll);
            //page2가 되면 실행


            const circulars = document.querySelectorAll('.circular');
            const skillPages = document.querySelectorAll('.skill_page');
            const skilltext = document.querySelector('.skill_text');

            circulars.forEach((circular, index) => {
                circular.addEventListener('mouseover', () => {
                    skillPages[index].style.display = 'block';
                    skilltext.style.display = 'none';
                });

                circular.addEventListener('mouseout', () => {
                    skillPages[index].style.display = 'none';
                    skilltext.style.display = 'block';
                });
            }); //skill_hover text




            /*  */
            //plan_pop click close 
            document.querySelector('.plan_1').addEventListener('click', () => {
                document.querySelector('.plan_pop').style.display = 'block';
            });
            document.querySelector('.plan_pop_btn').addEventListener('click', () => {
                document.querySelector('.plan_pop').style.display = 'none';
            });
            /* plan_1 */

            document.querySelector('.plan_2').addEventListener('click', () => {
                document.querySelector('.plan_pop2').style.display = 'block';
            });
            document.querySelector('.plan_pop2_btn').addEventListener('click', () => {
                document.querySelector('.plan_pop2').style.display = 'none';
            });
            /* plan_2 */

            document.querySelector('.plan_3').addEventListener('click', () => {
                document.querySelector('.plan_pop3').style.display = 'block';
            });
            document.querySelector('.plan_pop3_btn').addEventListener('click', () => {
                document.querySelector('.plan_pop3').style.display = 'none';
            });
            /* plan_3 */

            document.querySelector('.plan_4').addEventListener('click', () => {
                document.querySelector('.plan_pop4').style.display = 'block';
            });
            document.querySelector('.plan_pop4_btn').addEventListener('click', () => {
                document.querySelector('.plan_pop4').style.display = 'none';
            });
            /* plan_4 */

        });


            $(document).ready(function () {
                $('input[name=submit]').click(function (event) {
                    event.preventDefault(); // 폼 제출을 방지합니다.

                    var name = $('input[name=name]').val();
                    var email = $('input[name=email]').val();
                    var message = $('textarea[name=message]').val();

                    if (name === '' || email === '' || message === '') {
                        alert('이름, 이메일, 메시지는 필수 입력 사항입니다.');
                    } else {
                        var templateParams = {
                            name: name,
                            email: email,
                            message: message,
                            phone: $('input[name=phone]').val()
                        };

                        emailjs.send("wndus3136@gmail.com", "template_m96llhh", templateParams)
                            .then(function (response) {
                                console.log('SUCCESS!', response.status, response.text);
                                alert('이메일이 성공적으로 전송되었습니다.');
                            }, function (error) {
                                console.log('FAILED...', error);
                                alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
                            });
                    }
                });
            });