const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Bonjour, le monde!');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
