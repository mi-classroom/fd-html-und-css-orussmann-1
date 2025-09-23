const slideShowTemplate = document.createElement("template");
slideShowTemplate.innerHTML = `
    <style>
        ::slotted(img) {
            position: absolute;
            min-width: calc(3 * var(--size-4xl));
            width: 30vw;    
            max-width: calc(5 * var(--size-4xl));
            top: 40px;
            left: 50%;
            display: none;
        }

        ::slotted(h2) {
            font: var(--font-heading-s-semibold);
            margin-bottom: var(--spacing-s) !important;
        }
        
        ::slotted(p) {
            font: var(--font-body-m-regular);
            margin-bottom: var(--spacing-s) !important;
        }

        ::slotted(a) {
            font: var(--font-body-m-regular);
            text-decoration: underline !important;
        }

        ::slotted(a) {
            width: var(--size-xl)
        }

        ::slotted(a.button-left) {
            position: absolute;
            top: 50%;
            left: 10%;
        }

        ::slotted(a.button-right) {
            position: absolute;
            top: 50%;
            right: -3%;
        }

        .container {
            position: relative;
            max-width: 100%;
            height: 70vh;
            display: flex;
            flex-flow: column nowrap;
            justify-content: end;
            padding: 0 var(--spacing-4xl);
        }

        .image-container {
            position: relative;
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20vh;
        }

        .info-container {
            margin-bottom: var(--size-xl)
        }


        ::slotted(img:nth-child(1)) {
            transform: translate(-50%, -50%);
            z-index: 3;
        }

        ::slotted(img:nth-child(2)) {
            transform: translate(-50%, -50%) rotate(-8deg) translateX(-20px);
            z-index: 2;
            opacity: 0.9;
        }

        ::slotted(img:nth-child(3)) {
            transform: translate(-50%, -50%) rotate(4deg) translateX(20px);
            z-index: 1;
            opacity: 0.8;
        }

        ::slotted(a.button-left) {
            left: var(--spacing-xs);
        }

        ::slotted(a.button-right) {
            right: var(--spacing-xs);
        }

    </style>
    <div class="container">
        <div class="image-container">
            <slot name="image-1"></slot>
            <slot name="image-2"></slot>
            <slot name="image-3"></slot>
        </div>
        <div class="info-container">
            <slot name="heading-2"></slot>
            <slot name="paragraph"></slot>
            <slot name="more-info-link"></slot>
        </div>
        <slot name="button-left"></slot>
        <slot name="button-right"></slot>
    </div>
`

// TODO: Title, paragraph and more info link should rotate too
class SlideShow extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(slideShowTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const buttonLeft = this.shadowRoot.querySelector("slot[name='button-left']");
        const buttonRight = this.shadowRoot.querySelector("slot[name='button-right']");

        buttonLeft.addEventListener("click", () => {
            this.showPreviousImage();
        });

        buttonRight.addEventListener("click", () => {
            this.showNextImage();
        });
    }


    // TODO: Make it work! (Not enough knowledge about the shadow DOM and slots yet)
    showNextImage() {
        // const slot = this.shadowRoot.querySelector("slot[name='image-1']");
        // if (slot)
        // {
        //     const image = slot.assignedElements();
        //     console.log(image);
        //     const parent = image[0].parentNode;
        //     console.log(parent);
        //     parent.appendChild(image[0]);
        // }
    }
}

customElements.define("slide-show", SlideShow);