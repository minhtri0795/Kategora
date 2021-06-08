$(document).ready(function(){
    gsap.to(".header-video-container video", {
        scrollTrigger: {
            trigger: ".header-video-container video",
            start: "top 90%",
            end: "center center",
            scrub: true,
        },
        scale: 1,
        ease:"power1.in"
    })
    gsap.to(".home-header-wrapper .text-wrapper", {  
        scrollTrigger: {
            trigger: ".home-header-wrapper .text-wrapper",
            start: "top 33%",
            end: "bottom top",
            markers:true,
            scrub: 1
        },
        y:600,
        ease:"power1.in"
    })
});