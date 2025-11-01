// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginReq', (username, password) => {
  // Use cy.session so login is cached and reused across tests
  cy.session([username, password], () => {
    // Go to the site's login page (frontend route)
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');

    // Fill the form — adjust selectors if the DOM differs
    cy.get('input[name="username"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();

    // Wait for profile redirect or presence of a logged-in element
    cy.url({ timeout: 10000 }).should('not.include', '/login');
    
  }, {
    validate() {
      // optional validation that session is still valid before reuse
      cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/profile/KHWznyYbOH0eyTdzv8anZc');    
    }
  });
});
