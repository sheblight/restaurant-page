import './style.css';

function component() {
    const element = document.createElement('div');
    element.classList.add("main");
    return element;
}

document.body.appendChild(component());