describe('Baasic Photo Gallery - Login Test', () => {

  const baseUrl = 'https://demo.baasic.com/angular/starterkit-photo-gallery/login';
  
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('Login').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    const email = 'fstest1';
    const password = '12345678';

    cy.get('input[name="username"]').type(email);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').should('be.visible').click({ force: true });

    cy.url().should('not.include', '/login');
    //cy.contains('Logout', { timeout: 10000 }).should('be.visible');
  });
/*
  it('should show an error for invalid credentials', () => {
    cy.get('input[name="username"]').type('wronguser@test.com');
    cy.get('input[name="password"]').type('wrongpassword', { log: false });
    cy.contains('Login').click();

    cy.get('.alert-danger, .error, .validation-error')
      .should('be.visible')
      .and('contain.text', 'Invalid');
  }); */
});
