const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData);
router.post('/send/pw', controller.api.sendPw);
router.post('/add/board', controller.add.board);

router.post('/add/data');
router.post('/modify/data');
router.post('/delete/data');

module.exports = router;