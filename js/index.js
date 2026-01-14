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







// about

$(document).ready(function () {
    // 하단 썸네일 클릭 이벤트
    $('.ab-silde ul li').click(function() {
        var idx = $(this).index();

        // 1. 큰 이미지 변경 (fade 효과)
        $('.leftimg .ab-img1').stop().removeClass('active').css('opacity', 0);
        $('.leftimg .ab-img1').eq(idx).addClass('active').css('opacity', 1);

        // 2. 클릭한 썸네일 강조 효과
        $('.ab-silde ul li img').css('opacity', '0.5'); // 전체 흐리게
        $(this).find('img').css('opacity', '1');       // 클릭한 것만 진하게
    });

    // 초기 실행: 첫 번째 요소 강제 클릭 상태 만들기
    $('.ab-silde ul li').eq(0).trigger('click');
});


$(document).ready(function () {
    $(window).on('scroll', function() {
        $('.about').each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();

            // 섹션이 화면에 1/4 정도 보이기 시작할 때 실행 (수치 조정 가능)
            if (pos < winTop + winHeight - 150) {
                $(this).addClass('on');
            }
        });
    });

    // 페이지 로드 시점에 이미 해당 영역이 보이고 있다면 바로 실행
    $(window).trigger('scroll');
});







// infomation

$(document).ready(function () {
    // ... 기존 코드들 ...

    // [추가] Information 섹션 스크롤 애니메이션
    $(window).on('scroll', function() {
        var $infoSection = $('.infomation');
        if ($infoSection.length) {
            var pos = $infoSection.offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();

            // 섹션이 화면 하단에서 200px 정도 올라왔을 때 클래스 추가
            if (pos < winTop + winHeight - 200) {
                $infoSection.addClass('on');
            }
        }
    });

    // 초기 로드 시 체크
    $(window).trigger('scroll');
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

// 4. Facilities 슬라이드 (수정됨)
// index.js 내 Facilities 슬라이드 전체 코드



$(function() {
    const $facCon = $('.fac-con');
    const $facItems = $('.fac-item');
    const $facPager = $('.fac-footer .pager li');
    
    // 1. 무한 슬라이드용 복사본 생성
    if ($('.fac-item.clone').length === 0) {
        const $firstClones = $facItems.slice(0, 3).clone().addClass('clone');
        const $lastClones = $facItems.slice(-3).clone().addClass('clone');
        $facCon.append($firstClones).prepend($lastClones);
    }

    const totalActual = $facItems.length; // 원본 개수
    let facIdx = 0; 
    const itemWidth = 340 + 62; // 이미지 기본너비 + 간격
    let isAnimated = false;

    // 2. 이동 함수
    function moveFac(idx, isInstant = false) {
        if (isAnimated && !isInstant) return;
        isAnimated = true;

        const baseOffset = 400; // 화면 중앙 배치를 위한 보정값
        const moveX = -(idx + 3) * itemWidth + baseOffset; 

        if (isInstant) {
            $facCon.css({ 'transition': 'none', 'transform': `translateX(${moveX}px)` });
            updateStyle(idx);
            isAnimated = false;
        } else {
            // [중요] 이동 시작 '직전'에 스타일 업데이트 (그래야 동시에 변함)
            updateStyle(idx);

            $facCon.css({ 
                'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                'transform': `translateX(${moveX}px)` 
            });

            setTimeout(() => {
                // 무한 루프 구간 처리
                if (idx >= totalActual) {
                    facIdx = 0;
                    moveFac(facIdx, true);
                } else if (idx < 0) {
                    facIdx = totalActual - 1;
                    moveFac(facIdx, true);
                } else {
                    facIdx = idx;
                }
                isAnimated = false;
            }, 600);
        }
    }

    // 3. 중앙 아이템 스타일 업데이트 함수
    function updateStyle(idx) {
        const $allEntries = $('.fac-item');
        const centerPos = idx + 3;

        // 모든 아이템에서 center 클래스 제거
        $allEntries.removeClass('center');
        
        // 현재 중앙 위치 아이템에 center 클래스 추가
        // -> 이 동작이 CSS의 transition을 트리거합니다.
        $allEntries.eq(centerPos).addClass('center');

        // 페이저 활성화
        let pagerIdx = idx;
        if (idx >= totalActual) pagerIdx = 0;
        if (idx < 0) pagerIdx = totalActual - 1;
        $facPager.removeClass('active').eq(pagerIdx).addClass('active');
    }

    // 버튼 및 페이저 클릭 이벤트
    $('.fac-nav .right-a').on('click', function(e) { 
        e.preventDefault(); 
        moveFac(facIdx + 1); 
    });
    $('.fac-nav .left-a').on('click', function(e) { 
        e.preventDefault(); 
        moveFac(facIdx - 1); 
    });
    $facPager.on('click', function() { 
        moveFac($(this).index()); 
    });

    // 초기 실행
    moveFac(facIdx, true);
});











// event

// index.js 하단 혹은 $(document).ready 안에 추가

$(document).ready(function () {
    $(window).on('scroll', function() {
        // Event 섹션 감지
        var $eventSection = $('section.event');
        if ($eventSection.length) {
            var pos = $eventSection.offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();

            // 섹션이 화면에 20% 정도 나타나면 .on 클래스 부여
            if (pos < winTop + winHeight - 100) {
                $eventSection.addClass('on');
            }
        }
    });

    // 페이지 로딩 시 초기 체크
    $(window).trigger('scroll');
});
