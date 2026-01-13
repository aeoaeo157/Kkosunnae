//rooms.js


$(document).ready(function () {
    $('.rooms .box').each(function () {
        var $thisBox = $(this);
        var $sliderUl = $thisBox.find('.gallery ul');
        var $topBtn = $thisBox.find('.top a');
        var $bottomBtn = $thisBox.find('.bottom a');

        // 초기 설정: 마지막 li를 첫 번째로 이동
        $sliderUl.find('li:last').prependTo($sliderUl);

        // 슬라이드 하나의 높이 구하기 (CSS에 설정된 650px)
        var liH = $sliderUl.find('li').height();
        
        // 초기 위치 조절
        $sliderUl.css('margin-top', -liH);

        // [수정] 위쪽 화살표 클릭 시: 이미지가 위로 올라가며 다음장 노출
        $topBtn.click(function (e) {
            e.preventDefault();
            if ($sliderUl.is(':animated')) return;

            $sliderUl.animate({
                marginTop: '-=' + liH // 마이너스 값으로 위로 밀어올림
            }, 600, function () {
                $sliderUl.find('li').first().appendTo($sliderUl);
                $sliderUl.css('margin-top', -liH);
            });
        });

        // [수정] 아래쪽 화살표 클릭 시: 이미지가 아래로 내려가며 이전장 노출
        $bottomBtn.click(function (e) {
            e.preventDefault();
            if ($sliderUl.is(':animated')) return;

            $sliderUl.animate({
                marginTop: '+=' + liH // 플러스 값으로 아래로 밀어내림
            }, 600, function () {
                $sliderUl.find('li:last').prependTo($sliderUl);
                $sliderUl.css('margin-top', -liH);
            });
        });
    });
});