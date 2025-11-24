
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 2.2,
    smoothWheel: true,
    smoothTouch: true,
    // smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

(function () {
  function initScrollReveal() {
    try {
      if (typeof ScrollReveal === 'undefined') return;
      const sr = ScrollReveal({
        distance: '24px',
        duration: 700,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        scale: 1,
        mobile: true
      });

      // Hero content
      sr.reveal('.home-hero__content', { origin: 'bottom', interval: 50, delay: 100 });

      // Why cards
      sr.reveal('.why__card', { origin: 'bottom', distance: '16px', interval: 120 });

      // Treatments grid items
      sr.reveal('.treatments__item', { origin: 'bottom', distance: '20px', interval: 100 });

      // Membership logos
      sr.reveal('.memberships__item', { origin: 'bottom', distance: '12px', interval: 80 });

      // Contact block
      sr.reveal('.contact__image, .contact__content', { origin: 'right', distance: '24px', interval: 80 });

    } catch (err) {
      try { console.error('ScrollReveal init error', err); } catch (e) { }
    }
  }

  try {
    if (typeof ScrollReveal === 'undefined') {
      // Dynamically load ScrollReveal when it's missing (fallback for pages
      // that weren't rebuilt or that don't include the script tag).
      const s = document.createElement('script');
      s.src = './assets/js/scrollreveal.js';
      s.async = true;
      s.onload = initScrollReveal;
      s.onerror = function (ev) {
        try { console.error('Failed to load ScrollReveal', ev); } catch (e) { }
      };
      (document.head || document.documentElement).appendChild(s);
    } else {
      initScrollReveal();
    }
  } catch (err) {
    try { console.error('ScrollReveal loader error', err); } catch (e) { }
  }
})();



document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.querySelector('.faq-grid.accordion');
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Read attribute: true = single mode / false = multi mode
  const singleMode = accordionContainer?.getAttribute('data-single') === 'true';

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      if (singleMode) {
        // Single accordion behavior
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('is-active');
          const otherToggle = otherItem.querySelector('.accordion-toggle');
          if (otherToggle) {
            otherToggle.innerHTML = '&plus;';
          }
        });
      }

      // Toggle clicked item (works for both single & multi modes)
      if (!isActive) {
        item.classList.add('is-active');
        const toggle = item.querySelector('.accordion-toggle');
        if (toggle) toggle.innerHTML = '&minus;';
      } else {
        item.classList.remove('is-active');
        const toggle = item.querySelector('.accordion-toggle');
        if (toggle) toggle.innerHTML = '&plus;';
      }
    });
  });
});


// Slides/Carousels
document.addEventListener("DOMContentLoaded", function () {
  // TEAM CAROUSEL
  var teamCarousel = document.querySelector(".team__carousel");
  var teamBar = document.querySelector(".slider-progress-bar");

  if (teamCarousel && teamBar) {
    var teamSplide = new Splide(teamCarousel, {
      type: "loop",
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: false,
    });

    teamSplide.on("mounted move", function () {
      var end = teamSplide.Components.Controller.getEnd() + 1;
      var rate = Math.min((teamSplide.index + 1) / end, 1);
      teamBar.style.width = 100 * rate + "%";
    });

    teamSplide.mount();
  }

  // ROOM CAROUSEL
  var roomCarousel = document.querySelector(".room__carousel");
  var roomBar = document.querySelector(".room-slider-progress-bar");

  if (roomCarousel && roomBar) {
    var roomSplide = new Splide(roomCarousel, {
      type: "loop",
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: false,
      drag: "free",
      snap: false,
      rewind: true,
      rewindByDrag: true,
      lazyLoad: true,
      perMove: 1,
      gap: 32,
      perPage: 3.5,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });

    roomSplide.on("mounted move", function () {
      var end = roomSplide.Components.Controller.getEnd() + 1;
      var rate = Math.min((roomSplide.index + 1) / end, 1);
      roomBar.style.width = 100 * rate + "%";
    });

    roomSplide.mount();
  }
});
