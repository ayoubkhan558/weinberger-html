
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 2.2,
    smoothWheel: true,
    smoothTouch: true,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});



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
