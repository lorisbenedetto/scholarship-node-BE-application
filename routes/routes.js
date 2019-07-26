const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

router.get('/mars-informations', apiController.getMarsInformation);

router.post('/change-index', apiController.postChangeIndex);

module.exports = router;
