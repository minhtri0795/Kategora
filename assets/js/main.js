$(document).ready(function () {
  // Query selector for script
  let scriptOnPc = window.matchMedia("(min-width: 1025px)");
  let scriptOnTabletMobile = window.matchMedia("(max-width: 1024px)");
  let scriptOnTablet = window.matchMedia("(min-width:740px) and (max-width: 1024px)");
  let scripOnMobile = window.matchMedia("(max-width: 739px)");

  // Lazy loading
  const lazyImages = document.querySelectorAll("[lazy]");
  const lazyImageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // tấm ảnh này đã xuất hiện trên màn hình
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          const src = lazyImage.dataset.src;

          lazyImage.tagName.toLowerCase() === "img"
            ? // <img>: copy data-src sang src
              (lazyImage.src = src)
            : // copy xong rồi thì bỏ attribute lazy đi
              lazyImage.removeAttribute("lazy");

          // job done, không cần observe nó nữa
          observer.unobserve(lazyImage);
        }
      });
    },{ rootMargin: "0px 0px 100px 0px" }
    );
  // Observe từng tấm ảnh và chờ nó xuất hiện trên màn hình
  lazyImages.forEach((lazyImage) => {
    lazyImageObserver.observe(lazyImage);
  });

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

  // Change color logo and menu in dark zone
  const darkZone = $(".dark-zone")
  darkZone.each((i,darkSection)=>{
    ScrollTrigger.create({
      trigger: darkSection ,
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
    })
  })
  

  // Menu wraper event
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
        // click to hide menu
        if ($(".menu-wrapper").hasClass("active")) {
          $(".menu-wrapper").removeClass("active");
          $(".menu-wrapper .menu-btn .burguer span.top").css({ transform: "" });
          $(".menu-wrapper .menu-btn .burguer span.bottom").css({
            transform: "",
          });
        } 
        // click to show menu
        else {
          $(".menu-wrapper").addClass("active");
          $(".menu-wrapper .menu-btn .burguer span.top").css({
            transform: "translate(0px, 4px) rotate(225deg)",
          });
          $(".menu-wrapper .menu-btn .burguer span.bottom").css({
            transform: "translate(0px, -3px) rotate(-45deg)",
          });
          gsap.from(".menu-wrapper.active .main-link", {
            duration: 0.2,
            delay: 0.3,
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
  // EFFECT HANDLE
  $("[data-scroll]").each((i,scrollItem)=>{
    let effect = scrollItem.getAttribute("data-scroll-call") 
    switch (effect) {
      case 'fade-in':
        gsap.from(scrollItem,{
          scrollTrigger: scrollItem,
          duration:1,
          y:60,
          opacity:0,
          ease: "power2.out",
        })
        break
      case 'parallax':
        gsap.to(scrollItem, {
          y: -60,
          scrollTrigger: {
            trigger: scrollItem,
            scrub: 1,
          },
        });
        break
      case 'scale-center':
        gsap.from (scrollItem,{
          duration:1,
          scrollTrigger: scrollItem,
          opacity:0.6,
          scale:0.8,
          ease: "power2.out",
        })
        break
      case 'stagger-in':
        gsap.from(".stagger-item",{
          scrollTrigger:{
            trigger: scrollItem,
            onEnter: ()=> {
              $(".stagger-item").each(function (i, el) {
                setTimeout(function () {
                  el.classList.add("enter-viewport");
                }, i * 100);
              });
            },
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
        })
        break
    }
  })
  $("[data-type-letter-spacing]").each((i,letterSpacingItem)=>{
    gsap.from(letterSpacingItem, {
      scrollTrigger: {
        trigger: letterSpacingItem,
        start:"top 80%",
      },
      duration: 1.5,
      ease: "power2.out",
      opacity: 0,
      letterSpacing: "3em",
    });
  })
  $("[data-stagger-up]").each((i,staggerItem)=>{
    gsap.from(staggerItem.children, {
        scrollTrigger: {
          trigger: staggerItem,
          end: "bottom bottom",
        },
        duration:2,
        ease:"power2.out",
        y: 40,
        opacity:0,
        stagger: 0.15,
      });
  })
  $("[data-scale-down-type]").each((i,scaleDownItem)=>{
    gsap.to(scaleDownItem, {
      scrollTrigger: {
        trigger: scaleDownItem,
        scrub: 1,
        end:"top top",
      },
      scale: 1,
    });
  })
 // CTA-button show/hide
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
     scale: 0.4,
     opacity: 0,
   });
 });
  // Script for HomePage.
  const homePage = $("#homePage");
  if (homePage[0]) {
    // timeline animation when access home page.
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
      $("#backgroundAudio, #birdAudio").each((i, audio) => {
        audio.play();
      });
      // intro auto scroll down animation.
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

      // enable scroll when complete
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

    // intro only PC screen
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

    //Play video button click event
    $(".play-video").click(() => {
      gsap.to(".playFullVideo", {
        duration: 1,
        display: "flex",
        opacity: 1,
      });
      $("#fullVideo")[0].play();
    });
    // Pause video event
    $(".playFullVideo").click(() => {
      gsap.to(".playFullVideo", {
        duration: 0.5,
        display: "none",
        opacity: 0,
      });
      $("#fullVideo")[0].pause();
    });
    
    // sustainability border bottom
    ScrollTrigger.create({
      trigger: ".sustainability-block-wrapper .more-insights",
          onEnter: function () {
            $(".sustainability-block-wrapper .more-insights").addClass(
              "enter-viewport"
            );
          },
    })
  }

  // About page intro 
  const aboutPage = $("#about-page")
  if(aboutPage[0]){
    tl=gsap.timeline()
    tl.to(".page-header-wrapper .image-wrapper img",{
      duration:3,
      ease:"power2.out",
      scale:1,
    })
    .to(".page-header-wrapper .text-wrapper .main-title",{
      duration:2,
      opacity:1,
      scale:1,
    },"-=2.8")
    .from(".page-header-wrapper .text-wrapper .upper-title",{
      duration:2,
      letterSpacing: "4em",
      opacity:0
    },"-=2.5")
    .from(".logo",{
      duration:2,
      opacity:0,
      y:20
    },"-=2.3")
    .from(".menu-btn",{
      duration:1,
      opacity:0,
      x:30
    },"-=0.5")

    gsap.from(".the-history-wrapper .main-title .line",{
      scrollTrigger:{
        trigger:".the-history-wrapper .main-title",
        onEnter:()=>{
          $(".the-history-wrapper .main-title").addClass("enter-viewport")
        }
      },
      duration:1,
      delay:0.2,
      y:-20,
      opacity:0,
      scale:1.1,
      stagger:0.2
    })
  }
});

