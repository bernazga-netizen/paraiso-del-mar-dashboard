const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Servir el archivo HTML
  if (req.url === '/' || req.url === '') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar el dashboard');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    });
  } else {
    res.writeHead(404);
    res.end('Página no encontrada');
  }
});

server.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 DASHBOARD PARAÍSO DEL MAR`);
  console.log(`${'='.repeat(50)}`);
  console.log(`\n✓ Dashboard en: http://localhost:${PORT}`);
  console.log(`✓ Backend en: http://192.168.1.231:3000`);
  console.log(`\n✓ Abre el navegador en: http://localhost:${PORT}\n`);
});
