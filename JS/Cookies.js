window.onload = function() {
    var element = document.body;

    // Check if light mode cookie exists, if so, apply light mode
    if (document.cookie.includes('light=true')) {
        element.classList.add("light-mode");
    }

    // Check if grandma mode cookie exists, if so, apply grandma mode
    if (document.cookie.includes('grandma=true')) {
        element.classList.add("grandma");
    }
};

// Light Mode Toggle
function lightmodeToggle() {
    var element = document.body;
    if (document.cookie.includes('light=true')) {
        document.coookie = "cookieName=; expires=Thu, 09 sep 2001 02:46:00 UTC; path=/;";
        element.classList.toggle("light-mode");
    }

    element.classList.toggle("light-mode");
}

// Grandma Mode Toggle
// Grandma Mode Toggle
function grandmamodeToggle() {
    var element = document.body;
    if (document.cookie.includes('grandma=true')) {
        document.coookie = "cookieName=; expires=Thu, 09 sep 2001 02:46:00 UTC; path=/;";
        element.classList.toggle("grandma-mode");
    }

    element.classList.toggle("grandma-mode");
}

