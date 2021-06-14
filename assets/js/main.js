$(document).ready(function () {
  let scriptOnPc =  window.matchMedia("(min-width: 1025px)");
  let scriptOnTablet = window.matchMedia("(min-width:740px) and (max-width: 1024px)")
  let scripOnMobile = window.matchMedia("(max-width: 739px)")
  let scriptOnTabletMobile =  window.matchMedia("(max-width: 1024px)");

  // Force page alway on top after refresh.
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  // logo scroll opacity
  var lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      gsap.to(".logo", {
        duration: 0.5,
        opacity: 0,
      });
    } else {
      gsap.to(".logo", {
        duration: 2,
        opacity: 1,
      });
    }
    lastScrollTop = currentScroll;
  });

  // Change color logo and menu
  gsap.to(".sustainability-block-wrapper", {
    scrollTrigger: {
      trigger: ".sustainability-block-wrapper",
      // start: "top center",
      // end: "bottom center",
      onEnter: () => {
        $(".main-header-wrapper").addClass("change-color");
        $(".menu-btn").addClass("light-btn");
      },
      onEnterBack: () => {
        $(".main-header-wrapper").addClass("change-color");
        $(".menu-btn").addClass("light-btn");
      },
      onLeave: () => {
        $(".main-header-wrapper").removeClass("change-color");
        $(".menu-btn").removeClass("light-btn");
      },
      onLeaveBack: () => {
        $(".main-header-wrapper").removeClass("change-color");
        $(".menu-btn").removeClass("light-btn");
      },
    },
  });
  // menu wraper

    // on PC
    menuPc(scriptOnPc);
    function menuPc(mediaquery) {
      if (mediaquery.matches) {
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
      }
    }
      // on mobile & tablet
    buggerMenu(scriptOnTabletMobile);
    function buggerMenu(mediaquery) {
      if (mediaquery.matches) {
        $(".menu-btn-hitzone").click(() => {
          if ($(".menu-wrapper").hasClass("active")) {
            $(".menu-wrapper").removeClass("active");
            $(".menu-wrapper .menu-btn .burguer span.top").css({ transform: "" });
            $(".menu-wrapper .menu-btn .burguer span.bottom").css({
              transform: "",
            });
          } else {
            $(".menu-wrapper").addClass("active");
            $(".menu-wrapper .menu-btn .burguer span.top").css({
              transform: "translate(0px, 4px) rotate(225deg)",
            });
            $(".menu-wrapper .menu-btn .burguer span.bottom").css({
              transform: "translate(0px, -3px) rotate(-45deg)",
            });
            gsap.from(".main-link", {
              duration: 0.2,
              y: 8,
              opacity: 0,
              stagger: 0.1,
            });
          }
        });
        // onclick body to close burguer menu.
        $(".page-main").click(() => {
          $(".menu-wrapper").removeClass("active");
          $(".menu-wrapper .menu-btn .burguer span.top").css({ transform: "" });
          $(".menu-wrapper .menu-btn .burguer span.bottom").css({
            transform: "",
          });
        });
      }
    }
    // Run script at home page
  const homePage = $("#homePage")
  if(homePage[0]){

  // timeline animation when access page.
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

    // Intro animation when click continue button.
  $(".continue-btn").click(() => {

    // play audio
    $("#backgroundAudio, #birdAudio").each((i,audio)=>{
      audio.play()
    })
    // scroll down
    var int = setInterval(function () {
      let videoContainer = document.querySelector("#introVideo");
      let i = scrollY - videoContainer.offsetTop;
      scrollY += 6;
      window.scrollTo(0, scrollY);
      
      if (i >= 0) {
        $(".continue-btn").hide();
        clearInterval(int);
      }
    }, 14);

    // enable scroll
    setTimeout(() => {
      document.querySelector(".disableScroll").style.display = "block";
      document.body.style.overflow = "";
    }, 2000);

    // display play button
    gsap.from(".play-video", {
      duration: 2,
      opacity: 0,
      delay: 2,
    });
  });

  //Play video button click
  $(".play-video").click(() => {
    gsap.to(".playFullVideo", {
      duration: 1,
      display: "flex",
      opacity: 1,
    });
    $("#fullVideo")[0].play();
  });
  $(".playFullVideo").click(() => {
    gsap.to(".playFullVideo", {
      duration: 0.5,
      display: "none",
      opacity: 0,
    });
    $("#fullVideo")[0].pause();
  });

  // Intro animation scroll only run on PC.
  intro(scriptOnPc);
  function intro(mediaquery) {
    if (mediaquery.matches) {
      // hide and disable scrollbar
      document.querySelector(".disableScroll").style.display = "block";
      document.body.style.overflow = "hidden";
      // scale video whem scroll down
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
        y: 360,
      });
      gsap.to(".home-header-wrapper .image-wrapper .text-wrapper h2", {
        scrollTrigger: {
          trigger: ".home-header-wrapper .image-wrapper .text-wrapper h2",
          scrub: true,
        },
        y: -200,
      });
    }
  }

  // cta-button display/hide
  const ctaWrapper = gsap.utils.toArray(".cta-btn-wrapper");
  ctaWrapper.forEach((cta) => {
    gsap.from(cta, {
      scrollTrigger: {
        trigger: cta,
        start: "-10px bottom",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
      duration: 0.8,
      scale: 0,
      opacity: 0,
    });
  });
  
// project block text lazy load
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

  //Project block-block images parallax
  const blockImages = gsap.utils.toArray(".block-img");
  blockImages.forEach((image) => {
    gsap.to(image, {
      y: -60,
      scrollTrigger: {
        trigger: image,
        scrub: 1,
      },
    });
  });

  // Floating image
  const floatingImages = gsap.utils.toArray(".floating-img");
  floatingImages.forEach((image) => {
    gsap.to(image, {
      y: -40,
      scrollTrigger: {
        trigger: image,
        scrub: 1,
      },
    });
  });

  //Border bottom static list animation
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
  // about block image lazy load
  gsap.from(".about-block-wrapper .text-container .left-img-picture", {
    scrollTrigger: {
      trigger: ".about-block-wrapper .text-container .left-img-picture",
    },
    duration: 1.5,
    opacity: 0,
    scale: 1.3,
  });

  // sustainability image parallax scroll
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
  // sustainability text animation
  gsap.from(".newsletter-block-wrapper .upper-title", {
    scrollTrigger: {
      trigger: ".newsletter-block-wrapper",
    },
    duration: 1,
    ease: "power4.out",
    opacity: 0,
    letterSpacing: "3em",
  });
  // big number scale animation.
  gsap.to(".about-block-wrapper .big-number-container .number span", {
    scrollTrigger: {
      trigger: ".about-block-wrapper .big-number-container .number span",
      scrub: true,
    },
    scale: 1,
  });
  // sustainability text lazy load
  gsap.from(".sustainability-block-wrapper .text-container", {
    scrollTrigger: {
      start: "20px bottom",
      trigger: ".sustainability-block-wrapper .text-container",
    },
    duration: 2,
    opacity: 0,
    y: 80,
  });
  // footer image scroll parallax.
  
  gsap.from(".featured-work-footer-wrapper .work-list li", {
    scrollTrigger: {
      trigger: ".featured-work-footer-wrapper",
      end: "bottom bottom",
      scrub: 3,
    },
    y: 60,
    stagger: 0.15,
  });
  }
  
});
