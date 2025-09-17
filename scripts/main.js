const hamburgerBtn = document.querySelector('[data-js-main-menu-icon]');
const mainNav = document.querySelector('[data-js-main-menu-target]');
const searchBtn = document.querySelector('[data-js-search-open]');
const closeBtn = document.querySelector('[data-js-main-menu-close]');
const logo = document.querySelector('.header-logo');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('header-overlay');
    hamburgerBtn.classList.toggle('is-active');
    searchBtn.classList.toggle('is-active');
    logo.classList.toggle('is-active');
});

closeBtn.addEventListener('click', () => {
    console.log('close button clicked');
    mainNav.classList.toggle('header-overlay');
    hamburgerBtn.classList.toggle('is-active');
    searchBtn.classList.toggle('is-active');
    logo.classList.toggle('is-active');
});
