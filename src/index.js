import menu from "./menu";
import home from "./home";
import about from "./about";
import bg from "./images/main-img.jpg";
import "./css/style.css";


const myBg = new Image();
const element = document.createElement('div');
myBg.src = bg;

element.appendChild(myBg);

const content = document.getElementById("content");
    //create elements
const header = document.createElement("div");
    const logo = document.createElement("div");
    const nav = document.createElement("nav");
const main = document.createElement("div");
    const hero = document.createElement("h1");
    const button = document.createElement("button");
    // add classes
header.classList.add("header");
logo.classList.add("logo");
nav.classList.add("nav");
main.classList.add("main-content", "active");
button.classList.add("button");
    // text content
logo.innerHTML = `To<span class="logo-span link-h">Venus</span> <span class="logo-span2 link-h">Restaurant</span>`;
nav.innerHTML = `<ul>
<li><a class="link-h" href="#">Home</a></li>
<li><a class="link-m" href="#">Menu</a></li>
<li><a class="link-a" href="#">About us</a></li>
</ul>`
hero.innerHTML = "Feed your dreams";
button.textContent = "Reserve";
    //layout
header.appendChild(logo);
header.appendChild(nav);
main.appendChild(hero);
main.appendChild(button);
content.appendChild(header);
content.appendChild(main);

const linkMenu = document.querySelector(".link-m");
const linkHome = document.querySelectorAll(".link-h");
const linkHomeLoad = document.querySelector("nav .link-h");
const linkAbout = document.querySelector(".link-a");
linkHomeLoad.classList.add("link-active");

linkMenu.addEventListener("click", () => {
    const active = document.querySelector(".active");
    linkMenu.classList.add("link-active")
    linkAbout.classList.remove("link-active");
    linkHomeLoad.classList.remove("link-active");
    active.remove();
    
    menu();
    
})
linkHomeLoad.addEventListener("click", () => {
    linkHomeLoad.classList.add("link-active");
    linkAbout.classList.remove("link-active");
    linkMenu.classList.remove("link-active");
    const active = document.querySelector(".active");
    active.remove();
    home();
})
linkHome.forEach((e) => {
    e.addEventListener("click", () => {
        const active = document.querySelector(".active");
        active.remove();
        home();
        
    })
})

linkAbout.addEventListener("click", () => {
    const active = document.querySelector(".active");
    linkAbout.classList.add("link-active");
    linkHomeLoad.classList.remove("link-active");
    linkMenu.classList.remove("link-active");
    active.remove();
    about();
    
})
