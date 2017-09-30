(function() {
    'use strict';

    function togglesNav() {
        var togglerBtn = document.querySelector('#navbar-toggler');

        function onToogleNav() {
            this.classList.toggle('toggled');
            var mainHeader = document.querySelector('header.header-main');

            mainHeader.classList.toggle('extended');
        }
        togglerBtn.addEventListener('click', onToogleNav);
    }

    function headerChangesOnScroll() {
        var header = document.querySelector('header.header-main'),
            rect = header.getBoundingClientRect();

        var onScroll = function(ev) {

            if (window.scrollY > rect.height) {
                header.classList.add('active-scroll');
                // header.style.backgroundColor = '#022735';
            } else {
                if (!header.classList.contains('extended')) {
                    header.classList.remove('active-scroll');
                    // header.style.backgroundColor = 'none';
                }
            }
        };

        if (window.scrollY > rect.height) {
            header.classList.add('active-scroll');
        }

        window.addEventListener('scroll', onScroll);
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

    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            togglesNav();
            headerChangesOnScroll();

            var links = document.querySelectorAll('a[href*="#"]');

            for(var i = 0; i < links.length; i++) {
                links[i].onclick = onClickScroll;
            }
        }
    }
})();