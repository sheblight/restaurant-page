import Swamp from "./images/swamp.jpg";

const menu = (()=> {
    const createMenuItem = function(img, title, ingredients) {
        const div = document.createElement("div");
        const thumbnail = new Image();
        const titleTxt = document.createElement("h2");
        const ingredientTxt = document.createElement("p");

        // set text and image
        thumbnail.src = img;
        titleTxt.textContent = title;
        ingredientTxt.textContent = ingredients; 

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
        menuDiv.appendChild(createMenuItem(Swamp, "Beef", "a cow"));
        menuDiv.appendChild(createMenuItem(Swamp, "Fun Dip", "bear"));

        // append to content
        content.appendChild(menuDiv);
        console.log("Finish menu page load");
    };
    return { load };
})();

export default menu; 