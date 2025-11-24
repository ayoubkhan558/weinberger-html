
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 2.2,
    smooth: true,
    smoothTouch: false,
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
  var splide = new Splide(".team__carousel", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    pagination: false,
    arrows: false,
  });

  var bar = document.querySelector(".slider-progress-bar");

  splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  splide.mount();
});
document.addEventListener("DOMContentLoaded", function () {
  var splideElm = document.querySelector(".room__carousel");
  var splide = new Splide(".room__carousel", {
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
    perPage: 3.5, // Desktop: 3 slides
    breakpoints: {
      768: {
        perPage: 1, // Mobile: 1 slide
      },
    },
  });

  var barEl = document.querySelector(".room-slider-progress-bar");

  splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    barEl.style.width = String(100 * rate) + "%";
  });

  splide.mount();
});
