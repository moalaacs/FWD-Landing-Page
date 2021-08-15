/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll("section");
const myUl = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav fucnction
function navBuilder(){
    allSections.forEach((section)=> {
        let aAttribute = document.createElement("a");
        let newLink = document.createElement("li");
        aAttribute.textContent = section.getAttribute("data-nav");
        aAttribute.setAttribute('linktosec', section.getAttribute("id"));
        newLink.appendChild(aAttribute);
        myUl.appendChild(newLink);
    })
    let activeLi = document.querySelector("a");
    activeLi.setAttribute('class',"your-active-li");
}

// Check if the target section is near top of viewport ?
function viewportChecker(targetSection) {
    let sectionView = targetSection.getBoundingClientRect();
    if(sectionView.top >= -50 && sectionView.top < 394){
        return true;
    } else {
        return false;
    }
}

// Set active class to target section.
function setActiveClass() {
    for (section of allSections){
        if (viewportChecker(section) == true){
            if (!section.classList.contains('your-active-class')) {
                var activeSec = document.getElementsByClassName('your-active-class')[0];
                activeSec.classList.remove('your-active-class')
                section.classList.add('your-active-class'); 
            }
            }
        }     
    }


// Set active class to target li.
function setActiveLi() {
    const allLinks = document.querySelectorAll("a");
    var activeSection = document.getElementsByClassName('your-active-class')[0];
    console.log(activeSection);
        allLinks.forEach((link)=> {
            if (link.getAttribute("linktosec") == activeSection.getAttribute("id")) {
                if (!link.classList.contains('your-active-li')) {
                    var activeLi = document.getElementsByClassName('your-active-li')[0];
                    activeLi.classList.remove('your-active-li')
                    link.classList.add('your-active-li'); 
                }
            }
    })      
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder();

// Scroll to section on link click
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        let targetSection = document.getElementById(link.getAttribute("linkToSec"));
        targetSection.scrollIntoView({behavior:"smooth"});
    })
})

// Set sections & li as active
document.addEventListener('scroll', setActiveClass);
document.addEventListener('scroll', setActiveLi);