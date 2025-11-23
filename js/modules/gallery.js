export const initGalleryLightbox = () => {
    const galeriaItems = document.querySelectorAll('.galeria-item');

    for (const item of galeriaItems) {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close" aria-label="Fechar">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => lightbox.classList.add('active'), 10);
            
            const close = () => {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }, 300);
            };
            
            lightbox.querySelector('.lightbox-close').addEventListener('click', close);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) close();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') close();
            });
        });
    }
};

export const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                delete img.dataset.src;
                imageObserver.unobserve(img);
            }
        }
    });

    for (const img of images) {
        imageObserver.observe(img);
    }
};
