/* global $ */
/* global document */
/* global window */
/* eslint-env jquery */

$(document).ready(function() {

    function reveal() {
        console.log("Scrolled!");
        var reveals = document.querySelectorAll(".reveal");
        
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 50;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }

    window.addEventListener("scroll", reveal, {passive: true});

    const items = gsap.utils.toArray(".project"),
      details = document.querySelector('.detail'),
      detailContent = document.querySelector('.content'),
      detailImage = document.querySelector('.detail img'),
      detailTitle = document.querySelector('.detail .title'),
      detailSecondary = document.querySelector('.detail .secondary'),
      detailDescription = document.querySelector('.detail .description');

    let activeItem; // keeps track of which item is open (details)

    gsap.set(detailContent, { yPercent: -100 }); // close the details "drawer" (content) initially

    function showDetails(item) {
        if (activeItem) { // someone could click on an element behind the open details panel in which case we should just close it.
            return hideDetails();
        }
    let onLoad = () => {

        // position the details on top of the item (scaled down)
        Flip.fit(details, item, {scale: true, fitChild: detailImage});

        // record the state
        const state = Flip.getState(details);

        // set the final state
        gsap.set(details, {clearProps: true}); // wipe out all inline stuff so it's in the native state (not scaled)
        gsap.set(details, {xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden"});

        Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => gsap.set(details, {overflow: "hidden"}) // to permit scrolling if necessary
        })
        // Flip.from() returns a timeline, so add a tween to reveal the detail content. That way, if the flip gets interrupted and forced to completion & killed, this does too.
        .to(detailContent, {yPercent: 0}, 0.2);

        detailImage.removeEventListener("load", onLoad);
        document.addEventListener('click', hideDetails);
    };

    
      



    // Change image and text
    const data = item.dataset;
    detailImage.addEventListener("load", onLoad);
    detailImage.src = item.querySelector('img').src;
    detailTitle.innerText = data.title;
    detailSecondary.innerText = data.secondary;
    detailDescription.innerText = data.text;

    // stagger-fade the items out from the one that was selected in a staggered way (and kill the tween of the selected item)
    gsap.to(items, {opacity: 0.3, stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto"}}).kill(item);
    //gsap.to(".js--projects", {backgroundColor: "#888", duration: 1, delay: 0.3}); // fade out the background
    activeItem = item;
    }

    function hideDetails() {
        document.removeEventListener('click', hideDetails);
        gsap.set(details, {overflow: "hidden"});

        // record the current state of details
        const state = Flip.getState(details);

        // scale details down so that its detailImage fits exactly on top of activeItem
        Flip.fit(details, activeItem, {scale: true, fitChild: detailImage});

        // animate the other elements, like all fade all items back up to full opacity, slide the detailContent away, and tween the background color to white.
        const tl = gsap.timeline();
        tl.set(details, {overflow: "hidden"})
            .to(detailContent, {yPercent: -100})
            .to(items, {opacity: 1, stagger: {amount: 0.7, from: items.indexOf(activeItem), grid: "auto"}})
            //.to(".js--projects", {backgroundColor: "#fff"}, "<");

        // animate from the original state to the current one.
        Flip.from(state, {
            scale: true,
            duration: 0.5,
            delay: 0.2, // 0.2 seconds because we want the details to slide up first, then flip.
            onInterrupt: () => tl.kill()
        })
            .set(details, {visibility: "hidden"});

        activeItem = null;
    }

    // Add click listeners
    gsap.utils.toArray('.project').forEach(item => item.addEventListener('click', () => showDetails(item)));

    // Intro animation
    window.addEventListener('load', () => {
    gsap.to('.js--projects', { autoAlpha: 1, duration: 0.2 });
    gsap.from('.project', {autoAlpha: 0, yPercent: 30, stagger: 0.04});
    });






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

    // // Modal functionality
    // var modals = document.getElementsByClassName("modal");
    // var btns = document.getElementsByClassName("project");
    // var spans = document.getElementsByClassName("close");

    // btns[0].onclick = function() {
    //     modals[0].style.display = "block";
    // }
    // spans[0].onclick = function() {
    //     modals[0].style.display = "none";
    // }

    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].onclick = function() {
    //         modals[i].style.display = "block";
    //     }
    //     spans[i].onclick = function() {
    //         modals[i].style.display = "none";
    //     }
    // }

    // window.onclick = function(event) {
    //     for (let i = 0; i < modals.length; i++) {
    //         if (event.target == modals[i]) {
    //             modals[i].style.display = "none";
    //         }
    //     }
    // }

    // Card flip functionality
    // var cards = document.getElementsByClassName("card");
    // for (let i = 0; i < cards.length; i++) {
    //     cards[i].addEventListener('click', function() {
    //         cards[i].classList.toggle('is-flipped');
    //     });
    // }

});
