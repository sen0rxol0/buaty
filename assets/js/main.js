'use strict';

function initNavigationToggle() {
    const menuButton = document.querySelector('button[data-menu]');
    menuButton.addEventListener('click', () => {
        document.querySelector('header.header-main').classList.toggle('nav-active');
        document.querySelector('nav.navigation').classList.toggle('active');
        menuButton.classList.toggle('toggled');
    });
}

function onLinkClickScroll(ev) {

}

function revealsOnScroll() {
    const revealElements = document.querySelectorAll('*[data-reveals]');
    revealElements.forEach((el, idx) => {
        const revealsAt = (window.scrollY + window.innerHeight) - (el.scrollHeight - 128);
        // const revealsAt = (window.scrollY + window.innerHeight) - el.scrollHeight;
        if (revealsAt > el.offsetTop) {
            el.classList.add('revealed');
        }
        if (idx === (revealElements.length - 1) && el.classList.contains('revealed')) {
            window.removeEventListener('scroll', revealsOnScroll);
        }
    });
}

function initScrollEvents() {
    window.addEventListener('scroll', revealsOnScroll);
    let links = document.querySelectorAll('a[href*="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', onLinkClickScroll);
    }
}

document.onreadystatechange = function onStateChange() {
    if (document.readyState === 'complete') {
        initNavigationToggle();
        initScrollEvents();
    }
}
