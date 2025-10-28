# 🧪 TEST_PLAN.md

## 1. Analiza aplikacije

(Ovdje napiši ukratko šta aplikacija radi, njenu svrhu i glavne dijelove.)

## 2. Ključne funkcionalnosti

| Funkcionalnost | Opis                             |
| -------------- | -------------------------------- |
| Login          | Omogućava prijavu korisnika.     |
| Upload         | Dodavanje nove slike u galeriju. |
| View Gallery   | Pregled svih slika u mreži.      |
| Delete         | Brisanje postojeće slike.        |

## 3. Automation prioritizacija

| Funkcionalnost | Prioritet | Obrazloženje               |
| -------------- | --------- | -------------------------- |
| Login (valid)  | HIGH      | Ključna funkcionalnost.    |
| Upload         | HIGH      | Centralni dio aplikacije.  |
| Delete         | HIGH      | Kritično za podatke.       |
| Search         | MEDIUM    | Korisno ali nije presudno. |
| Register       | LOW       | Koristi se rijetko.        |

## 4. Test strategy

- **Manual testing** za početno istraživanje i UI verifikaciju.
- **Automatizacija** pomoću Cypress-a ili Playwright-a.
- Fokus na **kritične tokove** (login, upload, delete).
- **Smoke testovi** nakon svakog builda.
- **Regression testovi** prije produkcijskog puštanja.

## 5. Zaključak

Najvažnije je testirati osnovni tok rada — prijava, pregled i manipulacija slikama.
Kasnije se može proširiti testiranje na performanse, sigurnost i UI.
