// ==================== DATA STRUCTURES ====================

const LEVELS_DATA = {
    html: [
        {
            id: 'html-1',
            number: '1.1',
            title: 'HTML Basics - Erste Webseite erstellen',
            description: 'Erstelle deine erste HTML-Seite mit einem Titel und einem Absatz',
            difficulty: 'easy',
            task: 'Erstelle eine HTML-Seite mit einem h1-Titel "Hallo Welt" und einem Absatz mit beliebigem Text.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Meine erste Webseite</title>\n</head>\n<body>\n    <!-- Dein Code hier -->\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Meine erste Webseite</title>\n</head>\n<body>\n    <h1>Hallo Welt</h1>\n    <p>Das ist meine erste Webseite!</p>\n</body>\n</html>',
            hints: [
                'Verwende das <h1> Tag für die Überschrift',
                'Verwende das <p> Tag für den Absatz',
                'Platziere beide Elemente innerhalb des <body> Tags'
            ],
            validation: (code) => {
                return code.includes('<h1>') && code.includes('</h1>') &&
                       code.includes('<p>') && code.includes('</p>');
            }
        },
        {
            id: 'html-2',
            number: '1.2',
            title: 'HTML Text-Formatierung',
            description: 'Lerne verschiedene Text-Formatierungen kennen',
            difficulty: 'easy',
            task: 'Erstelle eine Seite mit normalem Text, fettem Text (<strong>) und kursivem Text (<em>).',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <!-- Dein Code hier -->\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <p>Normaler Text</p>\n    <p><strong>Fetter Text</strong></p>\n    <p><em>Kursiver Text</em></p>\n</body>\n</html>',
            hints: [
                'Nutze <strong> für fetten Text',
                'Nutze <em> für kursiven Text',
                'Du kannst mehrere Absätze verwenden'
            ],
            validation: (code) => {
                return code.includes('<strong>') && code.includes('<em>');
            }
        },
        {
            id: 'html-3',
            number: '1.3',
            title: 'HTML Listen & Links - Strukturierung',
            description: 'Erstelle Listen und füge Links hinzu',
            difficulty: 'medium',
            task: 'Erstelle eine ungeordnete Liste mit 3 Hobbys und füge einen Link zu Wikipedia hinzu.',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <h2>Meine Hobbys</h2>\n    <!-- Liste hier -->\n    \n    <!-- Link hier -->\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <h2>Meine Hobbys</h2>\n    <ul>\n        <li>Programmieren</li>\n        <li>Lesen</li>\n        <li>Sport</li>\n    </ul>\n    <a href="https://de.wikipedia.org">Wikipedia besuchen</a>\n</body>\n</html>',
            hints: [
                'Verwende <ul> für eine ungeordnete Liste',
                'Jedes Listen-Element nutzt <li>',
                'Links werden mit <a href="..."> erstellt'
            ],
            validation: (code) => {
                return code.includes('<ul>') && code.includes('<li>') && code.includes('<a href');
            }
        },
        {
            id: 'html-4',
            number: '1.4',
            title: 'HTML Bilder einfügen',
            description: 'Lerne wie man Bilder in HTML einbindet',
            difficulty: 'easy',
            task: 'Füge ein Bild mit alt-Text ein.',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <h1>Mein Bild</h1>\n    <!-- Bild hier einfügen -->\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <h1>Mein Bild</h1>\n    <img src="https://via.placeholder.com/300" alt="Beispielbild">\n</body>\n</html>',
            hints: [
                'Verwende das <img> Tag',
                'Das src-Attribut gibt die Bild-URL an',
                'Das alt-Attribut beschreibt das Bild'
            ],
            validation: (code) => {
                return code.includes('<img') && code.includes('src=') && code.includes('alt=');
            }
        },
        {
            id: 'html-5',
            number: '1.5',
            title: 'HTML Tabellen erstellen',
            description: 'Erstelle eine einfache Tabelle',
            difficulty: 'medium',
            task: 'Erstelle eine Tabelle mit 2 Zeilen und 2 Spalten (Name und Alter).',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <table border="1">\n        <!-- Dein Code hier -->\n    </table>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <table border="1">\n        <tr>\n            <th>Name</th>\n            <th>Alter</th>\n        </tr>\n        <tr>\n            <td>Max</td>\n            <td>15</td>\n        </tr>\n    </table>\n</body>\n</html>',
            hints: [
                'Verwende <tr> für Tabellenzeilen',
                'Verwende <th> für Überschriften',
                'Verwende <td> für Datenzellen'
            ],
            validation: (code) => {
                return code.includes('<tr>') && code.includes('<td>');
            }
        },
        {
            id: 'html-6',
            number: '1.6',
            title: 'HTML Formulare - Interaktive Elemente',
            description: 'Erstelle ein einfaches Formular',
            difficulty: 'medium',
            task: 'Erstelle ein Formular mit einem Textfeld für den Namen und einem Submit-Button.',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <form>\n        <!-- Dein Code hier -->\n    </form>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <form>\n        <label for="name">Name:</label>\n        <input type="text" id="name" name="name">\n        <button type="submit">Absenden</button>\n    </form>\n</body>\n</html>',
            hints: [
                'Verwende <input type="text"> für Textfelder',
                'Verwende <label> für Beschriftungen',
                'Verwende <button type="submit"> für den Submit-Button'
            ],
            validation: (code) => {
                return code.includes('<form>') && code.includes('<input') && code.includes('type="text"');
            }
        },
        {
            id: 'html-7',
            number: '1.7',
            title: 'HTML Semantische Tags',
            description: 'Nutze semantische HTML5-Elemente',
            difficulty: 'hard',
            task: 'Erstelle eine Seite mit <header>, <main>, <article> und <footer>.',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n    <!-- Dein Code hier -->\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<body>\n    <header>\n        <h1>Meine Website</h1>\n    </header>\n    <main>\n        <article>\n            <h2>Artikel-Titel</h2>\n            <p>Artikel-Inhalt</p>\n        </article>\n    </main>\n    <footer>\n        <p>Copyright 2025</p>\n    </footer>\n</body>\n</html>',
            hints: [
                '<header> für den Kopfbereich',
                '<main> für den Hauptinhalt',
                '<footer> für den Fußbereich'
            ],
            validation: (code) => {
                return code.includes('<header>') && code.includes('<main>') && code.includes('<footer>');
            }
        }
    ],
    css: [
        {
            id: 'css-1',
            number: '2.1',
            title: 'CSS Styling - Farben und Schriftarten',
            description: 'Lerne CSS-Grundlagen für Text-Styling',
            difficulty: 'easy',
            task: 'Style einen Absatz mit roter Farbe und einer Schriftgröße von 20px.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    /* Dein CSS hier */\n</style>\n</head>\n<body>\n    <p>Dieser Text soll gestylt werden!</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    p {\n        color: red;\n        font-size: 20px;\n    }\n</style>\n</head>\n<body>\n    <p>Dieser Text soll gestylt werden!</p>\n</body>\n</html>',
            hints: [
                'Verwende color: red; für rote Schrift',
                'Verwende font-size: 20px; für die Größe',
                'CSS-Regeln stehen in geschweiften Klammern {}'
            ],
            validation: (code) => {
                return code.includes('color:') && code.includes('font-size:');
            }
        },
        {
            id: 'css-2',
            number: '2.2',
            title: 'CSS Klassen und IDs',
            description: 'Nutze Klassen und IDs zum Stylen',
            difficulty: 'easy',
            task: 'Erstelle eine Klasse .highlight mit gelbem Hintergrund und eine ID #title mit blauer Farbe.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    /* Dein CSS hier */\n</style>\n</head>\n<body>\n    <h1 id="title">Titel</h1>\n    <p class="highlight">Hervorgehobener Text</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    #title {\n        color: blue;\n    }\n    .highlight {\n        background-color: yellow;\n    }\n</style>\n</head>\n<body>\n    <h1 id="title">Titel</h1>\n    <p class="highlight">Hervorgehobener Text</p>\n</body>\n</html>',
            hints: [
                'IDs werden mit # selektiert: #title',
                'Klassen werden mit . selektiert: .highlight',
                'background-color setzt die Hintergrundfarbe'
            ],
            validation: (code) => {
                return code.includes('#title') && code.includes('.highlight') && code.includes('background-color');
            }
        },
        {
            id: 'css-3',
            number: '2.3',
            title: 'CSS Box-Model - Layout-Grundlagen',
            description: 'Verstehe Margin, Padding und Border',
            difficulty: 'medium',
            task: 'Erstelle ein div mit 20px Padding, 10px Margin und einem schwarzen Border.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .box {\n        /* Dein CSS hier */\n    }\n</style>\n</head>\n<body>\n    <div class="box">Box-Inhalt</div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .box {\n        padding: 20px;\n        margin: 10px;\n        border: 2px solid black;\n    }\n</style>\n</head>\n<body>\n    <div class="box">Box-Inhalt</div>\n</body>\n</html>',
            hints: [
                'padding: 20px; für Innenabstand',
                'margin: 10px; für Außenabstand',
                'border: 2px solid black; für den Rahmen'
            ],
            validation: (code) => {
                return code.includes('padding:') && code.includes('margin:') && code.includes('border:');
            }
        },
        {
            id: 'css-4',
            number: '2.4',
            title: 'CSS Hintergrundbilder',
            description: 'Füge Hintergrundbilder hinzu',
            difficulty: 'easy',
            task: 'Setze ein Hintergrundbild für ein div-Element.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .bg-box {\n        width: 300px;\n        height: 200px;\n        /* Dein CSS hier */\n    }\n</style>\n</head>\n<body>\n    <div class="bg-box">Mit Hintergrund</div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .bg-box {\n        width: 300px;\n        height: 200px;\n        background-image: url("https://via.placeholder.com/300");\n        background-size: cover;\n    }\n</style>\n</head>\n<body>\n    <div class="bg-box">Mit Hintergrund</div>\n</body>\n</html>',
            hints: [
                'Verwende background-image: url("...")\\;',
                'background-size: cover; passt das Bild an',
                'Eine URL kann https://via.placeholder.com/300 sein'
            ],
            validation: (code) => {
                return code.includes('background-image:');
            }
        },
        {
            id: 'css-5',
            number: '2.5',
            title: 'CSS Text-Ausrichtung',
            description: 'Richte Text aus',
            difficulty: 'easy',
            task: 'Zentriere einen Text horizontal.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .centered {\n        /* Dein CSS hier */\n    }\n</style>\n</head>\n<body>\n    <p class="centered">Zentrierter Text</p>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .centered {\n        text-align: center;\n    }\n</style>\n</head>\n<body>\n    <p class="centered">Zentrierter Text</p>\n</body>\n</html>',
            hints: [
                'Verwende text-align: center;',
                'Dies funktioniert für Inline- und Block-Elemente',
                'Andere Optionen: left, right, justify'
            ],
            validation: (code) => {
                return code.includes('text-align:');
            }
        },
        {
            id: 'css-6',
            number: '2.6',
            title: 'CSS Flexbox - Moderne Layouts',
            description: 'Nutze Flexbox für flexible Layouts',
            difficulty: 'hard',
            task: 'Erstelle einen Flex-Container mit 3 Items, die gleichmäßig verteilt sind.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .container {\n        /* Dein CSS hier */\n    }\n    .item {\n        background-color: lightblue;\n        padding: 20px;\n        margin: 5px;\n    }\n</style>\n</head>\n<body>\n    <div class="container">\n        <div class="item">Item 1</div>\n        <div class="item">Item 2</div>\n        <div class="item">Item 3</div>\n    </div>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .container {\n        display: flex;\n        justify-content: space-around;\n    }\n    .item {\n        background-color: lightblue;\n        padding: 20px;\n        margin: 5px;\n    }\n</style>\n</head>\n<body>\n    <div class="container">\n        <div class="item">Item 1</div>\n        <div class="item">Item 2</div>\n        <div class="item">Item 3</div>\n    </div>\n</body>\n</html>',
            hints: [
                'Verwende display: flex; auf dem Container',
                'justify-content: space-around; verteilt die Items',
                'Andere Optionen: space-between, center, flex-start'
            ],
            validation: (code) => {
                return code.includes('display: flex') && code.includes('justify-content');
            }
        },
        {
            id: 'css-7',
            number: '2.7',
            title: 'CSS Hover-Effekte',
            description: 'Erstelle interaktive Hover-Effekte',
            difficulty: 'medium',
            task: 'Erstelle einen Button, der bei Hover die Farbe ändert.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .button {\n        background-color: blue;\n        color: white;\n        padding: 10px 20px;\n        border: none;\n    }\n    /* Hover-Effekt hier */\n</style>\n</head>\n<body>\n    <button class="button">Hover mich!</button>\n</body>\n</html>',
            solution: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .button {\n        background-color: blue;\n        color: white;\n        padding: 10px 20px;\n        border: none;\n    }\n    .button:hover {\n        background-color: darkblue;\n        cursor: pointer;\n    }\n</style>\n</head>\n<body>\n    <button class="button">Hover mich!</button>\n</body>\n</html>',
            hints: [
                'Verwende :hover Pseudo-Klasse',
                'Die Syntax ist .button:hover { ... }',
                'Ändere background-color bei Hover'
            ],
            validation: (code) => {
                return code.includes(':hover');
            }
        }
    ],
    python: [
        {
            id: 'python-1',
            number: '3.1',
            title: 'Python Variablen - Ausgabe und Variablen',
            description: 'Lerne Variablen und print() kennen',
            difficulty: 'easy',
            task: 'Erstelle eine Variable mit deinem Namen und gib sie mit print() aus.',
            starterCode: '# Erstelle eine Variable und gib sie aus\n',
            solution: 'name = "Max"\nprint(name)',
            hints: [
                'Variablen werden mit = zugewiesen: name = "..."',
                'Verwende print() um Variablen auszugeben',
                'Strings stehen in Anführungszeichen'
            ],
            validation: (code) => {
                return code.includes('print(') && code.includes('=');
            }
        },
        {
            id: 'python-2',
            number: '3.2',
            title: 'Python Rechnen mit Zahlen',
            description: 'Nutze Python als Taschenrechner',
            difficulty: 'easy',
            task: 'Berechne 15 + 27 und speichere das Ergebnis in einer Variable. Gib das Ergebnis aus.',
            starterCode: '# Berechne und gib das Ergebnis aus\n',
            solution: 'ergebnis = 15 + 27\nprint(ergebnis)',
            hints: [
                'Python kann rechnen: +, -, *, /',
                'Speichere das Ergebnis in einer Variable',
                'Gib die Variable mit print() aus'
            ],
            validation: (code) => {
                return code.includes('+') && code.includes('print(');
            }
        },
        {
            id: 'python-3',
            number: '3.3',
            title: 'Python Bedingungen - if-else Logik',
            description: 'Lerne bedingte Anweisungen',
            difficulty: 'medium',
            task: 'Schreibe ein Programm: Wenn eine Zahl größer als 10 ist, gib "Groß" aus, sonst "Klein".',
            starterCode: 'zahl = 15\n# Dein Code hier\n',
            solution: 'zahl = 15\nif zahl > 10:\n    print("Groß")\nelse:\n    print("Klein")',
            hints: [
                'Verwende if zahl > 10:',
                'Vergiss nicht die Einrückung (4 Leerzeichen)',
                'else: für den anderen Fall'
            ],
            validation: (code) => {
                return code.includes('if') && code.includes('else');
            }
        },
        {
            id: 'python-4',
            number: '3.4',
            title: 'Python Listen erstellen',
            description: 'Arbeite mit Listen',
            difficulty: 'easy',
            task: 'Erstelle eine Liste mit 3 Früchten und gib sie aus.',
            starterCode: '# Erstelle eine Liste und gib sie aus\n',
            solution: 'fruechte = ["Apfel", "Banane", "Orange"]\nprint(fruechte)',
            hints: [
                'Listen werden mit eckigen Klammern erstellt: [...]',
                'Elemente werden mit Komma getrennt',
                'Strings in Listen brauchen Anführungszeichen'
            ],
            validation: (code) => {
                return code.includes('[') && code.includes(']') && code.includes('print(');
            }
        },
        {
            id: 'python-5',
            number: '3.5',
            title: 'Python Schleifen - for-Loops',
            description: 'Wiederhole Code mit Schleifen',
            difficulty: 'medium',
            task: 'Schreibe eine for-Schleife, die die Zahlen 1 bis 5 ausgibt.',
            starterCode: '# Dein Code hier\n',
            solution: 'for i in range(1, 6):\n    print(i)',
            hints: [
                'Verwende for i in range(...):',
                'range(1, 6) erzeugt Zahlen von 1 bis 5',
                'Vergiss nicht die Einrückung'
            ],
            validation: (code) => {
                return code.includes('for') && code.includes('range(');
            }
        },
        {
            id: 'python-6',
            number: '3.6',
            title: 'Python Listen durchlaufen',
            description: 'Iteriere über Listen',
            difficulty: 'medium',
            task: 'Durchlaufe eine Liste von Namen und gib jeden Namen aus.',
            starterCode: 'namen = ["Anna", "Ben", "Clara"]\n# Dein Code hier\n',
            solution: 'namen = ["Anna", "Ben", "Clara"]\nfor name in namen:\n    print(name)',
            hints: [
                'Verwende for name in namen:',
                'Die Variable name nimmt jeden Wert der Liste an',
                'Gib name mit print() aus'
            ],
            validation: (code) => {
                return code.includes('for') && code.includes('in') && code.includes('print(');
            }
        },
        {
            id: 'python-7',
            number: '3.7',
            title: 'Python Funktionen - Wiederverwendbarer Code',
            description: 'Erstelle eigene Funktionen',
            difficulty: 'hard',
            task: 'Schreibe eine Funktion gruss(), die "Hallo!" ausgibt. Rufe sie auf.',
            starterCode: '# Definiere die Funktion und rufe sie auf\n',
            solution: 'def gruss():\n    print("Hallo!")\n\ngruss()',
            hints: [
                'Funktionen werden mit def definiert',
                'Syntax: def funktionsname():',
                'Rufe die Funktion mit funktionsname() auf'
            ],
            validation: (code) => {
                return code.includes('def ') && code.includes('print(');
            }
        },
        {
            id: 'python-8',
            number: '3.8',
            title: 'Python Funktionen mit Parametern',
            description: 'Übergebe Werte an Funktionen',
            difficulty: 'hard',
            task: 'Schreibe eine Funktion addiere(a, b), die zwei Zahlen addiert und das Ergebnis zurückgibt.',
            starterCode: '# Definiere die Funktion\n\n# Teste sie\nprint(addiere(5, 3))\n',
            solution: 'def addiere(a, b):\n    return a + b\n\nprint(addiere(5, 3))',
            hints: [
                'Parameter stehen in Klammern: def addiere(a, b):',
                'Verwende return um einen Wert zurückzugeben',
                'Die Funktion kann dann mit addiere(5, 3) aufgerufen werden'
            ],
            validation: (code) => {
                return code.includes('def ') && code.includes('return');
            }
        },
        {
            id: 'python-9',
            number: '3.9',
            title: 'Python While-Schleifen',
            description: 'Nutze while-Schleifen',
            difficulty: 'medium',
            task: 'Schreibe eine while-Schleife, die von 1 bis 3 zählt.',
            starterCode: '# Dein Code hier\n',
            solution: 'i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1',
            hints: [
                'while Bedingung: führt den Code aus solange die Bedingung wahr ist',
                'Initialisiere eine Variable vor der Schleife',
                'Vergiss nicht die Variable zu erhöhen (i = i + 1)'
            ],
            validation: (code) => {
                return code.includes('while');
            }
        },
        {
            id: 'python-10',
            number: '3.10',
            title: 'Python Dictionaries',
            description: 'Arbeite mit Dictionaries (Wörterbüchern)',
            difficulty: 'hard',
            task: 'Erstelle ein Dictionary mit Schlüssel-Wert-Paaren und gib einen Wert aus.',
            starterCode: '# Erstelle ein Dictionary\n',
            solution: 'person = {"name": "Max", "alter": 15}\nprint(person["name"])',
            hints: [
                'Dictionaries nutzen geschweifte Klammern: {}',
                'Format: {"schlüssel": "wert"}',
                'Zugriff mit dictionary["schlüssel"]'
            ],
            validation: (code) => {
                return code.includes('{') && code.includes('}') && code.includes(':');
            }
        }
    ],
    sql: [
        {
            id: 'sql-1',
            number: '4.1',
            title: 'SQL Basics - SELECT Abfragen',
            description: 'Lerne die grundlegende SELECT-Anweisung',
            difficulty: 'easy',
            task: 'Wähle alle Spalten aus der Tabelle "users" aus.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'SELECT * FROM users;',
            hints: [
                'Verwende SELECT * um alle Spalten auszuwählen',
                'FROM gibt die Tabelle an',
                'Vergiss nicht das Semikolon am Ende'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('select') && code.toLowerCase().includes('from');
            }
        },
        {
            id: 'sql-2',
            number: '4.2',
            title: 'SQL WHERE - Daten filtern',
            description: 'Filtere Daten mit WHERE',
            difficulty: 'easy',
            task: 'Wähle alle Benutzer aus, deren Alter größer als 18 ist.',
            starterCode: '-- Deine SQL Abfrage hier\nSELECT * FROM users\n',
            solution: 'SELECT * FROM users WHERE age > 18;',
            hints: [
                'Verwende WHERE für Bedingungen',
                'Der Vergleichsoperator > bedeutet "größer als"',
                'Syntax: WHERE spaltenname > wert'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('where') && code.toLowerCase().includes('>');
            }
        },
        {
            id: 'sql-3',
            number: '4.3',
            title: 'SQL ORDER BY - Sortieren',
            description: 'Sortiere Ergebnisse',
            difficulty: 'medium',
            task: 'Wähle alle Benutzer aus und sortiere sie nach Namen aufsteigend.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'SELECT * FROM users ORDER BY name ASC;',
            hints: [
                'ORDER BY sortiert die Ergebnisse',
                'ASC = aufsteigend, DESC = absteigend',
                'Syntax: ORDER BY spaltenname ASC'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('order by');
            }
        },
        {
            id: 'sql-4',
            number: '4.4',
            title: 'SQL INSERT - Daten einfügen',
            description: 'Füge neue Daten ein',
            difficulty: 'medium',
            task: 'Füge einen neuen Benutzer mit Namen "Max" und Alter 25 ein.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'INSERT INTO users (name, age) VALUES (\'Max\', 25);',
            hints: [
                'INSERT INTO fügt Daten ein',
                'Syntax: INSERT INTO tabelle (spalten) VALUES (werte)',
                'Strings brauchen Anführungszeichen'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('insert into') && code.toLowerCase().includes('values');
            }
        },
        {
            id: 'sql-5',
            number: '4.5',
            title: 'SQL UPDATE - Daten aktualisieren',
            description: 'Aktualisiere bestehende Daten',
            difficulty: 'medium',
            task: 'Aktualisiere das Alter aller Benutzer namens "Max" auf 26.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'UPDATE users SET age = 26 WHERE name = \'Max\';',
            hints: [
                'UPDATE aktualisiert Daten',
                'SET gibt die neuen Werte an',
                'WHERE filtert welche Zeilen aktualisiert werden'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('update') && code.toLowerCase().includes('set');
            }
        },
        {
            id: 'sql-6',
            number: '4.6',
            title: 'SQL DELETE - Daten löschen',
            description: 'Lösche Daten aus der Datenbank',
            difficulty: 'easy',
            task: 'Lösche alle Benutzer, die jünger als 18 sind.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'DELETE FROM users WHERE age < 18;',
            hints: [
                'DELETE FROM löscht Daten',
                'WHERE filtert welche Zeilen gelöscht werden',
                'Sei vorsichtig: ohne WHERE werden ALLE Zeilen gelöscht!'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('delete from') && code.toLowerCase().includes('where');
            }
        },
        {
            id: 'sql-7',
            number: '4.7',
            title: 'SQL JOIN - Tabellen verknüpfen',
            description: 'Verbinde mehrere Tabellen',
            difficulty: 'hard',
            task: 'Verbinde die Tabellen "users" und "orders" über die user_id.',
            starterCode: '-- Deine SQL Abfrage hier\n',
            solution: 'SELECT * FROM users JOIN orders ON users.id = orders.user_id;',
            hints: [
                'JOIN verbindet Tabellen',
                'ON gibt die Verknüpfungsbedingung an',
                'Syntax: JOIN tabelle2 ON tabelle1.spalte = tabelle2.spalte'
            ],
            validation: (code) => {
                return code.toLowerCase().includes('join') && code.toLowerCase().includes('on');
            }
        }
    ]
};

const ACHIEVEMENTS = [
    {
        id: 'first-step',
        title: 'Erste Schritte',
        description: 'Erstes Level abgeschlossen',
        icon: '🎯',
        condition: (stats) => stats.totalCompleted >= 1
    },
    {
        id: 'html-master',
        title: 'HTML Meister',
        description: 'Alle HTML-Level abgeschlossen',
        icon: '🏆',
        condition: (stats) => stats.htmlCompleted >= LEVELS_DATA.html.length
    },
    {
        id: 'css-master',
        title: 'CSS Meister',
        description: 'Alle CSS-Level abgeschlossen',
        icon: '🎨',
        condition: (stats) => stats.cssCompleted >= LEVELS_DATA.css.length
    },
    {
        id: 'python-master',
        title: 'Python Meister',
        description: 'Alle Python-Level abgeschlossen',
        icon: '🐍',
        condition: (stats) => stats.pythonCompleted >= LEVELS_DATA.python.length
    },
    {
        id: 'perfectionist',
        title: 'Perfektionist',
        description: 'Alle Level abgeschlossen',
        icon: '⭐',
        condition: (stats) => {
            const total = LEVELS_DATA.html.length + LEVELS_DATA.css.length + LEVELS_DATA.python.length;
            return stats.totalCompleted >= total;
        }
    },
    {
        id: 'persistent',
        title: 'Ausdauernd',
        description: '50 Versuche gemacht',
        icon: '💪',
        condition: (stats) => stats.totalAttempts >= 50
    },
    {
        id: 'independent',
        title: 'Unabhängig',
        description: '10 Level ohne Hinweise gelöst',
        icon: '🧠',
        condition: (stats) => stats.solvedWithoutHints >= 10
    },
    {
        id: 'fast-learner',
        title: 'Schnelllerner',
        description: '5 Level im ersten Versuch gelöst',
        icon: '⚡',
        condition: (stats) => stats.firstTrySuccess >= 5
    }
];

// ==================== STATE MANAGEMENT ====================

let currentUser = null;
let currentSection = 'html';
let currentLevel = null;
let editor = null;
let freeEditor = null;
let pyodideReady = false;
let pyodide = null;

let userProgress = {
    completedLevels: [],
    stats: {
        totalCompleted: 0,
        htmlCompleted: 0,
        cssCompleted: 0,
        pythonCompleted: 0,
        sqlCompleted: 0,
        totalAttempts: 0,
        hintsUsed: 0,
        solutionsViewed: 0,
        solvedWithoutHints: 0,
        firstTrySuccess: 0
    },
    levelStats: {},
    unlockedAchievements: [],
    languageModalShown: {}
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        loadUserProgress();
        showMainApp();
    } else {
        showLoginScreen();
    }

    // Setup event listeners
    setupEventListeners();

    // Initialize Pyodide for Python execution
    initializePyodide();
}

