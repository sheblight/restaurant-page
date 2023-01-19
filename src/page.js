const page = (()=> {
    const load = function() {
        const content = document.querySelector('div#content');
        const header = document.createElement("header");
        const about = document.createElement("div");

        // set up header
        const headerBg = document.createElement("div");
        const headerText = document.createElement("h1");
        headerText.textContent = "The Soup Swamp"
        headerBg.appendChild(headerText);
        header.appendChild(headerBg);

        // append to content
        content.appendChild(header);
        console.log("finish render");
    };
    return { load };
})();

export default page; 