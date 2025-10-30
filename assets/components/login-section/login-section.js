class loginSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="login-section">
        <div class="login-form">
            <div class="instructions-container">
                <h3 class="instructions-heading">Login</h3>
                <p class="instructions-paragraph">Enter your email bellow to login to your account</p>
            </div>
            <div class="labels-inputs-container">
                <div class="email-container">
                    <label for="email" class="email-label form-label">Email</label>
                    <input class="form-input" type="text" id="email">
                </div>
                <div class="password-container">
                    <label for="password" class="email-label form-label">Password</label>
                    <input class="form-input" type="text" id="password">
                </div>
                <div class="button-container">
                    <button class="login-button">Login</button>
                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define("login-section", loginSection);
