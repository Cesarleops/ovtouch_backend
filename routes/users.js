const {Router} = require('express')
const {newUser, updateUser, deleteUser, getUsers} = require('../controllers/users')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {validEmail, userExists} = require('../helpers/validators')
const { validateJWT } = require('../middlewares/validate-jwt')
const router = Router()

router.get('/:uid', getUsers)

router.post('/newuser', [
    check('name', 'name is required ').not().isEmpty(),
    check('email', 'email is not valid').isEmail(),
    check('password', 'password is not valid').isLength({min:6 , max:8}),
    check('email').custom(validEmail),
    validateFields
] , newUser)


router.put('/:userId',[
    check('userId').isMongoId(),
    check('userId').custom(userExists),
    validateFields
] ,updateUser)

router.delete('/:userId', [
    validateJWT,
    check('userId').isMongoId(),
    check('userId').custom(userExists),
    validateFields
], deleteUser)

module.exports = router