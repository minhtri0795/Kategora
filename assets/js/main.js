$(document).ready(function () {
  // Force scrollbar on top and can't scrolling after refresh page.
  if (history.scrollRestoration) {
    document.getElementById("scrollbar").style.display = "block";
    document.body.style.overflow = "hidden";
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
 // Intro animation after refresh page.
  $(".continue-btn").click(() => {
    setTimeout(() => {
      document.getElementById("scrollbar").style.display = "block";
      document.body.style.overflow = "";
    }, 1500);
    $(".continue-btn").hide();
    var i = 0;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i += 8;
      if (i >= 600) {
        clearInterval(int);
      }
    }, 15);
  });
  let tl = gsap.timeline();
  tl.to(".home-header-wrapper .text-wrapper h2", {
    duration: 1,
    opacity: 1,
    y: 0,
  })
    .from(
      ".home-header-wrapper .upper-title",
      {
        duration: 1,
        letterSpacing: "4em",
        opacity: 0,
      },
      "-=0.7"
    )
    .from(
      ".main-header-wrapper .logo",
      {
        duration: 1,
        y: 60,
        opacity: 0,
      },
      "-=1"
    )
    .from("#introVideo", {
      duration: 1,
      y: "+=60",
      opacity: 0,
    })
    .from(
      ".continue-btn",
      {
        duration: 1,
        y: "+=40",
        opacity: 0,
      },
      "-=0.4"
    );
    // 
  gsap.to(".header-video-container video", {
    scrollTrigger: {
      trigger: ".header-video-container video",
      start: "top 90%",
      end: "center center",
      scrub: true,
    },
    scale: 1,
  });
  gsap.to(".home-header-wrapper .background-dark", {
    scrollTrigger: {
      trigger: ".home-header-wrapper .background-dark",
      start: "top top",
      end: "60% center",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".home-header-wrapper .text-wrapper", {
    scrollTrigger: {
      trigger: ".home-header-wrapper .text-wrapper",
      start: "top 33%",
      end: "bottom top",
      scrub: true,
    },
    y: 150,
  });

  gsap.to(".cta-btn-wrapper", {
    scrollTrigger: {
      trigger: ".cta-btn-wrapper",
      start: "-10px bottom",
      end: "bottom top",
      toggleActions: "restart none restart none",
    },
    duration: 0.4,
    scale: 1,
    opacity: 1,
  });
  gsap.to(".projects-block-wrapper .text-container", {
    scrollTrigger: {
      trigger: ".projects-block-wrapper .text-container",
      toggleActions: "play none none none",
    },
    duration: 1,
    ease: "power1.out",
    opacity: 1,
    y: -80,
  });
  gsap.from(".statistics-list li", {
    scrollTrigger: {
      trigger: ".statistics-list",
      onEnter: function addClass() {
        $(".statistics-list li").each(function (i, el) {
          setTimeout(function () {
            el.classList.add("enter-viewport");
          }, i * 100);
        });
      },
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
  });
  gsap.from(".sustainability-block-wrapper .more-insights .insights-list li", {
    scrollTrigger: {
      trigger: ".sustainability-block-wrapper .more-insights",
      scrub: 1,
      onEnter: function () {
        $(".sustainability-block-wrapper .more-insights").addClass(
          "enter-viewport"
        );
      },
    },
    y: 40,
    stagger: 0.15,
  });
  gsap.from(".newsletter-block-wrapper .upper-title", {
    scrollTrigger: {
      trigger: ".newsletter-block-wrapper",
    },
    duration: 1,
    ease: "power4.out",
    opacity: 0,
    letterSpacing: "3em",
  });
  gsap.to(".about-block-wrapper .big-number-container .number span", {
    scrollTrigger: {
      trigger: ".about-block-wrapper .big-number-container .number span",
      scrub: true,
    },
    scale: 1,
  });
  gsap.from(".sustainability-block-wrapper .text-container", {
    scrollTrigger: {
      start: "20px 70%",
      trigger: ".sustainability-block-wrapper .text-container",
    },
    duration: 5,
    ease: "power4",
    opacity: 0,
    y: 60,
  });
  gsap.from(".featured-work-footer-wrapper .work-list li", {
    scrollTrigger: {
      trigger: ".featured-work-footer-wrapper",
      end: "bottom bottom",
      scrub: 3,
    },
    y: 60,
    stagger: 0.15,
  });
  // menu
  $(".menu-btn-hitzone").mouseenter(() => {
    $(".menu-wrapper").addClass("active");
    gsap.from(".main-link", {
      duration: 0.2,
      y: 8,
      opacity: 0,
      stagger: 0.1,
    });
  });
  $(".inner-menu").mouseleave(() => {
    $(".menu-wrapper").removeClass("active");
  });
});
