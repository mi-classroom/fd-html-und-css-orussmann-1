const textBlockTemplate = document.createElement('template');
textBlockTemplate.innerHTML = `
<style>
    ::slotted(p) {
        font: var(--font-body-m-regular);
        margin-top: 200vh auto 0 auto;
        max-width: 40rem;
    }
    
    .container {
        padding: clamp(var(--spacing-m), 5vw, var(--spacing-xl)) clamp(0px, calc(5vw - 15px), var(--spacing-6xl));
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
<div class="container">
    <slot name="paragraph"></slot>
</div>
`

class TextBlock extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(textBlockTemplate.content.cloneNode(true));
    }

}

customElements.define("text-block", TextBlock);