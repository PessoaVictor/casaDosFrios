export const injectLightboxStyles = () => {
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
            cursor: pointer;
        }
        
        .lightbox.active {
            opacity: 1;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90vh;
            animation: zoomIn 0.3s ease;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 40px;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            line-height: 1;
            transition: transform 0.2s ease;
        }
        
        .lightbox-close:hover {
            transform: rotate(90deg);
        }
        
        @keyframes zoomIn {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        @media (max-width: 768px) {
            .lightbox-content {
                max-width: 95%;
            }
            
            .lightbox-close {
                top: -50px;
                font-size: 36px;
            }
        }
    `;
    document.head.appendChild(lightboxStyles);
};

export const injectRippleStyles = () => {
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);
};

export const injectFocusStyles = () => {
    const focusStyles = document.createElement('style');
    focusStyles.textContent = `
        body.keyboard-nav *:focus {
            outline: 3px solid #002E5D;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyles);
};
