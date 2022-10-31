const express = require('express')
const router = express.Router();
const {getUsers} = require('../controller/user')

router.get('/',getUsers)


module.exports = router;