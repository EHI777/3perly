document.addEventListener('DOMContentLoaded', function() {
    // Menu burger toggle
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        document.querySelector('#navbarNav').classList.toggle('show');
    });
});
