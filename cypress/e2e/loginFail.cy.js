describe("Login Failed Test", () => {
  const baseUrl =
    "https://demo.baasic.com/angular/starterkit-photo-gallery/login";

  before(() => {
    cy.visit(baseUrl);
  });

  it("should display the login form", () => {
    cy.get("form").should("be.visible");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.contains("Login").should("be.visible");
  });

  it("should FAIL login", () => {
    const email = "invalidUser";
    const password = "wrongPassword";

    cy.get('input[name="username"]').type(email);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').should("be.visible").click({ force: true });

    // Assert that the warning message is visible
    cy.get("span.alert.alert--warning")
      .should("be.visible")
      .and("contain.text", "Invalid email, username or password");
  });
});
