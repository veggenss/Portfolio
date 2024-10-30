console.log('Executing scriptsheet')

// Confetti

function pop() {
    console.log('Executing pop')
    confetti({
        particleCount: 500,
        spread: 180,
        origin: { y: 0.6 },
        scalar: 1.5,
        gravity: 0.3,
        colors: ['#FF0000', '#FFA500', '#87CEEB', '#87CEEB']
    });
    console.log('Completed pop')
}

window.onload = function() {
    console.log('Executing pop')
    pop();
    console.log('Completed pop')
}

// Dropdown Menu Animation

document.addEventListener('DOMContentLoaded', () => {
    console.log('Executing Dropdown Menu Animation')
    const navbutton = document.getElementById('nav-button');
    const setbutton = document.getElementById('set-button');
    const sidenav = document.getElementById('sidenav');
    const sideset = document.getElementById('sideset')
    let timeout;

    // Side Navigation

    navbutton.addEventListener('mouseenter', () => {
        console.log('Executing navbutton hover')
        clearTimeout(timeout);
        navbutton.classList.add('rotate');  
        sidenav.classList.remove('nodisplay');
        console.log('Completed navbutton hover')
    });

    navbutton.addEventListener('mouseleave', () => {
        console.log('Executing navbutton no hover')
        timeout = setTimeout(() => {
        navbutton.classList.remove('rotate'); 
        sidenav.classList.add('nodisplay');
        console.log('Completed navbutton no hover')
        }, 40)
    });

    sidenav.addEventListener('mouseenter', () => {
        console.log('Executing nav hover')
        clearTimeout(timeout);
        sidenav.classList.remove('nodisplay');
        navbutton.classList.add('rotate');
        console.log('Completed nav hover')
    });

    sidenav.addEventListener('mouseleave', () => {
        console.log('Executing nav no hover')
        timeout = setTimeout(() => {
        sidenav.classList.add('nodisplay');
        navbutton.classList.remove('rotate');
        console.log('Completed nav no hover')
        }, 40)
    });

    // Side Settings

    setbutton.addEventListener('mouseenter', () => {
        console.log('Executing setbutton hover')
        clearTimeout(timeout);
        setbutton.classList.add('rotate');  
        sideset.classList.remove('nodisplay');
        console.log('Completed setbutton hover')
    });

    setbutton.addEventListener('mouseleave', () => {
        console.log('Executing setbutton no hover')
        timeout = setTimeout(() => {
        setbutton.classList.remove('rotate'); 
        sideset.classList.add('nodisplay');
        console.log('Completed setbutton no hover')
        }, 40)
    });

    sideset.addEventListener('mouseenter', () => {
        console.log('Executing set hover')
        clearTimeout(timeout);
        sideset.classList.remove('nodisplay');
        setbutton.classList.add('rotate');
        console.log('Completed set hover')
    });

    sideset.addEventListener('mouseleave', () => {
        console.log('Executing set no hover')
        timeout = setTimeout(() => {
        sideset.classList.add('nodisplay');
        setbutton.classList.remove('rotate');
        console.log('Completed set no hover')
        }, 40)
        
    });

    console.log('Completed Dropdown Menu Animation')

});

console.log('Completed scriptsheet')


