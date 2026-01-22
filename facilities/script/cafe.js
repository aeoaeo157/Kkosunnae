//cafe.js 

// $(document).ready(function () {

//     $('.human .gallery ul:last').prependTo('.human .gallery');

//     var liW = $('.human .gallery').width();

//     $('.human .gallery').css('margin-right', -liW);

//     $('.human .btn .right a').click(function (e) {

//         e.preventDefault();

//         $('.human .gallery').stop().animate({
//             marginLeft: '-=' + liW
//         }, 800, function () {
//             $('.human .gallery ul').first().appendTo('.human .gallery');
//             $('.human .gallery').css('margin-left', -liW);
//         });
//     });

//     $('.human .btn .left a').click(function (evt) {
//         evt.preventDefault();

//         $('.human .gallery').stop().animate({
//             marginLeft: '+=' + liW
//         }, 800, function () {
//             $('.human .gallery ul:last').prependTo('.human .gallery');
//             $('.human .gallery').css('margin-left',-liW);
//         });
//     });


// });



$(document).ready(function () {
    // 변수 설정
    const $gallery = $('.human .gallery'); // 움직일 대상
    const $pager = $('.human .pager li');   // 페이저 버튼들
    const slideW = 1280;                    // 한 번에 이동할 너비
    let currentIdx = 0;                     // 현재 인덱스
    const slideCount = $('.human .gallery ul').length; // 슬라이드 개수 (3개)

    // 슬라이드 이동 함수
    function moveSlide(idx) {
        // 인덱스 범위 제한 (0 ~ 2)
        if (idx < 0) idx = 0;
        if (idx >= slideCount) idx = slideCount - 1;

        currentIdx = idx;

        // 마진값을 계산하여 이동 (예: 0, -1280, -2560)
        $gallery.stop().animate({
            marginLeft: -(currentIdx * slideW)
        }, 600);

        // 페이저 업데이트 (index.js 스타일)
        $pager.css('color', '#b8b8b8'); // 기본색
        $pager.eq(currentIdx).css('color', '#FAAD6D'); // 활성색
    }

    // 초기 상태 설정
    $pager.eq(0).css('color', '#FAAD6D');

    // 오른쪽 버튼 클릭
    $('.human .btn .right a').on('click', function (e) {
        e.preventDefault();
        if (currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
        } else {
            moveSlide(0); // 마지막이면 처음으로 루프 (선택사항)
        }
    });

    // 왼쪽 버튼 클릭
    $('.human .btn .left a').on('click', function (e) {
        e.preventDefault();
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else {
            moveSlide(slideCount - 1); // 처음이면 마지막으로 루프 (선택사항)
        }
    });

    // 페이저 클릭 이벤트 (index.js와 동일)
    $pager.on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        moveSlide(idx);
    });
});











//top 스크롤

/* --- Top 스크롤 버튼 기능 (이미지 버전) --- */
$(document).ready(function() {
    const $scrollBtn = $('#scrollTopBtn');

    // 스크롤 위치 감지 (300px 이상 내려오면 보임)
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $scrollBtn.fadeIn();
        } else {
            $scrollBtn.fadeOut();
        }
    });

    // 버튼 클릭 시 최상단으로 부드럽게 이동
    $scrollBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
});











