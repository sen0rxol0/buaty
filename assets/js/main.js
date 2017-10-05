(() => {
'use strict';

    function togglesNav() {
        const togglerBtn = document.querySelector('#navbar-toggler');

        let onToggleNav = function () {
            const mainHeader = document.querySelector('header.header-main');
            this.classList.toggle('toggled');
            mainHeader.classList.toggle('extended');
        }

        togglerBtn.addEventListener('click', onToggleNav);
    }

    function headerChangesOnScroll() {
        let header = document.querySelector('header.header-main'),
            rect = header.getBoundingClientRect();
 
        let onScroll = () => {
            if (window.scrollY > rect.height) {
                header.classList.add('active-scroll');
            } else {
                if (!header.classList.contains('extended')) {
                    header.classList.remove('active-scroll');
                }
            }
        };

        if (window.scrollY > rect.height) {
            header.classList.add('active-scroll');
        }

        window.addEventListener('scroll', onScroll);
    }

    function revealsOnScroll() {
        let els = document.querySelectorAll('*[data-reveal]');

        let reveal = function () {
            els.forEach((el, idx) => {
                let revealOn = (window.scrollY + window.innerHeight) - (el.scrollHeight / 2);

                if (revealOn > el.offsetTop) {
                    el.classList.add('revealed');
                }

                if (idx === (els.length - 1) && el.classList.contains('revealed')) {
                    window.removeEventListener('scroll', reveal);
                    return;
                }
            });
        }

        window.addEventListener('scroll', reveal);
    }
      
    function onClickScroll(ev) {

        var dur = 1000;
        var target = this.hash.slice(1),
            element = document.getElementById(target);

        if (!target || !element) {
            return;
        }
            
        var rootEl = document.documentElement;
        

        function scrollHorizontal(element, xFrom, xTo, t, v, step, easing) {
            if (t < 0 || t > 1 || v <= 0) return;

            element.scrollTop = xFrom - (xFrom - xTo) * easing(t);

            t += v * step;

            setTimeout(function() {
                scrollHorizontal(element, xFrom, xTo, t, v, step, easing);
            }, step);
        }
          
        function easeOutQuart(t){
            return 1-(--t)*t*t*t
        }

        if (rootEl.scrollTop === 0) {
            var topScroll = rootEl.scrollTop;

            ++rootEl.scrollTop;
            
            rootEl = topScroll + 1 === rootEl.scrollTop-- ? rootEl : document.body;
        }

        scrollHorizontal(rootEl, rootEl.scrollTop, element.offsetTop, 0, 1/dur, 20, easeOutQuart);
    }

    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            togglesNav();
            headerChangesOnScroll();
            revealsOnScroll();

            let links = document.querySelectorAll('a[href*="#"]');

            for(let i = 0; i < links.length; i++) {
                links[i].onclick = onClickScroll;
            }
        }
    }
})();