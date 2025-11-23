export const initSmoothScroll = () => {
    const header = document.querySelector('.header');
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    for (const anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                globalThis.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
};

export const initScrollToTop = () => {
    const scrollTopBtn = document.querySelector('.scroll-top');

    globalThis.addEventListener('scroll', () => {
        if (globalThis.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        globalThis.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};
