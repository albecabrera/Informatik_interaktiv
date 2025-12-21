# 🚀 Deployment Anleitung - GitHub Pages

Diese Anleitung zeigt Ihnen, wie Sie die Plattform auf GitHub Pages veröffentlichen.

## 📋 Voraussetzungen

- GitHub Account
- Git installiert

## 🔧 Setup Schritte

### 1. Repository zu GitHub pushen

Wenn Sie das noch nicht getan haben:

```bash
# Initialisieren Sie Git (falls noch nicht geschehen)
git init

# Fügen Sie alle Dateien hinzu
git add .

# Erstellen Sie den ersten Commit
git commit -m "Initial commit: Informatik Interaktiv Platform"

# Erstellen Sie ein neues Repository auf GitHub
# Gehen Sie zu: https://github.com/new
# Repository Name: Informatik_interaktiv

# Verbinden Sie Ihr lokales Repository mit GitHub
git remote add origin https://github.com/IHR_USERNAME/Informatik_interaktiv.git

# Pushen Sie Ihr Repository
git push -u origin main
```

### 2. GitHub Pages aktivieren

#### Methode 1: Über GitHub Actions (Empfohlen - bereits konfiguriert)

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **Settings** (Einstellungen)
3. Scrollen Sie zu **Pages** in der linken Seitenleiste
4. Unter **Source** wählen Sie: **GitHub Actions**
5. Der Workflow wird automatisch ausgeführt

#### Methode 2: Direkt über GitHub Pages

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **Settings** (Einstellungen)
3. Scrollen Sie zu **Pages** in der linken Seitenleiste
4. Unter **Source** wählen Sie: **Deploy from a branch**
5. Wählen Sie **main** branch und **/ (root)** folder
6. Klicken Sie auf **Save**

### 3. Ihre URL finden

Nach dem Deployment (ca. 1-2 Minuten):

**Ihre URL wird sein:**
```
https://IHR_USERNAME.github.io/Informatik_interaktiv/
```

**Beispiel:**
```
https://acabrera.github.io/Informatik_interaktiv/
```

### 4. URL mit Schülern teilen

**Option 1: Link teilen**
- Kopieren Sie die URL
- Teilen Sie sie per E-Mail, Chat, etc.

**Option 2: QR-Code generieren**
- Öffnen Sie `admin.html` (lokal oder deployed)
- Der QR-Code wird automatisch generiert
- Speichern Sie den QR-Code
- Drucken Sie ihn aus oder teilen Sie ihn digital

## 🔄 Updates veröffentlichen

Wenn Sie Änderungen vornehmen:

```bash
# Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Beschreibung Ihrer Änderungen"

# Zu GitHub pushen
git push origin main
```

GitHub Pages wird automatisch aktualisiert (dauert 1-2 Minuten).

## 🌐 Custom Domain (Optional)

Wenn Sie eine eigene Domain verwenden möchten:

1. Kaufen Sie eine Domain (z.B. bei Namecheap, GoDaddy)
2. Erstellen Sie eine Datei `CNAME` im Root-Verzeichnis:
   ```
   ihre-domain.de
   ```
3. Fügen Sie DNS-Einträge bei Ihrem Domain-Provider hinzu:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153
   ```
4. Gehen Sie zu GitHub Pages Settings und tragen Sie Ihre Domain ein

## 🔒 Backend & Notion Integration

**Wichtig:** GitHub Pages unterstützt nur statische Websites (HTML, CSS, JS).

Für die Notion-Integration mit Backend:

### Option 1: Lokaler Server (Entwicklung/Test)

```bash
# Dependencies installieren
npm install

# .env Datei erstellen
cp .env.example .env

# Notion API Keys eintragen (siehe README.md)
# Dann:
npm start
```

### Option 2: Backend auf Hosting-Service deployen

Empfohlene Services:
- **Heroku** (kostenlos möglich)
- **Railway** (kostenlos möglich)
- **Render** (kostenlos möglich)
- **Vercel** (für Serverless Functions)

#### Beispiel: Railway Deployment

1. Gehen Sie zu [railway.app](https://railway.app)
2. Erstellen Sie ein Konto
3. Klicken Sie auf "New Project" → "Deploy from GitHub repo"
4. Wählen Sie Ihr Repository
5. Fügen Sie Environment Variables hinzu:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
6. Railway deployed automatisch

Ihre Backend-URL wird sein: `https://ihr-projekt.up.railway.app`

**Dann in `app.js` ändern:**
```javascript
const BACKEND_URL = 'https://ihr-projekt.up.railway.app';
```

## 📱 Admin Panel Zugriff

Das Admin Panel ist verfügbar unter:
```
https://IHR_USERNAME.github.io/Informatik_interaktiv/admin.html
```

## 🐛 Troubleshooting

### Seite zeigt 404 Fehler
- Warten Sie 2-3 Minuten nach dem Push
- Überprüfen Sie, ob GitHub Pages aktiviert ist
- Überprüfen Sie den Branch (sollte `main` sein)

### CSS/JS funktioniert nicht
- Überprüfen Sie die Browser-Konsole (F12)
- Stellen Sie sicher, dass alle Pfade relativ sind

### Backend nicht erreichbar
- Stellen Sie sicher, dass CORS aktiviert ist
- Überprüfen Sie die Backend-URL in `app.js`
- Deployen Sie das Backend auf einen Hosting-Service

## 🎉 Fertig!

Ihre Plattform ist jetzt live unter:
```
https://IHR_USERNAME.github.io/Informatik_interaktiv/
```

Teilen Sie diese URL mit Ihren Schülern!

---

**Bei Fragen oder Problemen:**
- Überprüfen Sie die GitHub Actions Logs
- Lesen Sie die [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- Erstellen Sie ein Issue in Ihrem Repository
