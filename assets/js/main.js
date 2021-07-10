$(document).ready(function () {
  // Query selector for script
  let scriptOnPc = window.matchMedia("(min-width: 1025px)");
  let scriptOnTabletMobile = window.matchMedia("(max-width: 1024px)");
  // Lazy loading
  const lazyImages = $("[lazy]");
  const lazyImageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          const src = lazyImage.dataset.src;
          lazyImage.tagName.toLowerCase() === "img"
            ? (lazyImage.src = src)
            : lazyImage.removeAttribute("lazy");
          observer.unobserve(lazyImage);
        }
      });
    },
    { rootMargin: "0px 0px 200px 0px" }
  );
  lazyImages.each((i, lazyImage) => {
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

  // scroll change logo opacity.
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    var currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      $(".logo").attr("style","opacity: 0; pointer-events: none;")
    } else {
      $(".logo")[0].removeAttribute("style")
    }
    lastScrollTop = currentScroll;
    // change color Logo and Menu in dark zone.
    const darkZone = document.querySelectorAll(".dark-zone");
    darkZone.forEach((el) => {
      isDarkZone(scriptOnTabletMobile, el);
    });
  });

  function isDarkZone(mediaquery, darkzone) {
    let menuWrapper = $(".menu-btn");
    let audioBtn = $('.audio-btn-wrapper')
    let logo = $(".main-header-wrapper");
      if(mediaquery.matches){
        ScrollTrigger.create({
          trigger: darkzone,
          start: "top top",
          onEnter: function () {
            menuWrapper.addClass("light-btn");
            logo.addClass("change-color");
          },
          onLeave: function () {
            menuWrapper.removeClass("light-btn");
            logo.removeClass("change-color");
          },
          onEnterBack: function () {
            menuWrapper.addClass("light-btn");
            logo.addClass("change-color");
          },
          onLeaveBack: function () {
            menuWrapper.removeClass("light-btn");
            logo.removeClass("change-color");
          },
        });
      }else{
        ScrollTrigger.create({
          trigger: darkzone,
          start: "top center",
          end:'bottom center',
          onEnter: function () {
            menuWrapper.addClass("light-btn");
            audioBtn.addClass("light-btn");
            logo.addClass("change-color");
          },
          onLeave: function () {
            menuWrapper.removeClass("light-btn");
            audioBtn.removeClass("light-btn");
            logo.removeClass("change-color");
          },
          onEnterBack: function () {
            menuWrapper.addClass("light-btn");
            audioBtn.addClass("light-btn");
            logo.addClass("change-color");
          },
          onLeaveBack: function () {
            menuWrapper.removeClass("light-btn");
            audioBtn.removeClass("light-btn");
            logo.removeClass("change-color");
          },
        });
      }
      
    
  }

  //Handle audio button.
  $(".audio-btn-wrapper").click(function(){
    this.classList.toggle("active")
    $('audio').each((i,el)=>{
      el.muted =false
    })
    if(this.className.includes("active")){
      $('audio').each((i,el)=>{
        el.muted= true
      })
    }
    
  })
  // EFFECT HANDLE
  $("[data-scroll]").each((i, scrollItem) => {
    let type = scrollItem.getAttribute("data-scroll-call");
    ScrollTrigger.create({
      trigger: scrollItem,
      onEnter: effectHandle(type, scrollItem),
      once: true,
    });
  });

  function effectHandle(type, scrollItem) {
    let effectType = {
      "fade-in": function () {
        gsap.from(scrollItem, {
          scrollTrigger: scrollItem,
          duration: 1,
          y: 60,
          opacity: 0,
          ease: "power2.out",
        });
      },
      'parallax': function () {
        gsap.to(scrollItem, {
          y: -40,
          scrollTrigger: {
            trigger: scrollItem,
            scrub: 1,
          },
        });
      },
      "data-type-letter-spacing": function () {
        gsap.from(scrollItem, {
          scrollTrigger: {
            trigger: scrollItem,
            start: "top 80%",
          },
          duration: 1.5,
          ease: "power2.out",
          opacity: 0,
          letterSpacing: "3em",
        });
      },
      "scale-center": function () {
        gsap.from(scrollItem, {
          duration: 1,
          scrollTrigger: scrollItem,
          opacity: 0.6,
          scale: 0.8,
          ease: "power2.out",
        });
      },
      "data-stagger-up": function () {
        gsap.from(scrollItem.children, {
          scrollTrigger: {
            trigger: scrollItem,
            end: "bottom bottom",
            scrub: 2,
          },
          duration: 2,
          ease: "power2.out",
          y: 80,
          stagger: 0.2,
        });
      },
      "stagger-in": function () {
        gsap.from(scrollItem.children, {
          scrollTrigger: {
            trigger: scrollItem.children,
            onEnter: () => {
              $(scrollItem.children).each(function (i, el) {
                setTimeout(function () {
                  el.classList.add("enter-viewport");
                }, i * 100);
              });
            },
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
        });
      },
      "data-scale-down-type": function () {
        gsap.to(scrollItem, {
          scrollTrigger: {
            trigger: scrollItem,
            scrub: 1,
            end: "top top",
          },
          scale: 1,
        });
      },
      'toggleDisplay':function(){
        gsap.from(scrollItem, {
          scrollTrigger: {
            trigger: scrollItem,
            start: "-10px bottom",
            end: "bottom top",
            toggleActions: "restart none restart none",
          },
          duration: 0.8,
          scale: 0.4,
          opacity: 0,
        });
      }
    };
    return effectType[type];
  }
  $("[data-split-reveal-type]").each((i, revealItem) => {
    gsap.from(revealItem.children, {
      scrollTrigger: revealItem,
      duration: 1.5,
      y: -14,
      x: 14,
      opacity: 0,
      stagger: 0.1,
    });
  });
  
  
  // Menu handle
  menuHandle(scriptOnPc);
  function menuHandle(mediaquery) {
    // menu for PC
    if (mediaquery.matches) {
      $(".menu-btn-hitzone").mouseenter(() => {
        $(".menu-wrapper").addClass("active");
        (function(){
          gsap.from(".main-link", {
            duration: 0.2,
            y: 8,
            opacity: 0,
            stagger: 0.1,
          });
        })()
      });
      $(".inner-menu").mouseleave(() => {
        $(".menu-wrapper").removeClass("active");
      });
    } 
    // menu for Tablet/Mobile
    else {
      $(".menu-btn-hitzone").click(() => {
        $(".menu-wrapper").toggleClass("active");
        gsap.from(".menu-wrapper.active .main-link", {
              duration: 0.2,
              delay: 0.3,
              y: 8,
              opacity: 0,
              stagger: 0.1,
            });
      });
      // click body to close menu.
      $(".page-main").click(() => {
        $(".menu-wrapper").removeClass("active");
      });
    }
  }


  /*<=============HOME PAGE ============>*/
  const homePage = $("#homePage");
  if (homePage[0]) {
    // intro animation after refresh page.
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
      //auto scroll down animation.
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

    intro(scriptOnPc);
    function intro(mediaquery) {
      if (mediaquery.matches) {
        // hide and disable scrollbar
        document.querySelector(".disableScroll").style.display = "block";
        document.body.style.overflow = "hidden";
        // scale video when scroll down
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
  }

  function parallaxHeader(yOffset, mediaquery) {
    if (mediaquery.matches) {
      gsap.to(".page-header-wrapper", {
        scrollTrigger: {
          trigger: ".page-header-wrapper",
          scrub: true,
          start: "center center",
        },
        y: yOffset,
      });

      gsap.to(".page-header-wrapper .text-wrapper", {
        scrollTrigger: {
          trigger: ".page-header-wrapper .text-wrapper",
          scrub: true,
          start: "center center",
        },
        y: -18,
      });
    }
  }
  /*<===========ABOUT PAGE ========>*/ 
  const aboutPage = $("#about-page");
  if (aboutPage[0]) {
    tl = gsap.timeline();
    tl.to(".page-header-wrapper .image-wrapper img", {
      duration: 3,
      ease: "power2.out",
      scale: 1,
    })
      .to(
        ".page-header-wrapper .text-wrapper .main-title",
        {
          duration: 2,
          opacity: 1,
          scale: 1,
        },
        "-=2.8"
      )
      .from(
        ".page-header-wrapper .text-wrapper .upper-title",
        {
          duration: 2,
          letterSpacing: "4em",
          opacity: 0,
        },
        "-=2.5"
      )
      .from(
        ".logo",
        {
          duration: 2,
          opacity: 0,
          y: 20,
        },
        "-=2.3"
      )
      .from(
        ['.menu-btn','.audio-btn-wrapper'],
        {
          duration: 1,
          opacity: 0,
          x: 30,
        },
        "-=2"
      );
    parallaxHeader(340, scriptOnPc);

    //Team member slide.
    let picture = $(".photos-wrapper picture");
    let titleContent = $(".team-gallery-wrapper .title-container");
    let nextBtn = $(".team-gallery-wrapper .left-btn");
    let prevBtn = $(".team-gallery-wrapper .right-btn");
    let moreBtn = $(".btn-expand-description");
    let size = picture.length / 3;

    nextBtn.click(() => {
      if (size - 1) {
        handleTeamSlide(-100)
         size--;
      } 
    });
    prevBtn.click(() => {
      if (size < picture.length / 3) {
        handleTeamSlide(100)
        size++;
      }
    });

    function handleTeamSlide(x){
      gsap.to(picture, {
        duration: 0.6,
        xPercent: `+= ${x}`,
        ease: "power3.in",
      });
      gsap.to(titleContent, {
        duration: 0.6,
        yPercent: `+= ${x}`,
        ease: "power3.in",
      });
    }
    moreBtn.click(() => {
      let titleContent = $(
        ".team-gallery-wrapper .title-container .description"
      );
      let titleWrapper = $(".team-gallery-wrapper .titles-wrapper");
      titleContent.toggleClass("view-more");
      setTimeout(() => {
        titleWrapper.toggleClass("view-more");
      }, 50);
    });

    // Map location slider.
    let slideLocation = $(".slider-location");
    let rightBtn = $(".slider-container .right-btn");
    let leftBtn = $(".slider-container .left-btn");

    slideLocation.each(function (i, slideInner) {
      let slideItem = slideInner.children;
      let size = slideInner.children.length;
      rightBtn.click(function () {
        if (size - 1) {
          gsap.to(slideItem, {
            xPercent: "-=100",
            duration: 0.7,
          });
          size--;
        }
        // handle add/remove active class 
        let slideActive = checkActive(slideItem);
        if (slideActive.nextElementSibling) {
          handleActiveClass(slideActive,slideActive.nextElementSibling)
        }        
      });
      leftBtn.click(function () {
        if (size < slideInner.children.length) {
          gsap.to(slideItem, {
            xPercent: "+=100",
            duration: 0.7,
          });
          size++;
        }
        // handle add/remove active class.
        let slideActive = checkActive(slideItem);
        if (slideActive.previousElementSibling) {
          handleActiveClass(slideActive,slideActive.previousElementSibling)
        }
        
      });
    });

    // Handle change city.
    let selcectorItem = $(".slider-container .selector-item");
    let city = $(".contacts-gallery-wrapper .city .label");
    let mask = document.querySelectorAll(".slider-container .mask");
    selcectorItem.each(function (i, slector) {
      slector.addEventListener("click", function () {
        tl = gsap.timeline();
        tl.fromTo(
          mask,
          {
            transform: "scaleY(100%)",
            duration: 1,
          },
          {
            height: "0",
            delay: 0.6,
          }
        )
          .to(slideLocation, { yPercent: -i * 100 }, "-=1")
          .set(mask, {
            transform: "scaleY(0)",
            height: "100%",
          });
        // handle add remove active class.
        handleActiveClass(checkActive(selcectorItem), slector)
        handleActiveClass(checkActive(city), city[i])
      });
    });

    function checkActive(elementCheck) {
      Array.from(elementCheck);
      let activeEl = [];
      for (i of elementCheck) {
        if (i.className.includes("active")) {
          activeEl.push(i);
        }
      }
      return activeEl[0];
    }
    function handleActiveClass(activingEl, elWillActive) {
      activingEl.classList.remove("active")
      elWillActive.classList.add("active")
    }
  }

  /*<=========== PROJECT PAGE =========>*/ 

  // Intro timeline
  const projectPage = $("#project-page");
  if (projectPage[0]) {
    tl = gsap.timeline();
    tl.fromTo(
      ".page-header-wrapper .upper-title",
      {
        duration: 2,
        scaleX: 1.2,
        opacity: 0,
      },
      {
        duration: 2,
        scaleX: 1,
        opacity: 1,
      }
    ).fromTo(
      [".page-header-wrapper .main-title", ".page-header-wrapper .lower-title"],
      {
        duration: 2,
        opacity: 0,
        y: 40,
      },
      {
        duration: 2,
        opacity: 1,
        y: 0,
      },
      "-=1.5"
    );

    parallaxHeader(340, scriptOnPc);

    // Project slide.
    let nextBtn = $(
      ".kategora-timeline-wrapper .controllers-wrapper .right-btn"
    );
    let prevBtn = $(
      ".kategora-timeline-wrapper .controllers-wrapper .left-btn"
    );
    let imageLine = $(".kategora-timeline-wrapper .images-container");
    let timeLine = $(".kategora-timeline-wrapper .timeline-container");
    let xTranslate = 0;
    let vw = window.innerWidth / 100;
    
    nextBtn.click(function () {
      if (xTranslate < imageLine[0].clientWidth - 60 * vw) {
        handleClick(40,2)
      }
    });

    prevBtn.click(function () {
      if (xTranslate > 0) {
        handleClick(-40,2)
      }
    });

    function handleClick(x, duration){
      gsap.to([imageLine, timeLine], {
        duration: duration,
        x: `-=${x * vw}`,
        ease: "power3",
      });
      xTranslate += x * vw;
    }
  }

  /*Expertise Page*/
  let expertisePage = $("#expertise-page");
  if (expertisePage[0]) {
    // intro
    tl = gsap.timeline();
    tl.fromTo(
      ".page-header-wrapper .image-wrapper",
      {
        duration: 2,
        opacity: 0.5,
        scale: 1.1,
      },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
      }
    )
      .fromTo(
        ".page-header-wrapper .upper-title",
        {
          duration: 2,
          scaleX: 1.2,
          opacity: 0,
        },
        {
          duration: 2,
          scaleX: 1,
          opacity: 1,
        },
        "-=1.5"
      )
      .fromTo(
        [
          ".page-header-wrapper .main-title",
          ".page-header-wrapper .lower-title",
        ],
        {
          duration: 2,
          opacity: 0,
          y: 40,
        },
        {
          duration: 2,
          opacity: 1,
          y: 0,
        },
        "-=1.5"
      );
    parallaxHeader(340, scriptOnPc);
    let line = document.querySelectorAll(".expertise-list-wrapper .line");
    line.forEach((lineitem, i) => {
      lineitem.addEventListener("click", function () {
        let innerContent = $(".expertise-list-wrapper .inner-content");
        let innerText = $(".layout-1,.layout-2");
        if (innerContent[i].getAttribute("style") === "height:0") {
          innerContent[i].setAttribute(
            "style",
            `height:${innerText[i].clientHeight}px`
          );
          this.style.opacity = "1";
          handleVideo()[i].play();
        } else {
          innerContent[i].setAttribute("style", "height:0");
          this.style.opacity = "";
          handleVideo()[i].pause();
        }
      });
    });
    function handleVideo() {
      let video = $(".vector-img");
      video.each((i, videoEl) => {
        videoEl.addEventListener("mouseenter", () => {
          let randomRotate = Math.floor(Math.random() * 20 - 10);
          videoEl.play();
          videoEl.setAttribute(
            "style",
            `transform:scale(1.8) rotate(${randomRotate}deg)`
          );
        });
        videoEl.addEventListener("mouseout", () => {
          videoEl.pause();
          videoEl.removeAttribute("style");
        });
      });
      return video;
    }
    handleVideo();
    // custom cursor function
    function ctaCursor(mediaquery) {
      if (mediaquery.matches) {
        let ctaCursor = $(".cta-cursor");
        gsap.set(ctaCursor, { xPercent: -50, yPercent: -50 });
        window.addEventListener("mousemove", (e) => {
          gsap.to(ctaCursor, {
            x: e.clientX,
            y: e.clientY,
            delay: 0.03,
          });
          // hide custom cursor
          if (e.pageY <= 820 || e.pageY >= 2160) {
            ctaCursor[0].style.display = "none";
          } else {
            ctaCursor[0].style.display = "inline-flex";
          }
        });
      }
    }
    ctaCursor(scriptOnPc);
  }

  /******** INSIGHTS PAGE *********** */

  let border = $(".border-option");
  let catogeries = $(".filters-wrapper .categories li");
  border.click(
    function () {
      this.classList.toggle("active")
      if(this.className.includes("active")){
        gsap.to(catogeries, {
          opacity: 1,
          visibility: "visible",
          stagger: 0.1,
          delay:0.2
        });
      }
      catogeries.each((i,el)=>{
        el.removeAttribute("style")
      })
    }
  );
});
