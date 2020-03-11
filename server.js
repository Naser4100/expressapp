const express = require('express');

const app = express();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
