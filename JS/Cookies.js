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
        document.cookie = "light=false; path=/;";
        element.classList.remove("light-mode");
    } else {
        document.cookie = "light=true; path=/;";
        element.classList.add("light-mode");
    }
}

// Grandma Mode Toggle
function grandmamodeToggle() {
    var element = document.body;

    if (document.cookie.includes('grandma=true')) {
        document.cookie = "grandma=false; path=/;";
        element.classList.remove("grandma-mode");
    } else {
        document.cookie = "grandma=true; path=/;";
        element.classList.add("grandma-mode");
    }
}


