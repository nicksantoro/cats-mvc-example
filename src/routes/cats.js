const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/cats')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)

module.exports = router
