const express = require('express');
const index = require('./routes/index');

const app = express();

// Middleware
app.use(express.json());

// Mount Router
app.use('/api', index);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
