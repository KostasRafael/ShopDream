class footerSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="footer-section">
        <div class="invitation-shop">
            <div class="invitation-column footer-column">
                <h3 class="invitation-heading">ShopDream</h3>
                <p class="invitation-paragraph">Shop for the best quality products at affordable prices</p>
            </div>
            <div class="shop-column footer-column">
                <h4 class="shop-heading">Shop</h4>
                <a href="#" class="shop-link">All Products</a>
                <a href="#" class="shop-link">Categories</a>
                <a href="#" class="shop-link">Featured</a>
            </div>
        </div>
        <div class="account-support">
            <div class="account-column footer-column">
                <h4 class="account-heading">Account</h4>
                <a href="#" class="account-link">My Account</a>
                <a href="#" class="account-link">Orders</a>
                <a href="#" class="account-link">Cart</a>
            </div>
            <div class="support-column footer-column">
                <h4 class="support-heading">Support</h4>
                <a href="#" class="support-link">Help Center</a>
                <a href="#" class="support-link">Contuct Us</a>
                <a href="#" class="support-link">FAQ</a>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define("footer-section", footerSection);