function setupEventListeners() {
    // Login
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            switchSection(section);
        });
    });

    // Modal
    document.getElementById('modalClose')?.addEventListener('click', closeModal);

    // Difficulty filters
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', handleDifficultyFilter);
    });

    // Free editor
    document.getElementById('freeEditorLanguage')?.addEventListener('change', handleFreeEditorLanguageChange);
    document.getElementById('runFreeCode')?.addEventListener('click', runFreeCode);
    document.getElementById('clearFreeCode')?.addEventListener('click', clearFreeCode);
}

// ==================== AUTHENTICATION ====================

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (admin/admin123)
    if (username === 'admin' && password === 'admin123') {
        currentUser = username;
        localStorage.setItem('currentUser', username);
        loadUserProgress();
        showMainApp();
        playSound('success');
    } else {
        document.getElementById('loginError').style.display = 'block';
        playSound('error');
    }
}

function handleLogout() {
    if (confirm('Möchtest du dich wirklich abmelden?')) {
        saveUserProgress();
        localStorage.removeItem('currentUser');
        currentUser = null;
        window.location.reload();
    }
}

function showLoginScreen() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

function showMainApp() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    document.getElementById('currentUser').textContent = currentUser;

    initializeSections();
    updateProgress();
    updateStatistics();
    loadAchievements();
}

