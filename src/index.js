import './style.css';
import HeroBackground from './images/swamp.jpg';

function component() {
    const content = document.querySelector('div#content');
    const header = document.createElement("header");
    

    // set up header
    const headerBg = document.createElement("div");
    const headerText = document.createElement("h1");
    headerText.textContent = "The Soup Swamp"
    headerBg.appendChild(headerText);
    header.appendChild(headerBg);

    // append to content
    content.appendChild(header);
    console.log("finish render");
    return content;
}

component();