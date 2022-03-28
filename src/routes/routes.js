const express = require('express');
const router = express.Router();

const TeamsController = require('../controllers/TeamsController');

router.get('/', TeamsController.UserGET).post('/', TeamsController.UserPOST);

module.exports = router;