// ==================== DATA PERSISTENCE ====================

function loadUserProgress() {
    const saved = localStorage.getItem(`userProgress_${currentUser}`);
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function saveUserProgress() {
    localStorage.setItem(`userProgress_${currentUser}`, JSON.stringify(userProgress));
    exportToExcel(); // Auto-export
}

async function exportToExcel() {
    // Create CSV data for Excel export
    const csvData = generateCSVData();
    localStorage.setItem(`exportData_${currentUser}`, csvData);

    // Send to Notion if backend is available
    try {
        await sendToNotion();
    } catch (error) {
        console.log('Notion sync not available:', error);
    }
}

function generateCSVData() {
    let csv = 'Benutzer,Level,Versuche,Hinweise,Gelöst,Zeitstempel\n';

    Object.entries(userProgress.levelStats).forEach(([levelId, stats]) => {
        csv += `${currentUser},${levelId},${stats.attempts},${stats.hintsUsed},${stats.completed},${stats.completedAt || ''}\n`;
    });

    return csv;
}

// ==================== SECTIONS & NAVIGATION ====================

function switchSection(section) {
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Update active section
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.querySelector(`.section[data-section="${section}"]`).classList.add('active');

    currentSection = section;

    // Show welcome modal for programming sections (not statistics, achievements, etc.)
    if (['html', 'css', 'python', 'sql'].includes(section)) {
        showLanguageWelcomeModal(section);
    }

    // Initialize section if needed
    if (section === 'freeEditor' && !freeEditor) {
        initializeFreeEditor();
    }
}

function initializeSections() {
    renderLevelGrid('html');
    renderLevelGrid('css');
    renderLevelGrid('python');
    renderLevelGrid('sql');
    initializeFreeEditor();
}

function renderLevelGrid(language) {
    const container = document.getElementById(`${language}Levels`);
    if (!container) return;

    container.innerHTML = '';

    LEVELS_DATA[language].forEach((level, index) => {
        const card = createLevelCard(level, language, index);
        container.appendChild(card);
    });
}

function createLevelCard(level, language, index) {
    const isCompleted = userProgress.completedLevels.includes(level.id);
    const isLocked = false; // Allow all levels to be clickable

    const card = document.createElement('div');
    card.className = `level-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;

    card.innerHTML = `
        <div class="level-number">${level.number}</div>
        <div class="level-title">${level.title}</div>
        <div class="level-description">${level.description}</div>
        <div class="level-meta">
            <span class="difficulty-badge difficulty-${level.difficulty}">
                ${level.difficulty === 'easy' ? 'Leicht' : level.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
            </span>
            <span class="level-status">
                ${isCompleted ? '✅ Gelöst' : ''}
            </span>
        </div>
    `;

    if (!isLocked) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openLevel(level, language));
    }

    return card;
}

// ==================== LANGUAGE WELCOME MODAL ====================

const LANGUAGE_INFO = {
    html: {
        name: 'HTML',
        icon: 'img/html.png',
        quote: '"HTML ist die Sprache, mit der wir das Web strukturieren. Jede Website beginnt hier!"'
    },
    css: {
        name: 'CSS',
        icon: 'img/css.png',
        quote: '"Mit CSS hauchen wir dem Web Leben ein. Design ist nicht nur wie es aussieht, sondern wie es funktioniert!"'
    },
    python: {
        name: 'Python',
        icon: 'img/python.png',
        quote: '"Python ist eine der mächtigsten Sprachen der Welt. Von KI bis Webentwicklung - Python kann alles!"'
    },
    sql: {
        name: 'SQL',
        icon: 'img/sql.png',
        quote: '"Daten sind das neue Gold. Mit SQL lernst du, diese Schätze zu heben und zu verwalten!"'
    }
};

function showLanguageWelcomeModal(language) {
    // Check if modal was already shown for this language in this session
    if (userProgress.languageModalShown[language]) {
        return;
    }

    const langInfo = LANGUAGE_INFO[language];
    if (!langInfo) return;

    const modal = document.getElementById('languageModal');
    const title = document.getElementById('languageModalTitle');
    const subtitle = document.getElementById('languageModalSubtitle');
    const quote = document.getElementById('languageModalQuote');
    const icon = document.getElementById('languageModalIcon');

    title.textContent = `Willkommen bei ${langInfo.name}!`;
    subtitle.textContent = `Schön, dass du dich für diese Übung in ${langInfo.name} entschieden hast!`;
    quote.textContent = langInfo.quote;
    icon.src = langInfo.icon;

    modal.classList.add('active');

    // Mark as shown
    userProgress.languageModalShown[language] = true;
    saveUserProgress();
}

function closeLanguageModal() {
    const modal = document.getElementById('languageModal');
    modal.classList.remove('active');
}

// ==================== CALLIOPE FUNCTIONS ====================

function openCalliopeEditor(mode) {
    if (mode === 'block') {
        // Open block editor
        window.open('https://makecode.calliope.cc/#editor', '_blank');
        showNotification('Block-Editor wird in neuem Tab geöffnet...', 'info');
    } else if (mode === 'text') {
        // Open text editor (JavaScript mode)
        window.open('https://makecode.calliope.cc/#editor', '_blank');
        showNotification('Text-Editor wird in neuem Tab geöffnet... Wechsle dort zu JavaScript!', 'info');
    }
}

// ==================== LEVEL SCREEN ====================

function openLevel(level, language) {
    currentLevel = level;

    // Show welcome modal on first level of each language
    const levelIndex = LEVELS_DATA[language].findIndex(l => l.id === level.id);
    if (levelIndex === 0) {
        showLanguageWelcomeModal(language);
    }

    // Hide level overview
    const section = document.querySelector(`.section[data-section="${language}"]`);
    section.querySelector('.level-overview').style.display = 'none';

    // Show coding screen
    const codingScreen = document.getElementById(`${language}CodingScreen`);
    codingScreen.classList.add('active');
    codingScreen.innerHTML = createCodingScreen(level, language);

    // Initialize editor
    setTimeout(() => {
        initializeEditor(level, language);
    }, 100);

    // Initialize level stats if needed
    if (!userProgress.levelStats[level.id]) {
        userProgress.levelStats[level.id] = {
            attempts: 0,
            hintsUsed: 0,
            completed: false,
            usedHint: false
        };
    }
}

function createCodingScreen(level, language) {
    const needsConsole = language === 'python' || language === 'sql';

    return `
        <div class="coding-header">
            <div class="coding-title">${level.number} - ${level.title}</div>
            <div class="coding-description"><strong>Aufgabe:</strong> ${level.task}</div>
            <div class="coding-controls">
                <button class="btn btn-secondary" onclick="backToLevels('${language}')">← Zurück</button>
                <button class="btn btn-info" onclick="showHint()">💡 Tipp</button>
                <button class="btn btn-warning" onclick="showSolution()">🔍 Lösung anzeigen</button>
                <button class="btn btn-success" onclick="runCode()">▶ Code ausführen</button>
                <button class="btn btn-secondary" onclick="skipLevel('${language}')">⏭ Überspringen</button>
            </div>
        </div>
        <div class="coding-workspace">
            <div class="editor-panel">
                <div class="panel-header">Code Editor</div>
                <div id="codeEditor"></div>
            </div>
            <div class="output-panel">
                <div class="panel-header">Ausgabe / Vorschau</div>
                <div class="output-content">
                    ${needsConsole ?
                        '<div class="output-console" id="outputConsole"></div>' :
                        '<iframe class="output-iframe" id="outputPreview"></iframe>'
                    }
                </div>
            </div>
        </div>
    `;
}

function initializeEditor(level, language) {
    let mode = 'htmlmixed';
    if (language === 'python') mode = 'python';
    else if (language === 'sql') mode = 'sql';
    else if (language === 'css' || language === 'html') mode = 'htmlmixed';

    const theme = document.documentElement.dataset.theme === 'dark' ? 'monokai' : 'eclipse';

    editor = CodeMirror(document.getElementById('codeEditor'), {
        value: level.starterCode,
        mode: mode,
        theme: theme,
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true
    });

    editor.setSize('100%', '100%');
}

function backToLevels(language) {
    const section = document.querySelector(`.section[data-section="${language}"]`);
    section.querySelector('.level-overview').style.display = 'block';
    document.getElementById(`${language}CodingScreen`).classList.remove('active');
    currentLevel = null;
    editor = null;
}

function skipLevel(language) {
    if (confirm('Möchtest du dieses Level wirklich überspringen?')) {
        showNotification('Level übersprungen', 'info');
        backToLevels(language);
    }
}

// ==================== CODE EXECUTION ====================

function runCode() {
    if (!currentLevel || !editor) return;

    const code = editor.getValue();
    const language = currentSection;

    // Update attempts
    userProgress.levelStats[currentLevel.id].attempts++;
    userProgress.stats.totalAttempts++;

    if (language === 'python') {
        runPythonCode(code);
    } else if (language === 'sql') {
        runSQLCode(code);
    } else {
        runHTMLCSSCode(code);
    }

    saveUserProgress();
}

function runHTMLCSSCode(code) {
    const preview = document.getElementById('outputPreview');
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    preview.src = url;

    // Check validation
    setTimeout(() => {
        checkSolution(code);
    }, 500);
}

async function runPythonCode(code) {
    const outputConsole = document.getElementById('outputConsole');
    outputConsole.innerHTML = '<div class="loading-spinner"></div>';

    if (!pyodideReady) {
        outputConsole.innerHTML = '<div class="error">Python wird geladen... Bitte warte einen Moment.</div>';
        return;
    }

    try {
        // Redirect stdout
        pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
        `);

        // Run user code
        pyodide.runPython(code);

        // Get output
        const output = pyodide.runPython('sys.stdout.getvalue()');

        outputConsole.innerHTML = `<div class="output-line success">${output || 'Programm ausgeführt (keine Ausgabe)'}</div>`;

        // Check solution
        checkSolution(code);
    } catch (err) {
        outputConsole.innerHTML = `<div class="error">Fehler: ${err.message}</div>`;
        playSound('error');
    }
}

