import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

const page = (()=> {
    const switchTab = function(module) {
        content.removeChild(document.querySelector("div#content > main"));
        module.load();
    };

    const load = function() {
        const content = document.querySelector('div#content');
        const header = document.createElement("header");
        const tabs = document.createElement("div");

        // set up header
        const headerBg = document.createElement("div");
        const headerText = document.createElement("h1");
        headerText.textContent = "The Soup Swamp"
        headerBg.appendChild(headerText);
        header.appendChild(headerBg);

        // setup tabs
        const aboutBtn = document.createElement("button");
        const menuBtn = document.createElement("button");
        const contactBtn = document.createElement("button");
        tabs.classList.add("tabs")
        aboutBtn.textContent = "About";
        menuBtn.textContent = "Menu";
        contactBtn.textContent = "Contact";
        tabs.appendChild(aboutBtn);
        tabs.appendChild(menuBtn);
        tabs.appendChild(contactBtn);

        // append to content
        content.appendChild(header);
        content.appendChild(tabs);
        console.log("finish render");

        // add event listener for tab switching
        aboutBtn.onclick = ()=>{
            switchTab(about);
        };
        menuBtn.onclick = ()=>{
            switchTab(menu);
        };
        contactBtn.onclick = ()=>{
            switchTab(contact);
        };

        // intial load
        about.load();

    };
    return { load };
})();

export default page; 