class signupSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="signup-section">
        <div class="signup-form">
            <div class="instructions-container">
                <h3 class="instructions-heading">Create an account</h3>
                <p class="instructions-paragraph">Enter your details below to create your account</p>
            </div>
            <div class="labels-inputs-container">
                <div class="name-container">
                    <label for="name" class="form-label name-label">Name</label>
                    <input type="text" id="name" class="form-input">
                </div>
                <div class="email-container">
                    <label for="email" class="form-label email-label">Email</label>
                    <input type="text" id="email" class="form-input">
                </div>
                <div class="password-container">
                    <label for="password" class="form-label password-label">Password</label>
                    <input type="text" id="password" class="form-input">
                </div>
                <div class="confirm-container">
                    <label for="confirm" class="form-label confirm-label">Confirm Password</label>
                    <input type="text" id="confirm" class="form-input">
                </div>
            </div>
            <div class="button-container">
                <button class="signup-button">Sign Up</button>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define("signup-section", signupSection);
