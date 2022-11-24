export default function menu () {
    const content = document.getElementById("content");
    const mainMenu = document.createElement("div");
    const menuItems = {
        item1: {
            name: "Item 1",
            price: "$" + 2
        },
        item2: {
            name: "Item 2",
            price: "$" + 3
        },
        item3: {
            name: "Item 3",
            price: "$" + 6
        },
        item4: {
            name: "Item 4",
            price: "$" + 8
        },
        item5: {
            name: "Item 5",
            price: "$" + 12
        },
    }

    const menu = document.createElement("div");
    const menuTitle = document.createElement("h2");
    const menuList = document.createElement("ul");
    const menuRow = document.createElement("div");

    mainMenu.classList.add("main-menu");
    menu.classList.add("menu");
    menuList.classList.add("menu-list");
    menuRow.classList.add("menu-row");

    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);
    
    // for (let i = 1; i < menuItems.length; i++) {
    //     const li = document.createElement("p");
    //     const name = "hola";
    //     const price = menuItems.item[i].price;
    //     li.textContent = `${name}`;

    //     menuList.appendChild(li);
    //     console.log(li)
    // }
    menuList.innerHTML = 
    `<li>${menuItems.item1.name}.........${menuItems.item1.price}</li>
    <li>${menuItems.item2.name}.........${menuItems.item2.price}</li>
    <li>${menuItems.item3.name}.........${menuItems.item3.price}</li>
    <li>${menuItems.item4.name}.........${menuItems.item4.price}</li>
    <li>${menuItems.item5.name}.........${menuItems.item5.price}</li>`

    menu.appendChild(menuList);
    mainMenu.appendChild(menu);
    content.appendChild(mainMenu);

     console.log(menuItems["item" + "1"].name);
}