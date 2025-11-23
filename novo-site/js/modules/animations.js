export const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        }
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    for (const el of elements) {
        observer.observe(el);
    }
};

export const initCounterAnimation = () => {
    const counters = document.querySelectorAll('.stat-number');
    const counterSpeed = 200;

    const animateCounter = (counter) => {
        const target = +counter.dataset.count;
        const increment = target / counterSpeed;
        let count = 0;
        
        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        }
    }, { threshold: 0.5 });

    for (const counter of counters) {
        counterObserver.observe(counter);
    }
};

export const initParallax = () => {
    globalThis.addEventListener('scroll', () => {
        const scrolled = globalThis.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroImage && scrolled < globalThis.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
};
