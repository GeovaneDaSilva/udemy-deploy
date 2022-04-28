'use strict'

const express = require('express');
const timeController = require('../controllers/time')



let router = express.Router();
 

router.get('/users', timeController.getTime)







  






module.exports = router;