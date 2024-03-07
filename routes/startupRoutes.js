// routes/startupRoutes.js
const express = require('express');
const router = express.Router();
const Startup = require('../models/startupModel');

// GET all startups
router.get('/', async (req, res) => {
  try {
    const startups = await Startup.find();
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new startup
router.post('/', async (req, res) => {
  const startup = new Startup({
    name: req.body.name,
    industry: req.body.industry,
    foundedYear: req.body.foundedYear,
    founders: req.body.founders
  });

  try {
    const newStartup = await startup.save();
    res.status(201).json(newStartup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
