$(document).ready(function () {
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
      end:"bottom top",
      toggleActions: "restart none restart none",
    },
    duration: 0.4,
    scale: 1,
    opacity:1,
  });
  gsap.to(".projects-block-wrapper .text-container", {
    scrollTrigger: {
      trigger: ".projects-block-wrapper .text-container",
      // start: "center bottom",
      toggleActions: "restart none none none",
    },
    duration: 0.8,
    ease: "power1.out",
    opacity: 1,
    y: -20,
  });
  var BlockImages = document.querySelectorAll('.block-img')
  BlockImages = Array.from(BlockImages)
  window.addEventListener("scroll",()=>{
    BlockImages.forEach((img)=>{
      if (scrollY>=img.offsetTop){
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "center bottom",
            toggleActions: "restart none none none",
          },
          y: 60,
        });
      }
    })
  })
  gsap.to(".kiraly-2-image,.nivaria-2-image", {
    scrollTrigger: {
      trigger: ".kiraly-2-image,.nivaria-2-image",
      // start: "center bottom",
      toggleActions: "restart none none none",
    },
    y: -60,
  });
  
  $(".menu-btn-hitzone").mouseenter(() => {
    $(".menu-wrapper").addClass("active")
    gsap.from(".main-link", {
      duration:0.2,
      y: 8,
      opacity: 0,
      stagger: 0.1,
    });
  });
  $(".inner-menu").mouseleave(() => {
    $(".menu-wrapper").removeClass("active");
  });
});
