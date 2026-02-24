# Pappas Gig-App

## Så här gör du

### 1. Lägg mp3-filerna i musik/-mappen

Döp filerna exakt så här och lägg dem i `musik/`-mappen:

```
musik/
  Ett av dom satt.mp3
  Living Doll.mp3
  Good Luck Charm.mp3
  I mina skor.mp3
  I Need More Of You.mp3
  For dina blaa ogons skull.mp3
  Tro mig jag behover dig.mp3
  Minnen.mp3
  Jag har bott vid en landsvag.mp3
  Leende guldbruna ogon.mp3
  Crazy.mp3
  Teddy Bear.mp3
  Ljus och varme.mp3
  The Great Snowman.mp3
  Natten har tusen ogon.mp3
  Sag hur har du det med karleken.mp3
  Leende guldbruna ogon 2.mp3
  Help Me Make It Through The Night.mp3
  Alska glomma och forlata.mp3
  Vi har sa mycket att saga varann.mp3
  Inga stora bevingade ord.mp3
  Travellin Light.mp3
```

Filnamnen har inga å, ä, ö (för att undvika problem). Appen visar rätt svenska namn automatiskt.

### 2. Kopiera hela mappen till paddan

Kopiera hela `PAPPAS-GIG-APP`-mappen till paddan via USB-kabel. Lägg den t.ex. i `Intern lagring` eller `Downloads`.

### 3. Öppna appen

1. Öppna en filhanterare på paddan (t.ex. "Filer" eller "My Files")
2. Hitta mappen och tryck på `index.html`
3. Välj Chrome som webbläsare

### 4. Skapa genväg på hemskärmen

1. I Chrome, tryck på menyn (⋮ uppe till höger)
2. Välj "Lägg till på startskärmen"
3. Nu finns appen som en ikon - klart!

## Inget internet behövs

Allt ligger lokalt på paddan. Ingen server, ingen inloggning, inga uppdateringar.

## Lägga till nya låtar

1. Lägg mp3-filen i `musik/`-mappen
2. Öppna `index.html` i en texteditor
3. Lägg till filnamnet i `DEFAULT_SONGS`-listan (ca rad 775)
4. Om titeln har svenska tecken, lägg även till en visningsnamn-rad i `DISPLAY`-objektet (ca rad 800)

## Felsökning

- **Ingen musik?** Kolla att mp3-filnamnen matchar exakt (stora/små bokstäver spelar roll)
- **Vill börja om?** Rensa webbläsardata för sidan i Chrome-inställningarna
