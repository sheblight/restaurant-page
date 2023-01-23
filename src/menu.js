import Swamp from "./images/swamp.jpg";
import Tire from "./images/tire.jpg";
import Goop from "./images/goop.jpg";
import Chicken from "./images/chicken.jpg";

const menu = (()=> {
    function IconInfo(img, style) {
        this.img = img;
        this.style = style;
    };
    
    function ItemInfo(title, ingredients, price) {
        this.title = title;
        this.ingredients = ingredients;
        this.price = price; 
    }

    const menuItems = [
        {icon:new IconInfo(Tire,"background-size:150%;"), item:new ItemInfo("Tire", "A chewy starter for everybody to enjoy!", 15)},
        {icon:new IconInfo(Goop,"background-size:contain;"), item:new ItemInfo("Goop", "Skipped on your greens? Try these!", 6)},
        {icon:new IconInfo(Chicken,"background-size:150%;"), item:new ItemInfo("Chicken", "", 40)}
    ]

    const createMenuItem = function(icon, item) {
        const div = document.createElement("div");
        const thumbnail = new Image();
        const titleTxt = document.createElement("h2");
        const ingredientTxt = document.createElement("p");

        // set text and image
        thumbnail.src = icon.img;
        thumbnail.style = icon.style;
        titleTxt.textContent = item.title;
        ingredientTxt.textContent = item.ingredients; 

        div.classList.add("menu-item");
        div.appendChild(thumbnail);
        div.appendChild(titleTxt);
        div.appendChild(ingredientTxt);

        return div;
    }

    const load = function() {
        const content = document.querySelector('div#content');
        const menuDiv = document.createElement('main');
        menuDiv.classList.add("menu");

        // header
        const headTxt = document.createElement("h1");
        headTxt.textContent = "Browse our options!"
        menuDiv.appendChild(headTxt);

        // menu items
        menuItems.forEach(menuItem => {
            menuDiv.appendChild(createMenuItem(menuItem.icon, menuItem.item));
        });

        // append to content
        content.appendChild(menuDiv);
        console.log("Finish menu page load");
    };
    return { load };
})();

export default menu; 