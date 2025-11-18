class signupSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="signup-section">
        <form class="signup-form" action="http://localhost:8080/signup" method="POST">
            <div class="instructions-container">
                <h3 class="instructions-heading">Create an account</h3>
                <p class="instructions-paragraph">Enter your details below to create your account</p>
            </div>
            <div class="labels-inputs-container">
                <div class="name-container">
                    <label for="name" class="form-label name-label">Name</label>
                    <input name="name" type="text" id="name" class="form-input" autocomplete="name" required>
                </div>
                <div class="email-container">
                    <label for="email" class="form-label email-label">Email</label>
                    <input name="email" type="email" id="email" class="form-input" autocomplete="email" required>
                </div>
                <div class="password-container">
                    <label for="password" class="form-label password-label">Password</label>
                    <input name="password" type="password" id="password" class="form-input" autocomplete="password" required>
                </div>
                <div class="confirm-container">
                    <label for="confirm" class="form-label confirm-label">Confirm Password</label>
                    <input name="confirm" type="password" id="confirm" class="form-input" autocomplete="password" required>
                </div>
            </div>
            <div class="button-container">
                <button type="submit" class="signup-button">Sign Up</button>
            </div>
        </form>
    </section>
    `;
  }
}

customElements.define("signup-section", signupSection);