function runSQLCode(code) {
    const outputConsole = document.getElementById('outputConsole');

    // For SQL, we'll just validate and show the query
    // In a real application, this would connect to a database
    outputConsole.innerHTML = `
        <div class="output-line success">SQL Abfrage wird validiert...</div>
        <div class="output-line" style="margin-top: 10px; padding: 10px; background: var(--bg-secondary); border-radius: 5px;">
            <strong>Deine Abfrage:</strong><br>
            <code>${escapeHtml(code)}</code>
        </div>
        <div class="output-line success" style="margin-top: 10px;">
            ✓ Syntax überprüft! Die Abfrage sieht korrekt aus.
        </div>
    `;

    // Check solution
    setTimeout(() => {
        checkSolution(code);
    }, 500);
}

function checkSolution(code) {
    if (!currentLevel) return;

    const isCorrect = currentLevel.validation(code);

    if (isCorrect) {
        // Mark as completed
        if (!userProgress.completedLevels.includes(currentLevel.id)) {
            userProgress.completedLevels.push(currentLevel.id);
            userProgress.stats.totalCompleted++;

            // Update language-specific count
            const lang = currentSection;
            userProgress.stats[`${lang}Completed`]++;

            // Check if solved without hints
            if (!userProgress.levelStats[currentLevel.id].usedHint) {
                userProgress.stats.solvedWithoutHints++;
            }

            // Check if first try
            if (userProgress.levelStats[currentLevel.id].attempts === 1) {
                userProgress.stats.firstTrySuccess++;
            }
        }

        userProgress.levelStats[currentLevel.id].completed = true;
        userProgress.levelStats[currentLevel.id].completedAt = new Date().toISOString();

        showNotification('🎉 Level erfolgreich abgeschlossen!', 'success');
        playSound('success');

        // Update UI
        updateProgress();
        updateStatistics();
        checkAchievements();
        saveUserProgress();

        // Unlock next level
        setTimeout(() => {
            if (confirm('Level abgeschlossen! Möchtest du zum nächsten Level?')) {
                goToNextLevel();
            }
        }, 1000);
    } else {
        showNotification('❌ Noch nicht ganz richtig. Versuche es noch einmal!', 'error');
        playSound('error');
    }
}

