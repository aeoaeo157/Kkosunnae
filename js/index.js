//index.js

// 메인배너

$(document).ready(function () {
    // 1. 변수 및 슬라이드 복사 설정
    var $gallery = $('main .slide-box .gallery');
    var $pager = $('main .pager li');
    
    // 첫 번째 슬라이드(li)를 복사해서 맨 뒤에 붙이기 (자연스러운 무한 루프용)
    var $firstClone = $gallery.find('li').first().clone();
    $gallery.append($firstClone);

    var page = 0; // 현재 인덱스
    var realSlideCount = $gallery.find('li').length - 1; // 원본 이미지 개수 (5개)
    
    // 초기 페이저 색상 설정
    $pager.first().css('color', '#FAAD6D');

    // 2. 이동 함수 (setInterval 파일 로직 기반)
    function leftmove() {
        page++;
        moveSlider();
    }

    // 공통 이동 실행 함수
    function moveSlider() {
        var sliderWidth = $('.slide-box').width();

        $gallery.stop().animate({
            left: -(sliderWidth * page)
        }, 500, function () {
            // 마지막 복사본 이미지(6번째)에 도착하면 애니메이션 없이 실제 1번으로 순간이동
            if (page === realSlideCount) {
                $gallery.css('left', 0);
                page = 0;
            }
        });

        // 페이저 번호 계산 (마지막 복사본일 때는 0번 점을 활성화)
        var currentIdx = page;
        if (currentIdx === realSlideCount) {
            currentIdx = 0;
        }

        // 페이저 색상 업데이트
        $pager.css('color', 'white');
        $pager.eq(currentIdx).css('color', '#FAAD6D');
    }

    // 3. 자동 실행 (3초마다 무조건 실행)
    var autocall = setInterval(leftmove, 3000);

    // 4. 페이저 클릭 시 이동
    $pager.click(function () {
        page = $(this).index(); // 클릭한 인덱스로 page 번호 교체
        moveSlider();

        // 클릭 시 타이머 리셋 (클릭하자마자 다음장으로 넘어가는 현상 방지)
        clearInterval(autocall);
        autocall = setInterval(leftmove, 3000);
    });

    // 5. 브라우저 리사이즈 대응
    $(window).resize(function () {
        var sliderWidth = $('.slide-box').width();
        $gallery.css('left', -(sliderWidth * page));
    });
});








// rooms


$(function() {
    let currentIdx = 0;
    const $container = $('.rooms-con');
    const $items = $('.rooms-item');
    const $pager = $('.rooms .pager li');
    const slideCount = $items.length; // 4개
    const maxIdx = slideCount - 3; // 최대 이동 가능 인덱스 (1)

    function moveSlide(idx) {
        // 인덱스 범위 제한 (0 ~ 1)
        if (idx > maxIdx) idx = maxIdx;
        if (idx < 0) idx = 0;

        currentIdx = idx;
        
        // 이동 거리 = (아이템 너비 + gap 20px) * 인덱스
        const moveDistance = ($items.outerWidth() + 20) * currentIdx;
        $container.css('transform', 'translateX(' + (-moveDistance) + 'px)');
        
        // Pager 업데이트 (현재 슬라이드 위치에 맞게 강조)
        $pager.removeClass('active');
        $pager.eq(currentIdx).addClass('active');
    }

    // 화살표 클릭 이벤트
    $('.rooms-nav .right-a').on('click', function(e) {
        e.preventDefault();
        moveSlide(currentIdx + 1);
    });

    $('.rooms-nav .left-a').on('click', function(e) {
        e.preventDefault();
        moveSlide(currentIdx - 1);
    });

    // 페이저 클릭 이벤트 (모든 페이저 클릭 시 이동 가능 범위 내로 매칭)
    $pager.on('click', function() {
        const targetIdx = $(this).index();
        
        // 4개의 페이저 중 뒷번호를 눌러도 슬라이드는 마지막 위치(maxIdx)까지만 이동
        if(targetIdx >= maxIdx) {
            moveSlide(maxIdx);
        } else {
            moveSlide(targetIdx);
        }
        
        // 클릭한 페이저 자체는 활성화 표시
        $pager.removeClass('active');
        $(this).addClass('active');
    });
});











//  facilities 



