const slideShowTemplate = document.createElement("template");
template.innerHTML = `
    <style>
        
    </style>

`
class SlideShow extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(slideShowTemplate.content.cloneNode(true));
    }
}

customElements.define("slide-show", SlideShow);