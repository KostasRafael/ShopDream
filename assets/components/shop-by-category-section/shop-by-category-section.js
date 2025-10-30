class shopByCategorySection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="shop-by-category-section">
        <h2 class="shop-by-category-heading">Shop by Category</h2>
        <div class="categories">
            <div class="two-categories">
                <button class="electronics single-category">
                    <h3 class="category-heading">Electronics</h3>
                </button>
                <button class="clothing single-category">
                    <h3 class="category-heading">Clothing</h3>
                </button>
            </div>
            <div class="two-categories">
                <button class="home-kitchen single-category">
                    <h3 class="category-heading">Home & Kitchen</h3>
                </button>
                <button class="books single-category">
                    <h3 class="category-heading">Books</h3>
                </button>
            </div>
        </div>
        <button class="view-categories-button">View All Categories</button>
    </section>
    `;
  }
}

customElements.define("shop-by-category-section", shopByCategorySection);
