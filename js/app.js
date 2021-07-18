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
    // Loop on all sections to set the correct number of links that will be added.
    allSections.forEach((section)=> {
        // Create <a> and <li> elements.
        let aAttribute = document.createElement("a");
        let newLink = document.createElement("li");
        // Set <a> text exactly like section attribute 'data nav'.
        aAttribute.textContent = section.getAttribute("data-nav");
        // Build and set <a> attribute 'linkToSec' exactly like section id.
        aAttribute.setAttribute('linkToSec', section.getAttribute("id"));
        // <li> append <a>.
        newLink.appendChild(aAttribute);
        // <ul> append <li>.
        myUl.appendChild(newLink);
    })
}

// Add class 'active' to section when near top of viewport

// Check if the target section is near to of viewport ?
function viewportChecker(targetSection) {
    let sectionView = targetSection.getBoundingClientRect();
    // Check if the section position on screen is >= 0 from top ?
    if(sectionView.top >= 0){
        return true;
    }
}

// Set active class to target section.
function setActiveClass() {
    // Pass all sections one by one to viewPortChecker function.
    for (section of allSections){
        // Check if sectionView.top >= 0 ?
        if (viewportChecker(section) == true){
            /* Check if section is already have our class then remove it.
               if not ? then add our class to this section. */
            if (section.classList.contains('your-active-class')) {
                section.classList.remove('your-active-class');
            }
            else {
                section.classList.add('your-active-class');
            }
        }     
    } 
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder();

// Scroll to section on link click

// Collect all links in our page.
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link)=>{
    // Add eventListener 'click' to every link.
    link.addEventListener("click", ()=>{
        // Pass link attribute 'linkToSec' to target section id.
        let targetSection = document.getElementById(link.getAttribute("linkToSec"));
        // Scroll to target section smoothly.
        targetSection.scrollIntoView({behavior:"smooth"});
    })
})

// Set sections as active
document.addEventListener('scroll', setActiveClass);