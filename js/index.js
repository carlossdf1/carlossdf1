const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if ( window.scrollY > 0 ) {

        navBar.classList.add('fixed-top');
        // navBar.classList.remove('navbar-dark');
        // navBar.classList.remove('bg-dark');
        // navBar.classList.add('navbar-light');
        // navBar.classList.add('bg-transparent');
        navBar.classList.remove('bg-transparent');
        // navBar.style.backgroundColor = '#e3f2fd';
    } else {

        // navBar.classList.remove('fixed-top');
        // navBar.classList.remove('navbar-light');
        // navBar.classList.remove('bg-transparent');
        navBar.classList.add('bg-transparent');
        // navBar.classList.add('navbar-dark');
        // navBar.classList.add('bg-dark');
        // navBar.style.backgroundColor = 'transparent !important';
    }
});