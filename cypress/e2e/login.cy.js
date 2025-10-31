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

  it('should login/logout successfully with valid credentials', () => {
    const email = 'fstest1';
    const password = '12345678';

    cy.get('input[name="username"]').type(email);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').should('be.visible').click({ force: true });

    cy.url().should('not.include', '/login');

   // Open the menu
  cy.contains('a.menu__title', 'Menu')
    .should('be.visible')
    .click({ force: true });
  
  cy.wait(1000);

  // Click logout from the menu
  cy.contains('span.nav__link', 'Log out')
    .should('be.visible')
    .click({ force: true });

  // Verify redirect back to login
  cy.url().should('include', '/login');
  cy.get('form').should('be.visible');
  });

});
