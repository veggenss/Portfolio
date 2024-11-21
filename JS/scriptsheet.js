console.log('Executing scriptsheet');

// Confetti
function pop() {
    console.log('Executing pop');
    confetti({
        particleCount: 500,
        spread: 180,
        origin: { y: 0.6 },
        scalar: 1.5,
        gravity: 0.3,
        colors: ['#FF0000', '#FFA500', '#87CEEB', '#87CEEB']
    });
    console.log('Completed pop');
}

window.onload = function () {
    console.log('Executing pop');
    pop();
    console.log('Completed pop');
};

// Light Mode Toggle
function lightmodeToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

// Grandma Mode
function grandmaToggle() {
    var element = document.body;
    element.classList.toggle("grandma");
}

// Dropdown Menu Animation
document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.getElementById('topbar');
    const pagenav = document.getElementById('topbar-pagenav');
    const navbutton = document.getElementById('nav-button');
    const setbutton = document.getElementById('set-button');
    const sidenav = document.getElementById('sidenav');
    const sideset = document.getElementById('sideset');
    let timeout;
    let timeout2;

    // Page Navigation Drop Down - Hover On Topbar
    topbar.addEventListener('mouseenter', () => {
        clearTimeout(timeout2);
        pagenav.classList.remove('nodisplay2');
    });

    topbar.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2');
        }, 200);
    });

    // Page Navigation Drop Down - Hover On Pagenav
    pagenav.addEventListener('mouseenter', () => {
        clearTimeout(timeout2);
        pagenav.classList.remove('nodisplay2');
    });

    pagenav.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2');
        }, 200);
    });

    // Side Navigation Button
    navbutton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        navbutton.classList.add('rotate');
        sidenav.classList.remove('nodisplay');
    });

    navbutton.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            navbutton.classList.remove('rotate');
            sidenav.classList.add('nodisplay');
        }, 200);
    });

    // Side Navigation Menu
    sidenav.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        sidenav.classList.remove('nodisplay');
        navbutton.classList.add('rotate');
    });

    sidenav.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            sidenav.classList.add('nodisplay');
            navbutton.classList.remove('rotate');
        }, 200);
    });

    // Side Settings Button
    setbutton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        setbutton.classList.add('rotate');
        sideset.classList.remove('nodisplay');
    });

    setbutton.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            setbutton.classList.remove('rotate');
            sideset.classList.add('nodisplay');
        }, 200);
    });

    // Side Settings Menu
    sideset.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        sideset.classList.remove('nodisplay');
        setbutton.classList.add('rotate');
    });

    sideset.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            sideset.classList.add('nodisplay');
            setbutton.classList.remove('rotate');
        }, 200);
    });
});

console.log('Completed scriptsheet');
