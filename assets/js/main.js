
document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
    // smooth: true, 
    duration: 2.2,
    smoothWheel: true,
    smoothTouch: true,
    lerp: 0.1,
  });

  function raf(time) {
    lenis.raf(time);

    if (window.sr && sr.delegate) {
      sr.delegate();
    }

    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  if (typeof ScrollReveal !== "undefined") {
    window.sr = ScrollReveal({
      distance: "24px",
      duration: 700,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      scale: 1,
      mobile: true,
      reset: false,
    });

    const revealIfExists = (selector, options) => {
      if (document.querySelector(selector)) {
        sr.reveal(selector, options);
      }
    };

    /* ---------------------------------------------------------
       REVEALS
    --------------------------------------------------------- */

    revealIfExists(".home-hero__content", {
      origin: "bottom",
      interval: 50,
      delay: 100,
    });

    revealIfExists(".why__card", {
      origin: "bottom",
      distance: "16px",
      interval: 120,
    });

    revealIfExists(".treatments__item", {
      origin: "bottom",
      distance: "20px",
      interval: 100,
    });

    revealIfExists(".memberships__item", {
      origin: "bottom",
      distance: "12px",
      interval: 80,
    });

    revealIfExists(".contact__image, .contact__content", {
      origin: "right",
      distance: "24px",
      interval: 80,
    });
  }
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



// custom cursor
document.addEventListener("DOMContentLoaded", function () {
  // Check for cursor and follower; create if missing
  let cursor = document.querySelector(".cursor");
  let follower = document.querySelector(".cursor-follower");

  if (!cursor) {
    cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
  }

  if (!follower) {
    follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.appendChild(follower);
  }

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  const cursorSpeed = 0.18;
  const followerSpeed = 0.08;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;

    cursorX += distX * cursorSpeed;
    cursorY += distY * cursorSpeed;

    followerX += (mouseX - followerX) * followerSpeed;
    followerY += (mouseY - followerY) * followerSpeed;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animate);
  }

  animate();

  const buttons = document.querySelectorAll(".btn, .card, .image-box");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    });

    button.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    });
  });

  const textElements = document.querySelectorAll("h1, h2, h3, p, a");

  textElements.forEach((text) => {
    text.addEventListener("mouseenter", () => {
      cursor.classList.add("text-hover");
      follower.classList.add("text-hover");
    });

    text.addEventListener("mouseleave", () => {
      cursor.classList.remove("text-hover");
      follower.classList.remove("text-hover");
    });
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    follower.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    follower.style.opacity = "1";
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    follower.style.transform = "translate(-50%, -50%) scale(0.9)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    follower.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
