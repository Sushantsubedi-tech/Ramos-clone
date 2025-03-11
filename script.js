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
    let tl = gsap.timeline()
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
        duration:2
    })
    tl.to("#loadingpage",{
        y:"-300%"
    })
   
}
landinganimation();
function cursoranimation(){
    let cursor  = document.querySelector("#cursor")
let body = document.querySelector("body")
    body.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x+"px",
            y:dets.y + "px",
            opacity:1
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