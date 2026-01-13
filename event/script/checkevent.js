//checkevent.js

$(document).ready(function() {
    $('.btn').click(function(e) {
        e.preventDefault(); // 링크 기본 동작 방지

        // 아직 출석(active)하지 않은 첫 번째 li를 찾음
        // .active 클래스가 'display: none' 상태이므로 이를 보이게 만듭니다.
        const target = $('.check .week .box li').find('.active:hidden').first();

        if (target.length > 0) {
            target.show(); // active 이미지 보여주기
            // 만약 원본 이미지를 숨기고 싶다면:
            target.prev('img').hide(); 
            
            alert('출석이 완료되었습니다!');
        } else {
            alert('오늘은 출석을 완료하였습니다!');
        }
    });
});












