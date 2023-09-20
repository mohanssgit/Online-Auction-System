const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    // Authentication successful, return a JWT token or a success message
    res.json({ message: 'Login successful', user: req.user });
  });
  