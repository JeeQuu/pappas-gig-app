# Pappas Gig-App

## Vad
En enkel musikspelare-app (PWA) för en Android-surfplatta. Min pappa är snart 80 och spelar på pensionärshem. Han behöver kunna spela sin spellista live utan krångel.

## Krav

### Main/Live-vy
- Stor låttitel i mitten (40px+, vit text)
- Nästa låt visas under i mindre, gråare text ("Nästa: Leende guldbruna ögon")
- Spellistans namn uppe i hörnet
- Stor PLAY/PAUS-knapp
- Framåt/bakåt-knappar
- En "+"-knapp som öppnar en snabb lista där man kan köa in en tillfällig låt mellan nuvarande och nästa (som Spotify "play next")
- Progress bar eller tidvisning

### Playlist-vy
- Lista med spellistor, stora rader
- Tryck för att välja en spellista
- Inom en lista: drag-and-drop för att ändra ordning
- Skapa ny spellista genom att välja låtar från alla tillgängliga
- Radera/redigera spellistor

### Design
- Hög kontrast: mörk bakgrund, stor vit text
- STORA knappar — minst 60px touch targets
- Bara låtnamn, inget artistnamn
- Inget onödigt. Varje vy ska vara självförklarande
- Tänk: "min 80-årige pappa ska aldrig behöva fråga hur det funkar"

### Teknik
- PWA (Progressive Web App) — installeras som ikon på hemskärmen
- Fungerar 100% offline
- Mp3-filer ligger lokalt på paddan
- Inga servrar, ingen inloggning, inga uppdateringar
- HTML/CSS/JS, inget ramverk behövs
- Service Worker för offline-stöd
- Spara spellistor och ordning i localStorage

### Första spellistan
Se filen `spellista.txt` för de 22 låtarna som ska vara default-spellista.

## Leverans
En mapp med index.html, manifest.json, service-worker.js och instruktioner för hur man lägger mp3-filerna och installerar på paddan.
