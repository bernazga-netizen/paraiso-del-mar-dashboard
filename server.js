const express = require('express');
const path = require('path');
const app = express();

const BACKEND_URL = 'https://paraiso-del-mar-backend-production.railway.app';

app.use(express.static(path.join(__dirname)));

// Proxy para estadísticas
app.get('/api/estadisticas/:fecha', async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(`${BACKEND_URL}/api/estadisticas/${req.params.fecha}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Dashboard en http://localhost:3001');
});