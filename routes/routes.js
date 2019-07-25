const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

router.get('/mars-informations', apiController.getMarsInformation);

module.exports = router;
