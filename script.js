// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});



// ===========================
// ACTIVE NAVBAR
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



// ===========================
// DARK / LIGHT MODE
// ===========================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});



// ===========================
// SCROLL ANIMATION
// ===========================

const cards = document.querySelectorAll(

".project-card,.skill-card,.certificate-card,.timeline-item,.contact-box,.info-box"

);

function reveal(){

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        const visible = window.innerHeight-120;

        if(top<visible){

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();



// ===========================
// TYPING EFFECT
// ===========================

const titles=[

"AI Enthusiast",

"Data Analytics Learner",

"Machine Learning Explorer",

"Robotics Developer"

];

let index=0;

let char=0;

const heading=document.querySelector(".hero-left h2");

function type(){

    if(!heading) return;

    heading.innerHTML=titles[index].substring(0,char);

    char++;

    if(char<=titles[index].length){

        setTimeout(type,90);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    heading.innerHTML=titles[index].substring(0,char);

    char--;

    if(char>=0){

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index>=titles.length){

            index=0;

        }

        setTimeout(type,400);

    }

}

type();



// ===========================
// PROFILE IMAGE ANIMATION
// ===========================

const profile=document.querySelector(".hero-right img");

if(profile){

profile.addEventListener("mouseover",()=>{

profile.style.transform="scale(1.08) rotate(2deg)";

});

profile.addEventListener("mouseout",()=>{

profile.style.transform="scale(1)";

});

}



// ===========================
// LOADING
// ===========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

console.log("Vedika Portfolio Loaded Successfully");