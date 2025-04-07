function valueSetters(){
    gsap.set("#nav a", {y:"-100%", opacity:0})
    gsap.set("#home span .child", {y: "100%"})
    gsap.set("#home .row img", {opacity:0})

    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character = e.childNodes[0].childNodes[0]
        character.style.strokeDasharray = character.getTotalLength()+ "px";
        character.style.strokeDashoffset = character.getTotalLength()+ "px";
    })

}
function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    let parent = document.createElement("span")
    let child = document.createElement("span")
    
    parent.classList.add("parent");
    child.classList.add("child");


    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML="";
    elem.appendChild(parent);
})}
function loaderAnimation(){
    let tl = gsap.timeline();

tl
.from("#loader .child span",{
    x: "100",
    duration:1.5,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut
})
.to("#loader .parent .child",{
    y: "-100%",
    duration:1,
    ease: Circ.easeInOut
})
.to("#loader",{
    height: 0,
    duration:1,
    ease: Circ.easeInOut
})
.to("#green",{
    height: "100%",
    top:0,
    duration:1,
    delay: -0.8,
    ease: Circ.easeInOut
})
.to("#green",{
    height: 0,
    duration:1,
    delay: -0.5,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})

}
function animateHomepage(){

    let t1 = gsap.timeline();
    
    t1.to("#nav a", {
        y:0,
        opacity:1,
        stagger: .05,
        ease: Expo.easeInOut,
    })
    .to("#home .parent .child", {
        y:0,
        stagger: .1,
        duration:1.5,
        ease: Expo.easeInOut,
    })
    .to("#home .row img", {
        opacity:1,
        delay:-.5,
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();

        }
    })
}
function animateSvg(){

    gsap.to("#Visual>g>g>path , #Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration:2,
        ease:Expo.easeInOut,
        

    })


}
function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });   
}


revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize()






