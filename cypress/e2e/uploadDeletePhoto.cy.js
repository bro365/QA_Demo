describe("Photo Upload and Delete Functionality", () => {
  before(() => {
    cy.loginReq("fstest1", "12345678"); // use real credentials
  });

  it("should upload a photo successfully", () => {
    cy.visit(
      "https://demo.baasic.com/angular/starterkit-photo-gallery/album/detail/zmR8TYeHhgNNoLd408Qix1"
    );

    // Click button by text
    cy.contains("button", "Upload Photo").click();

    cy.get("#photoInput").attachFile("PhotoTest.jpg").should("exist");

    cy.get("button").contains("Upload").click();

    // Wait until the uploaded photo thumbnail is visible
    cy.get('.thumbnail__img[style*="PhotoTest.jpg"]', {
      timeout: 10000,
    }).should("be.visible");

    // Delete test
    cy.get('.thumbnail__img[style*="PhotoTest.jpg"]')
      .parents(".thumbnail")
      .realHover();

    cy.get(".thumbnail__info__delete").should("be.visible").click();

    // Wait for modal to appear
    cy.get(".modal__dialog--footer", { timeout: 10000 }).should("be.visible");

    // Confirm delete in modal
    cy.get(".modal__dialog--footer .btn--warning").should("be.visible").click();

    // Verify it’s gone
    cy.get('.thumbnail__img[style*="PhotoTest.jpg"]').should("not.exist");
  });
});
