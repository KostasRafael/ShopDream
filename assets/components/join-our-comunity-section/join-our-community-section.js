class joinOurCommunitySection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="join-our-community-section">
        <div class="description-promotion">
            <div class="description">
                <h2 class="description-heading">Join Our Community</h2>
                <p class="description-paragraph">Sign up today and get 10% off your first order. Be the first to know
                    about
                    our latest products and eclusive offers.</p>
                <a class="signup-button" href="#">Sign Up Now</a>
            </div>
            <div class="promotion">
                <div class="promotion-image-container">

                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define("join-our-community-section", joinOurCommunitySection);
