//mobile menu
const menuIcon = document.querySelector('.nav__icon-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const $html = document.querySelector('body');
const $checkbox = document.querySelector('#switch');

// white mode button
$checkbox.addEventListener('change', function () {
  $html.classList.toggle('white-mode');
})
// Icones Menu
menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
})
// Links do Navbar
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
})

// <!-- on click description stop -->
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".exp__card-description, .port__card-description").forEach(function(card) {
    let animationTime;
    let touchStarted = false;

    card.addEventListener("mousedown", function(event) {
      if (!isTouchEvent(event)) {
        animationTime = parseFloat(getComputedStyle(card).animationDuration) * parseFloat(getComputedStyle(card).animationIterationCount);
        card.style.animationPlayState = "paused";
      }
    });

    card.addEventListener("mouseup", function(event) {
      if (!isTouchEvent(event)) {
        card.style.animation = `scrollText 25s linear infinite ${-animationTime}s`;
        card.style.animationPlayState = "running";
      }
    });

    card.addEventListener("touchstart", function(event) {
      touchStarted = true;
      animationTime = parseFloat(getComputedStyle(card).animationDuration) * parseFloat(getComputedStyle(card).animationIterationCount);
      card.style.animationPlayState = "paused";
      event.preventDefault();
    });

    card.addEventListener("touchend", function(event) {
      if (touchStarted) {
        card.style.animation = `scrollText 25s linear infinite ${-animationTime}s`;
        card.style.animationPlayState = "running";
        touchStarted = false;
        event.preventDefault();
      }
    });

    function isTouchEvent(event) {
      return event.type.startsWith("touch");
    }
  });
});

