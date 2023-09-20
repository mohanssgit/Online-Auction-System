const express = require('express');
const { isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Example route protected with isAdmin middleware
router.post('/create-auction', isAdmin, (req, res) => {
  // Only users with 'Admin' role can access this route
  res.json({ message: 'Auction created' });
});

module.exports = router;
