class heroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="hero-section">
        <div class="center-heading-description">
            <div class="heading-description-buttons">
                <h1>Discover Amazing Products</h1>
                <p>Shop the latest trends and must have items at unbeatable prices. Free shipping in orders over $50.
                </p>
                <button class="hero-buttons" onclick=" showProductsPage()">Shop Now</button>
                <button class="hero-buttons" onclick="showCategoriesPage()">Browse Categories</button>
            </div>

            <div class="laptop-image-container">
                <img class="laptop-image"
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="laptop-image">
            </div>
        </div>
    </section>
    `;
  }
}

function showCategoriesPage() {
  window.location.href = "./categories.html";
}

function showProductsPage() {
  window.location.href = "./products.html";
}

customElements.define("hero-section", heroSection);
