document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        btn = document.getElementById('menuBtn'),
        menu = document.getElementById('menu'),
        year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn?.addEventListener('click', () => menu?.classList.toggle('open'));
    menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));
    const els = document.querySelectorAll('.about-grid,.stack,.section-head,.project,.contact-grid');
    els.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver(
        (entries) =>
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('show');
                    observer.unobserve(e.target);
                }
            }),
        { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
});
