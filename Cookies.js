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
        document.coookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    element.classList.toggle("light-mode");
}

// Grandma Mode Toggle
function grandmamodeToggle() {
    var element = document.body;
    element.classList.toggle("grandma");
}
