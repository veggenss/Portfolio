console.log('Executing scriptsheet');

// Confetti
// A effect added through a thrid party script
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

// Activates the effect on load
window.onload = function () {
    console.log('Executing pop');
    pop();
    console.log('Completed pop');
};

// Dropdown Menu Animation
// Shows the menus when hovering the mouse over the settings button and menu button
document.addEventListener('DOMContentLoaded', () => {
    const navbutton = document.getElementById('nav-button');
    const setbutton = document.getElementById('set-button');
    const sidenav = document.getElementById('sidenav');
    const sideset = document.getElementById('sideset');
    let timeout;

    // Side Navigation Button
    // Makes the nav button rotate 90 deg by adding a class to the classlist
    navbutton.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        navbutton.classList.add('rotate');
        sidenav.classList.remove('nodisplay');
    });

    // Removes the rotate class from the classlist and makes the button rotate back to it's original position, also checks if grandma mode is activated and adds a longer timeout if it is true
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
    // Has the same functions as the one above
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
    // Has the same functions as the one above
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
    });

    // Side Settings Menu
    // Has the same functions as the one above
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

window.onload = function cookieChecker() {
    var element = document.body;

    // Check if light mode cookie exists, if so, apply light mode
    if (document.cookie.includes('light=true')) {
        element.classList.toggle("light-mode");
    }

    // Check if grandma mode cookie exists, if so, apply grandma mode
    if (document.cookie.includes('grandma=true')) {
        element.classList.toggle("grandma");
    }
}

// Light Mode Toggle
// Adds or removes a class from the classlist that changes the site from pink to light mode
function lightmodeToggle() {

    // Toggle light mode cookie
    if (document.cookie.includes('light=true')) {
        // Remove cookie by setting expiration to a past date
        document.cookie = "light=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
        // Set cookie for light mode
        document.cookie = 'light=true; path=/;';
        var element = document.body;
        element.classList.toggle("light-mode");
        
    }
}

// Grandma Mode Toggle
// Adds or removes a class from the classlist that changes the site from pink to light mode
function grandmamodeToggle() {

    // Toggle light mode cookie
    if (document.cookie.includes('grandma=true')) {
        // Remove cookie by setting expiration to a past date
        document.cookie = "grandma=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
        // Set cookie for light mode
        document.cookie = 'grandma=true; path=/;';
        var element = document.body;
        element.classList.toggle("grandma");
    }
}

console.log('Completed scriptsheet');