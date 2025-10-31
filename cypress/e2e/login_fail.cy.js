it('should show an error for invalid credentials', () => {
    cy.get('input[name="username"]').type('wronguser@test.com');
    cy.get('input[name="password"]').type('wrongpassword', { log: false });
    cy.contains('Login').click();

    cy.get('.alert-danger, .error, .validation-error')
      .should('be.visible')
      .and('contain.text', 'Invalid');
  }); 