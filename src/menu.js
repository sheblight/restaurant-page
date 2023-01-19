const menu = (()=> {
    const load = function() {
        const content = document.querySelector('div#content');
        const menuDiv = document.createElement('main');
        menuDiv.classList.add("menu");

        // header
        const headTxt = document.createElement("h1");
        headTxt.textContent = "Browse our options!"
        menuDiv.appendChild(headTxt);

        // append to content
        content.appendChild(menuDiv);
        console.log("Finish menu page load");
    };
    return { load };
})();

export default menu; 