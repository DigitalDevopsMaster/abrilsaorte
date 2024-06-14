
const express = require('express');
const fs = require('fs');
const path = require('path');
const host = '0.0.0.0';
const rootPath = path.join(__dirname, '');
const pagesPath = path.join(__dirname, '/pages');

/************************************************************************ */

const app = express();
const port = 3002;

app.use(express.static(rootPath));
app.use(express.static(path.join(__dirname, '../')));

app.get('/api/getPages', (req, res) => {
  const components = fs.readdirSync(pagesPath).filter(file => path.extname(file) === '.js');
  res.json({ components });
});

app.get('*.js', (req, res, next) => {
  res.type('application/javascript'); // Establecer el tipo MIME correcto
  next();
});

app.get(/^\/(?!.*\.js$).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, host, () => console.log(`Servidor web local en ejecución en http://${host}:${port}`));

/************************************************************************** */
