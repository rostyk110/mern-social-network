const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
