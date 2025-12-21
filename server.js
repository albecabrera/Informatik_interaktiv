const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Notion Client
// WICHTIG: Ersetzen Sie diese Werte mit Ihren eigenen Notion API Credentials
const notion = new Client({
    auth: process.env.NOTION_API_KEY || 'YOUR_NOTION_API_KEY'
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || 'YOUR_DATABASE_ID';

// ==================== ROUTES ====================

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Save User Progress to Notion
app.post('/api/save-progress', async (req, res) => {
    try {
        const { username, levelId, stats } = req.body;

        // Create a new page in Notion database
        const response = await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                'Benutzer': {
                    title: [
                        {
                            text: {
                                content: username
                            }
                        }
                    ]
                },
                'Level': {
                    rich_text: [
                        {
                            text: {
                                content: levelId
                            }
                        }
                    ]
                },
                'Versuche': {
                    number: stats.attempts || 0
                },
                'Hinweise': {
                    number: stats.hintsUsed || 0
                },
                'Gelöst': {
                    checkbox: stats.completed || false
                },
                'Zeitstempel': {
                    date: {
                        start: new Date().toISOString()
                    }
                }
            }
        });

        res.json({ success: true, data: response });
    } catch (error) {
        console.error('Error saving to Notion:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Save Full User Statistics to Notion
app.post('/api/save-statistics', async (req, res) => {
    try {
        const { username, stats, completedLevels } = req.body;

        const response = await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                'Benutzer': {
                    title: [
                        {
                            text: {
                                content: username
                            }
                        }
                    ]
                },
                'Typ': {
                    select: {
                        name: 'Statistik'
                    }
                },
                'Abgeschlossene Level': {
                    number: stats.totalCompleted || 0
                },
                'Gesamte Versuche': {
                    number: stats.totalAttempts || 0
                },
                'Verwendete Hinweise': {
                    number: stats.hintsUsed || 0
                },
                'Angesehene Lösungen': {
                    number: stats.solutionsViewed || 0
                },
                'HTML Abgeschlossen': {
                    number: stats.htmlCompleted || 0
                },
                'CSS Abgeschlossen': {
                    number: stats.cssCompleted || 0
                },
                'Python Abgeschlossen': {
                    number: stats.pythonCompleted || 0
                },
                'Zeitstempel': {
                    date: {
                        start: new Date().toISOString()
                    }
                }
            }
        });

        res.json({ success: true, data: response });
    } catch (error) {
        console.error('Error saving statistics to Notion:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get User Progress from Notion
app.get('/api/get-progress/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const response = await notion.databases.query({
            database_id: DATABASE_ID,
            filter: {
                property: 'Benutzer',
                title: {
                    equals: username
                }
            }
        });

        res.json({ success: true, data: response.results });
    } catch (error) {
        console.error('Error fetching from Notion:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// ==================== SERVER START ====================

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Notion Integration ${DATABASE_ID ? 'configured' : 'NOT configured - Please set NOTION_API_KEY and NOTION_DATABASE_ID'}`);
});
