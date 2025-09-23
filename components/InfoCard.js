const infoCardTemplate = document.createElement('template');
infoCardTemplate.innerHTML = `
    <style>
        :host {
            display: block;
            position: relative;
            margin: 0 auto;
        }

        .container {
            position: relative;
            width: fit-content;
            height: fit-content;
        }

        
        ::slotted(img) {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        .image-container {
            width: 300px;
            height: 200px;
        }

        .text-box {
            position: absolute;
            bottom: calc(-1 * var(--spacing-xxxl));
            left: 50%;
            transform: translate(-50%, 50%);
            background-color: var(--color-white);
            padding: var(--spacing-m);
            width: 85%;
        }

        ::slotted(h2) {
            font: var(--font-heading-s-semibold);
            margin-bottom: var(--spacing-s) !important;
        }

        ::slotted(p) {
            font: var(--font-body-m-regular);
            margin-bottom: var(--spacing-m) !important;
        }

        ::slotted(a) {
            font: var(--font-body-m-regular) !important;
            text-decoration: underline !important;
        }

        .text-box a:hover {
            text-decoration: underline;
        }
    </style>
    <div class="container">
        <div class="image-container">
            <slot name="image"></slot>
        </div>
        <div class="text-box">
            <slot name="title"></slot>
            <slot name="description"></slot>
            <slot name="link-text"></slot>
        </div>
    </div>
`;

class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).appendChild(infoCardTemplate.content.cloneNode(true));
    }
}

customElements.define('info-card', InfoCard);


// TODO: Feste Breite für Info Cards u. die Bilder. Das gleiche bei der Slide Show. 