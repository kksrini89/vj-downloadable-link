const template = document.createElement('template');
template.innerHTML = `
<style>
 :host { }
 ::slotted(*) { }
 .highlight {
   color: blue;
 }
</style>
<div class="highlight">
 <a href="#">Downloadable Link Web Component</a>
</div>
<slot></slot>
<slot name="input" ></slot>
`;

class DownloadableLinkComponent extends HTMLElement {
   constructor() {
     super();
     this._shadowRoot = this.attachShadow({ mode:'open' });
   }

   static get observedAttributes() {
     return [''];
   }
   
   connectedCallback() {
     this._shadowRoot.appendChild(template.content.cloneNode(true));
   }

   attributeChangedCallback(name, oldVal, newVal) {
   }
}
customElements.define('vj-downloadable-link', DownloadableLinkComponent);
