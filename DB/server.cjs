const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/save', (req, res) => {
  const data = req.body;
  fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).send('Failed to save data');
    }
    res.status(200).send('Data saved successfully');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
