// backend/server.js
const express = require('express');
const app = express();
const eventsRouter = require('./routes/events');

app.use(express.json());
app.use('/api', eventsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
