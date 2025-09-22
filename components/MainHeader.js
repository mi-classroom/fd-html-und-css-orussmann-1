const template = document.createElement('template');
template.innerHTML = `
    <style>
        ::slotted(h1) {
            position: absolute;
            color: var(--color-white);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font: var(--font-heading-xl);
            z-index: 100;
        }

        ::slotted(img) {
            height: 100vh;
            width: 100vw;
            object-fit: cover;
            filter: brightness(70%);
        }
    </style>
    
    <slot name="heading-1"></slot>
    <div class="image-container">
        <slot name="image"></slot>
    </div>
`;

class MainHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define('main-header', MainHeader);
