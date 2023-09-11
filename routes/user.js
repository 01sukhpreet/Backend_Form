const express = require('express');
const router = express.Router();

const user = require('./../modules/user/user')

router.get('/', user.get)  // route , method used for particular route
router.post('/add', user.add)
router.post('/update', user.update)
router.delete('/delete',user.deleteAll)
router.post('/delete', user.deleteOne)

module.exports = router
