//brand.js


// gnb

$(document).ready(function(){
    // PC 버전: 마우스 호버 (윈도우 너비 1000px 이상일 때만 작동 권장)
    function gnbEvents() {
        var winWidth = $(window).width();
        
        // 이전에 걸려있던 이벤트 제거
        $('.gnb .depth01 > li').off();
        $('.menu-toggle').off();

        if (winWidth > 1000) {
            // PC용 호버 이벤트
            $('.gnb .depth01 > li').mouseenter(function(){
                $(this).find('.depth02').stop().slideDown(300);
            }).mouseleave(function(){
                $(this).find('.depth02').stop().slideUp(300);
            });
            
            // PC로 돌아올 때 메뉴 상태 초기화
            $('.gnb, .menu-toggle').removeClass('active');
        } else {
            // 모바일용 클릭 이벤트
            $('.menu-toggle').click(function(){
                $(this).toggleClass('active');
                $('.gnb').toggleClass('active');
            });

            // 모바일에서 서브메뉴는 기본적으로 보이거나, 
            // 필요에 따라 클릭 이벤트로 추가 제어 가능
        }
    }

    // 초기 실행 및 리사이즈 대응
    gnbEvents();
    $(window).resize(function(){
        gnbEvents();
    });
});



// brand
$(window).on('scroll', function() {
    var winTop = $(window).scrollTop();
    var winHeight = $(window).height();

    // brand 섹션 애니메이션
    $('.brand .gallery ul li').each(function() {
        var pos = $(this).offset().top;
        if (pos < winTop + winHeight - 150) {
            $(this).addClass('on');
        }
    });

    // bi 및 color 섹션 애니메이션
    $('.bi, .color').each(function() {
        var pos = $(this).offset().top;
        if (pos < winTop + winHeight - 200) {
            $(this).addClass('on');
        }
    });
});

// 페이지 로드 시 초기 상태 반영
$(window).trigger('scroll');







// bi

$(window).on('scroll', function() {
    // 1. 기존 브랜드 갤러리 애니메이션
    $('.brand .gallery ul li').each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        if (pos < winTop + winHeight - 150) {
            $(this).addClass('on');
        }
    });

    // 2. BI 섹션 애니메이션 추가
    $('.bi').each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        if (pos < winTop + winHeight - 200) { // 조금 더 일찍 나타나게 하려면 수치 조절
            $(this).addClass('on');
        }
    });
});

$(window).trigger('scroll');






// color

$(window).on('scroll', function() {
    // 1. 브랜드 갤러리 (기존 코드)
    $('.brand .gallery ul li').each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        if (pos < winTop + winHeight - 150) {
            $(this).addClass('on');
        }
    });

    // 2. BI 섹션 (기존 코드)
    $('.bi').each(function() {
        var pos = $(this).offset().top;
        if (pos < $(window).scrollTop() + $(window).height() - 200) {
            $(this).addClass('on');
        }
    });

    // 3. Color 섹션 애니메이션 추가
    $('.color').each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        if (pos < winTop + winHeight - 200) {
            $(this).addClass('on');
        }
    });
});

$(window).trigger('scroll');










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

