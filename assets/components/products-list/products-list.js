class ProductsList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let productImage = this.getAttribute("product-image");
    let productTitle = this.getAttribute("product-title");
    const productDescription = this.getAttribute("product-description");
    const productPrice = this.getAttribute("product-price");
    this.innerHTML = `
       <div id="products-list"></div>
    `;

    const test = 9;

    const url = "http://localhost:8080/products";

    const productsContainer = this.querySelector("#products-list");

    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        products.forEach((product) => {
          const productCard = document.createElement("product-card");
          productCard.setAttribute("product-image", product.image);
          productCard.setAttribute("product-title", product.name);
          productCard.setAttribute("product-description", product.description);
          productCard.setAttribute("product-price", product.price);

          productsContainer.appendChild(productCard);
        });
      });
  }

  searchProducts() {
    return "Hi";
  }
}

customElements.define("products-list", ProductsList);
