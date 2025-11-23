export const initHeaderScroll = () => {
    const header = document.querySelector('.header');

    globalThis.addEventListener('scroll', () => {
        const currentScroll = globalThis.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

export const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
        const scrollY = globalThis.pageYOffset;
        
        for (const section of sections) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                for (const link of navLinks) {
                    link.classList.remove('active');
                }
                if (navLink) navLink.classList.add('active');
            }
        }
    };

    globalThis.addEventListener('scroll', highlightNav);
};
