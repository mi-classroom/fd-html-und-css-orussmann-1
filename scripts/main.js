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
const onPageMenu = document.querySelector('[data-js-onpage-navigation-menu]');

mainSections.forEach(section => {
    const onPageMenuEntryText = section.querySelector('h2').textContent;
    const newMenyEntry = `<li><a href="#${section.id}">${onPageMenuEntryText}</a></li>`;
    onPageMenu.innerHTML += newMenyEntry;
});

// TODO: Maybe use for main nav menu
// const menu = document.querySelector('[data-js-page-navigation-menu]');

// mainSections.forEach(section => {
//     const menuEntry = section.querySelector('h2');
//     const menuEntryText = menuEntry.textContent;

//     const newMenyEntry = document.createElement('li');
//     newMenyEntry.innerHTML = `<a href="#${section.id}">${menuEntryText}</a>`;

//     const subEntries = section.querySelectorAll('[data-js-page-navigation-section]');
//     const subEntriesList = document.createElement('ul');
//     subEntriesList.classList.add('header-nav-sublist');
//     subEntries.forEach(s => {
//         const subEntry = s.querySelector('h3');
//         const newSubEntry = document.createElement('li');
//         newSubEntry.innerHTML = `<a href="#${s.id}">${subEntry.textContent}</a>`;
//         subEntriesList.append(newSubEntry);
//     });
//     newMenyEntry.appendChild(subEntriesList)
//     menu.appendChild(newMenyEntry);
// });

const searchForm = document.querySelector('.header-search-input');
const closeSearchBtn = document.querySelector('[data-js-search-close]');
const searchInputField = document.querySelector('[data-js-search-input]');
const searchInputBtn = document.querySelector('[data-js-search-button]');
const header = document.querySelector('.header-container');
const headerNavBar = document.querySelector('.header-nav-bar');
const headerNavList = document.querySelector('.header-nav-list');
const searchConfirmBtn = document.querySelector('[data-js-search-button]');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

searchBtn.addEventListener('click', (event) => {
    // searchInputField.value = "";
    console.log("search")
    header.classList.toggle('search-active');
    toggleSearchOverlay();
});

searchConfirmBtn.addEventListener('click', () => {
    header.classList.toggle('search-active');
});


closeSearchBtn.addEventListener('click', () => {
    header.classList.toggle('search-active');
    console.log("close active")
    toggleSearchOverlay();
});

searchInputBtn.addEventListener('click', (event) => {
    const inputValue = searchInputField.value;
    toggleSearchOverlay();
});

function toggleSearchOverlay() {
    searchForm.classList.toggle('is-active');
    searchBtn.classList.toggle('is-active');
    closeSearchBtn.classList.toggle('is-active');
    hamburgerBtn.classList.toggle('is-active');
    headerNavBar.classList.toggle('hidden');
    headerNavList.classList.toggle('hidden');
}

// TODO: Rework ambiguous naming..