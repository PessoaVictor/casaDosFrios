export const formatPhoneNumbers = () => {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    for (const link of phoneLinks) {
        const phone = link.textContent.trim();
        if (!phone.startsWith('(')) {
            const formatted = phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
            link.textContent = formatted;
        }
    }
};

export const preventLayoutShift = () => {
    const images = document.querySelectorAll('img');
    for (const img of images) {
        if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            img.setAttribute('width', width);
            img.setAttribute('height', height);
        }
    }
};

export const initAccessibility = () => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
};
