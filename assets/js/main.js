'use strict';

function initNavigationToggle() {
    const menuButton = document.querySelector('button[data-menu]');
    menuButton.addEventListener('click', () => {
        document.querySelector('header.header-main').classList.toggle('nav-active');
        document.querySelector('nav.navigation').classList.toggle('active');
        menuButton.classList.toggle('toggled');
    });
}

// function headerChangesOnScroll() {
//     let header = document.querySelector('header.header-main'),
//         rect = header.getBoundingClientRect();

//     let onScroll = () => {
//         if (window.scrollY > rect.height) {
//             header.classList.add('active-scroll');
//         } else {
//             if (!header.classList.contains('extended')) {
//                 header.classList.remove('active-scroll');
//             }
//         }
//     };
//     if (window.scrollY > rect.height) {
//         header.classList.add('active-scroll');
//     }

//     window.addEventListener('scroll', onScroll);
// }

function onLinkClickScroll() {
    var dur = 1000;
    var target = this.hash.slice(1),
        element = document.getElementById(target);

    if (!target || !element) {
        return;
    }

    function scrollHorizontal(element, xFrom, xTo, t, v, step, easing) {
        if (t < 0 || t > 1 || v <= 0) return;
        element.scrollTop = xFrom - (xFrom - xTo) * easing(t);
        t += v * step;
        setTimeout(() => {
            scrollHorizontal(element, xFrom, xTo, t, v, step, easing);
        }, step);
    }

    function easeOutQuart(t) {
        return 1 - (--t) * t * t * t
    }

    var rootEl = document.documentElement;
    if (rootEl.scrollTop === 0) {
        var topScroll = rootEl.scrollTop;
        ++rootEl.scrollTop;
        rootEl = topScroll + 1 === rootEl.scrollTop-- ? rootEl : document.body;
    }

    scrollHorizontal(rootEl, rootEl.scrollTop, element.offsetTop, 0, 1 / dur, 20, easeOutQuart);
}

function revealsOnScroll() {
    const revealElements = document.querySelectorAll('*[data-reveals]');
    revealElements.forEach((el, idx) => {
        const revealsAt = (window.scrollY + window.innerHeight) - (el.scrollHeight - 128);
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
