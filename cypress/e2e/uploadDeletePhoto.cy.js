describe("Photo Upload Functionality", () => {
  before(() => {
    cy.loginReq("fstest1", "12345678"); // use real credentials
  });

  it("should upload a photo successfully", () => {
    cy.visit(
      "https://demo.baasic.com/angular/starterkit-photo-gallery/album/detail/zmR8TYeHhgNNoLd408Qix1"
    );

    // Click button by text
    cy.contains("button", "Upload Photo").click();

    cy.get("#photoInput").attachFile("PhotoTest.jpg");

    cy.get("button").contains("Upload").click();
    cy.wait(5000); // wait for upload to complete

    // Hover over the thumbnail to reveal the delete button
    cy.get('.thumbnail__img[style*="PhotoTest.jpg"]', { timeout: 10000 })
      .should("exist")
      .trigger("mouseover");
    cy.wait(400); // wait for hover effect

    // Click the delete button (visible after hover)
    cy.get(".thumbnail__info__delete").should("be.visible").click();

    // Verify it’s gone
    cy.get('.thumbnail__img[style*="PhotoTest.jpg"]').should("not.exist");
  });
});
