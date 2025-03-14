function smoothscrolling(){
   // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
}
smoothscrolling();
function landinganimation(){
  
    let line = document.querySelector("#line")
    let tl = gsap.timeline(
        {
            onComplete:function(){
                document.body.style.overflow = "auto"
            }
        }
    )
    gsap.to(line,{
        width:0,
        duration:1
    })
    let text = document.querySelector("#texts")
    tl.from(text,{
        y:"130%",
        opacity:0,
        duration:1
    })
    tl.to(text,{
        opacity:0
    })
   let graphs = document.querySelectorAll("#graphs");
    tl.to(graphs,{
        y:"-200%",
        stagger:-0.09,
        duration:2,
    })
    tl.to("#loadingpage",{
        y:"-300%",
    })
   
}
landinganimation();
function cursoranimation(){
    let cursor  = document.querySelector("#cursor")
let body = document.querySelector("body")
    body.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            left:dets.clientX +"px",
            top:dets.clientY +"px",
            opacity:1,
             ease: "power2.out"
        })
    })
    body.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity:0
        })
    })
}
cursoranimation();
function navbarhoveranimation(){
let container = document.querySelector("#mid")
let sections = document.querySelectorAll("#mid li")
let background = document.querySelector("#background")
sections.forEach(function(section){
    let pos = section.getBoundingClientRect()
    let mainpos = container.getBoundingClientRect()
    section.addEventListener("mouseover",function(){
gsap.to(background,{
    opacity:1,
    x:pos.x-mainpos.x+"px",
    width:pos.width +"px",
})
    })

})
container.addEventListener("mouseleave",function(){
    gsap.to(background,{
        x:0,
        opacity:0
    })

})
}
navbarhoveranimation();
function page1textanimation(){
let firsttext = document.querySelector("#first")
let secondtext = document.querySelector("#second")
gsap.to(firsttext,{
x:"-15%",
scrollTrigger:{
    trigger:firsttext,
    scroller:"body",
    scrub:true,
}
}) 

gsap.to(secondtext,{
x:"10%",
scrollTrigger:{
    trigger:secondtext,
    scroller:"body",
    scrub:true,
}
})
}
page1textanimation();
function page2containeranimation(){
    let leftcontainer = document.querySelector("#leftpage2")
    let rightcontainer = document.querySelector("#rightpage2")
    gsap.to(leftcontainer,{
        transform:"translateX(0) rotate(0deg)",
        scrollTrigger:{
            trigger:leftcontainer,
            scroller:"body",
            scrub:true,
            start:"top 50%",
            end:"bottom 100%"
        }
    })
    gsap.to(rightcontainer,{
        transform:"translateX(0) rotate(0deg)",
        scrollTrigger:{
            trigger:rightcontainer,
            scroller:"body",
            scrub:true,

            start:"top 50%",
            end:"bottom 100%"
        }
    })
}
page2containeranimation()

function textanimationinpage3(){
    let firsth1 = document.querySelectorAll("#firsth1page3 span ")
    let secondh1 = document.querySelectorAll("#secondh1page3 span")

    let tl = gsap.timeline()
    gsap.from(firsth1, {
        y: "100%",
        opacity: 0,
        stagger: 0.05,  
        duration: 0.5,
        scrollTrigger: {
            trigger: "#firsth1page3",
            scroller: "body",
            scrub:  1,
            start: "top 80%",
            end: "bottom 250%",
        }
    });

    gsap.from(secondh1, {
        y: "100%",
        opacity: 0,
        stagger: 0.05, 
        duration: 0.5,
        scrollTrigger: {
            trigger: "#secondh1page3",
            scroller: "body",
            scrub: 1,
            start: "top 80%",
            end: "bottom 250%",
        }
    });
}
textanimationinpage3();