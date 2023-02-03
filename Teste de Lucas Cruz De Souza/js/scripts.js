
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#closeMenu");
const menu =document.querySelector("#mobileNavbar");
const mobileLinks = document.querySelectorAll("#mobileNavbar a");
const desktopLinks = document.querySelectorAll("#navbar a");

const allLinks = [...desktopLinks, ...mobileLinks];
let slideIndex = 0;

function smoothScroll (event) {
    event.preventDefault();

    const href = this.getAttribute("href"); 
    const offsetTop = document.querySelector(href).offsetTop; 

    scroll({
        top: offsetTop,
        behavior: "smooth", 
    });

    setTimeout(() => { 
        if (menu.classList.contains("menuActive")) {
            menu.classList.remove("menuActive");
        }
    }, 500); 

};

[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (event) => {
        menu.classList.toggle("menuActive");
    });
})

allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll)
});


const controls = document.querySelectorAll(".control");
console.log(controls)
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    console.log(e.target)
    isLeft = e.target.classList.contains("arrowLeft");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("currentItem"));


    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("currentItem");
  });
});