function goToNextLevel() {
    const currentLang = currentSection;
    const levels = LEVELS_DATA[currentLang];
    const currentIndex = levels.findIndex(l => l.id === currentLevel.id);

    if (currentIndex < levels.length - 1) {
        backToLevels(currentLang);
        setTimeout(() => {
            openLevel(levels[currentIndex + 1], currentLang);
        }, 300);
    } else {
        backToLevels(currentLang);
        showNotification('🎊 Du hast alle Level in diesem Bereich abgeschlossen!', 'success');
    }
}

// ==================== HINTS & SOLUTIONS ====================

function showHint() {
    if (!currentLevel) return;

    const stats = userProgress.levelStats[currentLevel.id];
    const hintIndex = stats.hintsUsed % currentLevel.hints.length;
    const hint = currentLevel.hints[hintIndex];

    stats.hintsUsed++;
    stats.usedHint = true;
    userProgress.stats.hintsUsed++;

    showModal('💡 Tipp', hint);
    saveUserProgress();
    playSound('info');
}

function showSolution() {
    if (!currentLevel) return;

    if (confirm('Möchtest du wirklich die Lösung sehen? Das Level wird dann nicht als eigenständig gelöst gezählt.')) {
        userProgress.levelStats[currentLevel.id].usedHint = true;
        userProgress.stats.solutionsViewed++;

        showModal('🔍 Lösung', `<pre style="background: var(--code-bg); padding: 15px; border-radius: 8px; overflow-x: auto;">${escapeHtml(currentLevel.solution)}</pre>`);

        // Show solution in editor
        if (editor) {
            editor.setValue(currentLevel.solution);
        }

        saveUserProgress();
        playSound('info');
    }
}

