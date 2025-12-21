# 🚀 Informatik Interaktiv - Programmieren Lernen

Eine interaktive Lernplattform für den Informatikunterricht mit HTML, CSS und Python.

## 📋 Überblick

Diese Plattform wurde speziell für den Informatikunterricht in NRW (Klasse 5-13) entwickelt. Schüler*innen können hier progressiv HTML, CSS und Python lernen mit interaktiven Übungen, sofortigem Feedback und einem motivierenden Achievement-System.

## ✨ Features

- ✅ **Progressives Levelsystem** - 27 Level aufgeteilt in 3 Bereiche (HTML, CSS, Python)
- ✅ **Schwierigkeitsgrade** - Leicht, Mittel, Schwer
- ✅ **Integrierter Code-Editor** - Mit Syntax-Highlighting (CodeMirror)
- ✅ **Sofortiges Feedback** - Erfolgs- und Fehlermeldungen
- ✅ **Hint-System** - Schrittweise Hilfestellungen
- ✅ **Lösungsanzeige** - Als letzte Option verfügbar
- ✅ **Fortschrittsanzeige** - Visueller Progress-Balken
- ✅ **Statistik-Tracking** - Detaillierte Statistiken zu Versuchen, Hinweisen, etc.
- ✅ **Achievement-System** - 8 verschiedene Achievements
- ✅ **Sound-Effekte** - Audio-Feedback bei Aktionen
- ✅ **Responsive Design** - Funktioniert auf allen Geräten
- ✅ **Hell- und Dunkelmodus** - Umschaltbar
- ✅ **Freier Code-Editor** - Zum freien Experimentieren
- ✅ **Python-Ausführung** - Im Browser via Pyodide
- ✅ **HTML/CSS Preview** - Live-Vorschau im iframe

## 🚀 Installation & Start

### Schnellstart (Lokal)

1. Laden Sie alle Dateien herunter:
   - `index.html`
   - `app.js`
   - `admin.html`

2. Öffnen Sie `index.html` in einem modernen Browser:
   - Google Chrome (empfohlen)
   - Firefox
   - Safari
   - Edge

3. Fertig! Die Plattform läuft komplett lokal ohne Server.

### 🌐 Online veröffentlichen (GitHub Pages)

**Empfohlen für Schulgebrauch!**

Veröffentlichen Sie die Plattform online, damit Schüler von überall zugreifen können.

**Schnell-Anleitung:**
1. Pushen Sie das Repository zu GitHub
2. Aktivieren Sie GitHub Pages in den Repository-Einstellungen
3. Ihre URL: `https://IHR_USERNAME.github.io/Informatik_interaktiv/`

**📖 Ausführliche Anleitung:** Siehe [DEPLOY.md](DEPLOY.md)

### 🎨 Admin Panel

Öffnen Sie `admin.html` für:
- QR-Code Generator
- Link-Sharing
- Statistik-Übersicht
- Notion-Integration Setup

### Anmeldung

**Benutzername:** `admin`
**Passwort:** `admin123`

Alle Schüler*innen verwenden diese Zugangsdaten.

## 📚 Struktur der Lernbereiche

### 1. HTML Bereich (7 Level)
1. HTML Basics - Erste Webseite erstellen
2. HTML Text-Formatierung
3. HTML Listen & Links - Strukturierung
4. HTML Bilder einfügen
5. HTML Tabellen erstellen
6. HTML Formulare - Interaktive Elemente
7. HTML Semantische Tags

### 2. CSS Bereich (7 Level)
1. CSS Styling - Farben und Schriftarten
2. CSS Klassen und IDs
3. CSS Box-Model - Layout-Grundlagen
4. CSS Hintergrundbilder
5. CSS Text-Ausrichtung
6. CSS Flexbox - Moderne Layouts
7. CSS Hover-Effekte

### 3. Python Bereich (10 Level)
1. Python Variablen - Ausgabe und Variablen
2. Python Rechnen mit Zahlen
3. Python Bedingungen - if-else Logik
4. Python Listen erstellen
5. Python Schleifen - for-Loops
6. Python Listen durchlaufen
7. Python Funktionen - Wiederverwendbarer Code
8. Python Funktionen mit Parametern
9. Python While-Schleifen
10. Python Dictionaries

## 🎮 Bedienung

### Navigation

