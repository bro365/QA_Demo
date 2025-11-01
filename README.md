CYPRESS TESTS Instructions

Cypres 15.5.0

Microsoft Edge v141

---

Napomena: Testovi su napravljeni za testiranje s postavljenim User credentials.

**1. login.cy.js**

- samo pokrenuti skriptu preko cypress UI
- skripta obavlja login i logout sa postavljenim username i pw (Credentials.txt file)

**2. createAlbum.cy.js**

- testiranje kreiranja novog albuma
- za ponovno testiranje, potrebno je **izbrisati kreirani "Cypress Test Album"**

**3. uploadPhoto.cy.js**

- testiranje uploada slike
- skripta pozicionira test u napravljeni album **UploadPhotoTestAlbum (NE BRISATI ALBUM!)**
- za ponovno testiranje, potrebno je izbrisati sliku koja se uploada preko testa!
