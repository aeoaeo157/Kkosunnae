//brand.js


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