const express = require('express');

const router = express.Router();

// @route       GET   /api/auth
// @desc        Get logged in user
// @access      Public
router.get('/', (req, res) => {
  res.send('Get login user');
});

// @route     POST  /api/auth
// @desc      check login user
// @access    Private
router.post('/', (req, res) => {
  res.send('Check login user');
});

module.exports = router;
