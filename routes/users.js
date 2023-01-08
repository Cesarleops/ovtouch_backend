const {Router} = require('express')
const {newUser} = require('../controllers/users')


const router = Router()


router.post('/newuser', newUser)

module.exports = router