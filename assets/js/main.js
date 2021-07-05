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
            ? 
              (lazyImage.src = src)
            : 
              lazyImage.removeAttribute("lazy");
          observer.unobserve(lazyImage);
        }
      });
    },
    { rootMargin: "0px 0px 200px 0px" }
  );
  lazyImages.each((i,lazyImage) => {
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


  // EFFECT HANDLE
  $("[data-scroll]").each((i, scrollItem) => {
    let type = scrollItem.getAttribute("data-scroll-call");
    ScrollTrigger.create({
      trigger:scrollItem,
      onEnter: effectHandle(type,scrollItem),
      once: true,
    })
  });

  function effectHandle(type,scrollItem){
  let effectType = {
    'fade-in': function(){
      gsap.from(scrollItem, {
        scrollTrigger: scrollItem,
        duration: 1,
        y: 60,
        opacity: 0,
        ease: "power2.out",
      });
    },
    'parallax':function(){
      gsap.to(scrollItem, {
        y: -40,
        scrollTrigger: {
          trigger: scrollItem,
          scrub: 1,
        },
      });
    },
    'data-type-letter-spacing' : function(){
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
    "scale-center": function(){
      gsap.from(scrollItem, {
        duration: 1,
        scrollTrigger: scrollItem,
        opacity: 0.6,
        scale: 0.8,
        ease: "power2.out",
      });
    },
    'data-stagger-up':function(){
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
    "stagger-in":function(){
      gsap.from(".stagger-item", {
        scrollTrigger: {
          trigger: scrollItem,
          onEnter: () => {
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
      });
    },
    'data-scale-down-type':function(){
      gsap.to(scrollItem, {
        scrollTrigger: {
          trigger: scrollItem,
          scrub: 1,
          end: "top top",
        },
        scale: 1,
      });
    },
    // 'data-split-reveal-type':function(){
      
    // }
  }
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

  // logo scroll opacity
  var lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      gsap.to(".logo", {
        duration: 0.6,
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(".logo", {
        duration: 0.6,
        opacity: 1,
        display: "block",
      });
    }
    lastScrollTop = currentScroll;
  });

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

  window.addEventListener("scroll", () => {
    const dark = document.querySelectorAll(".dark-zone");
    dark.forEach((el) => {
      if (
        scrollY - el.offsetTop >= 650 &&
        scrollY - el.offsetTop <= 650 + el.clientHeight
      ) {
        $(".menu-btn").addClass("light-btn");
      } else {
        $(".menu-btn").removeClass("light-btn");
      }
    });
  });

  // // Change color logo and menu in dark zone
  // const darkZone = $(".dark-zone")
  // darkZone.each((i,darkSection)=>{
  //   ScrollTrigger.create({
  //     trigger: darkSection ,
  //       // start: "top center",
  //       // end: "bottom center",
  //       onEnter: () => {
  //         $(".main-header-wrapper").addClass("change-color");
  //         $(".menu-btn").addClass("light-btn");
  //       },
  //       onEnterBack: () => {
  //         $(".main-header-wrapper").addClass("change-color");
  //         $(".menu-btn").addClass("light-btn");
  //       },
  //       onLeave: () => {
  //         $(".main-header-wrapper").removeClass("change-color");
  //         $(".menu-btn").removeClass("light-btn");
  //       },
  //       onLeaveBack: () => {
  //         $(".main-header-wrapper").removeClass("change-color");
  //         $(".menu-btn").removeClass("light-btn");
  //       },
  //   })
  // })

  // MENU HANDLE
  // On PC
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
  menuPc(scriptOnPc);

  // On mobile & tablet
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
  buggerMenu(scriptOnTabletMobile);

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
    });
  }

  // About page intro
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
        ".menu-btn",
        {
          duration: 1,
          opacity: 0,
          x: 30,
        },
        "-=0.5"
      );
    parallaxHeader(340, scriptOnPc);
    gsap.from(".the-history-wrapper .main-title .line", {
      scrollTrigger: {
        trigger: ".the-history-wrapper .main-title",
        onEnter: () => {
          $(".the-history-wrapper .main-title").addClass("enter-viewport");
        },
      },
      duration: 1,
      delay: 0.2,
      y: -20,
      opacity: 0,
      scale: 1.1,
      stagger: 0.2,
    });

    //Team member slide.
    let picture = $(".photos-wrapper picture");
    let titleContent = $(".team-gallery-wrapper .title-container");
    let nextBtn = $(".team-gallery-wrapper .left-btn");
    let prevBtn = $(".team-gallery-wrapper .right-btn");
    let moreBtn = $(".btn-expand-description");
    let size = picture.length / 3;

    nextBtn.click(() => {
      if (size - 1) {
        gsap.to(picture, {
          duration: 0.6,
          xPercent: "-=100",
          ease: "power3.in",
        });
        gsap.to(titleContent, {
          duration: 0.6,
          yPercent: "-=100",
          ease: "power3.in",
        });
        size--;
      } else {
        gsap.to(picture, {
          duration: 0.6,
          xPercent: "",
          ease: "power3.in",
        });
        gsap.to(titleContent, {
          duration: 0.6,
          yPercent: "0",
          ease: "power3.in",
        });
        size = picture.length / 3;
      }
    });
    prevBtn.click(() => {
      if (size < picture.length / 3) {
        gsap.to(picture, {
          duration: 0.6,
          xPercent: "+=100",
          ease: "power3.in",
        });
        gsap.to(titleContent, {
          duration: 0.6,
          yPercent: "+=100",
          ease: "power3.in",
        });
        size++;
      }
    });
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
        // handle: add/remove active class
        let slideActive = checkActive(slideItem);
        if (slideActive.nextElementSibling) {
          slideActive.classList.remove("active");
          slideActive.nextElementSibling.classList.add("active");
        }
        // check if end of slider.
        if (size - 1) {
          gsap.to(slideItem, {
            xPercent: "-=100",
            duration: 0.7,
          });
          size--;
        } 
      });
      leftBtn.click(function () {
        // handle: add/remove active class.
        let slideActive = checkActive(slideItem);
        if (slideActive.previousElementSibling) {
          slideActive.classList.remove("active");
          slideActive.previousElementSibling.classList.add("active");
        }
        // check if start of slider.
        if (size < slideInner.children.length) {
          gsap.to(slideItem, {
            xPercent: "+=100",
            duration: 0.7,
          });
          size++;
        }
      });
    });

    // Handle change city.
    let selcectorItem = $(".slider-container .selector-item");
    let city = $(".contacts-gallery-wrapper .city .label");
    let mask = document.querySelectorAll(".slider-container .mask")
    console.log(mask)
    selcectorItem.each(function (i, slector) {
      slector.addEventListener("click", function () {
        tl= gsap.timeline()
        tl.fromTo(mask,{
          transform: 'scaleY(100%)',
          duration:1,
        },{
          height:'0',
          delay:0.6,
        })
        .to(slideLocation, { yPercent: -i * 100,},"-=1")
        .set(mask,{
          transform: 'scaleY(0)',
          height:'100%',
        })
        // hand change city name and selector
        let selActive = checkActive(selcectorItem);
        let activeCity = checkActive(city);
        selActive.classList.remove("active");
        slector.classList.add("active");
        activeCity.classList.remove("active");
        city[i].classList.add("active");
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
  }

  // project page

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

    // slide project
    let nextBtn = $(".kategora-timeline-wrapper .controllers-wrapper .right-btn");
    let prevBtn = $(".kategora-timeline-wrapper .controllers-wrapper .left-btn");
    let imageLine = $(".kategora-timeline-wrapper .images-container")
    let timeLine = $(".kategora-timeline-wrapper .timeline-container")
    let xTranslate = 0
    let vw = window.innerWidth/100;
    nextBtn.click(function(){  
    if(xTranslate<(imageLine[0].clientWidth-(60*vw))){
      gsap.to([imageLine,timeLine], {
        duration:2,
        x: `-=${40*vw}`,
        ease:'power3'
      });
      xTranslate += 40*vw;
    }else {
      gsap.to([imageLine,timeLine], {
        duration:5,
        x: 0,
        ease:'power3'
      });
      xTranslate = 0;
    }
    })

    prevBtn.click(function(){
    if (xTranslate>0){
      gsap.to([imageLine,timeLine], {
        duration:2,
        x: `+= ${40*vw}`,
        ease:'power3'
      });
      xTranslate -= 40*vw; 
    }
    })
    
      
  }
  /*PARALLLAX HEADER*/
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
      lineitem.addEventListener("click",function () {
        let innerContent = $(".expertise-list-wrapper .inner-content");
        let innerText = $(".layout-1,.layout-2");
        if (innerContent[i].getAttribute("style") === "height:0") {
          innerContent[i].setAttribute(
            "style",
            `height:${innerText[i].clientHeight}px`
          );
          this.style.opacity = '1'
          handleVideo()[i].play();
        } else {
          innerContent[i].setAttribute("style", "height:0");
          this.style.opacity = ''
          handleVideo()[i].pause();
        }
      });
    });

    // handle video function
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
            delay: 0.05,
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
  let catogeries = $(".filters-wrapper .categories");
  border.hover(
    function () {
      (function () {
        gsap.to(catogeries[0].children, {
          duration: 0.3,
          opacity: 1,
          visibility: "inherit",
          stagger: 0.1,
          delay: 0.3,
        });
      })();
      this.setAttribute(
        "style",
        `height:${catogeries[0].clientHeight + this.clientHeight}px`
      );
    },
    function () {
      gsap.to(catogeries[0].children, {
        opacity: 0,
        visibility: "hiden",
        delay:0,
      });
      this.removeAttribute("style");
      Array.from(catogeries[0].children).forEach((el) => {
        el.removeAttribute("style");
      });
    }
  );
});
