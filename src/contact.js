const contact = (()=> {
    const createField = function(fieldName, elementType) {
        const fieldContainer = document.createElement("div")
        const fieldTitle = document.createElement("label");
        const fieldInput = document.createElement(elementType);

        fieldTitle.textContent = fieldName;

        fieldContainer.appendChild(fieldTitle);
        fieldContainer.appendChild(fieldInput);
        return fieldContainer;
    }

    const load = function() {
        const content = document.querySelector('div#content');
        const contactDiv = document.createElement('main');
        contactDiv.classList.add("contact");

        // header
        const headTxt = document.createElement("h1");
        headTxt.textContent = "Interested in being part of our community?"
        contactDiv.appendChild(headTxt);

        // form container
        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container");
        contactDiv.appendChild(formContainer);

        // add form
        const form = document.createElement("form");
        const formBtn = document.createElement("button");
        formBtn.textContent = "Submit";
        form.appendChild(createField("Name", "input"));
        form.appendChild(createField("Email", "input"));
        form.appendChild(createField("Message", "textarea"));
        form.appendChild(formBtn);
        formContainer.appendChild(form);

        // add map element
        const mapArea = document.createElement("iframe");
        const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27538.74786662479!2d-91.67015410905385!3d30.369602932954187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86246fa36ebb77f1%3A0x61ed663734d450e0!2sAtchafalaya%20Basin!5e0!3m2!1sen!2sus!4v1674168046555!5m2!1sen!2sus";
        mapArea.src = mapUrl;
        mapArea.width = "350";
        mapArea.height = "300";
        mapArea.setAttribute("loading", "lazy");
        mapArea.referrerPolicy = "no-referrer-when-downgrade";
        formContainer.appendChild(mapArea);

        // append to content
        content.appendChild(contactDiv);
        console.log("Finish contact page load");
    };
    return { load };
})();

export default contact; 