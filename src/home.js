export  default function home () {
    const content = document.getElementById("content");

const main = document.createElement("div");
    const hero = document.createElement("h1");
    const button = document.createElement("button");
main.classList.add("main-content", "active");
button.classList.add("button");


hero.innerHTML = "Feed your dreams";
button.textContent = "See more";
    //layout
main.appendChild(hero);
main.appendChild(button);
content.appendChild(main);
}