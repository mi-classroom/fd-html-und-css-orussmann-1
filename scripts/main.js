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
    mainNav.classList.toggle('header-overlay');
    hamburgerBtn.classList.toggle('is-active');
    searchBtn.classList.toggle('is-active');
    logo.classList.toggle('is-active');
});

const mainSections = document.querySelectorAll('[data-js-main-article] > [data-js-page-navigation-section]');
const menu = document.querySelector('[data-js-page-navigation-menu]');
console.log(mainSections)
mainSections.forEach(section => {
    const menuEntry = section.querySelector('h2');
    const menuEntryText = menuEntry.textContent;

    const newMenyEntry = document.createElement('li');
    newMenyEntry.innerHTML = `<a href="#${section.id}">${menuEntryText}</a>`;

    const subEntries = section.querySelectorAll('[data-js-page-navigation-section]');
    const subEntriesList = document.createElement('ul');
    subEntriesList.classList.add('header-nav-sublist');
    subEntries.forEach(s => {
        const subEntry = s.querySelector('h3');
        const newSubEntry = document.createElement('li');
        newSubEntry.innerHTML = `<a href="#${s.id}">${subEntry.textContent}</a>`;
        subEntriesList.append(newSubEntry);
    });
    newMenyEntry.appendChild(subEntriesList)
    menu.appendChild(newMenyEntry);
});