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








