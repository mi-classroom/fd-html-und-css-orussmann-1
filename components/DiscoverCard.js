const discoverCardTemplate = document.createElement('template');
discoverCardTemplate.innerHTML = `
    <style>
        ::slotted(h2) {
            font: var(--font-heading-s-semibold);
            margin-bottom: var(--spacing-l) !important;
        }

        ::slotted(button) {
            width: 147px;
            height: 46px;
            color: var(--color-white);
            background-color: var(--color-primary-default);
            border: none;
            font: var(--font-body-m-bold) !important;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .container {
            position: relative;
            with: 100vw;
        }
    </style>
    <div class="container">
        <slot name="header-2"></slot>
        <slot name="image"></slot>
        <slot name="button"></slot>
    </div>
`
// TODO: Find a better solution, than !important
// TODO: Why can't I define a variable "template" in two differen files without them conflicting
class DiscoverCard extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(discoverCardTemplate.content.cloneNode(true));
    }
}

customElements.define("discover-card", DiscoverCard);