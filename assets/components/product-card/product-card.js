class productCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let productImage = this.getAttribute("product-image");
    let productTitle = this.getAttribute("product-title");
    const productDescription = this.getAttribute("product-description");
    const productPrice = this.getAttribute("product-price");
    this.innerHTML = `
      <div class="product-card">
        <img class="product-image"
            src="${productImage}"
            alt="product image">
        <div class="title-description-price-add">
            <h3 class="product-title">${productTitle}</h3>
            <p class="product-description">${productDescription}</p>
            <div class="price-add">
                <span class="product-price">$${productPrice}</span>
                <button class="add-button"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></button>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("product-card", productCard);
