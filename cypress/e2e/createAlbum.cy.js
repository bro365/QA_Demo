// cypress/e2e/upload_album_cover.cy.js

describe('Upload new album with cover', () => {

  // ✅ Run once before all tests — perform Baasic API login
  before(() => {
    cy.loginReq('fstest1', '12345678'); // use real credentials
  });

  it('creates a new album and uploads cover image', () => {
    // After login, go directly to your profile
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/profile/KHWznyYbOH0eyTdzv8anZc');

    // ✅ Click the top-left "Create Album" button
    cy.get('button') // adjust selector if needed
      .contains(/Create Album/i)
      .should('be.visible')
      .click();

    // Fill in album title and description
    cy.get('input[name="albumName"]').type('CypressTestAlbum (delete after creation)');
    cy.get('textarea[name="albumDescription"]').type('Automated Cypress QA album');

    //Submit album creation form
    cy.get('button[type="submit"]')
      .contains(/Save album/i)
      .should('not.be.disabled') // wait for button to become enabled
      .click();

    //Click upload cover image placeholder
      cy.get('div.placeholder.cur--pointer').click();

    cy.get('label.btn.btn--med.btn--secondary[for="photoInput"]')
      .should('be.visible')
      .click();

    //Attach the cover image to the hidden input
    cy.get('input#photoInput[type="file"]').attachFile('testCover0.jpg');

    //Click the "Upload" button to submit the image
cy.get('button.btn.btn--primary.btn--med[type="submit"]')
  .should('not.be.disabled') // wait until enabled
  .click();
    
  });
});

