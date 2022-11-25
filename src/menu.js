export default function menu () {
    const content = document.getElementById("content");
    const mainMenu = document.createElement("div");
    const menuItems = ["Spagetthi", "Lasagna", "Chorizo", "Meat", "Spagetthi", "Lasagna", "Chorizo", "Meat",]
    const prices = [3, 6, 4, 7, 4, 5, 8, 12]

    const menu = document.createElement("div");
    const menuTitle = document.createElement("h2");
    const menuList = document.createElement("div");


    mainMenu.classList.add("main-menu", "active");
    menu.classList.add("menu");
    menuList.classList.add("menu-list");


    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);
    
    for (let i = 0; i < menuItems.length; i++) {
        const menuRow = document.createElement("div");
        menuRow.classList.add("menu-row");
        const itemName = document.createElement("p");
        const itemPrice = document.createElement("p");
        itemName.textContent = menuItems[i];
        itemPrice.textContent = "$" + prices[i];

        menuRow.appendChild(itemName)
        menuRow.appendChild(itemPrice)
        menuList.appendChild(menuRow);
    }
    // menuList.innerHTML = 
    // `<li>${menuItems.item1.name}.........${menuItems.item1.price}</li>
    // <li>${menuItems.item2.name}.........${menuItems.item2.price}</li>
    // <li>${menuItems.item3.name}.........${menuItems.item3.price}</li>
    // <li>${menuItems.item4.name}.........${menuItems.item4.price}</li>
    // <li>${menuItems.item5.name}.........${menuItems.item5.price}</li>`

    menu.appendChild(menuList);
    mainMenu.appendChild(menu);
    content.appendChild(mainMenu);
}