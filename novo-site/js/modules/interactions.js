// Torna o card de unidade inteiro clicável para WhatsApp
export const initUnidadeCardLinks = () => {
    const unidadeCards = document.querySelectorAll('.unidade-card.compact, .unidade-card.featured');
    for (const card of unidadeCards) {
        card.addEventListener('click', function (e) {
            const link = card.querySelector('a[href^="https://wa.me/"]');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = card.querySelector('a[href^="https://wa.me/"]');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    }
};
export const initCardHovers = () => {
    const cards = document.querySelectorAll('.produto-card, .horario-card, .unidade-card');

    for (const card of cards) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
};

export const initRippleEffect = () => {
    const buttons = document.querySelectorAll('.btn');

    for (const button of buttons) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
};

export const initTouchGestures = () => {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (diff > 0 && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };
};
