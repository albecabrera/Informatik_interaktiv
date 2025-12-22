# SQL-Datenbank Dokumentation

Diese Datei dokumentiert die Struktur der Schuldatenbank für die SQL-Übungen.

## Datenbank: schuldb.sqlite

### Tabellen

#### 1. schueler (Schüler)
Enthält Informationen über die Schüler.

| Spalte | Typ | Beschreibung |
|--------|-----|--------------|
| id | INTEGER | Primärschlüssel |
| name | TEXT | Name des Schülers |
| age | INTEGER | Alter des Schülers |
| klasse | TEXT | Klasse (z.B. "9a", "10b") |

**Beispieldaten:** 10 Schüler von Anna Müller bis Maria Schneider

#### 2. noten (Noten)
Enthält die Noten der Schüler in verschiedenen Fächern.

| Spalte | Typ | Beschreibung |
|--------|-----|--------------|
| id | INTEGER | Primärschlüssel |
| schueler_id | INTEGER | Fremdschlüssel zu schueler.id |
| fach | TEXT | Fachname (Mathematik, Deutsch, Englisch, Informatik) |
| note | INTEGER | Note (1-6, wobei 1 = sehr gut) |

**Beispieldaten:** 40 Noten für verschiedene Schüler und Fächer

#### 3. kurse (Kurse)
Enthält Informationen über Informatik-Kurse.

| Spalte | Typ | Beschreibung |
|--------|-----|--------------|
| id | INTEGER | Primärschlüssel |
| kursname | TEXT | Name des Kurses |
| lehrer | TEXT | Name des Lehrers |
| raum | TEXT | Raumnummer |

**Beispieldaten:** 6 Kurse (Informatik Grundlagen, Web-Entwicklung, etc.)

## Beispiel-Abfragen

### SELECT - Alle Schüler anzeigen
```sql
SELECT * FROM schueler;
```

### WHERE - Schüler filtern
```sql
SELECT * FROM schueler WHERE age > 15;
```

### JOIN - Schüler mit ihren Noten
```sql
SELECT schueler.name, noten.fach, noten.note
FROM schueler
JOIN noten ON schueler.id = noten.schueler_id;
```

### ORDER BY - Sortieren nach Name
```sql
SELECT * FROM schueler ORDER BY name ASC;
```

### INSERT - Neuen Schüler einfügen
```sql
INSERT INTO schueler (name, age, klasse) VALUES ('Max Mustermann', 16, '10c');
```

### UPDATE - Daten aktualisieren
```sql
UPDATE schueler SET klasse = '10a' WHERE name = 'Anna Müller';
```

### DELETE - Daten löschen
```sql
DELETE FROM noten WHERE note > 3;
```

## Verwendung im Browser

Die Datenbank wird automatisch beim Laden der Seite initialisiert:
- Wenn die Datei `schuldb.sqlite` verfügbar ist, wird sie geladen
- Andernfalls wird die Datenbank im Memory neu erstellt

Die Datenbank wird mit SQL.js ausgeführt und läuft komplett im Browser ohne Server.
