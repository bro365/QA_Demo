describe('Photo Upload Functionality', () => {
    beforeEach(() => {
        cy.loginReq('fstest1', '12345678'); // use real credentials
    })

    it('should upload a photo successfully', () => {

        cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/album/detail/zmR8TYeHhgNNoLd408Qix1');

        // Click button by text
        cy.contains('button', 'Upload Photo').click();

        cy.get('#photoInput').attachFile('PhotoTest.jpg');
        
        cy.get('button').contains('Upload').click();
    })

    
})