- **Bereiche wechseln**: Klicken Sie auf die Tabs (1. HTML Bereich, 2. CSS Bereich, 3. Python Bereich)
- **Level auswählen**: Klicken Sie auf eine Level-Karte
- **Schwierigkeit filtern**: Nutzen Sie die Filter-Buttons (Alle, Leicht, Mittel, Schwer)

### Im Level

- **▶ Code ausführen**: Führt den Code aus und überprüft die Lösung
- **💡 Tipp**: Zeigt einen Hinweis an (gestaffelt, mehrfach verwendbar)
- **🔍 Lösung anzeigen**: Zeigt die komplette Lösung an
- **⏭ Überspringen**: Überspringt das Level
- **← Zurück**: Zurück zur Level-Übersicht

### Freier Code-Editor

Hier können Schüler*innen frei experimentieren:
1. Programmiersprache auswählen (HTML, CSS, Python)
2. Code schreiben
3. **▶ Code ausführen** klicken
4. Ergebnis ansehen

### Ausgabe

- **HTML/CSS**: Live-Vorschau als Webseite (rechts oder unten)
- **Python**: Konsolen-Ausgabe mit print()-Ergebnissen

## 📊 Statistiken & Fortschritt

### Fortschrittsbalken
Zeigt den Gesamtfortschritt über alle Bereiche (oben).

### Statistiken
- Abgeschlossene Level
- Versuche insgesamt
- Hinweise verwendet
- Lösungen angesehen

### Achievements
Schüler*innen können 8 verschiedene Achievements freischalten:
- 🎯 Erste Schritte
- 🏆 HTML Meister
- 🎨 CSS Meister
- 🐍 Python Meister
- ⭐ Perfektionist
- 💪 Ausdauernd
- 🧠 Unabhängig
- ⚡ Schnelllerner

## 💾 Datenspeicherung

### LocalStorage
Alle Fortschritte werden lokal im Browser gespeichert:
- Abgeschlossene Level
- Statistiken
- Achievement-Fortschritt
- Theme-Einstellung

### Export (automatisch)
Die Plattform exportiert automatisch CSV-Daten in den LocalStorage:
- Schlüssel: `exportData_admin`
- Format: CSV (Excel-kompatibel)

**Export-Daten abrufen:**
1. Browser-Konsole öffnen (F12)
2. Eingeben: `console.log(localStorage.getItem('exportData_admin'))`
3. Daten kopieren und in Excel einfügen

### Notion-Integration (Optional)
Für eine Notion-Integration müssten Sie die Notion API anbinden. Aktuell werden die Daten als CSV exportiert.

## 🎨 Theme (Hell-/Dunkelmodus)

- **Umschalten**: Klicken Sie auf das Mond-/Sonnen-Symbol (🌙/☀️) oben rechts
- **Automatische Speicherung**: Die Einstellung wird im Browser gespeichert

## 🔧 Technische Details

### Verwendete Technologien
- **HTML5** - Struktur
- **CSS3** - Styling (mit CSS-Variablen für Themes)
- **JavaScript (ES6+)** - Logik
- **CodeMirror** - Code-Editor mit Syntax-Highlighting
- **Pyodide** - Python-Ausführung im Browser

### Browser-Kompatibilität
- Chrome/Edge: ✅ Voll unterstützt
- Firefox: ✅ Voll unterstützt
- Safari: ✅ Voll unterstützt
- Mobile Browser: ✅ Responsive Design

### Offline-Fähigkeit
Die Plattform läuft komplett offline, sobald die Seite einmal geladen wurde (außer Pyodide beim ersten Start).

## 📱 Mobile Nutzung

Die Plattform ist vollständig responsiv und funktioniert auf:
- Tablets
- Smartphones
- Desktop-Computern

Auf mobilen Geräten werden Editor und Ausgabe untereinander angezeigt.

## 🎓 Für Lehrkräfte

### Anpassungen

**Neue Level hinzufügen:**
1. Öffnen Sie `app.js`
2. Fügen Sie neue Objekte zum `LEVELS_DATA` hinzu
3. Format:
```javascript
{
    id: 'html-8',
    number: '1.8',
    title: 'Titel',
    description: 'Beschreibung',
    difficulty: 'easy', // easy, medium, hard
    task: 'Aufgabenbeschreibung',
    starterCode: 'Vorausgefüllter Code',
    solution: 'Musterlösung',
    hints: ['Tipp 1', 'Tipp 2', 'Tipp 3'],
    validation: (code) => {
        // Rückgabe: true wenn korrekt, false wenn falsch
        return code.includes('<tag>');
    }
}
```

