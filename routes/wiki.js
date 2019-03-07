const model = require('../models');
const views = require('../views');
const viewsLayout = require('../views/layout');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send(viewsLayout(''))
});

router.get('/add', async (req, res, next) => {
  res.send(views.addPage())
});

router.post('/', async (req, res, next) => {
  res.send('postwiki')
});


module.exports = router;
