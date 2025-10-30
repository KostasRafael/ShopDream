class navigationBarSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <body>
    <div class="navbar-section">
        <ul class="left-navbar">
            <li class="logo-container">
                <span class="logo">ShopDream</span>
            </li>
            <li class="list-item"><a class="nav-link" href="./index.html">Home</a></li>
            <li class="list-item"><a class="nav-link" href="./products.html">Products</a></li>
            <li class="list-item"><a class="nav-link" href="./categories.html">Categories</a></li>
        </ul>
        <ul class="right-navbar">
            <li class="list-item"><a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
            <li class="list-item"><a class="nav-link" href="./login.html">Login</a></li>
            <li class="list-item"><a class="button-like" href="./signup.html">Sign Up</a></li>
        </ul>
    </div>
</body>

    `;
  }
}

customElements.define("navigation-bar-section", navigationBarSection);
