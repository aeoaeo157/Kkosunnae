// facility.js


$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.facility .box').each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();

            // 화면 하단에서 200px 정도 들어왔을 때 애니메이션 실행
            if (pos < winTop + winHeight - 200) {
                $(this).addClass('on');
            }
        });
    });

    // 페이지 로드 시 스크롤 위치를 한 번 체크
    $(window).trigger('scroll');
});


