export const initLoading = () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
};
