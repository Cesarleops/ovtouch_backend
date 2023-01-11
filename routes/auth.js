
const {Router} = require('express')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {signWithGoogle} = require('../controllers/signWithGoogle')
const {login} = require('../controllers/login')
const router = Router()

router.post('/google', [
    check('id_token', 'id_token is required').not().isEmpty(),
    validateFields
],signWithGoogle)

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login)


module.exports = router