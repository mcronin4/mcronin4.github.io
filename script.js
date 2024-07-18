/* global $ */
/* global document */
/* global window */
/* eslint-env jquery */

$(document).ready(function() {

    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000);
    })

    $('.js--scroll-to-aboutme').click(function() {
        $('html, body').animate({scrollTop: $('.js--aboutme').offset().top}, 1500);
    })

    $('.js--scroll-to-contactme').click(function() {
        $('html, body').animate({scrollTop: $('.js--contactme').offset().top}, 2000);
    })


    //modal stuff
    // Get the modal
    var modals = document.getElementsByClassName("modal");

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("project");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal
    btn[0].onclick = function() {
        modals[0].style.display = "block";
    }
    btn[1].onclick = function() {
        modals[1].style.display = "block";
    }
    btn[2].onclick = function() {
        modals[2].style.display = "block";
    }
    btn[3].onclick = function() {
        modals[3].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function() {
        modals[0].style.display = "none";
    }
    span[1].onclick = function() {
        modals[1].style.display = "none";
    }
    span[2].onclick = function() {
        modals[2].style.display = "none";
    }
    span[3].onclick = function() {
        modals[3].style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
            }
        }
    }
})

var cards = document.getElementsByClassName("card");

cards[0].addEventListener( 'click', function() {
    cards[0].classList.toggle('is-flipped');
});
cards[1].addEventListener( 'click', function() {
    cards[1].classList.toggle('is-flipped');
});
cards[2].addEventListener( 'click', function() {
    cards[2].classList.toggle('is-flipped');
});
cards[3].addEventListener( 'click', function() {
    cards[3].classList.toggle('is-flipped');
});
cards[4].addEventListener( 'click', function() {
    cards[4].classList.toggle('is-flipped');
});
cards[5].addEventListener( 'click', function() {
    cards[5].classList.toggle('is-flipped');
});