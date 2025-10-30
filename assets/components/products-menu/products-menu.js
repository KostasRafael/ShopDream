class productsMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <div class="products-menu">
        <button id="all" class="products-button">All</button>
        <button id="electronics" class="products-button">Electronics</button>
        <button id="clothing" class="products-button">Clothing</button>
        <button id="home-kitchen" class="products-button">Home & Kitchen</button>
        <button id="books" class="products-button">Books</button>
        <button id="beauty" class="products-button">Beauty</button>
        <button id="sports" class="products-button">Sports</button>
        <button id="toys" class="products-button">Toys</button>
    </div>
    `;
  }
}

customElements.define("products-menu", productsMenu);
