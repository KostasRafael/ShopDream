class filterProducts extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <div id="filter-products">
        <div class="heading-content">
            <h2 class="filter-heading">Filter Products</h2>
        </div>
        <div class="search-filter-container">
            <div class="search-content">
                <label for="search-input" class="search-label">Search</label>
                <input oninput="searchProducts() type="text" class="search-input" placeholder="Search products...">
            </div>
            <div class="sort-content">
                <label for="sort-dropdown" class="sort-label">Sort by</label>
                <div class="dropdown-button-container">
                    <button class="sort-button">Featured <i class="fa-solid fa-caret-down"></i></button>
                    <div class="dropdown-container">
                        <ul class="dropdown-list">
                            <li class="fearured dropdown-item">Featured</li>
                            <li class="low-to-high dropdown-item">Price: Low to High</li>
                            <li class="high-to-low dropdown-item">Price: High to Low</li>
                            <li class="top-rated dropdown-item">Top Rated</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    let sortButton = this.querySelector(".sort-button");
    let dropDownMenu = this.querySelector(".dropdown-container");

    sortButton.addEventListener("click", function addShow() {
      dropDownMenu.classList.toggle("show");
    });

    let featuredDropdown = this.querySelector(".fearured");
    let lowToHighDropdown = this.querySelector(".low-to-high");
    let highToLowDropdown = this.querySelector(".high-to-low");
    let topRatedDropdown = this.querySelector(".top-rated");

    featuredDropdown.addEventListener("click", () =>
      setButtonText(featuredDropdown)
    );
    lowToHighDropdown.addEventListener("click", () =>
      setButtonText(lowToHighDropdown)
    );
    highToLowDropdown.addEventListener("click", () =>
      setButtonText(highToLowDropdown)
    );
    topRatedDropdown.addEventListener("click", () =>
      setButtonText(topRatedDropdown)
    );

    function setButtonText(dropdownElement) {
      sortButton.textContent = dropdownElement.textContent;
    }
  }

  // something is happenning on input
}

customElements.define("filter-products", filterProducts);
