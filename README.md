CYPRESS TESTS Instructions

Cypres 15.5.0

Microsoft Edge v141

---

Napomena: Testovi su napravljeni za testiranje s postavljenim User credentials.

**1. login.cy.js**

- pokrenuti skriptu preko Cypress UI
- skripta obavlja login i logout sa postavljenim username i pw (Credentials.txt file)

**2. loginFail.cy.js**

- pokrenuti skriptu preko Cypress UI
- skripta provjerava netočne login informacije

**3. createAlbum.cy.js**

- testiranje kreiranja novog albuma
- za ponovno testiranje, potrebno je **izbrisati kreirani "Cypress Test Album"**

**4. uploadDeletePhoto.cy.js**

- testiranje uploada i brisanja slike
- skripta pozicionira test u napravljeni album **UploadPhotoTestAlbum (NE BRISATI ALBUM!)**
