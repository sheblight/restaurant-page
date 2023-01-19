const about = (()=> {
    const load = function() {
        const content = document.querySelector('div#content');
        const aboutDiv = document.createElement('div');
        const headTxt = document.createElement('h1');
        const storyTxt = document.createElement('p');
        aboutDiv.classList.add("about");

        // setup head and story text
        headTxt.textContent = "Our Story";
        storyTxt.textContent = "At soup swamp, we are dedicated to serving our original, award-winning swamp goop by yours truly.\nSteeped with the best local quality food sources, we've had our customers coming back for more, over the past 22 years. If you're around here, come stop by!";
        aboutDiv.appendChild(headTxt);
        aboutDiv.appendChild(storyTxt);

        // append to content
        content.appendChild(aboutDiv);
        console.log("Finish about page load");
    };
    return { load };
})();

export default about; 