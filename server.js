const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🎉 Visogenix Downloader Server is running!');
});

app.listen(port, () => {
  console.log(`🚀 Server is live at http://localhost:${port}`);
});