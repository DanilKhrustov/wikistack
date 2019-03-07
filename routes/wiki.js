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

router.post('/add', async (req, res, next) => {
  const page = new model.Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
  //res.redirect('/');
});


module.exports = router;
