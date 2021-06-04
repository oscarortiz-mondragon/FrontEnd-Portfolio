const menuButton = document.querySelector(".menuButton")
const hamburger = document.querySelector(".menuButtonBurger")
const nav = document.querySelector(".Nav")
const menuNav  = document.querySelector(".menuNav")
const navItems = document.querySelectorAll(".menuNavItem");

// menu not shown by default
let showMenu = false;


menuButton.addEventListener("click",toggleMenu)
function toggleMenu(){
  if(!showMenu ){
    hamburger.classList.add("open");
    nav.classList.add("open")
    menuNav.classList.add("open")
    // loop through the items and pull them out
    navItems.forEach(item => item.classList.add("open"))
    showMenu = true;
  }
  else{
    hamburger.classList.remove("open")
    nav.classList.remove("open")
    menuNav.classList.remove("open")
    navItems.forEach(item => item.classList.remove("open"))
    showMenu = false; 
  }

  
}