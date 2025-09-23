const infoCardSliderTemplate = document.createElement("template");
infoCardSliderTemplate.innerHTML = `
    <style>
        .container {
            display: flex;
            flex-flow: row nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            gap: 2rem;
        }
    </style>
    <div class="container">
        <slot></slot>
    </div>
`;

class InfoCardSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).appendChild(infoCardSliderTemplate.content.cloneNode(true));
    }

    // Keine weitere Logik nötig!
}

customElements.define('info-card-slider', InfoCardSlider);