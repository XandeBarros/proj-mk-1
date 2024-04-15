const express = require('express');
const router = express.Router();

router.use('/exercise', require('./exercise.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
