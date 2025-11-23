import { initLoading } from './modules/loading.js';
import { initMobileMenu } from './modules/menu.js';
import { initHeaderScroll, initActiveNav } from './modules/header.js';
import { initSmoothScroll, initScrollToTop } from './modules/scroll.js';
import { initScrollAnimations, initCounterAnimation, initParallax } from './modules/animations.js';
import { initGalleryLightbox, initLazyLoading } from './modules/gallery.js';
import { initCardHovers, initRippleEffect, initTouchGestures, initUnidadeCardLinks } from './modules/interactions.js';
import { formatPhoneNumbers, preventLayoutShift, initAccessibility } from './modules/utils.js';
import { injectLightboxStyles, injectRippleStyles, injectFocusStyles } from './modules/styles.js';

const initApp = () => {
    injectLightboxStyles();
    injectRippleStyles();
    injectFocusStyles();
    
    initMobileMenu();
    initHeaderScroll();
    initActiveNav();
    initSmoothScroll();
    initScrollToTop();
    initScrollAnimations();
    initCounterAnimation();
    initParallax();
    initGalleryLightbox();
    initLazyLoading();
    initCardHovers();
    initRippleEffect();
    initTouchGestures();
    initUnidadeCardLinks();
    formatPhoneNumbers();
    initAccessibility();
};

globalThis.addEventListener('load', () => {
    initLoading();
    preventLayoutShift();
    initApp();
});

globalThis.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
});

if ('serviceWorker' in navigator) {
    globalThis.addEventListener('load', () => {
        
    });
}
