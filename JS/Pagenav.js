
document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.getElementById('topbar');
    const pagenav = document.getElementById('topbar-pagenav');
    let timeout2;

    topbar.addEventListener('mouseenter', () => {
        clearTimeout(timeout2); 
        pagenav.classList.remove('nodisplay2'); 
    });

    topbar.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2');
        }, 200);
    });

    pagenav.addEventListener('mouseenter', () => {
        clearTimeout(timeout2); 
        pagenav.classList.remove('nodisplay2'); 
    });

    pagenav.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2');
        }, 200);
    });
});

console.log('Completed scriptsheet');
