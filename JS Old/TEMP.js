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