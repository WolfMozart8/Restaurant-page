import menu from "./menu"


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
main.classList.add("main-content");
button.classList.add("button");
    // text content
logo.textContent = "LOGO";
nav.innerHTML = `<ul>
<li><a class="link-h" href="#">Home</a></li>
<li><a class="link-m" href="#">Menu</a></li>
<li><a class="link-p" href="#">Products</a></li>
<li><a class="link-c" href="#">Contact</a></li>
</ul>`
hero.innerHTML = "Lets share our dreams";
button.textContent = "See more";
    //layout
header.appendChild(logo);
header.appendChild(nav);
main.appendChild(hero);
main.appendChild(button);
content.appendChild(header);
content.appendChild(main);

const linkMenu = document.querySelector(".link-m");
linkMenu.addEventListener("click", () => {
    if (main) {
        content.removeChild(main);
    }
    menu();
    
})
