// const mp4 = document.querySelector(".mp4");
// const tl = new TimelineMax();

// tl.fromTo(mp4, 1, {height: "0%"}, {height: "80%"});

const tl_vid = gsap.timeline({ ease: "Power1.easeInOut" })

    // .to(".mp4", {
    //     duration:1,
    //     y: "8.2%"
    // })

    .from("video", {
        opacity: 0,
        duration: 1,
        scale: 1.2,
        stagger: .2,
        y: "-8.2%"
    })

// for landing page-animation 