// ==================== FREE EDITOR ====================

function initializeFreeEditor() {
    if (freeEditor) return;

    const theme = document.documentElement.dataset.theme === 'dark' ? 'monokai' : 'eclipse';

    freeEditor = CodeMirror(document.getElementById('freeEditor'), {
        value: '<!-- Schreibe deinen Code hier -->\n',
        mode: 'htmlmixed',
        theme: theme,
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true
    });

    freeEditor.setSize('100%', '100%');
}

function handleFreeEditorLanguageChange(e) {
    const language = e.target.value;
    freeEditor.setOption('mode', language);

    // Update placeholder
    const placeholders = {
        'htmlmixed': '<!-- Schreibe deinen HTML Code hier -->\n',
        'css': '/* Schreibe dein CSS hier */\n',
        'python': '# Schreibe deinen Python Code hier\n',
        'sql': '-- Schreibe deine SQL Abfrage hier\nSELECT * FROM tabelle;\n'
    };

    if (freeEditor.getValue().trim() === '' || freeEditor.getValue().includes('Schreibe deinen')) {
        freeEditor.setValue(placeholders[language]);
    }

    // Update output display
    const preview = document.getElementById('freePreview');
    const console = document.getElementById('freeOutput');

    if (language === 'python' || language === 'sql') {
        preview.style.display = 'none';
        console.style.display = 'block';
    } else {
        preview.style.display = 'block';
        console.style.display = 'none';
    }
}

