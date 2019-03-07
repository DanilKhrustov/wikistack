const model = require('../models/index');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('usertest')
});

module.exports = router;
