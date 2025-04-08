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
function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        let showingImage;
        cnt.addEventListener("mousemove", function(dets){
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showingImage = dets.target
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
            showingImage.style.filter = "grayscale(1)"

            document.querySelector("#works").style.backgroundColor = dets.target.dataset.color;

        })
        cnt.addEventListener("mouseleave", function(dets){
            console.log(dets.target)
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
            showingImage.style.filter = "grayscale(0)"

            document.querySelector("#works").style.backgroundColor = "#F2F2F2"


        })
        
    })
}
// Add this at the beginning of your script.js file
document.body.classList.add('loading');

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
            document.body.classList.remove('loading'); 
            animateHomepage();
            initLocoScroll();
        }
    })
}

let locoScroll;

function initLocoScroll(){
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function locoInitialize(){
}
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
            document.body.classList.remove('loading');
            animateHomepage();
            setTimeout(function() {
                const imageryDiv = document.querySelector('#imagery');
                imageryDiv.style.visibility = 'visible';
                imageryDiv.style.opacity = '1';
            }, 500); 
        }
    })
}

revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize()
cardHoverEffect()


function initFooterAnimations() {
    const footerSection = document.querySelector('#footer');
    const footerTop = document.querySelector('.footer-top');
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');
    const footerBottom = document.querySelector('.footer-bottom');
    
    gsap.from(footerTop.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footerSection,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from(contactForm, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: contactForm,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from(contactInfo, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: contactInfo,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from('.social-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.social-icons',
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from(footerBottom, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footerBottom,
            start: "top 95%",
            toggleActions: "play none none none"
        }
    });
}

function initFormInteractions() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    const submitButton = document.querySelector('.contact-form button');
    
    submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    const contactForm = document.querySelector('.contact-form form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        gsap.to(submitButton, {
            backgroundColor: "#4CAF50",
            repeat: 1,
            yoyo: true,
            duration: 0.5
        });
        
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initFooterAnimations();
        initFormInteractions();
    }, 1000);
});

function initFooter() {
    if (typeof ScrollTrigger !== 'undefined') {
        initFooterAnimations();
    } else {
        gsap.from('#footer', {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#footer',
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    }
    
    initFormInteractions();
}


initFooter();
