'use strict';
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const photosController = require('../controllers/photosController');
const usersController = require('../controllers/usersController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/photos', photosController.index);
router.get('/photos/:title', photosController.getParams);

router.get('/users', usersController.index);

module.exports = router;
