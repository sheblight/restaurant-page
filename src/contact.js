const contact = (()=> {
    const load = function() {
        const content = document.querySelector('div#content');
        const contactDiv = document.createElement('main');
        contactDiv.classList.add("contact");

        // header
        const headTxt = document.createElement("h1");
        headTxt.textContent = "Interested in being part of our community?"
        contactDiv.appendChild(headTxt);

        // append to content
        content.appendChild(contactDiv);
        console.log("Finish contact page load");
    };
    return { load };
})();

export default contact; 