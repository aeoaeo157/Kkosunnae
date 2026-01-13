//index.js



$(document).ready(function(){
    // 메인메뉴 li에 마우스를 올렸을 때
    $('.gnb .depth01 > li').mouseenter(function(){
        // 현재 마우스가 올라간 li 안의 depth02만 슬라이드 다운
        $(this).find('.depth02').stop().slideDown(300);
    });

    // 메인메뉴 li에서 마우스가 벗어났을 때
    $('.gnb .depth01 > li').mouseleave(function(){
        // 현재 li 안의 depth02만 슬라이드 업
        $(this).find('.depth02').stop().slideUp(300);
    });
});