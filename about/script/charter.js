// charater.js

// js/character.js
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // CSS 애니메이션 가동!
            }
        });
    }, { threshold: 0.3 }); // 섹션이 20% 보일 때 시작

    document.querySelectorAll('section.sunnae, section.kko').forEach(el => observer.observe(el));
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