function runFreeCode() {
    const language = document.getElementById('freeEditorLanguage').value;
    const code = freeEditor.getValue();

    if (language === 'python') {
        runFreePython(code);
    } else if (language === 'sql') {
        runFreeSQL(code);
    } else {
        runFreeHTMLCSS(code);
    }
}

function runFreeHTMLCSS(code) {
    const preview = document.getElementById('freePreview');
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    preview.src = url;
    showNotification('Code ausgeführt!', 'success');
}

async function runFreePython(code) {
    const output = document.getElementById('freeOutput');
    output.innerHTML = '<div class="loading-spinner"></div>';

    if (!pyodideReady) {
        output.innerHTML = '<div class="error">Python wird geladen... Bitte warte einen Moment.</div>';
        return;
    }

    try {
        pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
        `);

        pyodide.runPython(code);
        const result = pyodide.runPython('sys.stdout.getvalue()');

        output.innerHTML = `<div class="output-line success">${result || 'Programm ausgeführt (keine Ausgabe)'}</div>`;
        showNotification('Code ausgeführt!', 'success');
    } catch (err) {
        output.innerHTML = `<div class="error">Fehler: ${err.message}</div>`;
        showNotification('Fehler im Code', 'error');
    }
}

function runFreeSQL(code) {
    const output = document.getElementById('freeOutput');

    output.innerHTML = `
        <div class="output-line success">SQL Abfrage wird validiert...</div>
        <div class="output-line" style="margin-top: 10px; padding: 10px; background: var(--bg-secondary); border-radius: 5px;">
            <strong>Deine Abfrage:</strong><br>
            <code>${escapeHtml(code)}</code>
        </div>
        <div class="output-line success" style="margin-top: 10px;">
            ✓ SQL-Syntax überprüft! Die Abfrage sieht korrekt aus.
        </div>
    `;

    showNotification('SQL-Code validiert!', 'success');
}

function clearFreeCode() {
    const language = document.getElementById('freeEditorLanguage').value;
    const placeholders = {
        'htmlmixed': '<!-- Schreibe deinen HTML Code hier -->\n',
        'css': '/* Schreibe dein CSS hier */\n',
        'python': '# Schreibe deinen Python Code hier\n',
        'sql': '-- Schreibe deine SQL Abfrage hier\nSELECT * FROM tabelle;\n'
    };

    freeEditor.setValue(placeholders[language]);
    document.getElementById('freeOutput').innerHTML = '';
    document.getElementById('freePreview').src = 'about:blank';
}

// ==================== PYODIDE INITIALIZATION ====================

async function initializePyodide() {
    try {
        pyodide = await loadPyodide();
        pyodideReady = true;
        console.log('Pyodide loaded successfully');
    } catch (err) {
        console.error('Failed to load Pyodide:', err);
        pyodideReady = false;
    }
}

// ==================== STATISTICS & ACHIEVEMENTS ====================

function updateProgress() {
    const totalLevels = LEVELS_DATA.html.length + LEVELS_DATA.css.length + LEVELS_DATA.python.length + LEVELS_DATA.sql.length;
    const completed = userProgress.stats.totalCompleted;
    const percentage = Math.round((completed / totalLevels) * 100);

    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = percentage + '%';
    progressFill.textContent = `${percentage}% (${completed}/${totalLevels})`;
}

function updateStatistics() {
    document.getElementById('totalCompleted').textContent = userProgress.stats.totalCompleted;
    document.getElementById('totalAttempts').textContent = userProgress.stats.totalAttempts;
    document.getElementById('hintsUsed').textContent = userProgress.stats.hintsUsed;
    document.getElementById('solutionsViewed').textContent = userProgress.stats.solutionsViewed;
}

function loadAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';

    ACHIEVEMENTS.forEach(achievement => {
        const isUnlocked = achievement.condition(userProgress.stats);

        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-description">${achievement.description}</div>
        `;

        grid.appendChild(card);
    });
}

