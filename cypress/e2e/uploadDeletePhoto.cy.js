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
  }),
    it("should delete PhotoTest.jpg from gallery", () => {
      cy.visit(
        "https://demo.baasic.com/angular/starterkit-photo-gallery/album/detail/zmR8TYeHhgNNoLd408Qix1"
      );
      // Delete uploaded photo
      cy.get('.thumbnail__img[style*="PhotoTest.jpg"]', { timeout: 10000 })
        .should("exist")
        .parents(".thumbnail")
        .find(".thumbnail__info__delete")
        .click();

      // Verify it’s gone
      cy.get('.thumbnail__img[style*="PhotoTest.jpg"]').should("not.exist");
    });
});
