/* global $ */
/* global document */
/* global window */
/* eslint-env jquery */

$(document).ready(function() {

    var options = {
        strings: ['Hi,    I\'m Michael.          I like to solve problems.'],
        typeSpeed: 100
      };
      
    var typed = new Typed('#typename', options);

    function smoothScroll(targetClass, duration) {
        $('html, body').animate({scrollTop: $(targetClass).offset().top}, duration);
    }

    $('.js--scroll-to-michaelcronin').click(function() {
        smoothScroll('.js--michaelcronin', 1000);
    });

    $('.js--scroll-to-projects').click(function() {
        smoothScroll('.js--projects', 1000);
    });

    $('.js--scroll-to-work-experience').click(function() {
        smoothScroll('.js--work-experience', 1000);
    });

    $('.js--scroll-to-aboutme').click(function() {
        smoothScroll('.js--aboutme', 1000);
    });

    $('.js--scroll-to-contactme').click(function() {
        smoothScroll('.js--contactme', 1000);
    });

    // Modal functionality
    var modals = document.getElementsByClassName("modal");
    var btns = document.getElementsByClassName("project");
    var spans = document.getElementsByClassName("close");

    btns[0].onclick = function() {
        modals[0].style.display = "block";
    }
    spans[0].onclick = function() {
        modals[0].style.display = "none";
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            modals[i].style.display = "block";
        }
        spans[i].onclick = function() {
            modals[i].style.display = "none";
        }
    }

    window.onclick = function(event) {
        for (let i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
            }
        }
    }

    // Card flip functionality
    var cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function() {
            cards[i].classList.toggle('is-flipped');
        });
    }
});
