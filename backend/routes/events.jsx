// backend/routes/events.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// const NASA_API_KEY = process.env.NASA_API_KEY;
const NASA_EVENTS_API_URL =`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-08-31&end_date=2024-09-06&api_key=J6T0PYmwJ3S2LFIqEeQDK5yDaGlweYc9LrmE51MK`; 

router.get('/events', async (req, res) => {
  try {
    const response = await axios.get(NASA_EVENTS_API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;

// https://api.nasa.gov/planetary/apod?api_key=J6T0PYmwJ3S2LFIqEeQDK5yDaGlweYc9LrmE51MK
