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
let grandma = false;
function grandmaToggle() {
    var element = document.body;
    element.classList.toggle("grandma");
    grandma = !grandma;
}

// Dropdown Menu Animation
document.addEventListener('DOMContentLoaded', () => {
    const navbutton = document.getElementById('nav-button');
    const setbutton = document.getElementById('set-button');
    const sidenav = document.getElementById('sidenav');
    const sideset = document.getElementById('sideset');
    let timeout;

    // Side Navigation Button
    navbutton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        navbutton.classList.add('rotate');
        sidenav.classList.remove('nodisplay');
    });

    navbutton.addEventListener('mouseleave', () => {
        if (grandma == false) {
            timeout = setTimeout(() => {
                navbutton.classList.remove('rotate');
                sidenav.classList.add('nodisplay');
            }, 200);
        } else if (grandma == true) {
            timeout = setTimeout(() => {
                navbutton.classList.remove('rotate');
                sidenav.classList.add('nodisplay');
            }, 1000);
        }
    });

    // Side Navigation Menu
    sidenav.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        sidenav.classList.remove('nodisplay');
        navbutton.classList.add('rotate');
    });

    sidenav.addEventListener('mouseleave', () => {
        if (grandma == false) {
            timeout = setTimeout(() => {
                sidenav.classList.add('nodisplay');
                navbutton.classList.remove('rotate');
            }, 200);
        } else if (grandma == true) {
            timeout = setTimeout(() => {
                sidenav.classList.add('nodisplay');
                navbutton.classList.remove('rotate');
            }, 1000);
        }
    });

    // Side Settings Button
    setbutton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        setbutton.classList.add('rotate');
        sideset.classList.remove('nodisplay');
    });

    setbutton.addEventListener('mouseleave', () => {
        if (grandma == false) {
            timeout = setTimeout(() => {
                setbutton.classList.remove('rotate');
                sideset.classList.add('nodisplay');
            }, 200);
        } else if (grandma == true) {
            timeout = setTimeout(() => {
                setbutton.classList.remove('rotate');
                sideset.classList.add('nodisplay');
            }, 1000);
        }
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
        if (grandma == false) {
            timeout = setTimeout(() => {
                sideset.classList.add('nodisplay');
                setbutton.classList.remove('rotate');
            }, 200);
        } else if (grandma == true) {
            timeout = setTimeout(() => {
                sideset.classList.add('nodisplay');
                setbutton.classList.remove('rotate');
            }, 1000);
        }
    });
});


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
