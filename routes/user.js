const express = require('express');
const router = express.Router();

const user = require('./../modules/user/user')

router.get('/', user.get)
router.post('/add', user.add)
router.get('/update', user.update)
router.delete('/delete',user.deleteAll)
router.post('/delete', user.deleteOne)

module.exports = router
