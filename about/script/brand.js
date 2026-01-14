//brand.js

// brand

$(window).on('scroll', function() {
    $('.brand .gallery ul li').each(function() {
        var pos = $(this).offset().top; // 각 리스트의 상단 위치
        var winTop = $(window).scrollTop(); // 현재 스크롤 위치
        var winHeight = $(window).height(); // 브라우저 높이

        // 화면 하단에서 150px 정도 올라왔을 때 애니메이션 실행
        if (pos < winTop + winHeight - 150) {
            $(this).addClass('on');
        }
    });
});

// 페이지 로드 시 이미 화면에 보이는 요소들을 위해 한번 실행
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