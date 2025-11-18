class loginSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="login-section">
        <form class="login-form" action="http://localhost:8080/login" method="POST">
            <div class="instructions-container">
                <h3 class="instructions-heading">Login</h3>
                <p class="instructions-paragraph">Enter your email bellow to login to your account</p>
            </div>
            <div class="labels-inputs-container">
                <div class="email-container">
                    <label for="email" class="email-label form-label">Email</label>
                    <input name="email" class="form-input" type="email" id="email" autocomplete="email" required>
                </div>
                <div class="password-container">
                    <label for="password" class="email-label form-label">Password</label>
                    <input name="password" class="form-input" type="password" id="password" autocomplete="password" required>
                </div>
                <div class="button-container">
                    <button type="submit" class="login-button">Login</button>
                </div>
            </div>
        </form>
    </section>
    `;
  }
}

customElements.define("login-section", loginSection);
