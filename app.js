const express = require('express');
const fs = require('fs');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
  const now = new Date();
  const log = `${now.toLocaleString()} - ${req.method} ${req.url}\n`;
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    }
  });
  next();
});

app.use('/api', eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
