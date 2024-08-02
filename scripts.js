document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header-burger');
    const navLinks = document.querySelector('.header-nav ul');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