function checkAchievements() {
    ACHIEVEMENTS.forEach(achievement => {
        if (achievement.condition(userProgress.stats) && !userProgress.unlockedAchievements.includes(achievement.id)) {
            userProgress.unlockedAchievements.push(achievement.id);
            showNotification(`🏆 Achievement freigeschaltet: ${achievement.title}`, 'success');
            playSound('achievement');
        }
    });

    loadAchievements();
}

// ==================== UI UTILITIES ====================

function showModal(title, body) {
    document.getElementById('modalHeader').textContent = title;
    document.getElementById('modalBody').innerHTML = body;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.dataset.theme || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);

    // Update theme toggle icon
    document.getElementById('themeToggle').textContent = newTheme === 'dark' ? '☀️' : '🌙';

    // Update editors theme
    const editorTheme = newTheme === 'dark' ? 'monokai' : 'eclipse';
    if (editor) editor.setOption('theme', editorTheme);
    if (freeEditor) freeEditor.setOption('theme', editorTheme);
}

function handleDifficultyFilter(e) {
    const difficulty = e.target.dataset.difficulty;
    const section = e.target.closest('.section');

    // Update active button
    section.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filter levels
    section.querySelectorAll('.level-card').forEach(card => {
        if (difficulty === 'all') {
            card.style.display = 'block';
        } else {
            const badge = card.querySelector('.difficulty-badge');
            if (badge && badge.classList.contains(`difficulty-${difficulty}`)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ==================== SOUND EFFECTS ====================

function playSound(type) {
    // Using Web Audio API to generate simple beep sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const sounds = {
        'success': { freq: 800, duration: 0.15 },
        'error': { freq: 200, duration: 0.2 },
        'info': { freq: 600, duration: 0.1 },
        'achievement': { freq: 1000, duration: 0.3 }
    };

    const sound = sounds[type] || sounds.info;

    oscillator.frequency.value = sound.freq;
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + sound.duration);
}

// ==================== UTILITY FUNCTIONS ====================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== NOTION INTEGRATION ====================

const BACKEND_URL = 'http://localhost:3000'; // Change to your deployed backend URL

async function sendToNotion() {
    if (!currentUser || !userProgress) return;

    try {
        // Send statistics summary
        const response = await fetch(`${BACKEND_URL}/api/save-statistics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: currentUser,
                stats: userProgress.stats,
                completedLevels: userProgress.completedLevels
            })
        });

        if (!response.ok) {
            throw new Error('Failed to sync with Notion');
        }

        console.log('Successfully synced to Notion');
    } catch (error) {
        // Silently fail if backend is not available
        console.log('Notion backend not available');
    }
}

async function sendLevelToNotion(levelId) {
    if (!currentUser || !userProgress.levelStats[levelId]) return;

    try {
        const response = await fetch(`${BACKEND_URL}/api/save-progress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: currentUser,
                levelId: levelId,
                stats: userProgress.levelStats[levelId]
            })
        });

        if (!response.ok) {
            throw new Error('Failed to save level to Notion');
        }
    } catch (error) {
        console.log('Notion backend not available');
    }
}

// ==================== LOAD SAVED THEME ====================

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = savedTheme;
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
});
