
// JavaScript-kode som styrer adferden til Topbar og PageNav
document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.getElementById('topbar');
    const pagenav = document.getElementById('topbar-pagenav');
    let timeout2;

    // Når musen går over 'topbar'
    topbar.addEventListener('mouseenter', () => {
        clearTimeout(timeout2); // Avbryt eventuell skjuling
        pagenav.classList.remove('nodisplay2'); // Vis menyen
        // Sørg for at menyen er synlig
    });

    // Når musen forlater 'topbar'
    topbar.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2'); // Skjul menyen
             // Sett synlighet til skjult
        }, 200);
    });

    // Når musen går over 'pagenav'
    pagenav.addEventListener('mouseenter', () => {
        clearTimeout(timeout2); // Avbryt eventuell skjuling
        pagenav.classList.remove('nodisplay2'); // Hold menyen synlig
       // Sørg for at menyen er synlig
    });

    // Når musen forlater 'pagenav'
    pagenav.addEventListener('mouseleave', () => {
        timeout2 = setTimeout(() => {
            pagenav.classList.add('nodisplay2'); // Skjul menyen
            // Sett synlighet til skjult
        }, 200);
    });
});
