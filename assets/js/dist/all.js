'use strict';(function(){'use strict';function a(){var a=document.querySelector('#navbar-toggler');a.addEventListener('click',function onToggleNav(){var a=document.querySelector('header.header-main');this.classList.toggle('toggled'),a.classList.toggle('extended')})}function b(){var a=document.querySelector('header.header-main'),b=a.getBoundingClientRect();window.scrollY>b.height&&a.classList.add('active-scroll'),window.addEventListener('scroll',function onScroll(){window.scrollY>b.height?a.classList.add('active-scroll'):!a.classList.contains('extended')&&a.classList.remove('active-scroll')})}function c(){var a=document.querySelectorAll('*[data-reveal]'),b=function(){a.forEach(function(c,d){var e=window.scrollY+window.innerHeight-c.scrollHeight/2;if(e>c.offsetTop&&c.classList.add('revealed'),d===a.length-1&&c.classList.contains('revealed'))return void window.removeEventListener('scroll',b)})};window.addEventListener('scroll',b)}function d(){function a(b,c,d,e,f,g,h){0>e||1<e||0>=f||(b.scrollTop=c-(c-d)*h(e),e+=f*g,setTimeout(function(){a(b,c,d,e,f,g,h)},g))}function b(a){return 1- --a*a*a*a}var c=this.hash.slice(1),d=document.getElementById(c);if(c&&d){var e=document.documentElement;if(0===e.scrollTop){var f=e.scrollTop;++e.scrollTop,e=f+1===e.scrollTop--?e:document.body}a(e,e.scrollTop,d.offsetTop,0,1/1e3,20,b)}}document.onreadystatechange=function(){if('complete'===document.readyState){a(),b(),c();for(var e=document.querySelectorAll('a[href*="#"]'),f=0;f<e.length;f++)e[f].onclick=d}}})();
//# sourceMappingURL=all.js.map