const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controllers.js')

router.get('/home', controller.index)

module.exports = router