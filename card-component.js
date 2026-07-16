class CardComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card bg-base-100 w-120 shadow-sm">
                <figure>
                  <img
                    src="${this.getAttribute('image')}"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${this.getAttribute('title')}</h2>
                  <p>
  ${this.getAttribute('subtitle')}
                  </p>
                </div>
              </div>
    `;
  }
}

customElements.define('card-component', CardComponent);