**Schwierigkeitsgrad anpassen:**
Ändern Sie das `difficulty` Feld zu `easy`, `medium` oder `hard`.

**Achievements anpassen:**
Bearbeiten Sie das `ACHIEVEMENTS` Array in `app.js`.

### Fortschritte der Schüler einsehen

**Option 1: LocalStorage direkt im Browser**
1. Browser-Entwicklertools öffnen (F12)
2. Tab "Application" oder "Speicher"
3. LocalStorage → Ihre Domain
4. Schlüssel: `userProgress_admin`

**Option 2: CSV-Export**
```javascript
// In Browser-Konsole eingeben:
console.log(localStorage.getItem('exportData_admin'))
```

### Zurücksetzen der Daten

**Einen Benutzer zurücksetzen:**
```javascript
// In Browser-Konsole eingeben:
localStorage.removeItem('userProgress_admin')
localStorage.removeItem('exportData_admin')
location.reload()
```

**Alles zurücksetzen:**
```javascript
// In Browser-Konsole eingeben:
localStorage.clear()
location.reload()
```

## 🐛 Fehlerbehebung

### Python funktioniert nicht
- **Problem**: Python-Code wird nicht ausgeführt
- **Lösung**:
  - Warten Sie, bis Pyodide vollständig geladen ist (ca. 10-30 Sekunden beim ersten Start)
  - Überprüfen Sie Ihre Internetverbindung (Pyodide wird beim ersten Mal heruntergeladen)
  - Laden Sie die Seite neu

### Fortschritt wird nicht gespeichert
- **Problem**: Level werden als abgeschlossen angezeigt, aber nach Neuladen sind sie weg
- **Lösung**:
  - Überprüfen Sie, ob Cookies/LocalStorage im Browser aktiviert sind
  - Nutzen Sie keinen Inkognito-Modus
  - Löschen Sie nicht den Browser-Cache während der Nutzung

### Code-Editor zeigt keinen Code an
- **Problem**: Der Editor ist leer oder zeigt sich nicht
- **Lösung**:
  - Laden Sie die Seite neu
  - Überprüfen Sie die Browser-Konsole auf Fehler (F12)
  - Stellen Sie sicher, dass JavaScript aktiviert ist

### Layout ist kaputt auf Mobile
- **Problem**: Elemente überlappen oder sind zu klein
- **Lösung**:
  - Drehen Sie das Gerät ins Querformat (empfohlen)
  - Zoomen Sie hinein/heraus
  - Nutzen Sie einen größeren Bildschirm (Tablet statt Smartphone)

## 📖 Lehrplan-Kompatibilität

Die Plattform deckt folgende Bereiche des NRW-Lehrplans Informatik ab:

### Klasse 5-7 (Erprobungsstufe)
- ✅ Grundlegende HTML-Struktur
- ✅ Formatierung und Styling
- ✅ Erste Programmierkonzepte (Variablen, Ausgabe)

### Klasse 8-10 (Mittelstufe)
- ✅ Erweiterte HTML/CSS (Formulare, Layouts)
- ✅ Kontrollstrukturen (if-else, Schleifen)
- ✅ Funktionen und Modularisierung

### Klasse 11-13 (Oberstufe / Sek II)
- ✅ Semantisches HTML
- ✅ Moderne Layout-Techniken (Flexbox)
- ✅ Datenstrukturen (Listen, Dictionaries)
- ✅ Algorithmisches Denken

## 🆘 Support

Bei Fragen oder Problemen:
1. Überprüfen Sie diese README
2. Schauen Sie in die Browser-Konsole (F12) für Fehlermeldungen
3. Erstellen Sie ein Issue auf GitHub (falls vorhanden)

## 📝 Lizenz

Diese Plattform ist für Bildungszwecke frei verwendbar.

## 🎉 Viel Erfolg!

Viel Spaß beim Programmieren lernen!

---

**Version:** 1.0
**Erstellt:** 2025
**Für:** Informatikunterricht NRW (Klasse 5-13)
