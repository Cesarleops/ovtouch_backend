
const {Router} = require('express')
const {signWithGoogle} = require('../controllers/signWithGoogle')
const {login} = require('../controllers/login')
const router = Router()

router.post('/google', signWithGoogle)

router.post('/login', login)


module.exports = router